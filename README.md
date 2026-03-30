# Enclave AI — Private AI Inference Marketplace

> A fully on-chain marketplace where users upload encrypted financial data and AI model owners run homomorphic inference to deliver private insights — without ever decrypting the data.

**Live Demo:** [enclave-ai-insights.lovable.app](https://enclave-ai-insights.lovable.app)

Built for the **Fhenix "Private By Design" Buildathon** — Ideation Track.

---

## What It Does

Enclave AI is the first decentralized, private AI compute layer. Users encrypt their financial data (portfolios, credit history, trading history) on their device using the Cofhe SDK. The encrypted data is sent to Fhenix smart contracts, which run homomorphic inference using AI models — computing directly on encrypted data without ever decrypting it.

The marketplace connects data owners with AI model providers. Users pick from credit scoring, risk analysis, or strategy optimizer models, pay confidentially via Privara stablecoin flows, and receive encrypted results that only they can decrypt locally. The result: private credit scores, risk heatmaps, trading signals, and backtests that no one else — not even the model owner — can see.

This unlocks an entirely new category: **Confidential DeFi Intelligence**.

---

## The Problem It Solves

| Problem | Impact |
|---------|--------|
| **$500M+ lost to MEV annually** | Front-running and sandwich attacks exploit public transaction data |
| **AI needs data, users won't share** | Models require private datasets but on-chain data is fully visible |
| **No private credit scoring** | DeFi lending stays primitive because scoring can't happen privately |
| **Institutions stay off-chain** | Compliance requirements prevent using transparent blockchains |

**Result:** Billions in value remain stuck off-chain because privacy doesn't exist on current chains.

---

## How It Works

```
1. CONNECT WALLET → Link your Web3 wallet to access the marketplace
2. UPLOAD & ENCRYPT → Data encrypted on your device using Cofhe SDK
3. PICK MODEL & PAY → Choose AI model, pay confidentially via Privara
4. FHE COMPUTATION → Fhenix contract runs inference on encrypted data
5. DECRYPT RESULTS → Receive encrypted output, decrypt locally
```

**All data remains encrypted throughout the entire pipeline.**

### Architecture Flow

```
USER DEVICE → COFHE SDK ENCRYPTION → FHENIX FHE CONTRACT → ENCRYPTED RESULT → LOCAL DECRYPTION
                                           ↕
                                   PRIVARA SDK (Confidential Payments)
```

---

## Fhenix Tool Integration

| Tool | Function in Enclave AI |
|------|----------------------|
| **Solidity Encrypted Types Library** | Core inference engine + credit scoring logic on encrypted state |
| **Cofhe SDK** | Client-side encryption of user data, model weights, and inference results |
| **React Hooks** (`useEncrypt`, `useWrite`, `useDecrypt`) | Dashboard UI, encrypted file upload, live private charts |
| **Hardhat Plugin** | Local development & testing without testnet dependency |
| **Privara SDK** | Confidential payment rails for pay-per-inference in stablecoins |
| **Dev Automation Toolkit** (reineira-code) | AI-assisted contract generation + rapid prototyping |
| **Startup-in-a-Box Blueprints** | Structured venture-ready templates for the marketplace |

---

## Where FHE Is Used

FHE (Fully Homomorphic Encryption) is the **core** of Enclave AI:

- **On-chain inference:** Solidity encrypted types enable smart contracts to run AI logic directly on encrypted data
- **Client-side encryption:** Cofhe SDK encrypts user data and model weights before they leave the browser
- **Result privacy:** Outputs are returned encrypted — only the user can decrypt locally
- **Payment privacy:** Privara handles confidential stablecoin flows so no one sees who paid whom

**This is only possible on Fhenix — no other chain can compute on encrypted data on-chain.**

---

## Use Cases

- **Credit Scoring** — Private credit scores for DeFi lending. Borrowers prove creditworthiness without exposing financial history.
- **Risk Analysis** — Portfolio risk heatmaps and assessments. Traders get insights without revealing positions.
- **Strategy Optimizer** — AI-powered trading signals from encrypted history. Backtests only the user can see.
- **RWA Compliance** — Private asset verification for institutions. Compliant on-chain analytics without data exposure.

---

## Challenges I Ran Into

- **FHE computation constraints:** Homomorphic operations are computationally expensive. Designing efficient inference logic within gas limits required careful model architecture decisions.
- **Encrypted type limitations:** Working with Fhenix's Solidity encrypted types means rethinking traditional ML operations to work within the supported arithmetic operations.
- **UX for encryption flows:** Making client-side encryption seamless for non-technical users while maintaining security guarantees was a core design challenge.
- **Balancing privacy and usability:** Ensuring users understand what's encrypted vs. what's visible, without overwhelming them with cryptographic complexity.

---

## Technologies I Used

- **Fhenix** — FHE-enabled blockchain for encrypted on-chain computation
- **Cofhe SDK** — Client-side data and model encryption
- **Solidity Encrypted Types** — On-chain inference engine
- **Privara SDK** — Confidential stablecoin payment flows
- **React + TypeScript** — Frontend dashboard and UI
- **Fhenix React Hooks** — `useEncrypt`, `useWrite`, `useDecrypt`
- **Hardhat Plugin** — Local development and testing
- **Vite + Tailwind CSS** — Build tooling and styling
- **reineira-code** — AI-assisted contract generation

---

## How We Built It

1. **Research & Architecture:** Mapped the FHE inference pipeline — identifying where encryption, computation, and decryption happen.
2. **Smart Contract Design:** Built Solidity contracts using Fhenix's encrypted types library for credit scoring and risk analysis inference.
3. **Client-Side SDK Integration:** Integrated Cofhe SDK for browser-based encryption of user data and model weights.
4. **Dashboard & UI:** Built a React dashboard with Fhenix hooks for encrypted uploads, model selection, and private result visualization.
5. **Payment Integration:** Connected Privara SDK for confidential pay-per-inference stablecoin flows.
6. **Testing:** Used Hardhat plugin for fast local iteration without testnet dependency.
7. **Landing Page:** Designed and built a production-quality landing page showcasing the concept.

---

## What We Learned

- **FHE is production-ready for specific use cases.** The Fhenix toolchain makes it genuinely practical to build privacy-first applications.
- **Privacy unlocks new categories.** Confidential DeFi Intelligence doesn't exist today — FHE makes it possible.
- **The $500M MEV problem is solvable.** When positions are encrypted, front-running becomes impossible by design.
- **UX is the real challenge.** The cryptography works; making it invisible to users is where the engineering challenge lives.
- **Fhenix's developer tools are comprehensive.** From SDK to hooks to plugins, the stack covers the full build lifecycle.

---

## What's Next for Enclave AI

| Phase | Timeline | Milestone |
|-------|----------|-----------|
| **Phase 1** | Now | Ideation & prototype on Fhenix testnet |
| **Phase 2** | Q3 2026 | Beta marketplace with 3 AI models |
| **Phase 3** | Q4 2026 | Mainnet launch + open model marketplace |
| **Phase 4** | 2027 | Multi-chain expansion, DAO governance, RWA compliance |

**Future categories:** Private gaming stats, DAO governance signals, cross-chain encrypted analytics.

---

## Testnets

- Fhenix Sepolia
- Arbitrum Sepolia
- Base Sepolia

---

## Links

- **Live Demo:** [enclave-ai-insights.lovable.app](https://enclave-ai-insights.lovable.app)
- **Buildathon:** [Fhenix Private By Design dApp Buildathon](https://app.akindo.io/wave-hacks/Nm2qjzEBgCqJD90W)

---

*Original idea. Built from scratch for the Fhenix Buildathon. Open to feedback and ready to improve.*
