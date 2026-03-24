CREATE TABLE "ideas" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"owner" text NOT NULL,
	"owner_email" text NOT NULL,
	"stage" text DEFAULT 'Idea' NOT NULL,
	"tag" text,
	"automation_type" text,
	"automation_type_rationale" text,
	"feasibility_complexity" text,
	"feasibility_effort_estimate" text,
	"agent_config" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"display_name" text NOT NULL,
	"role" text DEFAULT 'Process SME' NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "chat_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"idea_id" varchar NOT NULL,
	"role" text NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "process_approvals" (
	"id" serial PRIMARY KEY NOT NULL,
	"idea_id" varchar NOT NULL,
	"view_type" text DEFAULT 'as-is' NOT NULL,
	"version" integer DEFAULT 1 NOT NULL,
	"user_id" varchar NOT NULL,
	"user_role" text NOT NULL,
	"user_name" text NOT NULL,
	"snapshot_json" text NOT NULL,
	"invalidated" boolean DEFAULT false NOT NULL,
	"invalidated_reason" text,
	"approved_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "process_edges" (
	"id" serial PRIMARY KEY NOT NULL,
	"idea_id" varchar NOT NULL,
	"view_type" text DEFAULT 'as-is' NOT NULL,
	"source_node_id" integer NOT NULL,
	"target_node_id" integer NOT NULL,
	"label" text DEFAULT '' NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "process_nodes" (
	"id" serial PRIMARY KEY NOT NULL,
	"idea_id" varchar NOT NULL,
	"view_type" text DEFAULT 'as-is' NOT NULL,
	"name" text NOT NULL,
	"role" text DEFAULT '' NOT NULL,
	"system" text DEFAULT '' NOT NULL,
	"node_type" text DEFAULT 'task' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"is_pain_point" boolean DEFAULT false NOT NULL,
	"is_ghost" boolean DEFAULT false NOT NULL,
	"position_x" real DEFAULT 0 NOT NULL,
	"position_y" real DEFAULT 0 NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "document_approvals" (
	"id" serial PRIMARY KEY NOT NULL,
	"document_id" integer NOT NULL,
	"idea_id" varchar NOT NULL,
	"doc_type" text NOT NULL,
	"user_id" varchar NOT NULL,
	"user_role" text NOT NULL,
	"user_name" text NOT NULL,
	"approved_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"idea_id" varchar NOT NULL,
	"type" text NOT NULL,
	"version" integer DEFAULT 1 NOT NULL,
	"status" text DEFAULT 'draft' NOT NULL,
	"content" text NOT NULL,
	"snapshot_json" text DEFAULT '{}' NOT NULL,
	"artifacts_valid" boolean,
	"artifact_warnings" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "audit_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"idea_id" varchar,
	"user_id" varchar,
	"user_name" text,
	"user_role" text,
	"action" text NOT NULL,
	"from_stage" text,
	"to_stage" text,
	"details" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "app_settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" text NOT NULL,
	"value" text NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "app_settings_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE "uipath_connections" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"org_name" text NOT NULL,
	"tenant_name" text NOT NULL,
	"client_id" text NOT NULL,
	"client_secret" text NOT NULL,
	"scopes" text DEFAULT 'OR.Default OR.Administration' NOT NULL,
	"folder_id" text,
	"folder_name" text,
	"automation_hub_token" text,
	"communications_mining_token" text,
	"is_active" boolean DEFAULT false NOT NULL,
	"last_tested_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "action_tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"orchestrator_task_id" text,
	"idea_id" text,
	"status" text DEFAULT 'pending',
	"routing" text,
	"ai_resolved" boolean DEFAULT false,
	"resolution_reasoning" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"resolved_at" timestamp,
	CONSTRAINT "action_tasks_orchestrator_task_id_unique" UNIQUE("orchestrator_task_id")
);
--> statement-breakpoint
CREATE TABLE "deployment_manifests" (
	"id" serial PRIMARY KEY NOT NULL,
	"idea_id" text NOT NULL,
	"artifact_type" text NOT NULL,
	"artifact_name" text NOT NULL,
	"orchestrator_id" text,
	"deployed_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pipeline_jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"idea_id" text NOT NULL,
	"job_id" text NOT NULL,
	"status" text DEFAULT 'running' NOT NULL,
	"current_stage" integer DEFAULT 1,
	"failed_stage" text,
	"intent" text,
	"agent_name" text,
	"process_link" text,
	"error_message" text,
	"stages" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "pipeline_jobs_job_id_unique" UNIQUE("job_id")
);
--> statement-breakpoint
CREATE TABLE "provisioning_log" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_id" text NOT NULL,
	"process_name" text,
	"decision" text,
	"robots_delta" integer,
	"reasoning" text,
	"confidence" real,
	"executed_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "test_results" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_id" text NOT NULL,
	"test_set_id" text,
	"passed" integer DEFAULT 0,
	"failed" integer DEFAULT 0,
	"report_markdown" text,
	"ai_decision" text,
	"ai_reasoning" text,
	"executed_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "uipath_generation_runs" (
	"id" serial PRIMARY KEY NOT NULL,
	"idea_id" text NOT NULL,
	"run_id" text NOT NULL,
	"status" text DEFAULT 'spec_generating' NOT NULL,
	"generation_mode" text DEFAULT 'full_implementation' NOT NULL,
	"current_phase" text,
	"phase_progress" text,
	"spec_snapshot" jsonb,
	"outcome_report" text,
	"stage_log" jsonb,
	"dhg_content" text,
	"error_message" text,
	"triggered_by" text DEFAULT 'manual' NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"completed_at" timestamp,
	CONSTRAINT "uipath_generation_runs_run_id_unique" UNIQUE("run_id")
);
--> statement-breakpoint
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_idea_id_ideas_id_fk" FOREIGN KEY ("idea_id") REFERENCES "public"."ideas"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "process_approvals" ADD CONSTRAINT "process_approvals_idea_id_ideas_id_fk" FOREIGN KEY ("idea_id") REFERENCES "public"."ideas"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "process_edges" ADD CONSTRAINT "process_edges_idea_id_ideas_id_fk" FOREIGN KEY ("idea_id") REFERENCES "public"."ideas"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "process_nodes" ADD CONSTRAINT "process_nodes_idea_id_ideas_id_fk" FOREIGN KEY ("idea_id") REFERENCES "public"."ideas"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "document_approvals" ADD CONSTRAINT "document_approvals_idea_id_ideas_id_fk" FOREIGN KEY ("idea_id") REFERENCES "public"."ideas"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "documents" ADD CONSTRAINT "documents_idea_id_ideas_id_fk" FOREIGN KEY ("idea_id") REFERENCES "public"."ideas"("id") ON DELETE cascade ON UPDATE no action;