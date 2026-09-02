import BackToTop from "@/components/BackToTop";
import ExperimentsSection from "@/components/ExperimentsSection";
import PortfolioFooter from "@/components/PortfolioFooter";
import PortfolioHeader from "@/components/PortfolioHeader";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioHeader />
      <ExperimentsSection />
      <ProjectsSection />
      <PortfolioFooter />
      <BackToTop />
    </main>
  );
}
