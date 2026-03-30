const footerLinks = [
  {
    title: "Product",
    links: ["Dashboard", "AI Models", "Pricing", "Documentation"],
  },
  {
    title: "Developers",
    links: ["API Reference", "Smart Contracts", "Cofhe SDK", "GitHub"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-mono text-lg font-bold tracking-tight text-foreground">
              enclave ai
            </a>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Private AI insights on encrypted financial data. Powered by FHE.
            </p>
          </div>
          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono-brand text-xs tracking-widest uppercase text-muted-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground font-mono-brand">
            © 2026 Enclave AI. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Twitter", "Discord", "GitHub"].map((social) => (
              <a key={social} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono-brand tracking-wider">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
