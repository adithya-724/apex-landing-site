# Track Diagram Redesign, Two-Tier Experiences, Kids Karts Teaser Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redraw the About page track diagram to match the real circuit layout with an animated kart marker, collapse the Experiences/Homepage tier data down to Level 1 (200cc) / Level 2 (270cc), and add a "Kids Karts — coming soon" teaser card to both tier grids.

**Architecture:** Three independent, file-scoped edits to existing React components — no new components, no new dependencies, no routing changes. Each task edits one page file end-to-end and is independently deployable.

**Tech Stack:** React 18 + Vite 6 + Tailwind CSS 3, plain SVG (native `<animateMotion>`/`<mpath>`, no animation library), `lucide-react` icons already in use.

## Global Constraints

- Level 1 = 200cc, Level 2 = 270cc. Both: Age 16+.
- Level 1 session duration = 5 minutes. Level 2 session duration = 10 minutes.
- Level 2 carries the "Most Popular"/featured treatment (gold accent). Level 1 uses the red accent.
- No top-speed figures anywhere for Level 1/Level 2 — not provided by the business, do not fabricate.
- Kids Karts teaser copy: "Kids Karts", "Launching September 18, 2026", no CTA button (not bookable).
- Kids Karts card appears only in the Experiences page tier grid and the Homepage tier preview grid — no navbar, footer, hero, or countdown changes.
- No test framework exists in this repo (`package.json` has no test script/deps) — verification is `npm run build` succeeding plus manual `grep` checks for stray old copy, consistent with how this codebase has been verified throughout its history.
- This project has no staging environment — pushing to `main` deploys straight to `apexkarting.in` via `.github/workflows/deploy.yml`. Do not push unless the user asks.

---

### Task 1: Redraw the track SVG in About.jsx with an animated kart marker

**Files:**
- Modify: `src/pages/About.jsx:68-94` (the "Track SVG" block)

**Interfaces:** None — self-contained JSX/SVG inside a single component, no props or exports change.

- [ ] **Step 1: Replace the Track SVG block**

Replace lines 68–94 of `src/pages/About.jsx` (the `{/* Track SVG */}` comment through its closing `</div>`) with:

```jsx
            {/* Track SVG */}
            <div className="lg:col-span-8 relative aspect-video bg-gradient-radial rounded-xl border border-white/10 p-8 flex items-center justify-center overflow-hidden"
              style={{ background: 'radial-gradient(circle at center, #1a1919 0%, #000000 100%)' }}
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}
              />
              <svg className="w-full h-full max-h-[500px]" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="trackPath" d="M100,380 C60,380 40,340 40,280 C40,200 60,140 130,110 C220,70 320,70 380,110 C420,135 400,180 340,200 C280,220 260,260 300,290 C340,320 380,300 400,260 C440,200 520,140 620,140 C700,140 750,180 750,250 C750,330 680,380 580,380 L100,380 Z" stroke="#E11D48" strokeWidth="24" strokeLinecap="round" className="opacity-30" />
                <path d="M100,380 C60,380 40,340 40,280 C40,200 60,140 130,110 C220,70 320,70 380,110 C420,135 400,180 340,200 C280,220 260,260 300,290 C340,320 380,300 400,260 C440,200 520,140 620,140 C700,140 750,180 750,250 C750,330 680,380 580,380 L100,380 Z" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" className="neon-glow-red" />
                <path d="M115,360 C85,360 65,335 65,280 C65,215 85,160 140,130 C215,95 305,95 365,125 C395,145 380,175 335,190 C295,205 280,235 305,260 C330,285 360,270 375,245 C405,205 470,165 610,165 C670,165 715,195 715,250 C715,310 660,360 575,360 L115,360 Z" stroke="#F59E0B" strokeWidth="2" strokeDasharray="8 8" className="racing-line" />
                {[
                  [40, 280], [130, 110], [380, 110], [340, 200],
                  [300, 290], [400, 260], [620, 140], [750, 250],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="14" fill="#F59E0B" />
                    <text x={cx} y={cy + 5} textAnchor="middle" fill="black" fontSize="12" fontFamily="Russo One">
                      {i + 1}
                    </text>
                  </g>
                ))}
                <circle r="7" fill="#F59E0B" className="drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]">
                  <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#trackPath" />
                  </animateMotion>
                </circle>
              </svg>
              <div className="absolute bottom-4 right-4 text-[10px] text-apex-muted font-mono uppercase tracking-widest">
                Apex-OS Telemetry v4.2.1 // ACTIVE
              </div>
            </div>
```

