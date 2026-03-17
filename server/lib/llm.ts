import Anthropic from "@anthropic-ai/sdk";
import type {
  MessageParam,
  ContentBlockParam,
  TextBlock,
  RawMessageStreamEvent,
  RawContentBlockDeltaEvent,
  RawMessageDeltaEvent,
  TextDelta,
} from "@anthropic-ai/sdk/resources/messages/messages";
import OpenAI from "openai";

export interface LLMTextContent {
  type: "text";
  text: string;
}

export interface LLMImageContent {
  type: "image";
  source: {
    type: "base64";
    media_type: string;
    data: string;
  };
}

export type LLMContentBlock = LLMTextContent | LLMImageContent;

export interface LLMMessage {
  role: "user" | "assistant";
  content: string | LLMContentBlock[];
}

export interface LLMOptions {
  system: string;
  messages: LLMMessage[];
  maxTokens: number;
  abortSignal?: AbortSignal;
}

export interface LLMResponse {
  text: string;
  stopReason: string;
}

export interface LLMStreamEvent {
  type: "text_delta" | "stop";
  text?: string;
  stopReason?: string;
}

export interface LLMStream {
  [Symbol.asyncIterator](): AsyncIterator<LLMStreamEvent>;
  abort(): void;
}

export interface LLMProvider {
  create(options: LLMOptions): Promise<LLMResponse>;
  stream(options: LLMOptions): LLMStream;
}

function toAnthropicMessages(messages: LLMMessage[]): MessageParam[] {
  return messages.map((m): MessageParam => {
    if (typeof m.content === "string") {
      return { role: m.role, content: m.content };
    }
    const blocks: ContentBlockParam[] = m.content.map((block) => {
      if (block.type === "image") {
        return {
          type: "image" as const,
          source: {
            type: "base64" as const,
            media_type: block.source.media_type as "image/jpeg" | "image/png" | "image/gif" | "image/webp",
            data: block.source.data,
          },
        };
      }
      return { type: "text" as const, text: block.text };
    });
    return { role: m.role, content: blocks };
  });
}

function isContentBlockDelta(event: RawMessageStreamEvent): event is RawContentBlockDeltaEvent {
  return event.type === "content_block_delta";
}

function isMessageDelta(event: RawMessageStreamEvent): event is RawMessageDeltaEvent {
  return event.type === "message_delta";
}

function isTextDelta(delta: RawContentBlockDeltaEvent["delta"]): delta is TextDelta {
  return delta.type === "text_delta";
}

class AnthropicProvider implements LLMProvider {
  private client: Anthropic;
  private model: string;

  constructor(model: string) {
    this.client = new Anthropic({
      apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY,
      baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
    });
    this.model = model;
  }

  async create(options: LLMOptions): Promise<LLMResponse> {
    const response = await this.client.messages.create(
      {
        model: this.model,
        max_tokens: options.maxTokens,
        system: options.system,
        messages: toAnthropicMessages(options.messages),
      },
      options.abortSignal ? { signal: options.abortSignal } : undefined,
    );

    const text = response.content
      .filter((b): b is TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("");
    return {
      text,
      stopReason: response.stop_reason || "",
    };
  }

  stream(options: LLMOptions): LLMStream {
    const anthropicStream = this.client.messages.stream({
      model: this.model,
      max_tokens: options.maxTokens,
      system: options.system,
      messages: toAnthropicMessages(options.messages),
    });

    return {
      [Symbol.asyncIterator]() {
        const iterator = anthropicStream[Symbol.asyncIterator]();
        return {
          async next(): Promise<IteratorResult<LLMStreamEvent>> {
            const result = await iterator.next();
            if (result.done) {
              return { done: true, value: undefined };
            }
            const event = result.value;
            if (isContentBlockDelta(event) && isTextDelta(event.delta)) {
              return {
                done: false,
                value: { type: "text_delta", text: event.delta.text },
              };
            }
            if (isMessageDelta(event) && event.delta.stop_reason) {
              return {
                done: false,
                value: { type: "stop", stopReason: event.delta.stop_reason },
              };
            }
            return this.next();
          },
        };
      },
      abort() {
        anthropicStream.abort();
      },
    };
  }
}

function toOpenAIMessages(
  system: string,
  messages: LLMMessage[]
): OpenAI.Chat.Completions.ChatCompletionMessageParam[] {
  const result: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: "system", content: system },
  ];
  for (const m of messages) {
    if (typeof m.content === "string") {
      result.push({ role: m.role, content: m.content });
    } else {
      const parts: OpenAI.Chat.Completions.ChatCompletionContentPart[] = m.content.map((block) => {
        if (block.type === "image") {
          return {
            type: "image_url" as const,
            image_url: {
              url: `data:${block.source.media_type};base64,${block.source.data}`,
            },
          };
        }
        return { type: "text" as const, text: block.text };
      });
      if (m.role === "assistant") {
        const textContent = parts
          .filter((p): p is OpenAI.Chat.Completions.ChatCompletionContentPartText => p.type === "text")
          .map((p) => p.text)
          .join("");
        result.push({ role: "assistant" as const, content: textContent });
      } else {
        result.push({ role: "user" as const, content: parts });
      }
    }
  }
  return result;
}

