import techCollage from "@/assets/tech-collage.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-gradient-to-r from-matrix to-code bg-clip-text">
              O QUE É O CLUBE?
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                O <span className="text-matrix font-semibold">Gambiarra LLM Club</span> é inspirado no <a href="https://en.wikipedia.org/wiki/Homebrew_Computer_Club" target="_blank" rel="noopener noreferrer" className="text-neon hover:text-hack underline font-semibold transition-colors duration-200">Homebrew Computer Club</a>, um clube de hobbistas que construiam seus computadores na época dos mainframes. Somos uma comunidade de entusiastas
                que rodam seus próprios modelos de linguagem localmente, ajustando as configurações e hardwares para termos o melhor resultado, mas sem a pretensão de bater nenhum modelo das big techs. Aqui, a criatividade e a engenhosidade valem mais que os melhores rankings dos benchmarks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-neon text-xl">🔧</span>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Hardware Próprio</h3>
                    <p className="text-sm">Traga seu setup, por mais simples que seja. A gambiarra é bem-vinda!</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-hack text-xl">🏆</span>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Competições Criativas</h3>
                    <p className="text-sm">Desafios únicos que testam mais que performance bruta.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-matrix text-xl">🤝</span>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Comunidade</h3>
                    <p className="text-sm">Troca de conhecimento, scripts, prompts, LLMs open source.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-neon text-xl">📅</span>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Encontros Regulares</h3>
                    <p className="text-sm">Mensais ou bimestrais, sempre de forma presencial.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={techCollage} 
              alt="Tech Collage" 
              className="w-full rounded-lg shadow-2xl border border-matrix/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-terminal/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-matrix font-mono text-sm bg-terminal/80 p-2 rounded border border-matrix/50">
                <span className="text-neon">$</span> ./run_local_llm --creativity=max --gambiarra=true
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};