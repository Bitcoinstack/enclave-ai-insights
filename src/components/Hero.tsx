import { Button } from "@/components/ui/button";

const stats = [
  { value: "3+", label: "Chains" },
  { value: "100%", label: "Private" },
  { value: "FHE", label: "Powered" },
  { value: "Zero", label: "Data Leaks" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Announcement bar */}
      <div className="bg-foreground text-background text-center py-2.5 px-4 text-xs font-mono-brand tracking-wider">
        Fully Homomorphic Encryption × On-Chain AI — Now Live on Fhenix Testnet
        <button className="ml-3 underline underline-offset-2 hover:opacity-80 transition-opacity">
          Learn more
        </button>
      </div>

      {/* Hero content */}
      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
          Private AI insights.
          <br />
          Your data stays encrypted.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Upload encrypted financial data and get credit scores, risk analysis, and trading signals — without ever exposing your raw information.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="font-mono-brand text-sm tracking-wider uppercase rounded-full px-10 h-12">
            Launch App
          </Button>
          <Button variant="outline" size="lg" className="font-mono-brand text-sm tracking-wider uppercase rounded-full px-10 h-12 border-foreground/20 hover:border-foreground/40">
            Explore Models
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="border-t border-b border-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 px-6 text-center ${i < 3 ? "border-r border-border" : ""} ${i < 2 ? "max-md:border-b max-md:border-border" : ""} ${i === 2 ? "max-md:border-r-0" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-bold font-mono-brand tracking-tight">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground uppercase tracking-widest font-mono-brand">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="border-b border-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-3 md:grid-cols-6">
          {["Fhenix", "Privara", "Cofhe SDK", "Arbitrum", "Base", "Sepolia"].map((name, i) => (
            <div
              key={name}
              className={`py-6 px-4 flex items-center justify-center text-sm font-mono-brand tracking-wider text-muted-foreground ${i < 5 ? "border-r border-border" : ""} ${i < 3 ? "max-md:border-b max-md:border-border" : ""}`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
