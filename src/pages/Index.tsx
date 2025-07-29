import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CompetitionsSection } from "@/components/CompetitionsSection";
import { RewardsSection } from "@/components/RewardsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const handleJoinClick = () => {
    // Substitua pela URL real do Google Forms quando estiver pronto
    window.open("https://forms.google.com/", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onJoinClick={handleJoinClick} />
      <AboutSection />
      <CompetitionsSection />
      <RewardsSection />
      <Footer onJoinClick={handleJoinClick} />
    </div>
  );
};

export default Index;
