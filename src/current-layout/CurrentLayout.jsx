import { Footer, Navbar } from "../components";
import {
  AboutSection,
  ContactSection,
  HomeSection,
  Services,
} from "../section";

export const CurrentLayout = () => {
  return (
    <>
      <header className="flex items-center justify-center">
        <Navbar />
      </header>
      <main className="mt-[120px] ">
        <HomeSection />
        <AboutSection />
        <Services />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
