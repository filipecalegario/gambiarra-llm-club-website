import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const ManifestoSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative py-24 px-6 bg-surface-dim overflow-hidden"
    >
      {/* Circuit pattern background */}
      <div className="circuit-divider absolute top-0 left-0 right-0 opacity-30" />
      <div className="circuit-divider absolute bottom-0 left-0 right-0 opacity-30" />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-amber glitch-hover inline-block">
            MANIFESTO
          </h2>
        </div>

        {/* Manifesto "paper" */}
        <div className="reveal relative bg-card/60 border border-amber/10 rounded-sm p-8 md:p-12 shadow-2xl shadow-black/30 tape-strip tape-strip-right">
          <div className="space-y-6 font-body text-foreground/85 text-base md:text-lg leading-relaxed">
            {/* Title */}
            <h3 className="font-display text-xl md:text-2xl text-amber text-center mb-8">
              Manifesto do Gambiarra LLM Club
            </h3>

            <p>
              Nós, curiosos, malucos e entusiastas das inteligências artificiais caseiras,
              declaramos:{" "}
              <span className="text-amber font-semibold">
                a revolução dos LLMs começa na gambiarra.
              </span>
            </p>

            <p>
              Não temos datacenter. Temos um notebook com cooler que parece que vai
              voar, um PC cheio de esperança e uma vontade incontrolável de experimentar.
            </p>

            {/* Pull quote */}
            <div className="reveal pull-quote my-10">
              Não buscamos vencer benchmarks, nem queremos bater nenhuma big tech
              com seus super modelos. Queremos construir, brincar e subverter os limites
              com criatividade e engenhosidade.
            </div>

            <p>
              Inspirados pelos pioneiros do{" "}
              <a
                href="https://en.wikipedia.org/wiki/Homebrew_Computer_Club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:underline underline-offset-4"
              >
                Homebrew Computer Club
              </a>
              , montamos nossos próprios setups, ajustamos parâmetros na unha e fazemos
              milagre com pouca VRAM. Aqui, cada prompt é um experimento e cada erro,
              uma descoberta.
            </p>

            <p>
              O <span className="text-amber font-semibold">Gambiarra LLM Club</span> é
              um espaço de encontro para quem prefere rodar local, pensar diferente e
              aprender junto.
            </p>

            <p>
              Trazemos nossos modelos open source, conectamos máquinas, trocamos scripts,
              fazemos testes esquisitos e damos risada das respostas malucas. Os jogos,
              experimentos e competições são uma bela desculpa pra gente se reunir e
              aprender juntos.
            </p>

            {/* Pull quote */}
            <div className="reveal pull-quote my-10">
              Nossas competições não premiam só quem tem a máquina mais potente,
              mas quem faz mais com menos, quem inventa o uso mais inusitado, quem
              encarna o personagem mais convincente ou escreve a história mais
              imprevisível.
            </div>

            <p className="text-foreground/70">
              Valorizamos o improviso e a comunidade.
            </p>

            <p className="font-display text-2xl md:text-3xl text-vermillion text-center my-10">
              Aqui, a gambiarra é uma arte.
            </p>

            <p>
              Se você já tentou rodar um LLM em hardware que mal abre o navegador, se
              já afinou prompts como quem afina um instrumento desafinado, ou se apenas
              tem curiosidade de ver até onde dá para ir com boas ideias e ferramentas
              livres, o clube é seu.
            </p>

            <div className="reveal text-center space-y-2 mt-10 pt-8 border-t border-amber/20">
              <p className="font-display text-lg md:text-xl text-foreground">
                Traga seu hardware. Traga seu modelo. Traga seu espírito maker.
              </p>
              <p className="font-display text-xl md:text-2xl text-amber mt-4">
                Junte-se ao Gambiarra LLM Club.
              </p>
              <p className="font-display text-lg text-vermillion">
                A criatividade é nosso benchmark.
              </p>
            </div>

            {/* Credit */}
            <p className="text-right text-muted-foreground font-mono text-xs mt-8">
              @fcac 29/07/2025
            </p>
          </div>
        </div>

        {/* PDF link */}
        <div className="reveal text-center mt-8">
          <a
            href="http://www.cin.ufpe.br/~fcac/manifesto-gambiarra-llm-club.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-amber transition-colors underline underline-offset-4"
          >
            versão para impressão (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};
