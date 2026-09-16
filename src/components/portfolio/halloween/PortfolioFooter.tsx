import Container from "@/components/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function PortfolioFooter() {
  return (
    <footer className="px-7 pb-6 pt-16 md:px-11 md:pt-24 min-[1200px]:px-0">
      <Container>
        <div className="flex flex-col items-center gap-4 md:relative md:block md:text-center">
          <p className="font-heading text-base tracking-wide">
            © {new Date().getFullYear()} h-waji / hamltail
          </p>

          <div className="md:absolute md:left-3/4 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </footer>
  );
}
