import React, { useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import MenuGridIcon from "../componentes/GridMenu";

// fn chamada em baixo para dar o nome e o link para onde ir no menu 
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

  useScrollToHash(); //chama fn responsavel por dar scroll quando clicamos no menu 

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-neutral-800 transition-all duration-700
          ${hideHeader ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
          
        {/* Container do header (limita largura define altura e alinha) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">

          {/* Nome */}
          <RouterLink to="/home">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-neutral-100">
              João Rosa
            </h2>
          </RouterLink>


          <div className="flex items-center relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="ml-6 text-neutral-200 hover:text-white transition-transform hover:scale-110 active:scale-95" aria-label="Toggle menu">
              <MenuGridIcon open={menuOpen} />
            </button>

            <nav
              // md = 768px (para pc) ou mais ou seja telemovel < 768 e pc > 768 
              // hidden md:flex = mobile (<768px): hidden / md e acima (≥768px): flex
              className={`absolute top-full right-0 mt-2 w-44 origin-top-right rounded-xl border border-neutral-800
              bg-neutral-900/95 backdrop-blur transition-all duration-200 ease-out
              md:mt-0 md:w-auto md:rounded-none md:border-none md:bg-transparent md:backdrop-blur-0 md:shadow-none
              md:right-12 md:top-1/2 md:-translate-y-1/2 md:flex md:flex-row md:gap-8 md:items-center
              ${menuOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}>
              
              {/* Telemovel layout (especie menu dropDown) */}
              <div className="flex flex-col md:hidden py-2">
                <RouterLink to="/home#about" className="px-4 py-2 text-neutral-200 hover:bg-white/5 hover:text-white transition" onClick={() => setMenuOpen(false)}>
                  About me
                </RouterLink>

                <RouterLink to="/home#Skills" className="px-4 py-2 text-neutral-200 hover:bg-white/5 hover:text-white transition"onClick={() => setMenuOpen(false)}>
                  Skills
                </RouterLink>

                <RouterLink to="/home#Work" className="px-4 py-2 text-neutral-200 hover:bg-white/5 hover:text-white transition"onClick={() => setMenuOpen(false)}>
                  Work
                </RouterLink>
              </div>

              {/* DESKTOP layout */}
              <div className="hidden md:flex gap-8 items-center">
                <PcLink name="About me" href="/home#about" />
                <PcLink name="Skills" href="/home#Skills" />
                <PcLink name="Work" href="/home#Work" />
              </div>
            </nav>

          </div>
        </div>
      </header>
    {/* Spacer->  empurra o conteudo para baixo no telemovel  */}
    <div className="h-14 sm:h-16" />
  </>
);
}
