import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const developmentResources = [
  {
    title: "Plataforma Gambiarra",
    description: "Repositório oficial da plataforma para gerenciar competições e rankings do clube",
    url: "https://github.com/filipecalegario/gambiarra-plataforma",
    icon: Github,
  },
  {
    title: "Site Gambiarra.club",
    description:
      "O código fonte deste site que você está vendo agora! 🤯 Contribua via Pull Request e ajude a melhorar o site da comunidade.",
    url: "https://github.com/filipecalegario/gambiarra-llm-club-website",
    icon: Github,
  },
];

export const DevelopmentSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-terminal/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">DESENVOLVIMENTO</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recursos e ferramentas para contribuir com a comunidade. Explore, contribua e ajude a construir o futuro do
            clube.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {developmentResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-matrix/20 hover:border-matrix/50 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Icon className="w-8 h-8 text-matrix" />
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-matrix transition-colors" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-matrix transition-colors">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{resource.description}</CardDescription>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">Mais recursos em breve. Fique ligado! 🚀</p>
        </div>
      </div>
    </section>
  );
};
