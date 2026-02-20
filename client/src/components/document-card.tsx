import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import {
  FileText,
  ChevronDown,
  ChevronRight,
  Check,
  Loader2,
  Download,
  Package,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface DocumentSection {
  title: string;
  content: string;
}

function parseDocumentSections(content: string): DocumentSection[] {
  const lines = content.split("\n");
  const sections: DocumentSection[] = [];
  let currentTitle = "";
  let currentContent: string[] = [];

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+\d*\.?\s*(.*)/);
    if (headingMatch) {
      if (currentTitle) {
        sections.push({ title: currentTitle, content: currentContent.join("\n").trim() });
      }
      currentTitle = headingMatch[1].trim();
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }

  if (currentTitle) {
    sections.push({ title: currentTitle, content: currentContent.join("\n").trim() });
  }

  if (sections.length === 0 && content.trim()) {
    sections.push({ title: "Document Content", content: content.trim() });
  }

  return sections;
}

interface DocumentCardProps {
  docType: "PDD" | "SDD";
  docId: number;
  content: string;
  ideaId: string;
  isApproved?: boolean;
  version?: number;
  onApproved?: () => void;
}

export function DocumentCard({ docType, docId, content, ideaId, isApproved, version, onApproved }: DocumentCardProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));
  const [showApproveConfirm, setShowApproveConfirm] = useState(false);
  const [showReviseInput, setShowReviseInput] = useState(false);
  const [revisionText, setRevisionText] = useState("");

  const sections = parseDocumentSections(content);

  const approveMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/ideas/${ideaId}/documents/${docId}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Approval failed");
      }
      return res.json();
    },
    onSuccess: () => {
      setShowApproveConfirm(false);
      queryClient.invalidateQueries({ queryKey: ["/api/ideas", ideaId, "messages"] });
      queryClient.invalidateQueries({ queryKey: ["/api/ideas", ideaId, "documents"] });
      onApproved?.();
    },
  });

  const reviseMutation = useMutation({
    mutationFn: async (revision: string) => {
      const res = await fetch(`/api/ideas/${ideaId}/documents/revise`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ type: docType, revision }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Revision failed");
      }
      return res.json();
    },
    onSuccess: () => {
      setShowReviseInput(false);
      setRevisionText("");
      queryClient.invalidateQueries({ queryKey: ["/api/ideas", ideaId, "messages"] });
      queryClient.invalidateQueries({ queryKey: ["/api/ideas", ideaId, "documents"] });
    },
  });

  function toggleSection(index: number) {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  const docTitle = docType === "PDD" ? "Process Design Document" : "Solution Design Document";

  return (
    <div
      className="rounded-lg border-l-4 border-l-cb-teal bg-[#2a2a2a] shadow-lg overflow-hidden"
      data-testid={`card-document-${docType.toLowerCase()}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
        <FileText className="h-4 w-4 text-cb-teal shrink-0" />
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-semibold text-foreground">{docTitle}</h4>
          <span className="text-[10px] text-muted-foreground">
            Version {version || 1}
            {isApproved && (
              <span className="ml-2 text-cb-teal">
                <Check className="inline h-3 w-3 mr-0.5" />Approved
              </span>
            )}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 text-[10px] text-muted-foreground"
          onClick={() => {
            if (expandedSections.size === sections.length) {
              setExpandedSections(new Set());
            } else {
              setExpandedSections(new Set(sections.map((_, i) => i)));
            }
          }}
          data-testid={`button-toggle-all-sections-${docType.toLowerCase()}`}
        >
          {expandedSections.size === sections.length ? "Collapse All" : "Expand All"}
        </Button>
      </div>

      <div className="divide-y divide-border/20">
        {sections.map((section, idx) => (
          <div key={idx}>
            <button
              className="w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-white/5 transition-colors"
              onClick={() => toggleSection(idx)}
              data-testid={`button-section-toggle-${idx}`}
            >
              {expandedSections.has(idx) ? (
                <ChevronDown className="h-3 w-3 text-cb-teal shrink-0" />
              ) : (
                <ChevronRight className="h-3 w-3 text-muted-foreground shrink-0" />
              )}
              <span className="text-xs font-medium text-foreground">{section.title}</span>
            </button>
            {expandedSections.has(idx) && (
              <div className="px-4 pb-3 pl-9">
                <div className="text-[11px] text-muted-foreground/90 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {!isApproved && (
        <div className="px-4 py-3 border-t border-border/30 space-y-2">
          {showApproveConfirm ? (
            <div className="flex items-center gap-2">
              <p className="text-[11px] text-muted-foreground flex-1">
                Confirm approval of this {docType}?
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 text-xs"
                onClick={() => setShowApproveConfirm(false)}
                disabled={approveMutation.isPending}
                data-testid={`button-cancel-doc-approve-${docType.toLowerCase()}`}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="h-7 text-xs bg-cb-teal hover:bg-cb-teal/80 text-white"
                onClick={() => approveMutation.mutate()}
                disabled={approveMutation.isPending}
                data-testid={`button-confirm-doc-approve-${docType.toLowerCase()}`}
              >
                {approveMutation.isPending ? (
                  <Loader2 className="h-3 w-3 animate-spin mr-1" />
                ) : (
                  <Check className="h-3 w-3 mr-1" />
                )}
                Confirm
              </Button>
            </div>
          ) : showReviseInput ? (
            <div className="space-y-2">
              <Textarea
                value={revisionText}
                onChange={(e) => setRevisionText(e.target.value)}
                placeholder={`e.g. "Update section 3 to include..." or "Add an exception for..."`}
                className="min-h-[60px] text-xs bg-[#1a1a1a] border-border/30"
                data-testid={`input-revision-${docType.toLowerCase()}`}
              />
              <div className="flex items-center gap-2 justify-end">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-7 text-xs"
                  onClick={() => { setShowReviseInput(false); setRevisionText(""); }}
                  disabled={reviseMutation.isPending}
                  data-testid={`button-cancel-revision-${docType.toLowerCase()}`}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => reviseMutation.mutate(revisionText)}
                  disabled={!revisionText.trim() || reviseMutation.isPending}
                  data-testid={`button-submit-revision-${docType.toLowerCase()}`}
                >
                  {reviseMutation.isPending ? (
                    <Loader2 className="h-3 w-3 animate-spin mr-1" />
                  ) : null}
                  Submit Revision
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="h-7 text-xs bg-cb-teal hover:bg-cb-teal/80 text-white flex-1"
                onClick={() => setShowApproveConfirm(true)}
                data-testid={`button-approve-${docType.toLowerCase()}`}
              >
                <Check className="h-3 w-3 mr-1" />
                Approve {docType}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs flex-1"
                onClick={() => setShowReviseInput(true)}
                data-testid={`button-request-revision-${docType.toLowerCase()}`}
              >
                Request Revision
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface UiPathPackageCardProps {
  packageData: any;
  ideaId: string;
}

export function UiPathPackageCard({ packageData, ideaId }: UiPathPackageCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className="rounded-lg border-l-4 border-l-primary bg-[#2a2a2a] shadow-lg overflow-hidden"
      data-testid="card-uipath-package"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
        <Package className="h-4 w-4 text-primary shrink-0" />
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-semibold text-foreground">UiPath Automation Package</h4>
          <span className="text-[10px] text-muted-foreground">{packageData.projectName}</span>
        </div>
      </div>

      <div className="px-4 py-3 space-y-3">
        <p className="text-[11px] text-muted-foreground/90">{packageData.description}</p>

        {packageData.dependencies?.length > 0 && (
          <div>
            <h5 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Dependencies</h5>
            <div className="flex flex-wrap gap-1">
              {packageData.dependencies.map((dep: string, i: number) => (
                <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  {dep}
                </span>
              ))}
            </div>
          </div>
        )}

        {packageData.workflows?.length > 0 && (
          <div>
            <button
              className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
              Workflows ({packageData.workflows.length})
            </button>
            {expanded && (
              <div className="space-y-2 mt-1">
                {packageData.workflows.map((wf: any, i: number) => (
                  <div key={i} className="p-2 rounded bg-[#1a1a1a] border border-border/20">
                    <p className="text-[11px] font-medium text-foreground">{wf.name}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{wf.description}</p>
                    {wf.steps?.length > 0 && (
                      <div className="mt-1.5 space-y-0.5">
                        {wf.steps.map((step: any, j: number) => (
                          <p key={j} className="text-[10px] text-muted-foreground/70 pl-2 border-l border-border/30">
                            {step.activity}{step.notes ? ` — ${step.notes}` : ""}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="px-4 py-3 border-t border-border/30">
        <a
          href={`/api/ideas/${ideaId}/download-uipath`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium transition-colors w-full justify-center"
          data-testid="button-download-uipath"
        >
          <Download className="h-3.5 w-3.5" />
          Download UiPath Package
        </a>
      </div>
    </div>
  );
}
