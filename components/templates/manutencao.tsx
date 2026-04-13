"use client"

import { useState, type ReactNode } from "react"
import { Zap, Droplets, Wrench, Star, ChevronDown } from "lucide-react"
import Image from "next/image"

export function ManutencaoTemplate() {
  return (
    <div className="overflow-x-hidden text-[#E0E0E0]" style={{ background: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[85vh] sm:min-h-[90vh] items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#0A0A0A]/85 to-[#0A0A0A]/60 sm:to-[#0A0A0A]/40" />
        <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-5 py-16 sm:py-0 w-full">
          <div className="max-w-[580px]">
            <div className="mb-4 sm:mb-5 inline-block rounded-full border border-[#FF5A00] bg-[#FF5A00]/10 px-3 py-1.5 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#FF5A00]">
              <Zap className="mr-1.5 inline h-3.5 w-3.5 sm:h-4 sm:w-4" /> PRONTO ATENDIMENTO 24H
            </div>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-2.5 text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-tight text-white">
              Emergência?{" "}
              <span className="block sm:inline">Nós resolvemos no <span className="text-[#FF5A00]">ESTALO.</span></span>
            </h1>
            <p className="mb-8 sm:mb-10 text-base sm:text-xl leading-relaxed">
              Eletricista, encanador e marido de aluguel. Confiança, agilidade e preço justo para você não ficar na mão na hora que mais precisa.
            </p>
            <a
              href="#_"
              className="inline-flex items-center gap-2 bg-[#FF5A00] px-7 py-4 sm:px-10 sm:py-5 text-base sm:text-xl font-bold uppercase text-white shadow-[0_0_20px_rgba(255,90,0,0.4)] transition-all hover:scale-[1.02] hover:bg-[#FF7322] hover:shadow-[0_0_30px_rgba(255,90,0,0.6)] rounded-sm"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar Técnico Agora
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20 pb-16 sm:pb-[120px]">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-5">
          <div className="mb-10 sm:mb-[50px] text-center">
            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white">Serviços Rápidos</h2>
            <p className="text-sm sm:text-base text-[#AAA]">Soluções completas para residências e comércios.</p>
          </div>
          <div className="grid gap-5 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
            <ServiceCard
              icon={<Zap className="h-10 w-10 sm:h-12 sm:w-12 text-[#FF5A00]" />}
              title="Elétrica"
              description="Reparo de curtos, troca de fiação, instalação de chuveiros e quadros de força com total segurança NBR."
            />
            <ServiceCard
              icon={<Droplets className="h-10 w-10 sm:h-12 sm:w-12 text-[#FF5A00]" />}
              title="Hidráulica"
              description="Contenção de vazamentos, desentupimentos rápidos, instalação de torneiras e reparos em tubulações."
            />
            <ServiceCard
              icon={<Wrench className="h-10 w-10 sm:h-12 sm:w-12 text-[#FF5A00]" />}
              title="Mão na Massa"
              description="Montagem de móveis, instalação de suportes de TV, quadros, prateleiras e pequenos reparos do dia a dia."
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-[#333] bg-[#050505] py-12 sm:py-[50px]">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-5">
          <div className="mb-8 text-center">
            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white">Últimas Avaliações</h2>
          </div>
          <div className="grid gap-5 sm:gap-8 sm:grid-cols-2">
            <ReviewCard
              avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
              name="Carlos Mendes"
              content="Meu painel elétrico entrou em curto 2 da manhã. A equipe chegou em 25 minutos e resolveu o problema perfeitamente."
            />
            <ReviewCard
              avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
              name="Ana Silva"
              content="Serviço extremamente limpo e profissional. Instalaram meu ar condicionado e consertaram um vazamento no mesmo dia."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1100px] px-4 sm:px-5 py-14 sm:py-[100px]">
        <div className="mb-10 sm:mb-[50px] text-center">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white">Perguntas Comuns</h2>
        </div>
        <FAQItem
          question="Vocês cobram taxa de visitação?"
          answer="A taxa de visita é isenta caso o orçamento do reparo seja aprovado no momento da avaliação. Trabalhamos com total transparência."
        />
        <FAQItem
          question="Aceitam cartão de crédito?"
          answer="Sim, aceitamos todas as bandeiras de crédito, débito e PIX. Serviços complexos podem ser parcelados em até 6x sem juros."
        />
      </section>

      {/* WhatsApp Float */}
      <a
        href="#_"
        className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 flex h-14 w-14 sm:h-[70px] sm:w-[70px] animate-[pulse_2s_infinite] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.6)]"
      >
        <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="group relative z-10 border-l-[5px] border-[#FF5A00] bg-[#1E1E1E] p-7 sm:p-10 transition-all overflow-hidden cursor-pointer">
      <div className="absolute inset-0 -z-10 origin-right scale-x-0 bg-[#FF5A00] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
      <div className="mb-5 transition-colors group-hover:text-white">{icon}</div>
      <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-black uppercase text-white">{title}</h3>
      <p className="text-sm sm:text-base transition-colors group-hover:text-white">{description}</p>
    </div>
  )
}

function ReviewCard({ avatar, name, content }: { avatar: string; name: string; content: string }) {
  return (
    <div className="flex gap-4 sm:gap-5 rounded-[5px] border border-[#222] bg-[#151515] p-5 sm:p-6">
      <Image src={avatar} alt={name} width={60} height={60} className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] rounded-[5px] object-cover flex-shrink-0" />
      <div>
        <div className="mb-1.5 text-sm text-[#FFC107]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="mr-0.5 inline h-3.5 w-3.5 fill-current" />
          ))}
        </div>
        <p className="mb-2 text-sm sm:text-base italic">&quot;{content}&quot;</p>
        <strong className="text-sm sm:text-base">{name}</strong>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="mb-2.5 cursor-pointer bg-[#1E1E1E] transition-colors hover:bg-[#262626]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="flex items-center justify-between p-4 sm:p-6 text-xl sm:text-2xl font-bold text-white gap-4">
        <span className="pr-4">{question}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-[#BBB]">{answer}</div>}
    </div>
  )
}
