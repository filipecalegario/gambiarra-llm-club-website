import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const competitions = [
  {
    title: "Bot-a-Bot",
    description:
      "Dois LLMs conversam tentando manter coerencia o maior tempo possivel",
    difficulty: "Medio",
    ascii: "[ A <-> B ]",
    details: [
      "Tema livre ou especifico",
      "Avaliacao de criatividade",
      "Consistencia de identidade",
    ],
  },
  {
    title: "Traducao Infinita",
    description: "Texto passa por cadeia de LLMs traduzindo entre idiomas",
    difficulty: "Facil",
    ascii: "PT > EN > JP > ?",
    details: [
      "Distorcao minima",
      "Multiplos idiomas",
      "Comparacao semantica",
    ],
  },
  {
    title: "Conhecimento com Pegadinhas",
    description: "Perguntas gerais com armadilhas e ambiguidades",
    difficulty: "Dificil",
    ascii: "Q: ??? A: !!!",
    details: [
      "Acerto direto: 1pt",
      "Resposta criativa: 0.5pt",
      "Sistema de pontuacao",
    ],
  },
  {
    title: "Continuacao de Historia",
    description: "Continue narrativas com criatividade e coerencia",
    difficulty: "Medio",
    ascii: "Era uma vez...",
    details: ["Criterios narrativos", "Votacao comunitaria", "Estilo e humor"],
  },
  {
    title: "Personagem Oculto",
    description: "LLM encarna personagem e outros devem adivinhar",
    difficulty: "Dificil",
    ascii: "WHO AM I ?",
    details: [
      "Manter consistencia",
      "Improvisacao",
      "Atuacao convincente",
    ],
  },
  {
    title: "Batalha de Gambiarras",
    description: "Melhor modelo no hardware mais limitado",
    difficulty: "Extremo",
    ascii: "MIN HW > MAX AI",
    details: [
      "Hardware criativo",
      "Quantizacao extrema",
      "Performance vs recursos",
    ],
  },
];

const difficultyStyles: Record<string, string> = {
  Facil: "bg-terminal/15 text-terminal border-terminal/30",
  Medio: "bg-amber/15 text-amber border-amber/30",
  Dificil: "bg-vermillion/15 text-vermillion border-vermillion/30",
  Extremo: "bg-vermillion/25 text-vermillion border-vermillion/50",
};

const trophies = [
  { name: "GPU de Ouro", desc: "Setup mais impressionante", ascii: "[ GPU ]", color: "text-amber" },
  { name: "Gambiarra Suprema", desc: "Solucao mais criativa", ascii: "{~*~}", color: "text-vermillion" },
  { name: "Prompt de Platina", desc: "Melhor engenharia de prompt", ascii: "> _ <", color: "text-cyan" },
  { name: "Eficiencia Maxima", desc: "Melhor performance/recurso", ascii: "⚡/KB", color: "text-terminal" },
  { name: "Ator do Ano", desc: "Melhor personagem interpretado", ascii: "[:)]", color: "text-amber" },
  { name: "QI Artificial", desc: "Respostas mais inteligentes", ascii: "{AI}", color: "text-cyan" },
];

export const CompetitionsSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const tiltClasses = [
    "tilt-1",
    "tilt-2",
    "tilt-3",
    "tilt-4",
    "tilt-5",
    "tilt-6",
  ];

  return (
    <section
      id="competicoes"
      ref={sectionRef}
      className="py-24 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-amber mb-4 glitch-hover inline-block">
            COMPETICOES
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Desafios que testam criatividade, performance e gambiarras dos seus
            LLMs
          </p>
        </div>

        {/* Competition cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((comp, index) => (
            <div
              key={index}
              className={`reveal ${tiltClasses[index]} group relative bg-card border border-border hover:border-amber/40 rounded-sm p-6 transition-all duration-500 hover:shadow-lg hover:shadow-amber/5 ${
                comp.title === "Batalha de Gambiarras"
                  ? "lg:col-span-1"
                  : ""
              }`}
            >
              {/* ASCII art icon */}
              <div className="font-mono text-sm text-terminal mb-4 tracking-widest">
                {comp.ascii}
              </div>

              {/* Title + difficulty */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-base text-foreground group-hover:text-amber transition-colors leading-tight">
                  {comp.title}
                </h3>
                <span
                  className={`sticker border ${
                    difficultyStyles[comp.difficulty] || ""
                  }`}
                >
                  {comp.difficulty}
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-muted-foreground mb-4">
                {comp.description}
              </p>

              {/* Details */}
              <ul className="space-y-1.5">
                {comp.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="font-mono text-xs text-muted-foreground/70 flex items-center gap-2"
                  >
                    <span className="text-amber text-[10px]">&#9654;</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trophies */}
        <div className="reveal mt-20 border-t border-border pt-12">
          <h3 className="font-display text-2xl md:text-3xl text-center text-amber mb-4 glitch-hover inline-block w-full">
            TROFEUS SIMBOLICOS
          </h3>
          <p className="text-center font-body text-sm text-muted-foreground mb-10 max-w-lg mx-auto">
            Nossas competicoes premiam criatividade, nao so poder bruto
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {trophies.map((t, i) => (
              <div
                key={i}
                className={`${["tilt-1","tilt-2","tilt-3","tilt-4","tilt-5","tilt-6"][i]} group text-center p-5 rounded-sm border border-border/50 hover:border-amber/30 transition-all duration-500 bg-card/40 hover:bg-card/70`}
              >
                <div className={`font-mono text-2xl md:text-3xl font-bold mb-3 ${t.color} group-hover:text-amber transition-colors`}>
                  {t.ascii}
                </div>
                <p className="font-display text-xs md:text-sm text-foreground mb-1">
                  {t.name}
                </p>
                <p className="font-body text-xs text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 font-mono text-xs text-muted-foreground">
            Novos desafios sao criados a cada encontro pela comunidade!
          </p>
        </div>
      </div>
    </section>
  );
};
