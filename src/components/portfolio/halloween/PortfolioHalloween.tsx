import BackToTop from "@/components/BackToTop";
import PortfolioFooter from "@/components/portfolio/halloween/PortfolioFooter";
import PortfolioHeader from "@/components/portfolio/halloween/PortfolioHeader";
import ProjectsSection from "@/components/portfolio/halloween/ProjectsSection";

export default function PortfolioHalloween() {
  return (
    <main className="min-h-screen">
      <PortfolioHeader />
      <ProjectsSection />
      <PortfolioFooter />
      <BackToTop />
    </main>
  );
}
