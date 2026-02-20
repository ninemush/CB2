import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Loader2 } from "lucide-react";
import type { Idea } from "@shared/schema";

function getStageBadgeClass(stage: string): string {
  const approvalStages = ["CoE Approval", "Governance / Security Scan"];
  const actionStages = ["Idea", "Feasibility Assessment"];
  if (approvalStages.includes(stage)) return "bg-cb-gold/15 text-cb-gold border-cb-gold/25";
  if (actionStages.includes(stage)) return "bg-primary/15 text-primary border-primary/25";
  return "bg-cb-teal/15 text-cb-teal border-cb-teal/25";
}

export default function Workspace() {
  const [, params] = useRoute("/workspace/:id");
  const ideaId = params?.id;

  const { data: idea, isLoading } = useQuery<Idea>({
    queryKey: ["/api/ideas", ideaId],
    enabled: !!ideaId,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
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

  return (
    <div className="flex flex-col h-full" data-testid="page-workspace">
      <div className="px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon" className="h-8 w-8" data-testid="button-back-pipeline">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-foreground truncate" data-testid="text-idea-title">
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
            <p className="text-xs text-muted-foreground mt-0.5 truncate">
              {idea.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-card border border-border">
          <MessageSquare className="h-6 w-6 text-cb-teal" />
        </div>
        <div className="text-center space-y-1.5 max-w-md">
          <h2 className="text-base font-medium text-foreground">
            Your workspace is ready.
          </h2>
          <p className="text-sm text-muted-foreground">
            Start describing your process in the chat.
          </p>
        </div>
      </div>
    </div>
  );
}
