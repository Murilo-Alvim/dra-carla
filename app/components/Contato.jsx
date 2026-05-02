export default function Contato() {
  return (
    <section id="contato" className="py-28 bg-[#1C1A17] relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-xs tracking-widest uppercase font-sans mb-5">
            Entre em Contato
          </p>
          <h2 className="font-display text-4xl lg:text-6xl text-white font-light leading-tight">
            Agende sua{' '}
            <span className="italic text-[#C9A96E]">consulta</span>
          </h2>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto mt-8" />
        </div>

        {/* Cards de informação */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C9A96E]/10 mb-16">
          {[
            { icon: '📍', titulo: 'Endereço',               info: 'Santos, SP' },
            { icon: '📞', titulo: 'Telefone',               info: '(13) 97409-5780' },
            { icon: '✉️', titulo: 'E-mail',                 info: 'carlafrancisco1451\n@gmail.com' },
            { icon: '🕐', titulo: 'Horário',                info: 'Seg a Sex: 8h às 18h\nSáb: 8h às 12h' },
          ].map((c) => (
            <div key={c.titulo} className="bg-[#252320] p-8 text-center hover:bg-[#2A2720] transition-colors duration-300">
              <span className="text-3xl block mb-4">{c.icon}</span>
              <p className="text-[#C9A96E] text-[10px] tracking-widest uppercase font-medium mb-3">{c.titulo}</p>
              <p className="text-[#7A7060] text-sm leading-relaxed whitespace-pre-line font-light">{c.info}</p>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="text-center">
          <p className="text-[#7A7060] text-base leading-relaxed mb-10 font-light max-w-xl mx-auto">
            Pronto para cuidar do seu sorriso? Entre em contato pelo WhatsApp e
            agende sua consulta com a Dra. Carla Francisco.
          </p>

          <a
            href="https://wa.me/5513974095780?text=Ol%C3%A1%20Dra.%20Carla%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white text-sm tracking-widest uppercase font-medium hover:bg-[#1da851] transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar pelo WhatsApp
          </a>

          <p className="text-[#7A7060] text-xs mt-6">
            Respondemos em até 24 horas úteis
          </p>
        </div>

      </div>
    </section>
  );
}