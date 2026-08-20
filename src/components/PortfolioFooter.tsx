import Container from "@/components/Container";

export default function PortfolioFooter() {
  return (
    <footer className="px-7 pb-6 pt-16 md:px-11 md:pt-24 min-[1200px]:px-0">
      <Container>
        <div className="text-center">
          <small className="font-heading tracking-wide">
            © {new Date().getFullYear()} h-waji / hamltail
          </small>
        </div>
      </Container>
    </footer>
  );
}
