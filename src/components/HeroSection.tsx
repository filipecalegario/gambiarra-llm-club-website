import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import heroImage from "@/assets/hero-gambiarra.jpg";

interface HeroSectionProps {
  onJoinClick: () => void;
}

export const HeroSection = ({ onJoinClick }: HeroSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        
        <div className="flex flex-col gap-4 justify-center items-center">
          <Button 
            onClick={() => window.open("https://www.sympla.com.br/evento/1-encontro-do-gambiarra-llm-club/3200149", "_blank")}
            size="lg" 
            className="bg-gradient-to-r from-neon to-hack hover:from-hack hover:to-neon text-terminal font-bold px-2 md:px-8 py-6 md:py-8 text-base md:text-xl rounded-lg border-2 border-neon shadow-lg hover:shadow-[var(--glow-orange)] transition-all duration-300 transform hover:scale-110 text-center leading-tight animate-pulse"
          >
            <span className="block md:inline">🎟️ INSCRIÇÕES PARA O 1º ENCONTRO</span>
          </Button>
          <Button 
            onClick={onJoinClick}
            size="lg" 
            className="bg-gradient-to-r from-matrix to-code hover:from-code hover:to-matrix text-terminal font-bold px-2 md:px-8 py-4 md:py-6 text-sm md:text-lg rounded-lg border border-matrix shadow-lg hover:shadow-[var(--glow-green)] transition-all duration-300 transform hover:scale-105 text-center leading-tight"
          >
            <span className="block md:inline">TENHO INTERESSE EM PARTICIPAR</span>
          </Button>
          <Button 
            onClick={() => window.open("http://www.cin.ufpe.br/~fcac/manifesto-gambiarra-llm-club.pdf", "_blank")}
            variant="outline" 
            size="lg"
            className="border-2 border-neon text-neon hover:bg-neon hover:text-terminal font-bold px-2 md:px-8 py-4 md:py-6 text-sm md:text-lg rounded-lg shadow-lg hover:shadow-[var(--glow-orange)] transition-all duration-300 text-center leading-tight"
          >
            <span className="block md:inline">LER MANIFESTO 📜</span>
          </Button>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-hack text-hack hover:bg-hack hover:text-terminal font-bold px-2 md:px-8 py-4 md:py-6 text-sm md:text-lg rounded-lg shadow-lg hover:shadow-[var(--glow-purple)] transition-all duration-300 text-center leading-tight"
            >
              <span className="block md:inline">QUERO PATROCINAR O 1º ENCONTRO 💰</span>
            </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold text-foreground">
                  Patrocínio do 1º Encontro
                </DialogTitle>
                <DialogDescription className="text-center text-muted-foreground mt-4">
                  Para patrocinar o primeiro encontro do Gambiarra LLM Club, envie um e-mail para:
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center space-y-4 py-4">
                <div className="bg-terminal border border-matrix/30 rounded-lg p-4 w-full">
                  <p className="text-center font-mono text-matrix font-bold text-lg">
                    calegario@cin.ufpe.br
                  </p>
                </div>
                <Button 
                  onClick={() => {
                    navigator.clipboard.writeText("calegario@cin.ufpe.br");
                    setIsModalOpen(false);
                  }}
                  className="bg-gradient-to-r from-matrix to-code hover:from-code hover:to-matrix text-terminal font-bold"
                >
                  Copiar E-mail
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="mt-12 text-muted-foreground">
          <p className="text-sm mb-2">👾 Encontros mensais • 🔧 Experimentação com LLMs locais • 🏆 Competições épicas</p>
          <p className="text-xs">
            <span className="text-matrix">▸</span> Sábado, 8 de novembro de 2025, das 9h às 12h
          </p>
          <p className="text-xs">
            <span className="text-matrix">▸</span> Sala Pontes, Porto Digital, Cais do Apolo, 222, Bairro do Recife
          </p>
        </div>
      </div>
    </section>
  );
};