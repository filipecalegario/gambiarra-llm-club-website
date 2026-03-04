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
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const SponsorSection = () => {
  const [isSponsorOpen, setSponsorOpen] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="patrocinio"
      ref={sectionRef}
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      {/* Decorative border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <div className="reveal relative bg-card/50 border border-amber/20 rounded-sm p-8 md:p-12 tape-strip">
          {/* ASCII decorative corner */}
          <div className="absolute top-3 right-4 font-mono text-[10px] text-amber/20 hidden md:block">
            +--[ SPONSOR ]--+
          </div>

          <div className="text-center">
            <h2 className="font-display text-2xl md:text-4xl text-amber mb-3 glitch-hover inline-block">
              APOIE O CLUBE
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              O Gambiarra LLM Club e mantido pela comunidade. Seu patrocinio
              ajuda a viabilizar encontros, premios e infraestrutura para que
              mais pessoas experimentem com LLMs locais.
            </p>

            {/* Benefits preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
              <div className="p-4 rounded-sm border border-border/50 bg-background/40">
                <div className="font-mono text-lg text-amber mb-2">{`{$}`}</div>
                <p className="font-display text-xs text-foreground mb-1">VISIBILIDADE</p>
                <p className="font-body text-[11px] text-muted-foreground">
                  Logo no site e materiais dos encontros
                </p>
              </div>
              <div className="p-4 rounded-sm border border-border/50 bg-background/40">
                <div className="font-mono text-lg text-terminal mb-2">{`<*>`}</div>
                <p className="font-display text-xs text-foreground mb-1">COMUNIDADE</p>
                <p className="font-body text-[11px] text-muted-foreground">
                  Acesso direto a entusiastas de IA do Recife
                </p>
              </div>
              <div className="p-4 rounded-sm border border-border/50 bg-background/40">
                <div className="font-mono text-lg text-cyan mb-2">{`[!]`}</div>
                <p className="font-display text-xs text-foreground mb-1">IMPACTO</p>
                <p className="font-body text-[11px] text-muted-foreground">
                  Ajude a democratizar IA open source no Brasil
                </p>
              </div>
            </div>

            <Dialog open={isSponsorOpen} onOpenChange={setSponsorOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-amber hover:bg-amber/90 text-background font-display tracking-wide px-10 py-6 rounded-sm"
                >
                  QUERO PATROCINAR
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
    </section>
  );
};
