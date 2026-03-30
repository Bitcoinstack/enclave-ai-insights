const features = [
  {
    tag: "New",
    title: "Encrypted Data Upload",
    description: "Upload your portfolio, credit history, or trading data. Everything is encrypted on your device before it leaves your browser using the Cofhe SDK.",
    cta: "Learn more",
  },
  {
    tag: "AI Models",
    title: "Choose your AI model",
    description: "Pick from credit scoring, risk analysis, or strategy optimizer models. Each runs homomorphic inference — computing on encrypted data without decryption.",
    cta: "Browse models",
  },
  {
    tag: "Privacy",
    title: "Private insights & charts",
    description: "Receive encrypted results and decrypt them locally. See risk heatmaps, score trends, and backtests that only you can view.",
    cta: "See demo",
  },
  {
    tag: "Payments",
    title: "Confidential payments via Privara",
    description: "Pay for AI services with confidential stablecoin flows. Transaction amounts and parties remain private on-chain.",
    cta: "Learn more",
  },
];

const Features = () => {
  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The private AI marketplace for<br className="hidden md:block" /> encrypted financial intelligence.
          </h2>
        </div>

        {/* Feature grid - Dune-style bento */}
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group border border-border rounded-xl p-8 md:p-10 hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <span className="inline-block text-xs font-mono-brand tracking-widest uppercase text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                {feature.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              <span className="font-mono-brand text-sm tracking-wider underline underline-offset-4 group-hover:opacity-70 transition-opacity">
                {feature.cta} →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
