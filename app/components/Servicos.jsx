const servicos = [
  {
    titulo: 'Tratamento de Canal',
    desc:   'Remoção da polpa infectada, limpeza e selamento dos canais radiculares. Salva o dente natural com conforto e precisão.',
    detalhe: 'Procedimento de 1 a 3 sessões',
  },
  {
    titulo: 'Retratamento Endodôntico',
    desc:   'Revisão de tratamentos anteriores que não obtiveram sucesso. Desobturação, relimpeza e novo selamento dos canais.',
    detalhe: 'Casos de reinfecção',
  },
  {
    titulo: 'Cirurgia Parendodôntica',
    desc:   'Procedimento cirúrgico para resolver lesões apicais persistentes quando o tratamento convencional não é suficiente.',
    detalhe: 'Apicectomia e retroobturação',
  },
  {
    titulo: 'Urgência Odontológica',
    desc:   'Atendimento de emergência para dores agudas de origem pulpar. Alívio imediato com diagnóstico e tratamento inicial.',
    detalhe: 'Atendimento prioritário',
  },
  {
    titulo: 'Diagnóstico por Imagem',
    desc:   'Radiografia periapical e tomografia cone-beam para diagnóstico preciso de lesões endodônticas complexas.',
    detalhe: 'Tecnologia digital',
  },
  {
    titulo: 'Trauma Dentário',
    desc:   'Tratamento de dentes fraturados, luxados ou avulsionados por acidentes. Protocolos atualizados para melhor prognóstico.',
    detalhe: 'Protocolo de urgência',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-28 bg-[#EDE8E0] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C9A96E]/8 translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#C9A96E] text-xs tracking-widest3 uppercase font-sans mb-5">
              Serviços
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1C1A17] font-light leading-tight">
              Tratamentos que{' '}
              <span className="italic text-[#C9A96E]">preservam</span>
              <br />seu sorriso natural
            </h2>
          </div>
          <p className="text-[#7A7060] max-w-xs text-sm leading-relaxed font-light lg:text-right">
            Cada tratamento é realizado com tecnologia de ponta e atenção individualizada a cada paciente.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A96E]/15">
          {servicos.map((s, i) => (
            <div
              key={s.titulo}
              className="bg-[#EDE8E0] p-8 hover:bg-[#F7F3EE] transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="font-display text-5xl text-[#C9A96E]/25 font-light leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[#C9A96E] text-[9px] tracking-widest uppercase border border-[#C9A96E]/40 px-2 py-1 font-medium">
                  {s.detalhe}
                </span>
              </div>
              <h3 className="font-display text-xl text-[#1C1A17] font-light mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                {s.titulo}
              </h3>
              <p className="text-[#7A7060] text-sm leading-relaxed font-light">
                {s.desc}
              </p>
              <div className="w-0 h-px bg-[#C9A96E] mt-6 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contato"
            className="inline-block px-10 py-4 bg-[#1C1A17] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#C9A96E] hover:text-[#1C1A17] transition-colors duration-300"
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </section>
  );
}