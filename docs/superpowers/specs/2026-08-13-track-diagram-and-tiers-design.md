# Track Diagram Redesign, Two-Tier Experiences, Kids Karts Teaser

## Context

The site currently shows a generic, non-representative track outline on the About page, three pricing-era experience tiers (Junior Racers / Grand Prix / Pro Circuit) that no longer match the business's real offering, and no mention of the upcoming kids karts. This spec covers redrawing the track diagram to match the real circuit layout, collapsing the tiers down to what the business actually runs today, and adding a "coming soon" teaser for kids karts.

## 1. Track diagram (About page)

`src/pages/About.jsx`, "Track Layout" section (currently lines ~68–94).

- Replace the existing SVG path data with a new path that approximates the real circuit layout shown in the reference photo: a wide outer sweep that funnels into a tight S-shaped chicane through the middle of the circuit, then a hairpin back onto the front straight (roughly a "2"/S-shaped loop rather than the current single rounded blob).
- Keep the current visual treatment: dark radial-gradient background, dotted grid overlay, thick low-opacity red glow path duplicated under a thin sharp neon-red path (`neon-glow-red`), and a dashed gold "racing line" path offset just inside it.
- Reposition the 8 numbered turn markers (circles with turn numbers 1–8) onto the actual corners of the new path.
- Keep the "START/FINISH" concept and telemetry HUD label (`Apex-OS Telemetry v4.2.1 // ACTIVE`) in the bottom corner, unchanged.
- Add a small animated kart marker that continuously travels around the track's centerline path using SVG `<animateMotion>` with `mpath` referencing the (invisible) centerline, looping every ~6–8 seconds. Rendered as a small glowing dot/chevron shape (a few px), not a detailed kart illustration — consistent with the site's minimal neon-telemetry aesthetic.
- No changes to the surrounding copy or stats ("550m professional circuit... 8 demanding turns...", Track Length 550M, Max Speed 65 KM/H) — the new path still has 8 turns so the copy stays accurate.

## 2. Experiences tiers: Level 1 / Level 2

Applies to `src/pages/Experiences.jsx` (`TIERS`, `COMPARISON`) and `src/pages/Home.jsx` (`EXPERIENCES`).

Replace the existing three tiers with two:

| | Level 1 | Level 2 |
|---|---|---|
| Engine | 200cc | 270cc |
| Age | 16+ | 16+ |
| Session duration | 5 minutes | 10 minutes |
| Featured/"Most Popular" | No | Yes |

- Level 2 carries the `featured`/"Most Popular" treatment (gold border, slightly scaled card) since it's the longer, higher-spec option — mirroring how "Grand Prix" was featured before.
- Level 1 keeps the red-accent border treatment previously used for entry-level tiers.
- Drop fields that aren't specified for the new tiers: no "Top Speed", no "Telemetry" level, no HP figure (only cc is known). Feature bullet lists are trimmed to what's actually true (e.g. "200cc kart", "Professional supervision", "Safety gear included") — no fabricated claims like telemetry tiers or qualifying rounds that applied to the old tiers.
- Each tier keeps an `image` field pointing at a placeholder (reuse the current Grand Prix/Pro Circuit stock photos) — a single-line swap once real kart photos are provided. Leave a short inline comment noting these are placeholders pending real photos.
- `COMPARISON` table on the Experiences page drops from 3 to 2 columns (Level 1 / Level 2) and drops rows not applicable to the new data: keep **Age Requirement**, **Session Duration**, **Engine Displacement**; drop **Top Speed** and **Telemetry**.
- Section headings/copy ("Select Your Tier", "Choose Your Adrenaline", etc.) stay as-is — still accurate for a 2-tier lineup.

## 3. Kids Karts — coming soon teaser

Applies to the same two tier grids (Experiences page `TIERS` render, Homepage `EXPERIENCES` render).

- Add a third card in both grids, matching the existing card size/border/hover treatment, but with a distinct "Coming Soon" badge (instead of a "Most Popular" badge) and no stats rows (no age/duration/speed).
- Copy: "Kids Karts" as the title, "Launching September 18, 2026" as the primary line, plus a one-line description (e.g. "Smaller karts built for our youngest racers.").
- No CTA button on this card — it isn't bookable and there's no booking system on the site; it's purely a teaser.
- Placement: this card is the 3rd item in the 3-column grid on both the Experiences page and the Homepage preview, taking the visual slot the old "Junior Racers" tier used to occupy.

## Out of scope

- No changes to Navbar, Footer, hero banner, or CountdownTimer — kids-karts messaging is scoped to the two tier grids only, per explicit choice.
- No real kart photography — placeholder images stay until the user provides real ones.
- No top-speed figures for Level 1/Level 2 — not provided, not fabricated.
