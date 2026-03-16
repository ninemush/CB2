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

const PROVIDER_REGISTRY: Record<string, (model: string) => LLMProvider> = {
  anthropic: (model) => new AnthropicProvider(model),
};

const DEFAULT_PROVIDER = "anthropic";
const DEFAULT_MODEL = "claude-sonnet-4-6";

export const SUPPORTED_MODELS = [
  { id: "claude-sonnet-4-6", label: "Claude Sonnet 4 (claude-sonnet-4-6)" },
  { id: "claude-haiku-4-5", label: "Claude Haiku 4.5 (claude-haiku-4-5)" },
  { id: "claude-opus-4", label: "Claude Opus 4 (claude-opus-4)" },
];

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
  const providerName = process.env.LLM_PROVIDER || DEFAULT_PROVIDER;
  const model = getActiveModel();
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
  return process.env.LLM_PROVIDER || DEFAULT_PROVIDER;
}
