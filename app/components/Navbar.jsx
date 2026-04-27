'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'Início',       href: '#hero' },
  { label: 'Sobre',        href: '#sobre' },
  { label: 'Especialidade',href: '#especialidade' },
  { label: 'Serviços',     href: '#servicos' },
  { label: 'Depoimentos',  href: '#depoimentos' },
  { label: 'Contato',      href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F7F3EE]/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-light tracking-wide text-[#1C1A17]">
            Dra. Carla Francisco
          </span>
          <span className="text-[10px] tracking-widest2 uppercase text-[#C9A96E] font-sans font-medium">
            Endodontia · Especialista
          </span>
        </a>

        {/* Nav Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase text-[#3D3528] hover:text-[#C9A96E] transition-colors duration-300 font-sans font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-4 px-5 py-2.5 bg-[#C9A96E] text-[#1C1A17] text-xs tracking-widest uppercase font-medium hover:bg-[#B8935A] transition-colors duration-300"
          >
            Agendar
          </a>
        </nav>

        {/* Hamburger Mobile */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[#1C1A17] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[#1C1A17] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#1C1A17] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="bg-[#F7F3EE] border-t border-[#EDE8E0] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase text-[#3D3528] hover:text-[#C9A96E] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 bg-[#C9A96E] text-[#1C1A17] text-xs tracking-widest uppercase font-medium text-center"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
}