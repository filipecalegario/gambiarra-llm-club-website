import { Card, CardContent } from "@/components/ui/card";

const rewards = [
  {
    emoji: "🥇",
    title: "GPU de Ouro",
    description: "Para o setup mais impressionante",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    emoji: "🔧",
    title: "Gambiarra Suprema",
    description: "Solução mais criativa e improvável",
    color: "from-neon to-orange-400"
  },
  {
    emoji: "💬",
    title: "Prompt de Platina", 
    description: "Melhor engenharia de prompt",
    color: "from-gray-300 to-gray-500"
  },
  {
    emoji: "⚡",
    title: "Eficiência Máxima",
    description: "Melhor performance/recurso",
    color: "from-matrix to-code"
  },
  {
    emoji: "🎭",
    title: "Ator do Ano",
    description: "Melhor personagem interpretado",
    color: "from-purple-400 to-pink-400"
  },
  {
    emoji: "🧠",
    title: "QI Artificial",
    description: "Respostas mais inteligentes",
    color: "from-hack to-blue-400"
  }
];

const features = [
  "Show & Tell com setups e hacks",
  "Repositório comunitário de referências e ferramentas",
  "Discord exclusivos",
  "Mentoria entre membros",
];

export const RewardsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card to-terminal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-neon to-hack bg-clip-text">
            RECOMPENSAS & EXTRAS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Além das competições, oferecemos muito mais para nossa comunidade
          </p>
        </div>
        
        {/* Troféus */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">🏆 Troféus Simbólicos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward, index) => (
              <Card key={index} className="bg-card/50 border-border hover:border-neon transition-all duration-300 backdrop-blur-sm group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{reward.emoji}</div>
                  <h4 className={`text-lg font-bold mb-2 bg-gradient-to-r ${reward.color} bg-clip-text text-transparent`}>
                    {reward.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{reward.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Benefícios */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">✨ Benefícios da Comunidade</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-matrix text-lg">▸</span>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-terminal to-card p-8 rounded-lg border border-matrix/30">
            <h3 className="text-2xl font-bold mb-4 text-matrix">Em Preparação</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center">
                <span className="text-neon mr-2">📱</span>
                App mobile para competições remotas
              </p>
              <p className="flex items-center">
                <span className="text-hack mr-2">📊</span>
                Dashboard de performance histórica
              </p>
              <p className="flex items-center">
                <span className="text-matrix mr-2">🎮</span>
                Torneios online entre encontros
              </p>
              <p className="flex items-center">
                <span className="text-neon mr-2">🛒</span>
                Marketplace de prompts e configs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};