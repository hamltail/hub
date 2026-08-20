import PortfolioFooter from "@/components/PortfolioFooter";
import PortfolioHeader from "@/components/PortfolioHeader";
import ProjectsSection from "@/components/ProjectsSection";
import TechnicalSandboxSection from "@/components/TechnicalSandboxSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioHeader />

      <TechnicalSandboxSection />

      <ProjectsSection />

      <PortfolioFooter />
    </main>
  );
}
