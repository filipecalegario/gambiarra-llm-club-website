import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CompetitionsSection } from "@/components/CompetitionsSection";
import { RewardsSection } from "@/components/RewardsSection";
import { DevelopmentSection } from "@/components/DevelopmentSection";
import { Footer } from "@/components/Footer";
import { CopyContentButton } from "@/components/CopyContentButton";

const Index = () => {
  const handleJoinClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdx3x-ThUit5E5c0HKct7ABU8UGSZuBeHB8vJwGPwebHyFeBQ/viewform?usp=dialog", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <CopyContentButton />
      <HeroSection onJoinClick={handleJoinClick} />
      <AboutSection />
      <CompetitionsSection />
      <RewardsSection />
      <DevelopmentSection />
      <Footer onJoinClick={handleJoinClick} />
    </div>
  );
};

export default Index;
