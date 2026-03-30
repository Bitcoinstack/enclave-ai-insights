const networks = [
  { name: "Fhenix Nitrogen (Sepolia)", status: "Live" },
  { name: "Arbitrum Sepolia", status: "Live" },
  { name: "Base Sepolia", status: "Coming Soon" },
];

const NetworkSection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono-brand text-xs tracking-widest uppercase text-muted-foreground">Networks</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Deployed on Fhenix testnets
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Enclave AI runs on fully homomorphic encryption powered chains. Choose your preferred network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {networks.map((net) => (
            <div
              key={net.name}
              className="border border-border rounded-xl p-6 text-center hover:bg-secondary/50 transition-colors"
            >
              <div className="font-mono-brand text-xs tracking-widest uppercase text-muted-foreground mb-3">
                {net.status === "Live" ? (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                    {net.status}
                  </span>
                ) : (
                  net.status
                )}
              </div>
              <h3 className="font-bold tracking-tight">{net.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
