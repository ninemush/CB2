import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import {
  ArrowLeft,
  Send,
  Paperclip,
  Check,
  Lock,
  Sparkles,
  Map,
  ToggleLeft,
  Bot,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { PIPELINE_STAGES, type Idea, type PipelineStage } from "@shared/schema";

function getStageBadgeClass(stage: string): string {
  const approvalStages = ["CoE Approval", "Governance / Security Scan"];
  const actionStages = ["Idea", "Feasibility Assessment"];
  if (approvalStages.includes(stage))
    return "bg-cb-gold/15 text-cb-gold border-cb-gold/25";
  if (actionStages.includes(stage))
    return "bg-primary/15 text-primary border-primary/25";
  return "bg-cb-teal/15 text-cb-teal border-cb-teal/25";
}

const STAGE_GUIDANCE: Record<string, { action: string; hint: string }> = {
  Idea: {
    action: "Describe Your Process",
    hint: "Tell the assistant about the manual process you want to automate. Include who does it, how often, and what systems are involved.",
  },
  "Feasibility Assessment": {
    action: "Review Feasibility",
    hint: "Your process is being assessed for automation potential. Review the complexity score, estimated effort, and ROI projection.",
  },
  "Validated Backlog": {
    action: "Prioritize & Plan",
    hint: "This idea has been validated. It's queued for design. Review priority ranking and target timeline.",
  },
  Design: {
    action: "Refine the Design",
    hint: "The As-Is process map is ready. Work with the assistant to design the To-Be automated workflow and identify exception paths.",
  },
  Build: {
    action: "Build in Progress",
    hint: "Development is underway. Track build progress, review test scenarios, and flag any process changes.",
  },
  Test: {
    action: "Validate & Test",
    hint: "Review test results, confirm edge cases are handled, and approve for governance review.",
  },
  "Governance / Security Scan": {
    action: "Governance Review",
    hint: "Security and compliance checks are running. Review findings and address any flagged items.",
  },
  "CoE Approval": {
    action: "Awaiting Approval",
    hint: "The CoE team is reviewing this automation. Respond to any questions or change requests.",
  },
  Deploy: {
    action: "Deploying",
    hint: "Deployment is in progress. Monitor rollout status and confirm production readiness.",
  },
  Maintenance: {
    action: "Monitor & Maintain",
    hint: "This automation is live. Track performance metrics, exception rates, and optimization opportunities.",
  },
};

function getCompletedStagesForIdea(idea: Idea) {
  const currentIndex = PIPELINE_STAGES.indexOf(idea.stage as PipelineStage);
  const completed: Record<string, string> = {};
  const createdDate = new Date(idea.createdAt);

  for (let i = 0; i < currentIndex; i++) {
    const stageDate = new Date(createdDate);
    stageDate.setDate(stageDate.getDate() + (i + 1) * 2);
    completed[PIPELINE_STAGES[i]] = stageDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  return completed;
}

function StageTracker({
  idea,
  onStageClick,
}: {
  idea: Idea;
  onStageClick: (stage: string) => void;
}) {
  const currentIndex = PIPELINE_STAGES.indexOf(idea.stage as PipelineStage);
  const completedStages = getCompletedStagesForIdea(idea);

  return (
    <div className="flex flex-col h-full" data-testid="panel-stage-tracker">
      <div className="px-4 py-3 border-b border-border">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Progress
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-4">
        <div className="relative">
          {PIPELINE_STAGES.map((stage, index) => {
            const isCompleted = index < currentIndex;
            const isCurrent = index === currentIndex;
            const isFuture = index > currentIndex;

            return (
              <div key={stage} className="relative flex items-start group" data-testid={`stage-step-${index}`}>
                {index < PIPELINE_STAGES.length - 1 && (
                  <div
                    className={`absolute left-[11px] top-[24px] w-[2px] h-[calc(100%-8px)] ${
                      isCompleted
                        ? "bg-cb-teal/40"
                        : isCurrent
                          ? "bg-gradient-to-b from-primary/60 to-border/30"
                          : "bg-border/30"
                    }`}
                  />
                )}

                <div className="relative z-10 flex items-center justify-center w-6 h-6 shrink-0 mt-0.5">
                  {isCompleted && (
                    <button
                      onClick={() => onStageClick(stage)}
                      className="flex items-center justify-center w-5 h-5 rounded-full bg-cb-teal/20 border border-cb-teal/30 cursor-pointer hover:bg-cb-teal/30 transition-colors"
                      data-testid={`button-stage-${index}`}
                    >
                      <Check className="h-2.5 w-2.5 text-cb-teal" />
                    </button>
                  )}
                  {isCurrent && (
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 border-2 border-primary">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  )}
                  {isFuture && (
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-muted/30 border border-border/50">
                      <Lock className="h-2 w-2 text-muted-foreground/40" />
                    </div>
                  )}
                </div>

                <div className="ml-2.5 pb-5 min-w-0 flex-1">
                  <span
                    className={`text-xs leading-tight block ${
                      isCurrent
                        ? "text-primary font-semibold"
                        : isCompleted
                          ? "text-foreground/80 font-medium"
                          : "text-muted-foreground/50"
                    }`}
                  >
                    {stage}
                  </span>
                  {isCompleted && completedStages[stage] && (
                    <span className="text-[10px] text-muted-foreground/60 mt-0.5 block">
                      {completedStages[stage]}
                    </span>
                  )}
                  {isCurrent && (
                    <span className="text-[10px] text-primary/70 mt-0.5 block">
                      In progress
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

function ChatPanel({ idea }: { idea: Idea }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `Hi, I'm your automation design assistant. Tell me about the process you want to automate. The more detail you give me, the better.\n\nYou can also upload process maps, videos, or documents.`,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const guidance = STAGE_GUIDANCE[idea.stage];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const text = inputValue.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          "Thanks for sharing that. I'm processing the details you've provided. In a future update, I'll analyze your process and help design the automation workflow. For now, keep adding details about the steps, people involved, and any pain points.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 1200);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="flex flex-col h-full" data-testid="panel-chat">
      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2 min-w-0">
          <Bot className="h-4 w-4 text-cb-teal shrink-0" />
          <h3
            className="text-sm font-semibold text-foreground truncate"
            data-testid="text-chat-title"
          >
            {idea.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <Badge
            variant="outline"
            className={`text-[10px] shrink-0 ${getStageBadgeClass(idea.stage)}`}
          >
            {idea.stage}
          </Badge>
          {guidance && (
            <span className="text-[10px] text-muted-foreground truncate">
              {guidance.action}
            </span>
          )}
        </div>
      </div>

      {guidance && (
        <div className="mx-3 mt-3 p-3 rounded-md bg-primary/5 border border-primary/10">
          <div className="flex items-start gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-medium text-primary">
                {guidance.action}
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                {guidance.hint}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto scrollbar-thin px-3 py-3 space-y-3" data-testid="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            data-testid={`chat-message-${msg.id}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2.5 ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-card border border-card-border rounded-bl-sm"
              }`}
            >
              <p className="text-xs leading-relaxed whitespace-pre-wrap">
                {msg.content}
              </p>
              <span
                className={`text-[9px] mt-1.5 block ${
                  msg.role === "user"
                    ? "text-primary-foreground/60"
                    : "text-muted-foreground/60"
                }`}
              >
                {msg.timestamp.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t border-border">
        <div className="flex items-end gap-2 rounded-lg bg-card border border-card-border p-2">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 text-muted-foreground hover:text-foreground"
            data-testid="button-attach-file"
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your process..."
            className="min-h-[36px] max-h-[120px] resize-none border-0 bg-transparent focus-visible:ring-0 p-0 text-xs placeholder:text-muted-foreground/50"
            rows={1}
            data-testid="input-chat-message"
          />
          <Button
            size="icon"
            className="shrink-0"
            onClick={handleSend}
            disabled={!inputValue.trim()}
            data-testid="button-send-message"
          >
            <Send className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProcessMapPanel() {
  const [activeView, setActiveView] = useState<"as-is" | "to-be">("as-is");

  return (
    <div className="flex flex-col h-full" data-testid="panel-process-map">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Map className="h-4 w-4 text-cb-teal" />
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {activeView === "as-is" ? "As-Is" : "To-Be"} Process Map
          </h3>
        </div>
        <button
          onClick={() =>
            setActiveView((v) => (v === "as-is" ? "to-be" : "as-is"))
          }
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-secondary/50 border border-border hover:bg-secondary transition-colors"
          data-testid="button-toggle-view"
        >
          <ToggleLeft className="h-3 w-3" />
          <span>As-Is</span>
          <ChevronRight className="h-2.5 w-2.5 text-muted-foreground" />
          <span>To-Be</span>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4 max-w-sm text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-card-border">
            <Map className="h-7 w-7 text-muted-foreground/30" />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-foreground/70">
              {activeView === "as-is"
                ? "Process map will appear here"
                : "To-Be map will appear here"}
            </h3>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              {activeView === "as-is"
                ? "As you describe your process in the chat, the AI will visualize each step, decision point, and handoff in a clear flowchart."
                : "Once the As-Is process is mapped, the AI will generate an optimized To-Be workflow showing where automation removes manual steps."}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-primary/60 mt-1">
            <Sparkles className="h-3 w-3" />
            <span>Powered by AI process mining</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Workspace() {
  const [, params] = useRoute("/workspace/:id");
  const ideaId = params?.id;
  const [selectedCompletedStage, setSelectedCompletedStage] = useState<
    string | null
  >(null);

  const { data: idea, isLoading } = useQuery<Idea>({
    queryKey: ["/api/ideas", ideaId],
    enabled: !!ideaId,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            Loading workspace...
          </p>
        </div>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-sm text-muted-foreground">Idea not found.</p>
      </div>
    );
  }

  const currentIndex = PIPELINE_STAGES.indexOf(idea.stage as PipelineStage);
  const completedStages = getCompletedStagesForIdea(idea);

  function handleStageClick(stage: string) {
    setSelectedCompletedStage((prev) => (prev === stage ? null : stage));
  }

  return (
    <div className="flex flex-col h-full" data-testid="page-workspace">
      <div className="px-4 py-2.5 border-b border-border bg-card/30">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button
              variant="ghost"
              size="icon"
              data-testid="button-back-pipeline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </Button>
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1
                className="text-sm font-semibold text-foreground truncate"
                data-testid="text-idea-title"
              >
                {idea.title}
              </h1>
              <Badge
                variant="outline"
                className={`shrink-0 text-[10px] ${getStageBadgeClass(idea.stage)}`}
                data-testid="badge-idea-stage"
              >
                {idea.stage}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground shrink-0">
            <span>{idea.owner}</span>
            {idea.tag && (
              <>
                <span className="text-border">|</span>
                <span>{idea.tag}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full"
          data-testid="workspace-panels"
        >
          <ResizablePanel
            defaultSize={15}
            minSize={12}
            maxSize={25}
            className="bg-card/20 relative"
          >
            <StageTracker idea={idea} onStageClick={handleStageClick} />
            {selectedCompletedStage && (
              <div className="absolute inset-0 bg-card z-20 flex flex-col" data-testid="drawer-stage-summary">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                  <h4 className="text-xs font-semibold text-foreground">
                    {selectedCompletedStage}
                  </h4>
                  <button
                    onClick={() => setSelectedCompletedStage(null)}
                    className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="button-close-drawer"
                  >
                    Close
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-cb-teal" />
                    <span className="text-xs text-muted-foreground">
                      Completed {completedStages[selectedCompletedStage]}
                    </span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/20 border border-border/40">
                    <p className="text-[11px] text-muted-foreground/70 leading-relaxed">
                      Stage summary and artifacts will appear here
                      once the AI assistant is connected.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={50} minSize={30}>
            <ProcessMapPanel />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel
            defaultSize={35}
            minSize={25}
            maxSize={50}
          >
            <ChatPanel idea={idea} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
