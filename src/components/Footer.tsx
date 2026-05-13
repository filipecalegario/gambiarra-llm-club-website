export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Contribute / Development section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-amber mb-3 glitch-hover inline-block">
              CONTRIBUA
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
              O Gambiarra LLM Club é open source. Ajude a construir a plataforma
              e o site da comunidade.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <a
              href="https://github.com/filipecalegario/gambiarra-plataforma"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-sm border border-border hover:border-cyan/40 bg-card/40 hover:bg-card/70 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-lg text-terminal group-hover:text-cyan transition-colors">
                  ~/plataforma
                </span>
                <span className="font-mono text-xs text-muted-foreground/40 group-hover:text-cyan transition-colors">
                  &#8599;
                </span>
              </div>
              <p className="font-display text-sm text-foreground mb-1">
                gambiarra-plataforma
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Plataforma para gerenciar competições e rankings do clube
              </p>
            </a>
            <a
              href="https://github.com/filipecalegario/gambiarra-llm-club-website"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-sm border border-border hover:border-cyan/40 bg-card/40 hover:bg-card/70 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-lg text-terminal group-hover:text-cyan transition-colors">
                  ~/website
                </span>
                <span className="font-mono text-xs text-muted-foreground/40 group-hover:text-cyan transition-colors">
                  &#8599;
                </span>
              </div>
              <p className="font-display text-sm text-foreground mb-1">
                gambiarra-llm-club-website
              </p>
              <p className="font-body text-xs text-muted-foreground">
                O código deste site! Contribua via Pull Request
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Circuit divider */}
      <div className="circuit-divider" />

      {/* Info grid */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Next meeting */}
          <div>
            <h3 className="font-display text-sm text-amber mb-4">
              PRÓXIMO ENCONTRO
            </h3>
            <div className="space-y-2 font-mono text-xs text-muted-foreground">
              <p>
                <span className="text-terminal">&gt;</span> 23 de Maio de 2026
              </p>
              <p>
                <span className="text-terminal">&gt;</span> 9h às 12h
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
                Discord em preparação
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-[10px] text-muted-foreground/60 leading-relaxed">
            Organização:{" "}
            <a
              href="https://www.cin.ufpe.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              Centro de Informática da UFPE
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
