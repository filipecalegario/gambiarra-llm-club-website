import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Trophy, Wrench } from "lucide-react";

export const MeetingsSection = () => {
  return (
    <section id="encontros" className="py-20 px-6 bg-terminal/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          <span className="text-matrix">▸</span> Encontros
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Confira os destaques dos nossos encontros anteriores
        </p>

        <div className="grid md:grid-cols-1 gap-8">
          <Card className="bg-background/50 border-matrix/30 hover:border-matrix transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Calendar className="text-matrix" />
                1º Encontro - Novembro 2025
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Nosso primeiro encontro foi um sucesso! Confira os destaques:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="text-neon mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground">Participação</h4>
                  <p className="text-sm text-muted-foreground">
                    Dezenas de entusiastas de IA e LLMs se reuniram para compartilhar conhecimento e experiências
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wrench className="text-hack mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground">Experimentação</h4>
                  <p className="text-sm text-muted-foreground">
                    Demonstrações práticas de LLMs locais rodando em diferentes dispositivos e configurações
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="text-code mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground">Competições</h4>
                  <p className="text-sm text-muted-foreground">
                    Desafios técnicos e competições divertidas que testaram a criatividade dos participantes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
