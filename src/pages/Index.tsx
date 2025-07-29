import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CompetitionsSection } from "@/components/CompetitionsSection";
import { RewardsSection } from "@/components/RewardsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const handleJoinClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdx3x-ThUit5E5c0HKct7ABU8UGSZuBeHB8vJwGPwebHyFeBQ/viewform?usp=dialog", "_blank");
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
