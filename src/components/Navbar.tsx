import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Products", hasDropdown: true },
  { label: "Discover", hasDropdown: true },
  { label: "Use Cases", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="font-mono text-lg font-bold tracking-tight text-foreground">
            enclave ai
          </a>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center gap-1"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-mono-brand text-xs tracking-wider uppercase">
            Connect Wallet
          </Button>
          <Button size="sm" className="font-mono-brand text-xs tracking-wider uppercase rounded-full px-6">
            Launch App
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-border space-y-2">
            <Button variant="outline" size="sm" className="w-full font-mono-brand text-xs tracking-wider uppercase">
              Connect Wallet
            </Button>
            <Button size="sm" className="w-full font-mono-brand text-xs tracking-wider uppercase rounded-full">
              Launch App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
