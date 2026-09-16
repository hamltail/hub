import BackToTop from "@/components/BackToTop";
import PortfolioFooter from "@/components/portfolio/default/PortfolioFooter";
import PortfolioHeader from "@/components/portfolio/default/PortfolioHeader";
import ProjectsSection from "@/components/portfolio/default/ProjectsSection";

export default function PortfolioDefault() {
  return (
    <main className="min-h-screen">
      <PortfolioHeader />
      <ProjectsSection />
      <PortfolioFooter />
      <BackToTop />
    </main>
  );
}
