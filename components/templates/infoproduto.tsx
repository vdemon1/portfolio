"use client"

import { useState, type ReactNode } from "react"
import { Target, Rocket, MessageCircle, TrendingUp, Lock, Shield } from "lucide-react"
import Image from "next/image"

export function InfoprodutoTemplate() {
  return (
    <div className="overflow-x-hidden text-white" style={{ background: "#0A0A0E", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(138,43,226,0.2)_0%,rgba(10,10,14,1)_60%)] px-4 sm:px-5 py-12 sm:py-[60px]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }} />
        <div className="relative z-10 mx-auto max-w-[1000px] text-center">
          <div className="mb-6 sm:mb-8 inline-block rounded-full border border-[#00FF66] bg-[#00FF66]/10 px-4 py-2 font-bold text-[#00FF66] text-xs sm:text-sm">
            <Lock className="mr-2 inline h-4 w-4" /> VAGAS LIMITADAS — FECHA EM BREVE
          </div>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", textShadow: "0 0 20px rgba(0,255,102,0.3)" }} className="mb-5 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
            A estratégia secreta para fazer{" "}
            <span className="bg-gradient-to-r from-[#00FF66] to-[#00b347] bg-clip-text text-transparent">
              R$10.000
            </span>{" "}
            em 30 dias
          </h1>
          <p className="mx-auto mb-10 sm:mb-[50px] max-w-[800px] text-base sm:text-xl md:text-2xl font-normal text-white/90">
            Descubra o funil exato que estamos usando para vender produtos digitais todos os dias no orgânico e com tráfego pago de baixo custo.
          </p>

          {/* Video Mockup */}
          <div
            className="relative mx-auto mb-8 sm:mb-10 flex max-w-[800px] cursor-pointer items-center justify-center overflow-hidden rounded-[15px] border-2 border-[#222] bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{ aspectRatio: "16/9" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative text-5xl sm:text-7xl text-[#00FF66]" style={{ textShadow: "0 0 20px rgba(0,255,102,0.5)" }}>
              ▶
            </div>
          </div>

          {/* CTA */}
          <div className="relative inline-block">
            <div className="absolute -inset-[5px] rounded-[10px] bg-gradient-to-r from-[#00FF66] via-[#8A2BE2] to-[#00FF66] opacity-70 blur-[15px]" style={{ animation: "spinGradient 3s linear infinite" }} />
            <a
              href="#_"
              className="relative z-10 inline-block rounded-lg bg-[#00FF66] px-8 py-5 sm:px-[50px] sm:py-6 text-base sm:text-xl font-black uppercase text-black transition-all hover:scale-105 hover:bg-[#00e65c]"
            >
              SIM, QUERO ACESSO AO MÉTODO!
            </a>
          </div>
          <div className="mt-4 text-xs sm:text-sm text-[#888899]">
            <Shield className="mr-2 inline h-4 w-4" /> Pagamento 100% Seguro | Acesso Imediato
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#0c0c12] py-14 sm:py-[100px]">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-5">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-10 sm:mb-[50px] text-center text-2xl sm:text-3xl md:text-4xl font-black uppercase">O que está incluso:</h2>
          <div className="grid gap-5 sm:gap-8 sm:grid-cols-2">
            <BulletCard
              icon={<Target className="h-7 w-7 sm:h-8 sm:w-8" />}
              title="Funil Infalível"
              description="Copie e cole a estrutura exata das nossas páginas de alta conversão."
            />
            <BulletCard
              icon={<Rocket className="h-7 w-7 sm:h-8 sm:w-8" />}
              title="Tráfego Master"
              description="Como anunciar no Facebook ADS pagando centavos pelo clique."
            />
            <BulletCard
              icon={<MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />}
              title="Scripts de Fechamento"
              description="Textos prontos para você quebrar objeções e converter leads no 1 a 1."
            />
            <BulletCard
              icon={<TrendingUp className="h-7 w-7 sm:h-8 sm:w-8" />}
              title="Escala e LTV"
              description="Aprenda a vender produtos mais caros para o mesmo cliente repetidamente."
            />
          </div>
        </div>
      </section>

      {/* Proofs */}
      <section className="py-14 sm:py-[100px] text-center">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-5">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-10 sm:mb-[50px] text-2xl sm:text-3xl md:text-4xl font-black uppercase">Resultados de Quem Aplica</h2>
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <ProofCard
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
              name="Marcos T."
              content="Eu não sabia nada de marketing digital. Apliquei o que está no módulo 2 e fiz minha primeira venda no terceiro dia. Hoje já escalo anúncios, bizarro!"
            />
            <ProofCard
              avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              name="Aline R."
              content="O suporte é irretocável. Melhor investimento que já fiz, o script de WhatsApp paga o curso inteiro sozinho."
            />
          </div>

          <div className="mt-12 sm:mt-[60px]">
            <a
              href="#_"
              className="inline-block rounded-lg bg-[#00FF66] px-8 py-5 sm:px-[50px] sm:py-6 text-base sm:text-xl font-black uppercase text-black transition-all hover:scale-105 hover:bg-[#00e65c]"
            >
              QUERO GARANTIR MINHA VAGA AGORA
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 py-14 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-5">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-8 sm:mb-10 text-center text-2xl sm:text-3xl md:text-4xl font-black uppercase">Como Funciona?</h2>
          <FAQItem
            question="Terei suporte para dúvidas?"
            answer="Sim! Você terá acesso à nossa comunidade secreta no WhatsApp e suporte 1 a 1 estruturado para não te deixar travar em nenhuma fase."
          />
          <FAQItem
            question="Quando recebo o acesso?"
            answer="Imediatamente após a aprovação do seu pagamento via PIX ou Cartão de Crédito. Os dados chegarão no e-mail que você cadastrar no checkout."
          />
        </div>
      </section>

      {/* WhatsApp Float */}
      <a
        href="#_"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-14 w-14 sm:h-[65px] sm:w-[65px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @keyframes spinGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  )
}

function BulletCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-[15px] border-t-2 border-[#00FF66] bg-gradient-to-br from-[#151520] to-[#0d0d14] p-6 sm:p-8 text-left transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,102,0.1)]">
      <div className="mb-4 text-[#00FF66]">{icon}</div>
      <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-2 text-lg sm:text-xl font-bold">{title}</h3>
      <p className="text-sm sm:text-base text-[#888899]">{description}</p>
    </div>
  )
}

function ProofCard({ avatar, name, content }: { avatar: string; name: string; content: string }) {
  return (
    <div className="flex w-full max-w-[600px] items-start sm:items-center gap-4 sm:gap-5 rounded-[15px] border border-white/10 bg-white/5 p-6 sm:p-8 text-left backdrop-blur-[10px]">
      <Image src={avatar} alt={name} width={70} height={70} className="h-[55px] w-[55px] sm:h-[70px] sm:w-[70px] rounded-full border-2 border-[#00FF66] object-cover flex-shrink-0" />
      <div>
        <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-1 text-base sm:text-lg font-bold text-[#00FF66]">{name}</h3>
        <p className="text-sm sm:text-base text-[#888899]">&quot;{content}&quot;</p>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 rounded-[10px] border border-white/10 bg-white/5">
      <button
        className="flex w-full items-center justify-between p-4 sm:p-5 text-left font-bold text-[#00FF66] text-sm sm:text-base gap-4"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span>{question}</span>
        <span className="text-xl sm:text-2xl flex-shrink-0">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed text-[#888899]">{answer}</p>}
    </div>
  )
}
