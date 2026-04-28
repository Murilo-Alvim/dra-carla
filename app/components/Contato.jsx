'use client';

import { useState } from 'react';

export default function Contato() {
  const [form, setForm]   = useState({ nome: '', telefone: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você integra com seu backend / WhatsApp API / EmailJS
    console.log('Formulário:', form);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ nome: '', telefone: '', email: '', mensagem: '' });
  };

  const inputClass =
    'w-full bg-[#252320] border border-[#C9A96E]/15 text-white placeholder-[#7A7060] px-4 py-3.5 text-sm font-light focus:outline-none focus:border-[#C9A96E]/60 transition-colors duration-300';

  return (
    <section id="contato" className="py-28 bg-[#1C1A17] relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20">
        {/* Informações */}
        <div>
          <p className="text-[#C9A96E] text-xs tracking-widest3 uppercase font-sans mb-5">
            Entre em Contato
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-light leading-tight mb-8">
            Agende sua{' '}
            <span className="italic text-[#C9A96E]">consulta</span>
          </h2>

          <div className="w-12 h-px bg-[#C9A96E] mb-10" />

          <p className="text-[#7A7060] leading-relaxed mb-12 font-light">
            Entre em contato para agendar sua avaliação. Atendemos em horários
            flexíveis para sua comodidade. Nossa equipe responde em até 24 horas úteis.
          </p>

          {/* Informações de contato */}
          <div className="space-y-6">
            {[
              {
                icon: '📍',
                titulo: 'Endereço',
                info:  'Praça da Indepência, 11 — Sala 16\nSantos, SP — CEP 11060-100',
              },
              {
                icon: '📞',
                titulo: 'Telefone / WhatsApp',
                info:  '(13) 97409-5780',
              },
              {
                icon: '✉️',
                titulo: 'E-mail',
                info:  'carlafrancisco1451@gmail.com',
              },
              {
                icon: '🕐',
                titulo: 'Horário de Atendimento',
                info:  'Seg a Sex: 8h às 18h',
              },
            ].map((c) => (
              <div key={c.titulo} className="flex gap-5">
                <span className="text-xl shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <p className="text-[#C9A96E] text-xs tracking-widest uppercase font-medium mb-1">{c.titulo}</p>
                  <p className="text-[#7A7060] text-sm leading-relaxed whitespace-pre-line font-light">{c.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/5513974095780?text=Olá%20Dra.%20Carla,%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-7 py-4 bg-[#25D366] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#1da851] transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>

        {/* Formulário */}
        <div>
          <div className="bg-[#252320] border border-[#C9A96E]/10 p-8 lg:p-10">
            <h3 className="font-display text-2xl text-white font-light mb-8">
              Envie uma mensagem
            </h3>

            {enviado && (
              <div className="mb-6 px-4 py-3 border border-[#C9A96E]/40 bg-[#C9A96E]/10 text-[#C9A96E] text-sm">
                ✓ Mensagem enviada com sucesso! Retornaremos em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[#7A7060] text-[10px] tracking-widest uppercase mb-2 block">Nome</label>
                  <input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[#7A7060] text-[10px] tracking-widest uppercase mb-2 block">Telefone</label>
                  <input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(13) 99999-9999"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-[#7A7060] text-[10px] tracking-widest uppercase mb-2 block">E-mail</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-[#7A7060] text-[10px] tracking-widest uppercase mb-2 block">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Descreva seu caso ou dúvida..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9A96E] text-[#1C1A17] text-xs tracking-widest uppercase font-medium hover:bg-[#E2C99A] transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </div>

              <p className="text-[#7A7060] text-[11px] text-center">
                Suas informações são tratadas com total confidencialidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}