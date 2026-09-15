import BackToTop from "@/components/BackToTop";
import PortfolioFooter from "@/components/PortfolioFooter";
import PortfolioHeader from "@/components/PortfolioHeader";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioHeader />
      <ProjectsSection />
      <PortfolioFooter />
      <BackToTop />
    </main>
  );
}
