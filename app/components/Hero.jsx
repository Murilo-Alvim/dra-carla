'use client';
import Image from 'next/image';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1C1A17]"
    >
      {/* Fundo texturizado */}
      <div className="absolute inset-0 bg-grain opacity-60" />

      {/* Gradiente lateral dourado */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#C9A96E]/10 to-transparent" />

      {/* Linha vertical decorativa */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/30 to-transparent hidden lg:block" />

      {/* Círculo decorativo */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#C9A96E]/15 hidden lg:block" />
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-[#C9A96E]/10 hidden lg:block" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#C9A96E] text-xs tracking-widest3 uppercase font-sans mb-6">
            Especialista em Endodontia
          </p>

          <h1 className="font-display text-white leading-[1.05]">
            <span className="block text-5xl lg:text-7xl font-light">
              Cuidando da
            </span>
            <span className="block text-5xl lg:text-7xl font-light italic text-[#C9A96E] mt-1">
              saúde do seu
            </span>
            <span className="block text-5xl lg:text-7xl font-light mt-1">
              sorriso.
            </span>
          </h1>

          <div className="w-16 h-px bg-[#C9A96E] mt-10 mb-8" />

          <p className="text-[#7A7060] text-base leading-relaxed max-w-md font-sans font-light">
            Tratamentos endodônticos com precisão, tecnologia avançada e o
            cuidado que você merece. Sua confiança é a nossa maior conquista.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contato"
              className="px-8 py-4 bg-[#C9A96E] text-[#1C1A17] text-xs tracking-widest uppercase font-medium hover:bg-[#E2C99A] transition-colors duration-300"
            >
              Agendar Consulta
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 border border-[#C9A96E]/40 text-[#C9A96E] text-xs tracking-widest uppercase font-medium hover:border-[#C9A96E] transition-colors duration-300"
            >
              Saiba Mais
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16">
            {[
              { num: '10+', label: 'Anos de experiência' },
              { num: '5k+', label: 'Pacientes atendidos' },
              { num: '98%', label: 'Satisfação' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-white font-light">{s.num}</p>
                <p className="text-[#7A7060] text-xs mt-1 font-sans">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Foto placeholder elegante */}
        <div
          className={`relative hidden lg:flex justify-center transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative w-[380px] h-[500px]">
            {/* Moldura deslocada */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A96E]/30" />
            {/* Foto (placeholder com gradiente) */}
            <div className="relative w-full h-full bg-gradient-to-b from-[#2A2620] to-[#1C1A17] overflow-hidden flex items-end justify-center">
              {/* Substituir por <Image src="/dra-carla.jpg" fill alt="Dra. Carla Francisco" className="object-cover" /> */}
              <Image
  src="/Foto_DoutoraCarla.jpeg"
  fill
  alt="Dra. Carla Francisco"
  className="object-cover object-top"
  priority
/>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#C9A96E] text-[#1C1A17] px-5 py-4 text-center">
              <p className="font-display text-2xl font-light">10+</p>
              <p className="text-[9px] tracking-widest uppercase font-medium mt-0.5">Anos de<br/>Excelência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7A7060]">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A96E]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}