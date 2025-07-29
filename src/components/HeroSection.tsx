import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gambiarra.jpg";

interface HeroSectionProps {
  onJoinClick: () => void;
}

export const HeroSection = ({ onJoinClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-terminal/90 via-terminal/60 to-transparent"></div>
      </div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-rain"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-gradient-to-r from-matrix to-neon bg-clip-text animate-pulse">
            GAMBIARRA
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-code">
            LLM CLUB
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            O primeiro clube de <span className="text-matrix font-semibold">LLMs caseiras</span> do Brasil. 
            Traga seus LLMs locais, faça suas gambiarras e vamos nos divertir!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onJoinClick}
            size="lg" 
            className="bg-gradient-to-r from-matrix to-code hover:from-code hover:to-matrix text-terminal font-bold px-8 py-6 text-lg rounded-lg border border-matrix shadow-lg hover:shadow-[var(--glow-green)] transition-all duration-300 transform hover:scale-105"
          >
            TENHO INTERESSE EM PARTICIPAR
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-neon text-neon hover:bg-neon hover:text-terminal font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-[var(--glow-orange)] transition-all duration-300"
          >
            SAIBA MAIS
          </Button>
        </div>
        
        <div className="mt-12 text-muted-foreground">
          <p className="text-sm mb-2">👾 Encontros mensais • 🔧 Hardware próprio • 🏆 Competições épicas</p>
          <p className="text-xs">
            <span className="text-matrix">▸</span> Em breve: primeiro encontro oficial em Recife.
          </p>
        </div>
      </div>
    </section>
  );
};