import { useState, useEffect } from "react";
import { Menu, MoveRight, X } from "lucide-react";
import { ROUTES } from "../../../helpers/data/Data";
import { Button } from "../../ui/button/Button";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Add a useEffect to control the mobile nav animation after mount
  useEffect(() => {
    // Set a small delay to trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsMobileNavOpen(false); // Ensures it's hidden initially
    }, 100); // Delay time in milliseconds (can be adjusted)

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 600);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        "fixed top-3 left-1/2 transform -translate-x-1/2  w-[95vw] sm:w-[80vw] bg-[#F2F0E3] bg-opacity-90 border border-[#202020] shadow-md z-50 p-4 rounded-xl flex justify-between items-center "
      }
    >
      <div className="w-[10vw] ">
        <h1
          className={
            hasScrolled
              ? "archivo text-3xl font-bold animate-slideIn"
              : "archivo text-3xl font-bold  animate-slideOut"
          }
        >
          {hasScrolled ? "SZ." : "Soluzion."}
        </h1>
      </div>

      {/* Desktop Nav */}
      <ul className="items-center gap-[1.3vw] inter hidden sm:flex">
        {ROUTES.map((route) => (
          <li key={route.id}>
            <a
              href={route.path}
              className="text-gray-800 hover:text-black hover:underline underline-offset-4 transition-all duration-300"
            >
              {route.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-[#202020] text-white flex flex-col items-center justify-center ${
          isMobileNavOpen
            ? "animate-slideIn opacity-100"
            : "opacity-0 pointer-events-none "
        } z-50`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMobileNav}
          className="absolute top-5 right-5 text-white"
        >
          <X size={30} />
        </button>

        {/* Nav Links */}
        <ul className="flex flex-col gap-8 text-2xl inter">
          {ROUTES.map((route) => (
            <li key={route.id} className="group">
              <a
                href={route.path}
                onClick={toggleMobileNav}
                className="relative text-white font-medium tracking-wider"
              >
                {route.name}
                {/* Decorative Line */}
                <span className="absolute left-0 bottom-[-5px] h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-[1.3vw]">
        <Button label="Get Started" cn="bg-[#202020] text-white rounded-lg p-2">
          Get Started <MoveRight size={20} />
        </Button>
        <Button
          label="Menu"
          cn="text-gray-900 rounded-lg p-2 block sm:hidden"
          onClick={toggleMobileNav}
        >
          <Menu size={30} />
        </Button>
      </div>
    </nav>
  );
};
