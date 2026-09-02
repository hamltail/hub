import PortfolioFooter from "@/components/PortfolioFooter";
import PortfolioHeader from "@/components/PortfolioHeader";
import ProjectsSection from "@/components/ProjectsSection";
import ExperimentsSection from "@/components/ExperimentsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioHeader />
      <ExperimentsSection />
      <ProjectsSection />
      <PortfolioFooter />
    </main>
  );
}
