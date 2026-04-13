"use client"

import { useState, type ReactNode } from "react"
import { Wand2, Flower2, Leaf, Star } from "lucide-react"
import Image from "next/image"

export function EsteticaTemplate() {
  return (
    <div className="overflow-x-hidden text-[#333333]" style={{ background: "#FDFBFB", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header className="absolute left-0 top-0 z-10 w-full py-5 sm:py-8">
        <div className="mx-auto flex max-w-[1200px] justify-center px-4 sm:px-5">
          <a href="#_" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-2xl sm:text-3xl font-bold tracking-widest text-[#333333] uppercase">
            AURA
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex min-h-screen items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBFB]/95 via-[#FDFBFB]/75 to-[#FDFBFB]/20 sm:to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-5 pt-24 pb-16 sm:pt-0 sm:pb-0 w-full">
          <div className="max-w-[560px]">
            <h1 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-4 sm:mb-5 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#997575]">
              Desperte a sua melhor versão.
            </h1>
            <p className="mb-8 sm:mb-10 text-base sm:text-xl leading-relaxed text-[#666666]">
              Especialistas em realçar a beleza natural através de procedimentos estéticos avançados de alto padrão e tecnologia de ponta.
            </p>
            <a
              href="#_"
              className="inline-flex items-center gap-2 rounded-full bg-[#CFA6A6] px-7 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-semibold tracking-wider text-white shadow-[0_10px_30px_rgba(207,166,166,0.3)] transition-all hover:-translate-y-1 hover:bg-[#997575] hover:shadow-[0_15px_35px_rgba(153,117,117,0.4)] uppercase"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar Avaliação
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-[100px]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-5">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-10 sm:mb-[60px] text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#997575]">
            Protocolos Exclusivos
          </h2>
          <div className="grid gap-6 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <ServiceCard
              icon={<Wand2 className="h-9 w-9 sm:h-10 sm:w-10 text-[#CFA6A6]" />}
              title="Harmonização Facial"
              description="Estruturação e simetria do rosto com preenchedores de ácido hialurônico de altíssima qualidade."
            />
            <ServiceCard
              icon={<Flower2 className="h-9 w-9 sm:h-10 sm:w-10 text-[#CFA6A6]" />}
              title="Toxina Botulínica"
              description="Prevenção inteligente de rugas com resultados naturais, preservando sua expressão e essência."
            />
            <ServiceCard
              icon={<Leaf className="h-9 w-9 sm:h-10 sm:w-10 text-[#CFA6A6]" />}
              title="Bioestimuladores"
              description="Tratamento premium contra flacidez que estimula a produção natural de colágeno pelo seu corpo."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="relative bg-cover bg-center py-16 sm:py-[100px]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-defd03631043?auto=format&fit=crop&w=1920&q=80')",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-5">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-10 sm:mb-[60px] text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            O que nossas clientes dizem
          </h2>
          <div className="grid gap-5 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
            <TestimonialCard
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
              name="Isabella R."
              content="A experiência na Aura é única. Ambiente sofisticado e o resultado da minha harmonização ficou extremamente natural. Superou minhas expectativas!"
            />
            <TestimonialCard
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
              name="Camila F."
              content="Fiz a aplicação de toxina botulínica e amei. A médica foi muito atenciosa e explicou cada detalhe. Me sinto 10 anos mais jovem."
            />
            <TestimonialCard
              avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
              name="Juliana S."
              content="Melhor clínica de estética que já visitei. O protocolo de colágeno mudou completamente a textura da minha pele no rosto e pescoço."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[800px] px-4 sm:px-5 py-16 sm:py-[100px]">
        <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-10 sm:mb-[60px] text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#997575]">
          Esclareça suas Dúvidas
        </h2>
        <FAQItem
          question="Os procedimentos causam dor?"
          answer="Seu conforto é nossa prioridade. Utilizamos anestésicos tópicos de última geração e equipamentos modernos que minimizam substancialmente qualquer incômodo durante a sessão."
        />
        <FAQItem
          question="Quanto tempo dura o efeito do botox?"
          answer="O efeito da toxina botulínica varia de acordo com o metabolismo de cada paciente, mas em média, os resultados duram entre 4 a 6 meses."
        />
        <FAQItem
          question="A consulta de avaliação é cobrada?"
          answer="A primeira consulta é isenta de taxa. É nela que desenhamos seu protocolo personalizado após uma análise facial detalhada."
        />
      </section>

      {/* WhatsApp Float */}
      <a
        href="#_"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-14 w-14 sm:h-[65px] sm:w-[65px] animate-bounce items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-[#CFA6A6]/10 bg-white p-7 sm:p-10 text-center shadow-[0_5px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] cursor-pointer">
      <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#CFA6A6] transition-transform duration-300 group-hover:scale-x-100" />
      <div className="mb-5 sm:mb-6 flex justify-center">{icon}</div>
      <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold">{title}</h3>
      <p className="text-sm sm:text-base leading-relaxed text-[#666666]">{description}</p>
    </div>
  )
}

function TestimonialCard({ avatar, name, content }: { avatar: string; name: string; content: string }) {
  return (
    <div className="rounded-[20px] border border-white/20 bg-white/10 p-6 sm:p-10 text-white backdrop-blur-[15px] transition-transform hover:-translate-y-1 hover:bg-white/15">
      <p className="mb-5 text-base sm:text-lg italic leading-relaxed">&quot;{content}&quot;</p>
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={50}
          height={50}
          className="h-[50px] w-[50px] rounded-full border-2 border-[#CFA6A6] object-cover"
        />
        <div>
          <strong>{name}</strong>
          <div className="mt-1 text-sm text-[#FFD700]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="mr-0.5 inline h-3 w-3 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-3 overflow-hidden rounded-[10px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all">
      <button
        className="flex w-full cursor-pointer items-center justify-between p-4 sm:p-5 text-left text-base sm:text-lg font-semibold text-[#997575] gap-4"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span>{question}</span>
        <span className={`text-2xl transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      {isOpen && <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed text-[#666666]">{answer}</p>}
    </div>
  )
}
