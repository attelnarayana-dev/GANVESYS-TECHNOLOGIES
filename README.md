# GANVESYS TECHNOLOGIES V5.3 — Projects & Case Studies Experience

V5.3 extends V5.2 with a premium project / engineering portfolio layer.

## New in V5.3
- Projects / portfolio page at `/projects`
- Detailed project views at `/projects/[slug]`
- SMARTGATE presented explicitly as an internal product simulation
- Representative capability projects for enterprise operations, QA automation and AI workflow automation
- Interactive project system visuals with orbit/network styling
- Project lifecycle timeline and engineering principles
- Homepage selected-projects preview
- Navigation and footer now include Projects
- Mobile responsive layouts and reduced-motion support

## Honesty / positioning
SMARTGATE is an internal professional simulation/product exercise. The other portfolio entries are representative capability concepts. They are not presented as fabricated client case studies, customer logos, awards, revenue figures or unsupported outcomes.

## Run
```bash
npm install
cp .env.example .env
# Set DATABASE_URL and AUTH_SECRET
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

Open http://localhost:3000
Projects: http://localhost:3000/projects
SMARTGATE: http://localhost:3000/projects/smartgate
Admin: http://localhost:3000/admin

## Production hardening
Before public launch, add/verify rate limiting, CSRF strategy, MFA/password reset, strict server-side RBAC on every admin mutation, HTTPS, managed secrets, backups and monitoring.
