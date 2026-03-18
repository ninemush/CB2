import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type MetaValidationMode = "Auto" | "Always" | "Off";

type StatusChipState =
  | "ready"
  | "assessing"
  | "will-validate"
  | "not-needed"
  | "active"
  | "validating"
  | "fixed"
  | "clean"
  | "warning";

interface MetaValidationBarProps {
  isGenerating?: boolean;
  metaValidationStatus?: StatusChipState;
  fixCount?: number;
}

const MODE_OPTIONS: MetaValidationMode[] = ["Auto", "Always", "Off"];

function getChipConfig(status: StatusChipState, fixCount?: number): { label: string; className: string; pulse?: boolean } {
  switch (status) {
    case "ready":
      return { label: "Ready", className: "bg-muted text-muted-foreground" };
    case "assessing":
      return { label: "Assessing...", className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" };
    case "will-validate":
      return { label: "Will validate", className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" };
    case "not-needed":
      return { label: "Not needed", className: "bg-muted text-muted-foreground" };
    case "active":
      return { label: "Active", className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" };
    case "validating":
      return { label: "Validating...", className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400", pulse: true };
    case "fixed":
      return { label: `✓ ${fixCount || 0} fix${(fixCount || 0) !== 1 ? "es" : ""}`, className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" };
    case "clean":
      return { label: "✓ Clean", className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" };
    case "warning":
      return { label: `⚠ Review needed${fixCount ? ` (${fixCount} fix${fixCount !== 1 ? "es" : ""})` : ""}`, className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" };
    default:
      return { label: "Ready", className: "bg-muted text-muted-foreground" };
  }
}

export function MetaValidationBar({ isGenerating, metaValidationStatus = "ready", fixCount }: MetaValidationBarProps) {
  const { toast } = useToast();

  const { data: settings } = useQuery<{ mode: MetaValidationMode }>({
    queryKey: ["/api/settings/meta-validation"],
  });

  const currentMode = settings?.mode || "Auto";

  const updateMode = useMutation({
    mutationFn: async (mode: MetaValidationMode) => {
      return apiRequest("PUT", "/api/settings/meta-validation", { mode });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/settings/meta-validation"] });
    },
  });

  const handleModeChange = (mode: MetaValidationMode) => {
    if (isGenerating) {
      toast({
        title: "Mode change queued",
        description: "Will apply to next generation.",
      });
    }
    updateMode.mutate(mode);
  };

  const chipConfig = getChipConfig(metaValidationStatus, fixCount);

  return (
    <div
      className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-background/80 backdrop-blur-sm"
      style={{ maxHeight: "40px" }}
      data-testid="meta-validation-bar"
    >
      <div className="flex items-center gap-2">
        <Shield className="h-3.5 w-3.5 text-muted-foreground" />
        <div className="flex items-center rounded-full border border-border overflow-hidden" data-testid="meta-validation-mode-selector">
          {MODE_OPTIONS.map((mode) => (
            <button
              key={mode}
              onClick={() => handleModeChange(mode)}
              className={`px-2.5 py-0.5 text-[10px] font-medium transition-colors ${
                currentMode === mode
                  ? "bg-orange-500 text-white dark:bg-orange-600"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              data-testid={`meta-validation-mode-${mode.toLowerCase()}`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium transition-all duration-300 ${chipConfig.className} ${chipConfig.pulse ? "animate-pulse" : ""}`}
        data-testid="meta-validation-status-chip"
      >
        {chipConfig.label}
      </div>
    </div>
  );
}
