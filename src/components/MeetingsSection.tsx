import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import encontro1 from "@/assets/encontro-1.jpg";
import encontro2 from "@/assets/encontro-2.jpg";
import encontro3 from "@/assets/encontro-3.jpg";
import encontro4 from "@/assets/encontro-4.jpg";
import encontro5 from "@/assets/encontro-5.jpg";
import encontro6Asset from "@/assets/encontro-6.jpg.asset.json";

const meetings = [
  {
    number: "7º",
    title: "7º Encontro",
    date: "22 de Agosto de 2026",
    status: "upcoming" as const,
    symplaUrl: "https://www.sympla.com.br/evento/7-encontro-do-gambiarra-llm-club/3499406",
    highlights: [
      "Inscrições abertas no Sympla",
      "Novos desafios criativos com LLMs locais",
      "Sala Pontes, Porto Digital, Recife",
    ],
  },
  {
    number: "6º",
    title: "6º Encontro",
    date: "11 de Julho de 2026",
    status: "past" as const,
    photo: encontro6Asset.url,
    reportUrl: "/relatorio-6-encontro.html",
    highlights: [
      "26 participantes, 22 dispositivos e 16 modelos locais diferentes na mesma rede",
      "Gambiarra Arena: 367 votos de 14 votantes e pico de 17 agentes no modo World",
      "Estreia da engenharia de prompt ao vivo: 34 versões de prompt de 5 participantes",
      "Zero rate limits (eram 297 no 5º) — estado agora trafega por WebSocket",
      "Jonathas Vinicius testou (10h–11h) sua plataforma de controle de bots de Minecraft, construída sobre a gambi de Arthur Brito, como parte do TCC — [relatório do experimento](/relatorio-minecraft-jonathas.html)",
    ],
  },
  {
    number: "5º",
    title: "5º Encontro",
    date: "23 de Maio de 2026",
    status: "past" as const,
    photo: encontro5,
    reportUrl: "/relatorio-5-encontro.html",
    highlights: [
      "58 participantes, 69 dispositivos e 24 modelos rodando localmente na mesma rede",
      "Grande Final da capivara dançando frevo: 25 gerações e 288 votos",
      "Estreia do modo World com 238 entradas de 54 criaturas",
      "Rodada do Soneto: kai (gemma3:1b) respondeu em 2.8s",
    ],
  },
  {
    number: "4º",
    title: "4º Encontro",
    date: "11 de Abril de 2026",
    status: "past" as const,
    photo: encontro4,
    highlights: [
      "Mais um encontro com muitas gambiarras e aprendizado",
      "Competições criativas testando o limite dos LLMs",
      "Comunidade crescendo a cada edição",
    ],
  },
  {
    number: "3º",
    title: "3º Encontro",
    date: "14 de Março de 2026",
    status: "past" as const,
    photo: encontro3,
    highlights: [
      "Volta do clube em 2026 com muita energia",
      "Competições inéditas e desafios criativos",
      "Comunidade cada vez mais engajada",
    ],
  },
  {
    number: "2º",
    title: "2º Encontro",
    date: "14 de Dezembro de 2025",
    status: "past" as const,
    photo: encontro2,
    highlights: [
      "Comunidade cresceu com mais entusiastas de IA",
      "Novas gambiarras e demonstrações práticas",
      "Mais desafios criativos testaram os limites dos LLMs caseiros",
    ],
  },
  {
    number: "1º",
    title: "1º Encontro",
    date: "08 de Novembro de 2025",
    status: "past" as const,
    photo: encontro1,
    highlights: [
      "Dezenas de entusiastas se reuniram pela primeira vez",
      "Demonstrações práticas de LLMs em diferentes dispositivos",
      "Competições e desafios técnicos divertidos",
    ],
  },
];

export const MeetingsSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="encontros"
      ref={sectionRef}
      className="py-24 px-6 bg-card"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-amber glitch-hover inline-block">
            ENCONTROS
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4">
            Destaques dos nossos encontros
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-16">
          <div className="timeline-line" />

          <div className="space-y-12">
            {meetings.map((meeting, i) => (
              <div key={i} className="reveal relative">
                {/* Timeline dot */}
                <div
                  className={`timeline-dot top-2 ${
                    meeting.status === "upcoming" ? "timeline-dot-upcoming" : ""
                  }`}
                />

                {/* Card */}
                <div
                  className={`rounded-sm border p-6 transition-all duration-300 ${
                    meeting.status === "upcoming"
                      ? "bg-amber/5 border-amber/30 shadow-lg shadow-amber/5"
                      : "bg-background/50 border-border hover:border-amber/20"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="font-display text-lg text-foreground">
                      {meeting.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {meeting.date}
                    </span>
                    {meeting.status === "upcoming" && (
                      <span className="sticker bg-amber/20 text-amber border border-amber/40">
                        EM BREVE
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {meeting.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="font-body text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-amber mt-1 text-[10px]">
                          &#9654;
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {"photo" in meeting && (meeting as any).photo && (
                    <div className="mt-5 overflow-hidden rounded-sm border border-border/60">
                      <img
                        src={(meeting as any).photo}
                        alt={`Foto oficial do ${meeting.title} do Gambiarra LLM Club`}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  {"reportUrl" in meeting && (meeting as any).reportUrl && (
                    <a
                      href={(meeting as any).reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block font-mono text-xs text-amber hover:underline underline-offset-4"
                    >
                      &gt; ver relatório completo do encontro
                    </a>
                  )}

                  {meeting.status === "upcoming" && "symplaUrl" in meeting && (
                    <button
                      onClick={() =>
                        window.open(
                          (meeting as any).symplaUrl,
                          "_blank"
                        )
                      }
                      className="mt-4 font-mono text-xs text-amber hover:underline underline-offset-4"
                    >
                      &gt; inscreva-se no Sympla
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
