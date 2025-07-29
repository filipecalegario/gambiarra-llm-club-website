import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const competitions = [
  {
    title: "Bot-a-Bot",
    description: "Dois LLMs conversam tentando manter coerência o maior tempo possível",
    difficulty: "Médio",
    icon: "🤖",
    details: ["Tema livre ou específico", "Avaliação de criatividade", "Consistência de identidade"]
  },
  {
    title: "Tradução Infinita",
    description: "Texto passa por cadeia de LLMs traduzindo entre idiomas",
    difficulty: "Fácil",
    icon: "🌍",
    details: ["Distorção mínima", "Múltiplos idiomas", "Comparação semântica"]
  },
  {
    title: "Conhecimento com Pegadinhas",
    description: "Perguntas gerais com armadilhas e ambiguidades",
    difficulty: "Difícil",
    icon: "🧠",
    details: ["Acerto direto: 1pt", "Resposta criativa: 0.5pt", "Sistema de pontuação"]
  },
  {
    title: "Continuação de História",
    description: "Continue narrativas com criatividade e coerência",
    difficulty: "Médio",
    icon: "📚",
    details: ["Critérios narrativos", "Votação comunitária", "Estilo e humor"]
  },
  {
    title: "Personagem Oculto",
    description: "LLM encarna personagem e outros devem adivinhar",
    difficulty: "Difícil",
    icon: "🎭",
    details: ["Manter consistência", "Improvisação", "Atuação convincente"]
  },
  {
    title: "Batalha de Gambiarras",
    description: "Melhor modelo no hardware mais limitado",
    difficulty: "Extremo",
    icon: "⚡",
    details: ["Hardware criativo", "Quantização extrema", "Performance vs recursos"]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Fácil": return "bg-matrix/20 text-matrix border-matrix";
    case "Médio": return "bg-neon/20 text-neon border-neon";
    case "Difícil": return "bg-hack/20 text-hack border-hack";
    case "Extremo": return "bg-destructive/20 text-destructive border-destructive";
    default: return "bg-muted/20 text-muted-foreground border-muted";
  }
};

export const CompetitionsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-terminal to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-matrix to-neon bg-clip-text">
            JOGOS, EXPERIMENTOS E COMPETIÇÕES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desafios épicos que vão testar a criatividade, performance e gambiarras dos seus LLMs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((comp, index) => (
            <Card key={index} className="bg-card/50 border-border hover:border-matrix transition-all duration-300 hover:shadow-lg hover:shadow-matrix/20 backdrop-blur-sm group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{comp.icon}</span>
                  <Badge className={getDifficultyColor(comp.difficulty)}>
                    {comp.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-matrix transition-colors">
                  {comp.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{comp.description}</p>
                <ul className="space-y-2">
                  {comp.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="text-matrix mr-2">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="text-neon font-semibold">Novos desafios</span> são criados a cada encontro pela comunidade!
          </p>
        </div>
      </div>
    </section>
  );
};