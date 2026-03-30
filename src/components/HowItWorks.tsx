const steps = [
  {
    step: "01",
    title: "Connect your wallet",
    description: "Link your Web3 wallet to access the Enclave AI marketplace securely.",
  },
  {
    step: "02",
    title: "Upload & encrypt",
    description: "Your financial data is encrypted on your device using the Cofhe SDK before it ever leaves your browser.",
  },
  {
    step: "03",
    title: "Pick an AI model & pay privately",
    description: "Choose from credit scoring, risk analysis, or strategy optimizer. Pay with confidential stablecoin flows via Privara.",
  },
  {
    step: "04",
    title: "FHE computation on-chain",
    description: "Fhenix smart contracts run inference on your encrypted data. The model never sees your raw numbers.",
  },
  {
    step: "05",
    title: "Decrypt your private results",
    description: "Receive encrypted results and decrypt them locally. View heatmaps, scores, and backtests only you can see.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono-brand text-xs tracking-widest uppercase text-muted-foreground">How it works</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            From upload to insight,<br className="hidden md:block" /> fully private.
          </h2>
        </div>

        <div className="space-y-0 border border-border rounded-xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`flex items-start gap-6 md:gap-10 p-6 md:p-8 hover:bg-secondary/50 transition-colors ${i < steps.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="font-mono-brand text-2xl md:text-3xl font-bold text-muted-foreground/40 shrink-0 w-12">
                {step.step}
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-1 text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
