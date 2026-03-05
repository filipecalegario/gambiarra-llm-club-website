import techCollage from "@/assets/tech-collage.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const highlights = [
  {
    ascii: "[>_]",
    title: "LLMs Locais",
    desc: "Traga seu setup, por mais simples que seja.",
  },
  {
    ascii: "{!}",
    title: "Competições Criativas",
    desc: "Desafios que testam mais que performance bruta.",
  },
  {
    ascii: "</>",
    title: "Open Source",
    desc: "Modelos, scripts, ferramentas livres.",
  },
  {
    ascii: "[ ]",
    title: "Comunidade",
    desc: "Troca de conhecimento, encontros presenciais.",
  },
];

export const AboutSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="clube"
      ref={sectionRef}
      className="py-24 px-6 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3">
            <h2 className="reveal font-display text-3xl md:text-5xl text-amber mb-8 glitch-hover inline-block">
              O QUE É O CLUBE?
            </h2>

            <div className="reveal space-y-5 font-body text-foreground/75 text-base md:text-lg leading-relaxed">
              <p>
                O{" "}
                <span className="text-amber font-semibold">
                  Gambiarra LLM Club
                </span>{" "}
                é inspirado no{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Homebrew_Computer_Club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline underline-offset-4"
                >
                  Homebrew Computer Club
                </a>
                , o lendário clube de hobbistas que construíam seus próprios
                computadores na época dos mainframes.
              </p>
              <p>
                Somos uma comunidade de entusiastas que rodam modelos de
                linguagem localmente, ajustando configurações para alcançar o
                melhor resultado possível. Aqui, criatividade e engenhosidade
                valem mais que rankings de benchmarks.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="reveal grid grid-cols-2 gap-4 mt-10">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="group p-4 rounded-sm border border-border hover:border-amber/30 transition-all duration-300 bg-background/40"
                >
                  <span className="font-mono text-lg text-terminal font-bold block mb-2 group-hover:text-amber transition-colors">
                    {h.ascii}
                  </span>
                  <h3 className="font-body font-semibold text-foreground text-sm mb-1">
                    {h.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image — 2 cols */}
          <div className="reveal lg:col-span-2 relative">
            <div className="tape-strip tape-strip-right">
              <img
                src={techCollage}
                alt="Gambiarra LLM Club em ação"
                className="w-full rounded-sm shadow-2xl shadow-black/40 border border-amber/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-sm" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-mono text-xs bg-background/80 backdrop-blur-sm p-3 rounded-sm border border-amber/20 text-terminal">
                <span className="text-amber">$</span> ./run_local_llm
                --creativity=max --gambiarra=true
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
