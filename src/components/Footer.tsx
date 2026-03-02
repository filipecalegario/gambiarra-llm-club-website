import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface FooterProps {
  onJoinClick: () => void;
}

export const Footer = ({ onJoinClick }: FooterProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="bg-terminal border-t border-matrix/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* CTA Principal */}
        <div className="text-center mb-12 bg-gradient-to-r from-card/50 to-muted/20 p-8 rounded-lg border border-matrix/30 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-matrix to-neon bg-clip-text">
            PRONTO PARA A GAMBIARRA?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se à revolução dos LLMs caseiras. Traga suas ideias malucas e vamos fazer história!
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            {/* <Button 
              onClick={onJoinClick}
              size="lg" 
              className="bg-gradient-to-r from-matrix to-code hover:from-code hover:to-matrix text-terminal font-bold px-2 md:px-8 py-4 md:py-6 text-sm md:text-lg rounded-lg border border-matrix shadow-lg hover:shadow-[var(--glow-green)] transition-all duration-300 transform hover:scale-105 text-center leading-tight"
            >
              <span className="block md:inline">TENHO INTERESSE EM PARTICIPAR 🚀</span>
            </Button> */}
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
                  <span className="block md:inline">QUERO PATROCINAR O CLUBE 💰</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold text-foreground">
                   Patrocínio do 3º Encontro
                 </DialogTitle>
                 <DialogDescription className="text-center text-muted-foreground mt-4">
                   Para patrocinar o terceiro encontro do Gambiarra LLM Club, envie um e-mail para:
                </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center space-y-4 py-4">
                  <div className="bg-terminal border border-matrix/30 rounded-lg p-4 w-full">
                    <p className="text-center font-mono text-matrix font-bold text-lg">calegario@cin.ufpe.br</p>
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
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <span className="text-matrix mr-2">🤖</span>
              Contato
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>📧 Em breve: canal oficial</p>
              <p>💬 Discord em preparação</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <span className="text-neon mr-2">⚡</span>
              Requisitos
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>💻 Qualquer hardware</p>
              <p>🧠 Curiosidade infinita</p>
              <p>🔧 Espírito gambiarra</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <span className="text-hack mr-2">🎯</span>
              Terceiro Encontro
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>📅 14 de março de 2026</p>
              <p>🕘 9h às 12h</p>
              <p>📍 Sala Pontes, Porto Digital</p>
              <p>Cais do Apolo, 222, Recife</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Organização:{" "}
            <a
              href="https://www.cin.ufpe.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix hover:underline"
            >
              Centro de Informática da UFPE
            </a>
            ,{" "}
            <a
              href="https://www.portodigital.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix hover:underline"
            >
              Porto Digital
            </a>
            ,{" "}
            <a
              href="https://www.cesar.school/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix hover:underline"
            >
              CESAR.school
            </a>{" "}
            e{" "}
            <a
              href="https://www.tds.company/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix hover:underline"
            >
              tds.company
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
