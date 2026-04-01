import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "O Clube", href: "#clube" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Competições", href: "#competicoes" },
    { label: "Encontros", href: "#encontros" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-amber/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-amber text-lg tracking-wide glitch-hover"
          >
            GAMBIARRA
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-amber transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() =>
                window.open(
                  "https://www.sympla.com.br/evento/4-encontro-do-gambiarra-llm-club/3371195",
                  "_blank"
                )
              }
              size="sm"
              className="bg-amber hover:bg-amber/90 text-background font-mono text-xs font-bold tracking-wider px-4"
            >
              4º ENCONTRO
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-amber transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-amber transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-amber transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-amber/10 ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left font-mono text-sm tracking-widest uppercase text-muted-foreground hover:text-amber transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => {
              window.open(
                "https://www.sympla.com.br/evento/3-encontro-do-gambiarra-llm-club/3331154",
                "_blank"
              );
              setMobileOpen(false);
            }}
            className="w-full bg-amber hover:bg-amber/90 text-background font-mono text-xs font-bold tracking-wider"
          >
            3º ENCONTRO
          </Button>
        </div>
      </div>
    </nav>
  );
};
