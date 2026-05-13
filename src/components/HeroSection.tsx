import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gambiarra.jpg";
import gambiarraLogo from "@/assets/gambiarra-logo.png";

interface HeroSectionProps {
  onJoinClick: () => void;
}

const marqueeText =
  "A CRIATIVIDADE É NOSSO BENCHMARK /// GAMBIARRA É UMA ARTE /// CADA PROMPT É UM EXPERIMENTO /// FAZEMOS MILAGRE COM POUCA VRAM /// RODAR LOCAL, PENSAR DIFERENTE /// ";

export const HeroSection = ({ onJoinClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with warm overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Logo */}
        <div className="mb-6 animate-float">
          <img
            src={gambiarraLogo}
            alt="Gambiarra LLM Club"
            className="w-full max-w-2xl mx-auto"
          />
        </div>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-foreground/70 mb-10 max-w-xl mx-auto leading-relaxed">
          O primeiro clube de{" "}
          <span className="text-amber font-semibold">LLMs caseiras</span> do
          Brasil. Aprenda a rodar IAs localmente e coloque-as para competir!
        </p>

        {/* Primary CTA */}
        <Button
          onClick={() =>
            window.open(
              "https://www.sympla.com.br/evento/5-encontro-do-gambiarra-llm-club/3421644",
              "_blank"
            )
          }
          size="lg"
          className="pulse-glow bg-amber hover:bg-amber/90 text-background font-display text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-sm tracking-wide transition-all duration-300 hover:scale-105"
        >
          INSCRIÇÕES 5º ENCONTRO
        </Button>

        {/* Date & Location */}
        <div className="mt-8 space-y-1">
          <p className="font-mono text-xs md:text-sm text-muted-foreground">
            <span className="text-terminal">&gt;</span> Sábado, 23 de maio de
            2026, 9h às 12h
          </p>
          <p className="font-mono text-xs md:text-sm text-muted-foreground">
            <span className="text-terminal">&gt;</span> Sala Pontes, Porto
            Digital, Cais do Apolo, 222, Recife
          </p>
        </div>

        {/* Secondary links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={() =>
              document
                .querySelector("#manifesto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-mono text-xs text-muted-foreground hover:text-amber transition-colors underline underline-offset-4 decoration-amber/30 hover:decoration-amber"
          >
            ler manifesto
          </button>
          <span className="text-muted-foreground/30 text-xs">//</span>
          <button
            onClick={() =>
              document
                .querySelector("#encontros")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-mono text-xs text-muted-foreground hover:text-amber transition-colors underline underline-offset-4 decoration-amber/30 hover:decoration-amber"
          >
            encontros anteriores
          </button>
          <span className="text-muted-foreground/30 text-xs">//</span>
          <button
            onClick={() =>
              document
                .querySelector("#patrocinio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-mono text-xs text-muted-foreground hover:text-amber transition-colors underline underline-offset-4 decoration-amber/30 hover:decoration-amber"
          >
            patrocinar
          </button>
        </div>
      </div>

      {/* Marquee Ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-amber/10 bg-background/60 backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee-track">
          <span className="font-mono text-[10px] tracking-[0.3em] text-amber/40 whitespace-nowrap px-4">
            {marqueeText}
            {marqueeText}
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-amber/40 whitespace-nowrap px-4">
            {marqueeText}
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
};
