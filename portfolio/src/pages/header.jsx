import React, { useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import MenuGridIcon from "../componentes/icons/GridMenu";

function PcLink({ name, href }) {
  return (
    <RouterLink to={href} className="group inline-flex flex-col items-center">
      <span className="whitespace-nowrap text-neutral-200 text-[20px] font-medium tracking-tight hover:text-white transition-colors leading-none">
        {name}
      </span>
      <span className="mt-1 block h-px bg-neutral-200 w-0 group-hover:w-full transition-all duration-300" />
    </RouterLink>
  );
}


// Hook to scroll to hash on location change
function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(location.hash.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
}

export default function Header() {
  const [hideHeader, setHideHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollToHash();

  // Faz o header desaparecer quando a rolagem passar metade da tela
  useEffect(() => {
    const handleScroll = () => {
      const halfway = window.innerHeight / 2; // metade da altura da tela
      setHideHeader(window.scrollY > halfway);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-neutral-900/80 backdrop-blur
        border-b border-neutral-800
        transition-all duration-700
        ${hideHeader ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        
        {/* Nome */}
        <RouterLink to="/home">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-neutral-100">
            João Rosa
          </h2>
        </RouterLink>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-6 text-neutral-200 hover:text-white transition-transform hover:scale-110 active:scale-95"
            aria-label="Toggle menu"
          >
            <MenuGridIcon open={menuOpen} />
          </button>

          <nav
            className={`
              absolute right-12 top-1/2 -translate-y-1/2
              flex gap-8 items-center
              transition-all duration-300 ease-out
              ${
                menuOpen
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }
            `}
          >
            <PcLink name="About me" href="/home#about" />
            <PcLink name="Skills" href="/home#Skills" />
            <PcLink name="Work" href="/home#Work" />
          </nav>
        </div>
      </div>
    </header>
  );
}
