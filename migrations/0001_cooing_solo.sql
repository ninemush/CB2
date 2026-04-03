ALTER TABLE "uipath_generation_runs" ADD COLUMN "pdd_document_id" integer;--> statement-breakpoint
ALTER TABLE "uipath_generation_runs" ADD COLUMN "sdd_document_id" integer;--> statement-breakpoint
ALTER TABLE "uipath_generation_runs" ADD COLUMN "quality_gate_results" jsonb;--> statement-breakpoint
ALTER TABLE "uipath_generation_runs" ADD COLUMN "meta_validation_results" jsonb;--> statement-breakpoint
ALTER TABLE "uipath_generation_runs" ADD COLUMN "final_quality_report" jsonb;--> statement-breakpoint
ALTER TABLE "uipath_generation_runs" ADD COLUMN "llm_trace" jsonb;