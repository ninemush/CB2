CREATE TABLE IF NOT EXISTS uipath_generation_runs (
  id SERIAL PRIMARY KEY,
  run_id TEXT NOT NULL UNIQUE,
  idea_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  generation_mode TEXT,
  triggered_by TEXT NOT NULL DEFAULT 'manual',
  current_phase TEXT,
  phase_progress TEXT,
  outcome_report TEXT,
  dhg_content TEXT,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
  completed_at TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_uipath_gen_runs_active_per_idea
  ON uipath_generation_runs (idea_id)
  WHERE status = 'running' AND completed_at IS NULL;
