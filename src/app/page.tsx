import PortfolioHeader from "@/components/PortfolioHeader";
import ProjectsSection from "@/components/ProjectsSection";
import TechnicalSandboxSection from "@/components/TechnicalSandboxSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioHeader />

      <TechnicalSandboxSection />

      <ProjectsSection />

      <footer className="px-7 pb-6 pt-16 md:px-11 md:pt-24 min-[1200px]:px-0">
        <div className="mx-auto w-full max-w-[1120px] text-center">
          <small className="font-heading tracking-wide">
            © {new Date().getFullYear()} h-waji / hamltail
          </small>
        </div>
      </footer>
    </main>
  );
}
