import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import type { Idea } from "@shared/schema";

interface NewIdeaModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewIdeaModal({ open, onOpenChange }: NewIdeaModalProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [, navigate] = useLocation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState(user?.displayName ?? "");
  const [tag, setTag] = useState("");

  const createMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/ideas", {
        title,
        description,
        owner: owner || user?.displayName,
        ownerEmail: user?.email,
        tag: tag || null,
      });
      return (await res.json()) as Idea;
    },
    onSuccess: (idea) => {
      queryClient.invalidateQueries({ queryKey: ["/api/ideas"] });
      onOpenChange(false);
      setTitle("");
      setDescription("");
      setOwner(user?.displayName ?? "");
      setTag("");
      navigate(`/workspace/${idea.id}`);
    },
    onError: (err: Error) => {
      toast({
        title: "Failed to create idea",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    createMutation.mutate();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Idea</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="idea-title">Idea Title</Label>
            <Input
              id="idea-title"
              placeholder="e.g., Automate invoice processing"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-testid="input-idea-title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idea-desc">One-line Description</Label>
            <Input
              id="idea-desc"
              placeholder="Briefly describe the automation idea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              data-testid="input-idea-description"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idea-owner">Process Owner</Label>
            <Input
              id="idea-owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              data-testid="input-idea-owner"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idea-tag">
              Tag / Category <span className="text-muted-foreground font-normal">(optional)</span>
            </Label>
            <Input
              id="idea-tag"
              placeholder="e.g., Finance, HR, Operations"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              data-testid="input-idea-tag"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              data-testid="button-cancel-idea"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!title.trim() || !description.trim() || createMutation.isPending}
              data-testid="button-submit-idea"
            >
              {createMutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Submit Idea
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