This reshapes the outline into a wide outer sweep with an S-chicane cut through the middle (matching the reference photo's layout), keeps the existing glow/racing-line/turn-marker treatment, and adds a glowing dot that continuously laps the circuit via native SVG `animateMotion`.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds with no errors (SVG is valid JSX — `<mpath href="#trackPath" />` and `<animateMotion>` are standard SVG elements React passes through untouched).

- [ ] **Step 3: Visual check**

Run `npm run dev`, open the About page in a browser, and confirm: the track outline now shows an S-shaped chicane (not the old single loop), 8 numbered markers sit on the new path, and a small glowing dot continuously travels around the outline.

- [ ] **Step 4: Commit**

```bash
git add src/pages/About.jsx
git commit -m "Redraw track diagram to match real circuit layout, add animated kart marker"
```

---

### Task 2: Collapse Experiences page tiers to Level 1 / Level 2 + Kids Karts teaser

**Files:**
- Modify: `src/pages/Experiences.jsx` (imports, `TIERS`, `COMPARISON`, tier grid JSX, comparison table JSX)

**Interfaces:** None — page-local data arrays and JSX, no exports change.

- [ ] **Step 1: Replace the imports and data arrays**

Replace lines 1–53 of `src/pages/Experiences.jsx` (from the `import` statements through the closing `]` of `COMPARISON`) with:

```jsx
import { ChevronRight, Users, Timer, Gauge, Baby } from 'lucide-react'
import { PHONE_NUMBER, PHONE_HREF } from '../constants'

const TIERS = [
  {
    name: 'Level 1',
    tagline: '200cc',
    desc: 'A perfect starting point — full-power karts built for control and confidence on your first laps.',
    age: '16+ years',
    duration: '5 Minute Session',
    cc: '200cc Engine',
    borderColor: 'border-apex-red/50',
    tagColor: 'text-apex-red',
    // Placeholder photo — swap for the real Level 1 kart photo when available.
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0zcK4n62F2TqYofkJgJYF3gX4zpsI_2txIeXimWgBxjj1ohbFQgsdURq3j9SdlNijAytoh6ob2I-bOPwpNu3cT8CRkgjYrFATdIp4zSDfVf7zOXBpkWQJ8U5dgBQ-U-7Z9YJLR2Dous9U6-0ZDsE4MMplB4o38M0HHTZ5HFXnlEkfoexNsDkTkDuOKcfl0P3HwiTn-7TGA2acHnimu61RKmAxIict3q5o19qKBGiRnhRmuU7kWA2ro1IgE7FUFf-I1jMsppYP3_A',
  },
  {
    name: 'Level 2',
    tagline: '270cc',
    desc: 'Our flagship experience — more power, more track time, for racers ready to push harder.',
    age: '16+ years',
    duration: '10 Minute Session',
    cc: '270cc Engine',
    featured: true,
    borderColor: 'border-apex-gold',
    tagColor: 'text-apex-gold',
    // Placeholder photo — swap for the real Level 2 kart photo when available.
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9vaN-XGLlqTPJWLgkr-g66hZptlvt31RPUM8Q5DNZOcsdoqOXwuwNdoaQXn1OkCLpVb3cy6lmGGBD27iClPF-u6UAx_yfbkLc8xZq4xdUPEnv3O3s2UwSt7N0byPWwWYFeXzn5q-X2VVeV_IFp5mYqEp6qtcQVwfODCHYBObn4NXeiLdG33ietIEsqZ7qHE10-29z4FRhaU463NAzPHIVRKK0kQ8WoZOwGYC0UsLScUiTxj0luOA9PWK1-L4Df0zdWBYK3wgey3M',
  },
]

const COMPARISON = [
  { feature: 'Age Requirement', level1: '16+', level2: '16+' },
  { feature: 'Session Duration', level1: '5 min', level2: '10 min' },
  { feature: 'Engine Displacement', level1: '200cc', level2: '270cc' },
]
```

- [ ] **Step 2: Replace the Pricing Tiers grid**

Find the `{/* Pricing Tiers */}` section (the `<section>` containing `TIERS.map`). Replace its inner grid `<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">...</div>` with:

```jsx
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`bg-apex-surface rounded-lg overflow-hidden border-t-4 ${tier.borderColor} hover:bg-apex-surface-light transition-all duration-500 flex flex-col h-full ${
                tier.featured ? 'lg:scale-105 z-10 shadow-[0_0_40px_rgba(245,158,11,0.1)] relative' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-apex-gold text-black font-body text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-full z-10">
                  MOST POPULAR
                </div>
              )}
              <img src={tier.image} alt={`${tier.name} kart`} className="w-full h-40 object-cover" />
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className={`${tier.tagColor} font-body text-[10px] tracking-widest uppercase`}>{tier.tagline}</span>
                  <h3 className={`font-display ${tier.featured ? 'text-4xl' : 'text-3xl'} text-white mt-2 mb-4`}>
                    {tier.name.toUpperCase()}
                  </h3>
                  <p className="text-apex-muted text-sm mb-8">{tier.desc}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-apex-gold" />
                    <span className="font-body text-sm">{tier.age}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Timer className="w-4 h-4 text-apex-gold" />
                    <span className="font-body text-sm">{tier.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gauge className="w-4 h-4 text-apex-gold" />
                    <span className="font-body text-sm">{tier.cc}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 text-center">
                  <span className="text-apex-muted text-xs uppercase tracking-widest font-body">Walk-ins Welcome</span>
                </div>
              </div>
            </div>
          ))}

          {/* Kids Karts - Coming Soon */}
          <div className="bg-apex-surface rounded-lg overflow-hidden border-t-4 border-dashed border-white/20 flex flex-col h-full">
            <div className="p-8 flex flex-col flex-grow items-center text-center justify-center">
              <Baby className="w-10 h-10 text-apex-muted mb-4" />
              <span className="bg-white/10 text-apex-muted font-body text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-full mb-4">
                COMING SOON
              </span>
              <h3 className="font-display text-3xl text-white mb-3">KIDS KARTS</h3>
              <p className="text-apex-gold text-sm font-body uppercase tracking-widest mb-3">Launching September 18, 2026</p>
              <p className="text-apex-muted text-sm">Smaller karts built for our youngest racers.</p>
            </div>
          </div>
        </div>
