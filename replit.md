# CannonBall

## Overview
CannonBall is a full-stack web application for automation pipeline management. It features a role-based shell with three demo user accounts, dark/light mode toggle, responsive sidebar navigation, a Kanban pipeline board, idea capture workflow, a three-panel workspace with live AI chat, and a visual process map engine powered by React Flow.

## Current State
- App shell complete with authentication, role switching, and navigation
- Pipeline board with 10-stage Kanban view
- Idea capture modal with auto-redirect to workspace
- Three-panel workspace: stage tracker, live process map (React Flow), AI chat interface
- Live AI chat using Anthropic Claude (Replit AI Integrations) with streaming SSE
- Process map engine: custom nodes (start/end pill, task rectangle, decision diamond), auto-layout, inline editing, right-click context menu, edge labels, approval workflow
- Chat parses [STEP:] tags from LLM responses and auto-creates process map nodes
- Process map approval with snapshot recording
- Three demo users and seed ideas on startup

## Architecture
- **Frontend**: React + Vite, Tailwind CSS, shadcn/ui, React Flow (@xyflow/react), wouter routing
- **Backend**: Express.js with session-based auth (express-session + connect-pg-simple)
- **Database**: PostgreSQL (built-in) with Drizzle ORM
- **AI**: Anthropic Claude via Replit AI Integrations (no API key needed)
- **Auth**: Session-based with demo users

## Project Structure
```
client/src/
  App.tsx                 - Main layout shell (sidebar + topnav + router)
  components/
    app-sidebar.tsx       - Left sidebar navigation
    top-nav.tsx           - Top navigation bar with role switcher + New Idea button
    new-idea-modal.tsx    - Modal for creating new ideas
    process-map-panel.tsx - React Flow process map with node editing, context menu, approval
    theme-provider.tsx    - Dark/light mode context
    ui/                   - shadcn/ui components (includes resizable.tsx)
  hooks/
    use-auth.tsx          - Auth context (login, logout, role switching)
  lib/
    step-parser.ts        - Parses [STEP:] tags from LLM responses
  pages/
    login.tsx             - Login page with demo account buttons
    home.tsx              - Pipeline Kanban board (10 stage columns)
    workspace.tsx         - Three-panel workspace (stage tracker + process map + chat)
    ideas.tsx             - My Ideas placeholder
    guide.tsx             - User Guide placeholder
    settings.tsx          - Settings placeholder (admin only)

server/
  index.ts               - Express server setup
  routes.ts              - API routes (auth + ideas + registers sub-routes)
  storage.ts             - Database storage interface (users + ideas)
  process-map-storage.ts - Process map CRUD (nodes, edges, approvals)
  process-map-routes.ts  - Process map API endpoints
  db.ts                  - Drizzle + pg pool
  seed.ts                - Demo user + idea seeding
  replit_integrations/
    chat/
      routes.ts          - Chat streaming with Anthropic Claude SSE
      storage.ts         - Chat message persistence

shared/
  schema.ts              - Drizzle schema + Zod types (re-exports models)
  models/
    chat.ts              - Chat messages table schema
    process-map.ts       - Process nodes, edges, approvals table schemas
```

## Workspace Layout
Three resizable panels (react-resizable-panels):
- **Left (~15%)**: Vertical stage progress tracker - completed (checkmark + timestamp), current (pulsing orange dot), future (lock icon). Clicking completed stage shows read-only summary drawer.
- **Center (~50%)**: Live process map (React Flow) with As-Is/To-Be toggle, custom nodes, inline edit panel, right-click context menu, approval button
- **Right (~35%)**: AI chat interface with streaming, contextual stage guidance, file upload button

## Process Map Features
- **Node Types**: Start/End (teal pill), Task (dark rect with orange left border), Decision (gold diamond)
- **Ghost Nodes**: dashed border + 50% opacity for partially described steps
- **Inline Edit**: Click node → edit name/role/system/type/description, mark as pain point
- **Context Menu**: Right-click canvas → "Add Step Here" creates new node at position
- **Edge Labels**: Click edge to add labels (Yes/No/Approved/Rejected)
- **Approval**: Button appears at >=3 nodes, records approval with user info + snapshot
- **Live Updates**: [STEP:] tags parsed from LLM responses auto-create nodes+edges
- **Animations**: Nodes fade in + scale (300ms), edges animate path (400ms)

## Pipeline Stages
1. Idea → 2. Feasibility Assessment → 3. Validated Backlog → 4. Design → 5. Build → 6. Test → 7. Governance / Security Scan → 8. CoE Approval → 9. Deploy → 10. Maintenance

## Demo Users
| Email | Password | Role |
|-------|----------|------|
| sme@cannonball.demo | CannonBall2026! | Process SME |
| coe@cannonball.demo | CannonBall2026! | CoE |
| admin@cannonball.demo | CannonBall2026! | Admin |

## Seed Ideas
- "Invoice Processing Automation" (stage: Design, owner: sme@cannonball.demo) — shows 3 completed stages
- "Employee Onboarding Workflow" (stage: Feasibility Assessment, owner: sme@cannonball.demo) — shows 1 completed stage

## API Endpoints
### Auth
- `GET /api/auth/me` - Current session
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/switch-role` - Switch active role

### Ideas
- `GET /api/ideas` - List all ideas
- `GET /api/ideas/:id` - Get single idea
- `POST /api/ideas` - Create new idea

### Chat
- `GET /api/ideas/:id/messages` - Get chat history for an idea
- `POST /api/chat` - Send message, streams SSE response with {token, done, error}

### Process Map
- `GET /api/ideas/:id/process-map?view=as-is|to-be` - Get nodes, edges, approval
- `POST /api/ideas/:id/process-nodes` - Create/upsert node (dedupes by name)
- `PATCH /api/process-nodes/:id` - Update node
- `DELETE /api/process-nodes/:id` - Delete node + connected edges
- `POST /api/ideas/:id/process-edges` - Create edge
- `PATCH /api/process-edges/:id` - Update edge label
- `DELETE /api/process-edges/:id` - Delete edge
- `POST /api/ideas/:id/process-approvals` - Create approval (requires >=3 nodes)

## Design System
- Dark mode default (#0a0a0a background)
- Light mode toggle (#f5f5f5 background)
- Primary accent: Orange (#e8450a)
- Secondary: Teal (#008b9b), Gold (#c8940a), Magenta (#d4006a), Purple (#7b1fa2)
- Font: Inter
- Cards: NOT draggable - stage progression is automated
- Sidebar background: #141414 (8% lightness) vs main canvas #0a0a0a (4%)
- Resize handles: glow orange on hover/drag, grip icon appears on hover
- Scrollbars: thin custom styling (scrollbar-thin class)
- Process map nodes: dark surface (#242424), React Flow on #0d0d0d canvas

## Recent Changes
- 2026-02-20: Built live process map engine with React Flow, custom nodes, inline editing, approval workflow
- 2026-02-20: Added AI chat streaming with Anthropic Claude, message persistence, [STEP:] tag parsing
- 2026-02-20: Built three-panel workspace with stage tracker, process map, chat interface
- 2026-02-20: Added Pipeline Kanban board, Idea Capture modal
- 2026-02-20: Initial app shell with auth, role switching, navigation, dark/light mode
