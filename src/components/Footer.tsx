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
  const [isSponsorOpen, setSponsorOpen] = useState(false);

  return (
    <footer className="bg-background border-t border-border">
      {/* CTA strip */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-amber mb-4 glitch-hover inline-block">
            PRONTO PARA A GAMBIARRA?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Junte-se a revolucao dos LLMs caseiras. Traga suas ideias malucas e
            vamos fazer historia!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() =>
                window.open(
                  "https://www.sympla.com.br/evento/3-encontro-do-gambiarra-llm-club/3331154",
                  "_blank"
                )
              }
              size="lg"
              className="bg-amber hover:bg-amber/90 text-background font-display tracking-wide px-8 py-6 rounded-sm"
            >
              INSCRICOES 3o ENCONTRO
            </Button>
            <Dialog open={isSponsorOpen} onOpenChange={setSponsorOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber/30 text-amber hover:bg-amber/10 font-mono text-xs tracking-wider px-6 py-6 rounded-sm"
                >
                  PATROCINAR O CLUBE
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card border-amber/20">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-display text-amber">
                    Patrocinio do 3o Encontro
                  </DialogTitle>
                  <DialogDescription className="text-center text-muted-foreground mt-4">
                    Para patrocinar o terceiro encontro do Gambiarra LLM Club,
                    envie um e-mail para:
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center space-y-4 py-4">
                  <div className="bg-background border border-amber/20 rounded-sm p-4 w-full">
                    <p className="text-center font-mono text-amber font-bold text-lg">
                      calegario@cin.ufpe.br
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText("calegario@cin.ufpe.br");
                      setSponsorOpen(false);
                    }}
                    className="bg-amber hover:bg-amber/90 text-background font-mono font-bold text-sm"
                  >
                    Copiar E-mail
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Circuit divider */}
      <div className="circuit-divider" />

      {/* Info grid */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Next meeting */}
          <div>
            <h3 className="font-display text-sm text-amber mb-4">
              PROXIMO ENCONTRO
            </h3>
            <div className="space-y-2 font-mono text-xs text-muted-foreground">
              <p>
                <span className="text-terminal">&gt;</span> 14 de Marco de 2026
              </p>
              <p>
                <span className="text-terminal">&gt;</span> 9h as 12h
              </p>
              <p>
                <span className="text-terminal">&gt;</span> Sala Pontes, Porto
                Digital
              </p>
              <p className="text-muted-foreground/60 pl-3">
                Cais do Apolo, 222, Recife
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm text-amber mb-4">CONTATO</h3>
            <div className="space-y-2 font-mono text-xs text-muted-foreground">
              <p>
                <span className="text-terminal">&gt;</span> calegario@cin.ufpe.br
              </p>
              <p className="text-muted-foreground/60 pl-3">
                Discord em preparacao
              </p>
            </div>
          </div>

          {/* Development */}
          <div>
            <h3 className="font-display text-sm text-amber mb-4">
              DESENVOLVIMENTO
            </h3>
            <div className="space-y-2 font-mono text-xs">
              <a
                href="https://github.com/filipecalegario/gambiarra-plataforma"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-cyan transition-colors"
              >
                <span className="text-terminal">&gt;</span>{" "}
                gambiarra-plataforma
              </a>
              <a
                href="https://github.com/filipecalegario/gambiarra-llm-club-website"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-cyan transition-colors"
              >
                <span className="text-terminal">&gt;</span>{" "}
                gambiarra-llm-club-website
              </a>
              <p className="text-muted-foreground/60 pl-3">
                Contribua via Pull Request!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-[10px] text-muted-foreground/60 leading-relaxed">
            Organizacao:{" "}
            <a
              href="https://www.cin.ufpe.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              Centro de Informatica da UFPE
            </a>
            {" // "}
            <a
              href="https://www.portodigital.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              Porto Digital
            </a>
            {" // "}
            <a
              href="https://www.cesar.school/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              CESAR.school
            </a>
            {" // "}
            <a
              href="https://www.tds.company/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              tds.company
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
