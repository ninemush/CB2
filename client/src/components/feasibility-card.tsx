import { Brain, Bot, Zap, Layers, Clock, BarChart3, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface FeasibilityCardProps {
  automationType: "rpa" | "agent" | "hybrid";
  rationale: string;
  complexity?: string | null;
  effortEstimate?: string | null;
}

const TYPE_CONFIG = {
  rpa: {
    label: "RPA",
    icon: Bot,
    color: "bg-blue-500/15 text-blue-400 border-blue-500/25",
    accent: "border-blue-500/30",
    iconColor: "text-blue-400",
    headerBg: "bg-blue-500/5",
  },
  agent: {
    label: "AI Agent",
    icon: Brain,
    color: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    accent: "border-purple-500/30",
    iconColor: "text-purple-400",
    headerBg: "bg-purple-500/5",
  },
  hybrid: {
    label: "Hybrid",
    icon: Layers,
    color: "bg-teal-500/15 text-teal-400 border-teal-500/25",
    accent: "border-teal-500/30",
    iconColor: "text-teal-400",
    headerBg: "bg-teal-500/5",
  },
};

const COMPLEXITY_CONFIG: Record<string, { label: string; color: string }> = {
  low: { label: "Low", color: "bg-green-500/15 text-green-400 border-green-500/25" },
  medium: { label: "Medium", color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25" },
  high: { label: "High", color: "bg-red-500/15 text-red-400 border-red-500/25" },
};

export function FeasibilityCard({ automationType, rationale, complexity, effortEstimate }: FeasibilityCardProps) {
  const [expanded, setExpanded] = useState(true);
  const config = TYPE_CONFIG[automationType] || TYPE_CONFIG.rpa;
  const Icon = config.icon;
  const complexityInfo = complexity ? COMPLEXITY_CONFIG[complexity.toLowerCase()] : null;

  return (
    <div
      className={`rounded-lg border ${config.accent} bg-card overflow-hidden`}
      data-testid="card-feasibility-assessment"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center justify-between px-3 py-2.5 ${config.headerBg} hover:opacity-90 transition-opacity cursor-pointer`}
        data-testid="button-feasibility-toggle"
      >
        <div className="flex items-center gap-2">
          <div className={`p-1 rounded ${config.color}`}>
            <Zap className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-semibold text-foreground">Feasibility Assessment</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={`text-[10px] gap-1 ${config.color}`} data-testid="badge-feasibility-type">
            <Icon className="h-3 w-3" />
            {config.label}
          </Badge>
          {expanded ? <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />}
        </div>
      </button>

      {expanded && (
        <div className="px-3 py-2.5 space-y-2.5">
          <div>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-1">Rationale</p>
            <p className="text-xs text-foreground/90 leading-relaxed" data-testid="text-feasibility-rationale">{rationale}</p>
          </div>

          {(complexityInfo || effortEstimate) && (
            <div className="flex gap-3 pt-1">
              {complexityInfo && (
                <div className="flex items-center gap-1.5" data-testid="text-feasibility-complexity">
                  <BarChart3 className="h-3 w-3 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">Complexity:</span>
                  <Badge variant="outline" className={`text-[10px] py-0 px-1.5 ${complexityInfo.color}`}>
                    {complexityInfo.label}
                  </Badge>
                </div>
              )}
              {effortEstimate && (
                <div className="flex items-center gap-1.5" data-testid="text-feasibility-effort">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">Effort:</span>
                  <span className="text-[10px] text-foreground font-medium">{effortEstimate}</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
