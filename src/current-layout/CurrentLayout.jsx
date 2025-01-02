import { Footer, Navbar } from "../components";
import {
  AboutSection,
  ContactSection,
  HomeSection,
  ProjectSection,
  Services,
} from "../section";

export const CurrentLayout = () => {
  return (
    <>
      <header className="flex items-center justify-center">
        <Navbar />
      </header>
      <main className="">
        <HomeSection />
        <AboutSection />
        <Services />
        <ProjectSection />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
