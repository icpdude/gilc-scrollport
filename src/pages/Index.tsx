import { ScrollHero } from "@/components/ScrollHero";
import { ScrollMission } from "@/components/ScrollMission";
import { PillarsOfCivilization } from "@/components/PillarsOfCivilization";
import { ScrollDNAViewer } from "@/components/ScrollDNAViewer";
import { GlobalScrollMap } from "@/components/GlobalScrollMap";
import { LegalEthicsSection } from "@/components/LegalEthicsSection";
import { ClaudePanel } from "@/components/ClaudePanel";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollHero />
      <ScrollMission />
      <PillarsOfCivilization />
      <ScrollDNAViewer />
      <GlobalScrollMap />
      <LegalEthicsSection />
      <Footer />
      <ClaudePanel />
    </div>
  );
};

export default Index;
