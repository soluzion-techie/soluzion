import { Footer, Navbar } from "../components";

export const CurrentLayout = () => {
  return (
    <>
      <header className="flex items-center justify-center">
        <Navbar />
      </header>
      <main className="mt-[120px] h-[10000vh]">
        <h1>Hello World</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
