export default function Especialidade() {
  return (
    <section id="especialidade" className="py-28 bg-[#1C1A17] relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <p className="text-[#C9A96E] text-xs tracking-widest3 uppercase font-sans mb-5">
            A Especialidade
          </p>
          <h2 className="font-display text-4xl lg:text-6xl text-white font-light leading-tight">
            O que é{' '}
            <span className="italic text-[#C9A96E]">Endodontia?</span>
          </h2>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Texto explicativo */}
          <div>
            <p className="text-[#7A7060] text-lg leading-relaxed mb-6 font-light">
              A Endodontia é a especialidade da Odontologia que trata as doenças
              que afetam a polpa dentária — o interior do dente — e os tecidos
              ao redor da raiz.
            </p>
            <p className="text-[#7A7060] leading-relaxed mb-6 font-light">
              O tratamento de canal (endodontia) é o procedimento mais conhecido,
              realizado para salvar dentes comprometidos por infecção, inflamação
              ou trauma. Com tecnologia moderna e anestesia adequada, o
              tratamento é confortável e eficaz.
            </p>
            <p className="text-[#7A7060] leading-relaxed font-light">
              Na maioria dos casos, o dente tratado endodonticamente pode durar
              a vida toda, evitando extrações desnecessárias e preservando sua
              saúde bucal.
            </p>
          </div>

          {/* Cards de pilares */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🔬', titulo: 'Microscopia',    desc: 'Visão ampliada para máxima precisão nos canais radiculares.' },
              { icon: '📡', titulo: 'Localizador Apical', desc: 'Tecnologia digital para medição segura do comprimento do canal.' },
              { icon: '🌡️', titulo: 'Anestesia Avançada', desc: 'Protocolos modernos para um procedimento sem dor.' },
              { icon: '🦷', titulo: 'Biocompatível',   desc: 'Materiais certificados que respeitam seu organismo.' },
            ].map((p) => (
              <div
                key={p.titulo}
                className="bg-[#252320] border border-[#C9A96E]/10 p-6 hover:border-[#C9A96E]/30 transition-colors duration-300"
              >
                <span className="text-2xl block mb-3">{p.icon}</span>
                <p className="text-white text-sm font-medium mb-2">{p.titulo}</p>
                <p className="text-[#7A7060] text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faixa de processo */}
        <div className="border-t border-[#C9A96E]/15 pt-16">
          <p className="text-[#C9A96E] text-xs tracking-widest3 uppercase font-sans text-center mb-12">
            Como Funciona o Tratamento
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: '01', titulo: 'Avaliação',    desc: 'Radiografia e exame clínico detalhado para diagnóstico preciso.' },
              { n: '02', titulo: 'Anestesia',    desc: 'Aplicação de anestesia local para total conforto durante o procedimento.' },
              { n: '03', titulo: 'Tratamento',   desc: 'Limpeza, modelagem e desinfecção dos canais com instrumentos rotatórios.' },
              { n: '04', titulo: 'Obturação',    desc: 'Selamento definitivo do canal para prevenir reinfecções.' },
            ].map((e) => (
              <div key={e.n} className="text-center">
                <p className="font-display text-5xl text-[#C9A96E]/20 font-light mb-3">{e.n}</p>
                <p className="text-white text-sm font-medium mb-2">{e.titulo}</p>
                <p className="text-[#7A7060] text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}