```

- [ ] **Step 3: Replace the Comparison Table**

Find the `{/* Comparison Table */}` section. Replace the `<table>...</table>` element with:

```jsx
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-apex-border">
                <th className="py-4 pr-8 font-body text-xs uppercase tracking-widest text-apex-muted">Feature</th>
                <th className="py-4 px-4 font-body text-xs uppercase tracking-widest text-apex-red">Level 1</th>
                <th className="py-4 px-4 font-body text-xs uppercase tracking-widest text-apex-gold">Level 2</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-apex-border/30">
                  <td className="py-4 pr-8 text-sm text-apex-muted">{row.feature}</td>
                  <td className="py-4 px-4 text-sm font-bold">{row.level1}</td>
                  <td className="py-4 px-4 text-sm font-bold text-apex-gold">{row.level2}</td>
                </tr>
              ))}
            </tbody>
          </table>
```

- [ ] **Step 4: Verify the build**

Run: `npm run build`
Expected: build succeeds with no errors.

- [ ] **Step 5: Grep for stray old copy**

Run: `grep -n "Junior Racers\|Grand Prix\|Pro Circuit" src/pages/Experiences.jsx`
Expected: no matches (all three old tier names are gone from this file).

- [ ] **Step 6: Visual check**

Run `npm run dev`, open `/experiences`, and confirm: two tier cards (Level 1, Level 2) with photos, Level 2 badged "Most Popular"; a third dashed "Kids Karts — Coming Soon" card; and a 2-column comparison table (Level 1 / Level 2, no Top Speed/Telemetry rows).

- [ ] **Step 7: Commit**

```bash
git add src/pages/Experiences.jsx
git commit -m "Replace Experiences tiers with Level 1/Level 2, add Kids Karts teaser card"
```

---

### Task 3: Mirror Level 1 / Level 2 + Kids Karts teaser on the Homepage tier preview

**Files:**
- Modify: `src/pages/Home.jsx` (`EXPERIENCES` array, tier preview grid JSX)

**Interfaces:** None — page-local data array and JSX, no exports change. Imports are unchanged (`Trophy`, `Baby`, `Flag`, `Flame`, `Timer`, `Gauge` are already imported and all remain in use).

- [ ] **Step 1: Replace the EXPERIENCES array**

Replace lines 8–52 of `src/pages/Home.jsx` (the `const EXPERIENCES = [...]` block) with:

```jsx
const EXPERIENCES = [
  {
    title: 'Level 1',
    tagline: '200cc · Ages 16+',
    desc: 'A perfect starting point — full-power karts built for control and confidence on your first laps.',
    duration: '5 MIN',
    cc: '200CC',
    icon: Flag,
    gradient: 'from-red-500/20 via-red-600/10 to-transparent',
    borderColor: 'border-apex-red/30',
    hoverBorder: 'hover:border-apex-red/60',
    iconBg: 'bg-apex-red/10',
    iconColor: 'text-apex-red',
    accentColor: 'text-apex-red',
  },
  {
    title: 'Level 2',
    tagline: '270cc · Ages 16+',
    desc: 'Our flagship experience — more power, more track time, for racers ready to push harder.',
    duration: '10 MIN',
    cc: '270CC',
    icon: Flame,
    featured: true,
    gradient: 'from-amber-500/20 via-amber-600/10 to-transparent',
    borderColor: 'border-apex-gold/40',
    hoverBorder: 'hover:border-apex-gold/80',
    iconBg: 'bg-apex-gold/10',
    iconColor: 'text-apex-gold',
    accentColor: 'text-apex-gold',
  },
]
```

- [ ] **Step 2: Update the stats row and add the Kids Karts card**

In the `{EXPERIENCES.map((exp) => { ... })}` block, replace the "Stats row" `<div className="flex gap-6">...</div>` with:

```jsx
                    {/* Stats row */}
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Timer className="w-3.5 h-3.5 text-apex-muted" />
                        <span className="text-xs text-apex-muted font-body">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="w-3.5 h-3.5 text-apex-muted" />
                        <span className="text-xs text-apex-muted font-body">{exp.cc}</span>
                      </div>
                    </div>
