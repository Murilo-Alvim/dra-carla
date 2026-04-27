'use client';

import { useState } from 'react';

const depoimentos = [
  {
    nome:  'Ana Paula M.',
    texto: 'Tinha muito medo de tratamento de canal, mas a Dra. Carla me deixou completamente à vontade. Procedimento sem dor, atendimento humanizado e resultado perfeito. Recomendo de olhos fechados!',
    avaliacao: 5,
  },
  {
    nome:  'Roberto S.',
    texto: 'Fiz retratamento de canal com a Dra. Carla após outro dentista não ter tido sucesso. Ela foi extremamente detalhista, explicou todo o processo e o resultado foi excelente. Profissional incrível.',
    avaliacao: 5,
  },
  {
    nome:  'Fernanda L.',
    texto: 'Atendimento de urgência impecável. Cheguei com muita dor e fui atendida com rapidez e cuidado. A doutora é muito competente e toda a equipe é muito atenciosa.',
    avaliacao: 5,
  },
  {
    nome:  'Carlos E.',
    texto: 'Precisei de cirurgia parendodôntica e a Dra. Carla conduziu tudo com maestria. Pós-operatório tranquilo, sem complicações. Gratidão por salvar meu dente!',
    avaliacao: 5,
  },
];

export default function Depoimentos() {
  const [ativo, setAtivo] = useState(0);

  return (
    <section id="depoimentos" className="py-28 bg-[#F7F3EE] relative overflow-hidden">
      <div className="absolute top-0 right-16 w-px h-full bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-xs tracking-widest3 uppercase font-sans mb-5">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1A17] font-light">
            O que dizem nossos{' '}
            <span className="italic text-[#C9A96E]">pacientes</span>
          </h2>
        </div>

        {/* Depoimento ativo */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="relative">
            {/* Aspas decorativas */}
            <span className="font-display text-[120px] text-[#C9A96E]/10 font-light leading-none absolute -top-8 left-0 select-none">
              
            </span>
            <p className="font-display text-xl lg:text-2xl text-[#3D3528] font-light leading-relaxed italic relative z-10 px-8">
              {depoimentos[ativo].texto}
            </p>
          </div>

          {/* Estrelas */}
          <div className="flex justify-center gap-1 mt-8 mb-4">
            {Array.from({ length: depoimentos[ativo].avaliacao }).map((_, i) => (
              <span key={i} className="text-[#C9A96E] text-sm">★</span>
            ))}
          </div>

          <p className="text-[#1C1A17] font-medium text-sm tracking-wide">
            {depoimentos[ativo].nome}
          </p>
          <p className="text-[#7A7060] text-xs mt-1">Paciente verificada</p>
        </div>

        {/* Navegação */}
        <div className="flex justify-center gap-3">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => setAtivo(i)}
              className={`transition-all duration-300 ${
                i === ativo
                  ? 'w-8 h-1.5 bg-[#C9A96E]'
                  : 'w-1.5 h-1.5 rounded-full bg-[#C9A96E]/30 hover:bg-[#C9A96E]/60'
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>

        {/* Grid de mini cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {depoimentos.map((d, i) => (
            <button
              key={d.nome}
              onClick={() => setAtivo(i)}
              className={`text-left p-5 border transition-all duration-300 ${
                i === ativo
                  ? 'border-[#C9A96E] bg-[#C9A96E]/5'
                  : 'border-[#EDE8E0] bg-white hover:border-[#C9A96E]/50'
              }`}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: d.avaliacao }).map((_, j) => (
                  <span key={j} className="text-[#C9A96E] text-[10px]">★</span>
                ))}
              </div>
              <p className="text-[#1C1A17] text-xs font-medium mb-1">{d.nome}</p>
              <p className="text-[#7A7060] text-[11px] leading-relaxed line-clamp-2">
                {d.texto}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}