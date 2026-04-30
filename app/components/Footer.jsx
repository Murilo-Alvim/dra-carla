export default function Footer() {
  return (
    <footer className="bg-[#141210] py-12 border-t border-[#C9A96E]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-10 mb-10">
          {/* Marca */}
          <div>
            <p className="font-display text-xl text-white font-light mb-1">Dra. Carla Francisco</p>
            <p className="text-[#C9A96E] text-[10px] tracking-widest uppercase mb-4">Especialista em Endodontia</p>
            <p className="text-[#7A7060] text-xs leading-relaxed font-light">
              Cuidando da saúde bucal com excelência, tecnologia e humanidade.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-[10px] tracking-widest uppercase mb-4">Navegação</p>
            <div className="space-y-2">
              {['Início', 'Sobre', 'Especialidade', 'Serviços', 'Depoimentos', 'Contato'].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                  className="block text-[#7A7060] text-xs hover:text-[#C9A96E] transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contato rápido */}
          <div>
            <p className="text-white text-[10px] tracking-widest uppercase mb-4">Contato Rápido</p>
            <div className="space-y-3">
              <p className="text-[#7A7060] text-xs">(13) 97409-5780</p>
              <p className="text-[#7A7060] text-xs">carlafrancisco1451@gmail.com</p>
              <p className="text-[#7A7060] text-xs">Santos, SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#C9A96E]/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-[#7A7060] text-[11px]">
            © {new Date().getFullYear()} Dra. Carla Francisco — Todos os direitos reservados.
          </p>
          <p className="text-[#7A7060] text-[11px]">
            CRO · CFO · Especialidade Registrada
          </p>
        </div>
      </div>
    </footer>
  );
}