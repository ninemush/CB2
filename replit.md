# CannonBall

## Overview
CannonBall is a full-stack web application for automation pipeline management. It features a role-based shell with three demo user accounts, dark/light mode toggle, responsive sidebar navigation, a Kanban pipeline board, and idea capture workflow.

## Current State
- App shell complete with authentication, role switching, and navigation
- Pipeline board with 10-stage Kanban view
- Idea capture modal with auto-redirect to workspace
- Idea workspace page (placeholder shell)
- Three demo users and two seed ideas on startup

## Architecture
- **Frontend**: React + Vite, Tailwind CSS, shadcn/ui components, wouter routing
- **Backend**: Express.js with session-based auth (express-session + connect-pg-simple)
- **Database**: PostgreSQL (built-in) with Drizzle ORM
- **Auth**: Session-based with demo users

## Project Structure
```
client/src/
  App.tsx                 - Main layout shell (sidebar + topnav + router)
  components/
    app-sidebar.tsx       - Left sidebar navigation
    top-nav.tsx           - Top navigation bar with role switcher + New Idea button
    new-idea-modal.tsx    - Modal for creating new ideas
    theme-provider.tsx    - Dark/light mode context
    ui/                   - shadcn/ui components
  hooks/
    use-auth.tsx          - Auth context (login, logout, role switching)
  pages/
    login.tsx             - Login page with demo account buttons
    home.tsx              - Pipeline Kanban board (10 stage columns)
    workspace.tsx         - Idea workspace (placeholder shell)
    ideas.tsx             - My Ideas placeholder
    guide.tsx             - User Guide placeholder
    settings.tsx          - Settings placeholder (admin only)

server/
  index.ts               - Express server setup
  routes.ts              - API routes (auth + ideas endpoints)
  storage.ts             - Database storage interface (users + ideas)
  db.ts                  - Drizzle + pg pool
  seed.ts                - Demo user + idea seeding

shared/
  schema.ts              - Drizzle schema + Zod types (users, ideas, pipeline stages)
```

## Pipeline Stages
1. Idea → 2. Feasibility Assessment → 3. Validated Backlog → 4. Design → 5. Build → 6. Test → 7. Governance / Security Scan → 8. CoE Approval → 9. Deploy → 10. Maintenance

## Demo Users
| Email | Password | Role |
|-------|----------|------|
| sme@cannonball.demo | CannonBall2026! | Process SME |
| coe@cannonball.demo | CannonBall2026! | CoE |
| admin@cannonball.demo | CannonBall2026! | Admin |

## Seed Ideas
- "Invoice Processing Automation" (stage: Design, owner: sme@cannonball.demo)
- "Employee Onboarding Workflow" (stage: Feasibility Assessment, owner: sme@cannonball.demo)

## API Endpoints
- `GET /api/auth/me` - Current session
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/switch-role` - Switch active role
- `GET /api/ideas` - List all ideas
- `GET /api/ideas/:id` - Get single idea
- `POST /api/ideas` - Create new idea

## Design System
- Dark mode default (#0a0a0a background)
- Light mode toggle (#f5f5f5 background)
- Primary accent: Orange (#e8450a)
- Secondary: Teal (#008b9b), Gold (#c8940a), Magenta (#d4006a), Purple (#7b1fa2)
- Font: Inter

## Recent Changes
- 2026-02-20: Added Pipeline Kanban board, Idea Capture modal, Idea Workspace page
- 2026-02-20: Initial app shell with auth, role switching, navigation, dark/light mode
