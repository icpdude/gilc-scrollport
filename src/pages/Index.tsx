import { ScrollHero } from "@/components/ScrollHero";
import { ScrollMission } from "@/components/ScrollMission";
import { PillarsOfCivilization } from "@/components/PillarsOfCivilization";
import { ScrollDNAViewer } from "@/components/ScrollDNAViewer";
import { GlobalScrollMap } from "@/components/GlobalScrollMap";
import { LegalEthicsSection } from "@/components/LegalEthicsSection";
import { ClaudePanel } from "@/components/ClaudePanel";
import { Footer } from "@/components/Footer";
import { AdaptiveSidebar } from "@/components/AdaptiveSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdaptiveSidebar />
      <div className="ml-20 transition-all duration-300">
        <div id="hero">
          <ScrollHero />
        </div>
        <div id="mission">
          <ScrollMission />
        </div>
        <div id="pillars">
          <PillarsOfCivilization />
        </div>
        <div id="scrolldna">
          <ScrollDNAViewer />
        </div>
        <div id="global">
          <GlobalScrollMap />
        </div>
        <div id="legal">
          <LegalEthicsSection />
        </div>
        <Footer />
      </div>
      <ClaudePanel />
    </div>
  );
};

export default Index;