```

Then, immediately after the closing `})}` of the `EXPERIENCES.map` call (still inside the `<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">` grid, as the 3rd grid item), add:

```jsx
            {/* Kids Karts - Coming Soon */}
            <div className="group relative bg-apex-surface rounded-xl border border-dashed border-white/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 z-10 bg-white/10 text-apex-muted font-bold text-[10px] tracking-widest px-3 py-1 uppercase rounded-full font-body">
                Coming Soon
              </div>
              <div className="relative p-8 pt-10">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Baby className="w-7 h-7 text-apex-muted" />
                </div>
                <div className="mb-4">
                  <h3 className="font-display text-2xl text-white uppercase mb-1">Kids Karts</h3>
                  <span className="text-xs font-body uppercase tracking-widest text-apex-gold">Launching September 18, 2026</span>
                </div>
                <p className="text-apex-muted text-sm font-body leading-relaxed">Smaller karts built for our youngest racers. Stay tuned.</p>
              </div>
            </div>
```

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: build succeeds with no errors.

- [ ] **Step 4: Grep for stray old copy**

Run: `grep -n "Junior Racers\|Grand Prix\|Pro Circuit" src/pages/Home.jsx`
Expected: no matches.

- [ ] **Step 5: Visual check**

Run `npm run dev`, open `/`, scroll to the tier preview section, and confirm: Level 1 and Level 2 cards show duration + cc (not a speed figure), Level 2 is badged "Most Popular", and a third dashed "Kids Karts — Coming Soon" card sits alongside them.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "Mirror Level 1/Level 2 tiers and Kids Karts teaser on homepage preview"
```

---

## Final check (after all 3 tasks)

- [ ] Run `npm run build` once more from a clean state to confirm all three changes build together with no conflicts.
- [ ] Ask the user whether to push to `main` (this triggers the live FTP deploy to apexkarting.in) — do not push without that confirmation.
