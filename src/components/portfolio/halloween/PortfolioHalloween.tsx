import BackToTop from "@/components/BackToTop";
import PortfolioFooter from "@/components/portfolio/halloween/PortfolioFooter";
import PortfolioHeader from "@/components/portfolio/halloween/PortfolioHeader";
import ProjectsSection from "@/components/portfolio/halloween/ProjectsSection";

export default function PortfolioHalloween() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,122,0,0.22),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(109,40,217,0.26),transparent_36%),radial-gradient(circle_at_35%_65%,rgba(255,60,172,0.20),transparent_34%),radial-gradient(circle_at_80%_85%,rgba(163,230,53,0.16),transparent_30%)]"
      />

      <div className="relative z-10">
        <PortfolioHeader />
        <ProjectsSection />
        <PortfolioFooter />
      </div>

      <BackToTop />
    </main>
  );
}
