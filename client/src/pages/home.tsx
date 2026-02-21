import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { PIPELINE_STAGES, type Idea, type PipelineStage } from "@shared/schema";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, AlertTriangle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

function getStatusChip(stage: string): { label: string; className: string } {
  const approvalStages = ["CoE Approval", "Governance / Security Scan"];
  const actionStages = ["Idea", "Feasibility Assessment"];

  if (approvalStages.includes(stage)) {
    return { label: "Pending Approval", className: "bg-cb-gold/15 text-cb-gold border border-cb-gold/25" };
  }
  if (actionStages.includes(stage)) {
    return { label: "Action Required", className: "bg-primary/15 text-primary border border-primary/25" };
  }
  return { label: "Active", className: "bg-cb-teal/15 text-cb-teal border border-cb-teal/25" };
}

function formatTimestamp(date: string | Date): string {
  const d = new Date(date);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function isStalled(idea: Idea): boolean {
  const now = new Date();
  const updated = new Date(idea.updatedAt);
  const hoursDiff = (now.getTime() - updated.getTime()) / (1000 * 60 * 60);
  const terminalStages = ["Deploy", "Maintenance"];
  return hoursDiff >= 48 && !terminalStages.includes(idea.stage);
}

function IdeaCard({ idea }: { idea: Idea }) {
  const status = getStatusChip(idea.stage);
  const stalled = isStalled(idea);

  return (
    <Link
      href={`/workspace/${idea.id}`}
      className={`block p-2 rounded-lg bg-card border transition-colors cursor-pointer group ${
        stalled ? "border-amber-500/40 hover:border-amber-500/60" : "border-card-border hover:border-primary/30"
      }`}
      data-testid={`card-idea-${idea.id}`}
    >
      <div className="space-y-1.5">
        <h4 className="text-xs font-medium text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {idea.title}
        </h4>
        <p className="text-[10px] text-muted-foreground truncate">
          {idea.owner}
        </p>
        {stalled && (
          <span
            className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/25"
            data-testid={`chip-stalled-${idea.id}`}
          >
            <AlertTriangle className="h-2.5 w-2.5" />
            Needs attention
          </span>
        )}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center text-[10px] font-medium px-1.5 py-0.5 rounded-full ${status.className}`}
          >
            {status.label}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Clock className="h-2.5 w-2.5" />
            {formatTimestamp(idea.updatedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}

function StageColumn({ stage, ideas, isMobile }: { stage: PipelineStage; ideas: Idea[]; isMobile: boolean }) {
  const stageIdeas = ideas.filter((idea) => idea.stage === stage);

  return (
    <div
      className={`flex flex-col h-full ${isMobile ? "min-w-[160px] max-w-[160px] snap-start" : "flex-1 min-w-0"}`}
      data-testid={`column-${stage.toLowerCase().replace(/[\s\/]/g, "-")}`}
    >
      <div className="flex items-center gap-1 px-1.5 pb-2 border-b border-border">
        <h3 className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider truncate leading-tight">
          {stage}
        </h3>
        {stageIdeas.length > 0 && (
          <span className="flex items-center justify-center min-w-[16px] h-[16px] rounded-full bg-secondary text-[9px] font-medium text-secondary-foreground px-0.5 shrink-0">
            {stageIdeas.length}
          </span>
        )}
      </div>
      <div className="flex-1 pt-2 space-y-1.5 overflow-y-auto">
        {stageIdeas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { data: ideas, isLoading } = useQuery<Idea[]>({
    queryKey: ["/api/ideas"],
  });
  const isMobile = useIsMobile();

  if (isLoading) {
    return (
      <div className="flex flex-col h-full" data-testid="page-pipeline-loading">
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-3 w-40 mt-1.5" />
        </div>
        <div className="flex gap-2 p-3 sm:p-4">
          {Array.from({ length: isMobile ? 2 : 10 }).map((_, i) => (
            <div key={i} className={isMobile ? "min-w-[160px] space-y-3" : "flex-1 min-w-0 space-y-3"}>
              <Skeleton className="h-4 w-full max-w-[80px]" />
              <Skeleton className="h-20 w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const allIdeas = ideas ?? [];

  return (
    <div className="flex flex-col h-full" data-testid="page-pipeline">
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border">
        <h1 className="text-base sm:text-lg font-semibold text-foreground">Pipeline</h1>
        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
          {allIdeas.length} idea{allIdeas.length !== 1 ? "s" : ""} across {PIPELINE_STAGES.length} stages
        </p>
      </div>
      {isMobile ? (
        <ScrollArea className="flex-1">
          <div className="flex gap-2 p-3 h-[calc(100vh-7.5rem)] snap-x snap-mandatory overflow-x-auto">
            {PIPELINE_STAGES.map((stage) => (
              <StageColumn key={stage} stage={stage} ideas={allIdeas} isMobile={true} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        <div className="flex gap-2 p-3 sm:p-4 h-[calc(100vh-8.5rem)] overflow-hidden">
          {PIPELINE_STAGES.map((stage) => (
            <StageColumn key={stage} stage={stage} ideas={allIdeas} isMobile={false} />
          ))}
        </div>
      )}
    </div>
  );
}
