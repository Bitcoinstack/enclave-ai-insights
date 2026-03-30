

# Enclave AI — Fhenix Buildathon Submission Package

## What We're Building

A complete submission package for the Fhenix "Private By Design dApp Buildathon" ideation track, consisting of:

1. **4 professional charts/diagrams (PNG)** — visual assets for Akindo submission
2. **Pitch deck (PDF)** — 8-10 slide deck for ideation presentation
3. **GitHub README** — comprehensive project documentation with embedded diagrams
4. **Akindo submission text** — polished copy for each form field

---

## Deliverable 1: Charts & Diagrams (4 PNGs)

Created via Python (reportlab/matplotlib/Pillow), saved to `/mnt/documents/`.

**Chart 1 — Architecture Flow Diagram**
Shows the end-to-end data flow: User → Cofhe SDK encryption → Fhenix on-chain FHE inference → encrypted result → local decryption. Includes Privara payment rail as a parallel flow. Black/white/gray palette matching the site.

**Chart 2 — Fhenix Tool Stack Map**
A layered diagram showing each Fhenix tool and its role:
- Layer 1: React hooks (UI) → useEncrypt, useWrite, useDecrypt
- Layer 2: Cofhe SDK (client encryption)
- Layer 3: Solidity encrypted types (on-chain inference)
- Layer 4: Privara SDK (confidential payments)
- Layer 5: Hardhat plugin (dev/test)

**Chart 3 — Problem → Solution Comparison**
Split diagram: Left side "Today's DeFi" (public data, MEV, no AI privacy) vs Right side "With EnclaveAI" (encrypted data, private inference, confidential payments). Visual before/after.

**Chart 4 — Market Opportunity & Use Cases**
Concentric circles or quadrant showing target use cases: Credit Scoring, Risk Analysis, Strategy Optimization, RWA Compliance — with the $500M MEV problem callout and TAM indicators.

## Deliverable 2: Pitch Deck (PDF, 8-10 pages)

Created via reportlab, black/white/gray design matching the landing page aesthetic.

| Slide | Content |
|-------|---------|
| 1 | Title — "Enclave AI: Private AI Inference Marketplace" + tagline |
| 2 | The Problem — MEV, data exposure, no private AI on-chain |
| 3 | The Solution — One-sentence + high-level architecture diagram |
| 4 | How It Works — 5-step flow with icons |
| 5 | Fhenix Tool Integration — Stack map (Chart 2 reused) |
| 6 | Use Cases — Credit scoring, risk analysis, strategy optimizer |
| 7 | Why Fhenix — FHE is the only chain that can do this |
| 8 | Market Opportunity — $500M MEV problem + new categories |
| 9 | Roadmap — Testnet → Mainnet → Multi-model marketplace |
| 10 | Call to Action — Try demo, links, team |

## Deliverable 3: GitHub README Update

Update `README.md` with:
- Project banner description
- Akindo submission sections (What it does, Problem, Solution, How it works)
- Fhenix tools table with descriptions
- Architecture diagram reference
- Tech stack badges
- Links to live demo, pitch deck
- Screenshots from the landing page

## Deliverable 4: Akindo Submission Text

Polished, compelling copy for each field:

- **What it does** — 2-3 paragraphs on the marketplace concept
- **The problem it solves** — MEV, data privacy, no private AI compute
- **Challenges I ran into** — FHE computation constraints, encrypted type limitations, UX for encryption flows
- **Technologies I used** — Full Fhenix stack enumeration
- **How we built it** — Step-by-step build process with each tool
- **What we learned** — Insights about FHE capabilities and privacy-first design
- **What's next** — Mainnet, more models, DAO governance, RWA compliance

This text will also be written into the README.

## Deliverable 5: Landing Page Screenshot

Take a screenshot of the current Enclave AI landing page to include as a visual in the submission.

---

## Technical Approach

- All charts and the pitch deck will be generated using Python (reportlab, Pillow, matplotlib)
- Monochrome palette: black (#000000), white (#FFFFFF), grays (#333, #666, #999, #CCC, #F5F5F5)
- Font: Helvetica/Arial (clean, professional)
- All artifacts saved to `/mnt/documents/`
- README updated in-repo via code edit
- Akindo text provided in the chat for easy copy-paste

## Output Files

```
/mnt/documents/
├── enclave-ai-architecture-flow.png
├── enclave-ai-tool-stack.png
├── enclave-ai-problem-solution.png
├── enclave-ai-market-opportunity.png
├── enclave-ai-pitch-deck.pdf
├── enclave-ai-screenshot.png
```

Plus updated `README.md` in the project repo.