const MODELS_REQUIRING_MAX_COMPLETION_TOKENS = new Set([
  "gpt-5",
  "gpt-5.2",
  "gpt-5.3-codex",
]);

const MODELS_NOT_SUPPORTING_CHAT = new Set([
  "gpt-5.3-codex",
]);

function getOpenAITokenParams(model: string, maxTokens: number | undefined): { max_tokens?: number; max_completion_tokens?: number } {
  if (maxTokens === undefined) return {};
  if (MODELS_REQUIRING_MAX_COMPLETION_TOKENS.has(model)) {
    return { max_completion_tokens: maxTokens };
  }
  return { max_tokens: maxTokens };
}

class OpenAIProvider implements LLMProvider {
  private client: OpenAI;
  private model: string;

  constructor(model: string) {
    if (!process.env.AI_INTEGRATIONS_OPENAI_API_KEY || !process.env.AI_INTEGRATIONS_OPENAI_BASE_URL) {
      throw new Error(
        "OpenAI integration is not configured. Please install the OpenAI AI Integration blueprint in your Replit project."
      );
    }
    this.client = new OpenAI({
      apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
      baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
    });
    this.model = model;
  }

  async create(options: LLMOptions): Promise<LLMResponse> {
    if (MODELS_NOT_SUPPORTING_CHAT.has(this.model)) {
      throw new Error(
        `Model "${this.model}" does not support chat completions. Please select a different model.`
      );
    }

    try {
      const response = await this.client.chat.completions.create(
        {
          model: this.model,
          ...getOpenAITokenParams(this.model, options.maxTokens),
          messages: toOpenAIMessages(options.system, options.messages),
        },
        options.abortSignal ? { signal: options.abortSignal } : undefined,
      );

      const text = response.choices[0]?.message?.content || "";
      const finishReason = response.choices[0]?.finish_reason || "";
      return { text, stopReason: finishReason };
    } catch (error: unknown) {
      const paramType = MODELS_REQUIRING_MAX_COMPLETION_TOKENS.has(this.model) ? "max_completion_tokens" : "max_tokens";
      const msg = error instanceof Error ? error.message : String(error);
      console.error(`OpenAI API error for model "${this.model}" (using ${paramType}):`, msg);
      throw error;
    }
  }

  stream(options: LLMOptions): LLMStream {
    if (MODELS_NOT_SUPPORTING_CHAT.has(this.model)) {
      throw new Error(
        `Model "${this.model}" does not support chat completions. Please select a different model.`
      );
    }

    let abortController: AbortController | null = new AbortController();
    const modelName = this.model;

    const streamPromise = this.client.chat.completions.create(
      {
        model: this.model,
        ...getOpenAITokenParams(this.model, options.maxTokens),
        messages: toOpenAIMessages(options.system, options.messages),
        stream: true,
      },
      { signal: abortController.signal },
    );

    return {
      [Symbol.asyncIterator]() {
        let openaiStream: AsyncIterable<OpenAI.Chat.Completions.ChatCompletionChunk> | null = null;
        let iterator: AsyncIterator<OpenAI.Chat.Completions.ChatCompletionChunk> | null = null;

        return {
          async next(): Promise<IteratorResult<LLMStreamEvent>> {
            try {
              if (!openaiStream) {
                openaiStream = await streamPromise;
                iterator = openaiStream[Symbol.asyncIterator]();
              }

              const result = await iterator!.next();
              if (result.done) {
                return { done: true, value: undefined };
              }

              const chunk = result.value;
              const delta = chunk.choices[0]?.delta;
              const finishReason = chunk.choices[0]?.finish_reason;

              if (finishReason) {
                return {
                  done: false,
                  value: { type: "stop", stopReason: finishReason },
                };
              }

              if (delta?.content) {
                return {
                  done: false,
                  value: { type: "text_delta", text: delta.content },
                };
              }

              return this.next();
            } catch (error: unknown) {
              const paramType = MODELS_REQUIRING_MAX_COMPLETION_TOKENS.has(modelName) ? "max_completion_tokens" : "max_tokens";
              const msg = error instanceof Error ? error.message : String(error);
              console.error(`OpenAI stream error for model "${modelName}" (using ${paramType}):`, msg);
              throw error;
            }
          },
        };
      },
      abort() {
        if (abortController) {
          abortController.abort();
          abortController = null;
        }
      },
    };
  }
}

class GeminiProvider implements LLMProvider {
  private client: OpenAI;
  private model: string;

  constructor(model: string) {
    if (!process.env.AI_INTEGRATIONS_GEMINI_API_KEY || !process.env.AI_INTEGRATIONS_GEMINI_BASE_URL) {
      throw new Error(
        "Gemini integration is not configured. Please install the Gemini AI Integration blueprint in your Replit project."
      );
    }
    this.client = new OpenAI({
      apiKey: process.env.AI_INTEGRATIONS_GEMINI_API_KEY,
      baseURL: process.env.AI_INTEGRATIONS_GEMINI_BASE_URL,
    });
    this.model = model;
  }

