# KavyaVerse — Progress & Next Steps

_Last updated: 2026-07-13_

## What this is

KavyaVerse is a gamified, open-world 3D portfolio for Kavya Joshi, built with Next.js + React Three Fiber, living at `kavyaverse-src/` alongside the existing static resume site (`index.html` at the repo root, untouched). It replaces a traditional scrolling resume with one continuous 3D world split into 10 themed zones that the visitor walks/drives a robot character through.

## Status: first full pass complete and deployed

- Committed and pushed to `main` (commit `e0a6abf`).
- `.github/workflows/deploy-kavyaverse.yml` builds the Next.js static export and publishes it to `https://kavyajoshi1.github.io/kavyaverse/` on every push to `main` that touches `kavyaverse-src/**`. Root site is untouched (`keep_files: true`), and got one new "🎮 Enter KavyaVerse" button linking to it.
- Verified locally: `tsc --noEmit` and `eslint` clean, `npm run build` (static export) succeeds with correct `/kavyaverse` basePath baked into asset URLs, and the app was driven end-to-end in a real headless browser (movement, camera follow, jump, and interaction panels all confirmed working via screenshots).
- Two real bugs were found and fixed during testing:
  1. Interactables (trophies, buildings, machines, screens) were registering their **local**, zone-relative coordinates as if they were world coordinates, breaking proximity detection everywhere except Home Base. Fixed with a `ZoneOffsetContext` that entities read to convert local → world position before registering.
  2. A 180° sign error converting movement direction to a facing angle (`atan2(x,z)` instead of `atan2(-x,-z)`) made the character/camera face backwards once the player moved, which visually looked like the whole scene had flipped upside-down.

## What's built

### Core engine
- `PlayerController` — Rapier dynamic rigid body + capsule collider, WASD movement relative to camera yaw, Space to jump (sensor-based ground check), Shift to sprint, synthesized footstep/jump SFX.
- `FollowCamera` — smooth third-person follow, mouse-drag to orbit (desktop), auto-yaw-follow toward movement heading when not dragging (works as the "camera" on mobile too).
- `World` — single continuous ground plane + all 10 zone groups placed radially around Home Base.
- Data-driven interaction system (`useRegisterInteractable`, `useInteraction`, `zoneOffsetContext`) — any prop can register itself as an interactable with a world position and a `PanelContent`; a single proximity check finds the nearest one and surfaces an "E to interact" prompt.

### Content (all real, pulled from `index.html` — nothing invented)
- `src/data/`: `profile.ts`, `projects.ts` (19 projects), `achievements.ts` (14), `certifications.ts` (10), `skills.ts`, `timeline.ts`, `contact.ts`.
- 10 zones, each reading from that data: Home Base, AI Research Lab, CoastScan Beach, Blockchain District, Hackathon Arena, Skills Factory, Career Timeline, Project District, Innovation Center, Contact Center.
- Reusable low-poly prop kit (`src/game/entities/`): RobotCharacter, Trophy, Building, Machine, Hologram, Screen, Tree, WaterPlane, NeonPillar, ZonePlatform, EasterEgg — all procedural (no external `.glb` models, since there's no modeling pipeline/assets for this project).

### UI
- Cinematic AI-boot `LoadingScreen`, `HUD` (controls hint + mute toggle), `InteractionPrompt`, glassmorphic `Panel` + per-content-type panels (Project/Achievement/Skill/Timeline/Certification/Home/Contact/Innovation), `MobileControls` (virtual joystick + jump/interact/sprint buttons).

## Known limitations / deliberate scope trims

These were explicit trade-offs to ship a working, walkable, all-10-zones experience in one pass (agreed as "wide-then-deep" staging):

- **Fidelity is uniform, not deep.** Every zone uses the same primitive-based prop kit at similar polish level — no zone has had a dedicated art/animation pass yet.
- **No day/night cycle.** One cohesive night/neon aesthetic across the whole world instead of the "warm day + neon night" split described in the original brief.
- **Sound is synthesized, not authored.** Web Audio oscillator blips for jump/interact/footstep/confetti — no licensed/recorded SFX or music, since none were available to source.
- **One easter egg**, not several, kept intentionally minimal.
- **No minimap or wayfinding UI** beyond zone name signage and the ambient ring markers.
- **Performance headroom untested on real low-end/mobile hardware** — only verified functionally correct in a headless, GPU-less sandbox (which is very slow: physics WASM init and frame pacing were both much slower than a real browser will be, but that's a test-environment artifact, not an app issue).

## Suggested next steps

Roughly in priority order:

1. **Deeper polish pass on 2–3 flagship zones** (Home Base, Hackathon Arena, Skills Factory are good candidates) — richer geometry, more ambient animation, better lighting accents.
2. **Real device testing** — phone/tablet touch controls, frame rate on mid-range hardware, and a "reduced effects" quality tier if needed (drop Bloom/shadows on low-end devices).
3. **Accessibility pass** — keyboard-only navigation for panels (tab order, focus trapping), captions/text alternative for the fully-3D experience, verify `prefers-reduced-motion` is honored everywhere (currently only the loading screen respects it).
4. **Content additions** — new projects/achievements only require editing `src/data/*.ts`; no rendering code changes needed.
5. **Day/night or seasonal lighting variation**, if the flat night aesthetic feels monotonous after playtesting.
6. **Analytics/engagement signal** (optional) — e.g. track which zones/panels get opened most, useful for a recruiter-facing portfolio.
7. **Authored audio** — replace synthesized SFX with a short ambient loop and better-produced interaction sounds, if/when audio assets become available.
8. **Visual regression / smoke test script** — formalize the Playwright script used during this build into a checked-in test (`npm run test:e2e`) so future changes can be verified without manual re-testing.

## Where to look

- Entry point: `src/app/page.tsx` → `src/game/Game.tsx`
- Zone registry (positions, theme colors): `src/lib/constants.ts`
- Add/edit content: `src/data/*.ts`
- Deploy workflow: `.github/workflows/deploy-kavyaverse.yml` (repo root)
