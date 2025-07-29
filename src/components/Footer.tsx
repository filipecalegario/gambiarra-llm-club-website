import { Button } from "@/components/ui/button";

interface FooterProps {
  onJoinClick: () => void;
}

export const Footer = ({ onJoinClick }: FooterProps) => {
  return (
    <footer className="bg-terminal border-t border-matrix/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* CTA Principal */}
        <div className="text-center mb-12 bg-gradient-to-r from-card/50 to-muted/20 p-8 rounded-lg border border-matrix/30 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-matrix to-neon bg-clip-text">
            PRONTO PARA A GAMBIARRA?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se à revolução dos LLMs caseiras. Traga suas ideias malucas e vamos fazer história!
          </p>
          <Button 
            onClick={onJoinClick}
            size="lg" 
            className="bg-gradient-to-r from-matrix to-code hover:from-code hover:to-matrix text-terminal font-bold px-8 py-6 text-lg rounded-lg border border-matrix shadow-lg hover:shadow-[var(--glow-green)] transition-all duration-300 transform hover:scale-105"
          >
            TENHO INTERESSE DE PARTICIPAR 🚀
          </Button>
        </div>
        
        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <span className="text-matrix mr-2">🤖</span>
              Contato
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>📧 Em breve: canal oficial</p>
              <p>💬 Discord em preparação</p>
              <p>📱 Newsletter semanal</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <span className="text-neon mr-2">⚡</span>
              Requisitos
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>💻 Qualquer hardware</p>
              <p>🧠 Curiosidade infinita</p>
              <p>🔧 Espírito gambiarra</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <span className="text-hack mr-2">🎯</span>
              Próximos Passos
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>📅 Primeiro encontro</p>
              <p>🏗️ Setup da infraestrutura</p>
              <p>🎮 Primeiras competições</p>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            <span className="text-matrix font-mono">Gambiarra LLM Club</span> • Onde a criatividade encontra a IA
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com <span className="text-neon">♥</span> e muito café para a comunidade brasileira de IA
          </p>
        </div>
      </div>
    </footer>
  );
};