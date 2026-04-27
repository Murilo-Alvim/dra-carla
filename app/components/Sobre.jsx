export default function Sobre() {
  return (
    <section id="sobre" className="py-28 bg-[#F7F3EE] relative overflow-hidden">
      {/* Decoração fundo */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#C9A96E]/5 -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center">
        {/* Lado esquerdo — decorativo */}
        <div className="relative">
          <div className="relative w-full aspect-[4/5] bg-[#EDE8E0] overflow-hidden">
            {/* Placeholder foto */}
            {/* <Image src="/sobre.jpg" fill alt="Consultório" className="object-cover" /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border border-[#C9A96E]/40 mx-auto flex items-center justify-center mb-4">
                  <span className="text-3xl">🦷</span>
                </div>
                <p className="text-[#7A7060] text-sm font-display italic">Consultório moderno</p>
              </div>
            </div>
          </div>

          {/* Card flutuante */}
          <div className="absolute -right-8 bottom-12 bg-[#1C1A17] text-white px-6 py-5 max-w-[200px] hidden lg:block">
            <p className="font-display text-4xl text-[#C9A96E] font-light">CRO</p>
            <p className="text-xs text-[#7A7060] mt-1 tracking-wide">Registro Ativo<br/>Conselho Regional</p>
          </div>

          {/* Linha decorativa */}
          <div className="absolute -left-6 top-12 bottom-12 w-px bg-[#C9A96E]/30 hidden lg:block" />
        </div>

        {/* Lado direito — texto */}
        <div>
          <p className="text-[#C9A96E] text-xs tracking-widest3 uppercase font-sans mb-5">
            Sobre a Especialista
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1A17] font-light leading-tight mb-6">
            Dedicação à saúde<br />
            <span className="italic text-[#C9A96E]">bucal que transforma</span>
          </h2>

          <div className="w-12 h-px bg-[#C9A96E] mb-8" />

          <p className="text-[#7A7060] leading-relaxed mb-5 font-light">
            A Dra. Carla Francisco é especialista em Endodontia com mais de 10 anos de
            experiência dedicados a oferecer tratamentos de canal modernos, indolores e
            precisos. Sua formação acadêmica sólida e atualização constante garantem
            os melhores resultados para cada paciente.
          </p>
          <p className="text-[#7A7060] leading-relaxed mb-10 font-light">
            Acredita que um tratamento bem-feito vai além da técnica: é sobre acolhimento,
            escuta e confiança. Cada sorriso cuidado é uma conquista compartilhada.
          </p>

          {/* Formação */}
          <div className="space-y-4">
            {[
              { titulo: 'Especialização em Endodontia', local: 'Associação Brasileira de Odontologia' },
              { titulo: 'Graduação em Odontologia',     local: 'Universidade de Ribeirão Preto - UNAERP' },
              { titulo: 'Aperfeiçoamento em Microscopia', local: 'Sociedade Brasileira de Endodontia' },
            ].map((f) => (
              <div key={f.titulo} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-2 shrink-0" />
                <div>
                  <p className="text-[#1C1A17] font-medium text-sm">{f.titulo}</p>
                  <p className="text-[#7A7060] text-xs mt-0.5">{f.local}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}