  async create(options: LLMOptions): Promise<LLMResponse> {
    try {
      const response = await this.client.chat.completions.create(
        {
          model: this.model,
          max_tokens: options.maxTokens,
          messages: toOpenAIMessages(options.system, options.messages),
        },
        options.abortSignal ? { signal: options.abortSignal } : undefined,
      );

      const text = response.choices[0]?.message?.content || "";
      const finishReason = response.choices[0]?.finish_reason || "";
      return { text, stopReason: finishReason };
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : String(error);
      console.error(`Gemini API error for model "${this.model}" (using max_tokens):`, msg);
      throw error;
    }
  }

  stream(options: LLMOptions): LLMStream {
    let abortController: AbortController | null = new AbortController();
    const modelName = this.model;

    const streamPromise = this.client.chat.completions.create(
      {
        model: this.model,
        max_tokens: options.maxTokens,
        messages: toOpenAIMessages(options.system, options.messages),
        stream: true,
      },
      { signal: abortController.signal },
    );

    return {
      [Symbol.asyncIterator]() {
        let openaiStream: AsyncIterable<OpenAI.Chat.Completions.ChatCompletionChunk> | null = null;
        let iterator: AsyncIterator<OpenAI.Chat.Completions.ChatCompletionChunk> | null = null;

        return {
          async next(): Promise<IteratorResult<LLMStreamEvent>> {
            try {
              if (!openaiStream) {
                openaiStream = await streamPromise;
                iterator = openaiStream[Symbol.asyncIterator]();
              }

              const result = await iterator!.next();
              if (result.done) {
                return { done: true, value: undefined };
              }

              const chunk = result.value;
              const delta = chunk.choices[0]?.delta;
              const finishReason = chunk.choices[0]?.finish_reason;

              if (finishReason) {
                return {
                  done: false,
                  value: { type: "stop", stopReason: finishReason },
                };
              }

              if (delta?.content) {
                return {
                  done: false,
                  value: { type: "text_delta", text: delta.content },
                };
              }

              return this.next();
            } catch (error: unknown) {
              const msg = error instanceof Error ? error.message : String(error);
              console.error(`Gemini stream error for model "${modelName}" (using max_tokens):`, msg);
              throw error;
            }
          },
        };
      },
      abort() {
        if (abortController) {
          abortController.abort();
          abortController = null;
        }
      },
    };
  }
}

const PROVIDER_REGISTRY: Record<string, (model: string) => LLMProvider> = {
  anthropic: (model) => new AnthropicProvider(model),
  openai: (model) => new OpenAIProvider(model),
  google: (model) => new GeminiProvider(model),
};

const DEFAULT_MODEL = "claude-sonnet-4-6";

export const SUPPORTED_MODELS = [
  { id: "claude-sonnet-4-6", label: "Claude Sonnet 4 (claude-sonnet-4-6)", provider: "anthropic" },
  { id: "claude-haiku-4-5", label: "Claude Haiku 4.5 (claude-haiku-4-5)", provider: "anthropic" },
  { id: "claude-opus-4", label: "Claude Opus 4 (claude-opus-4)", provider: "anthropic" },
  { id: "gpt-4o", label: "GPT-4o (gpt-4o)", provider: "openai" },
  { id: "gpt-5.3-codex", label: "GPT-5.3 Codex (gpt-5.3-codex) - Code only, no chat", provider: "openai" },
  { id: "gpt-5.2", label: "GPT-5.2 (gpt-5.2)", provider: "openai" },
  { id: "gpt-5", label: "GPT-5 (gpt-5)", provider: "openai" },
  { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro (gemini-2.5-pro)", provider: "google" },
  { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash (gemini-2.5-flash)", provider: "google" },
];

function getProviderForModel(modelId: string): string {
  const entry = SUPPORTED_MODELS.find((m) => m.id === modelId);
  return entry?.provider || "anthropic";
}

let cachedProvider: LLMProvider | null = null;
let cachedKey: string | null = null;

let dbModel: string | null = null;

export function setDbModel(model: string | null): void {
  dbModel = model;
  cachedProvider = null;
  cachedKey = null;
}

export function getActiveModel(): string {
  return dbModel || process.env.LLM_MODEL || DEFAULT_MODEL;
}

export function getLLM(): LLMProvider {
  const model = getActiveModel();
  const providerName = getProviderForModel(model);
  const key = `${providerName}:${model}`;

  if (cachedProvider && cachedKey === key) {
    return cachedProvider;
  }

  const factory = PROVIDER_REGISTRY[providerName];
  if (!factory) {
    throw new Error(
      `Unknown LLM provider "${providerName}". Available: ${Object.keys(PROVIDER_REGISTRY).join(", ")}`
    );
  }

  cachedProvider = factory(model);
  cachedKey = key;
  console.log(`[LLM] Initialized provider="${providerName}" model="${model}"`);
  return cachedProvider;
}

export function getModel(): string {
  return getActiveModel();
}

export function getProviderName(): string {
  const model = getActiveModel();
  return getProviderForModel(model);
}
