"use client"

import { useState, type ReactNode } from "react"
import { Bath, Scissors, Car } from "lucide-react"
import Image from "next/image"

export function PetshopTemplate() {
  return (
    <div className="overflow-x-hidden text-[#2C3E50]" style={{ background: "#FAFDFF", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Icons */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <svg className="absolute left-[5%] sm:left-[10%] top-[10%] h-14 w-14 sm:h-20 sm:w-20 animate-spin text-[#00BFB2] opacity-10" style={{ animationDuration: "20s" }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </div>

      {/* Hero */}
      <section className="relative bg-[radial-gradient(circle_at_top,#E6FAFA_0%,#FAFDFF_100%)] pb-[100px] sm:pb-[150px] pt-14 sm:pt-20 text-center">
        <div className="relative z-10 mx-auto max-w-[1050px] px-4 sm:px-5">
          <h1 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-4 sm:mb-5 text-3xl sm:text-5xl md:text-6xl font-black text-[#00BFB2]">
            Amor em cada detalhe
          </h1>
          <p className="mb-8 sm:mb-10 text-base sm:text-xl font-bold text-[#555]">
            O Pet Shop perfeito para quem trata seu melhor amigo como família.
          </p>
          <a
            href="#_"
            className="relative inline-block rounded-full bg-[#FF6B6B] px-8 py-4 sm:px-11 sm:py-5 text-lg sm:text-xl font-black text-white shadow-[0_8px_0px_#C94C4C] transition-all active:translate-y-2 active:shadow-none hover:brightness-105"
          >
            <svg className="mr-2 inline h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar Banho
          </a>
          <div className="mt-6 sm:mt-8">
            <Image
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80"
              alt="Cachorro Feliz"
              width={350}
              height={350}
              priority
              className="mx-auto rounded-full border-[10px] sm:border-[15px] border-white object-cover shadow-[0_20px_40px_rgba(0,191,178,0.2)] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full" style={{ height: "70px" }} viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
              fill="#00BFB2"
            />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#00BFB2] pt-8 pb-16 sm:py-20 text-white">
        <div className="mx-auto max-w-[1050px] px-4 sm:px-5">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-12 sm:mb-20 text-center text-3xl sm:text-4xl md:text-5xl font-black">Nossos Serviços</h2>
          <div className="grid gap-16 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <ServiceCard
              icon={<Bath className="h-9 w-9" />}
              title="Banho Relaxante"
              description="Shampoos hipoalergênicos, água na temperatura ideal e secadores anti-ruído para pets assustados."
            />
            <ServiceCard
              icon={<Scissors className="h-9 w-9" />}
              title="Tosa na Tesoura"
              description="Cortes padrões de raça, tosa bebê e finalização de pontinhas feitas por profissionais premiados."
            />
            <ServiceCard
              icon={<Car className="h-9 w-9" />}
              title="Taxi Dog Seguro"
              description="Buscamos e entregamos seu pet na sua porta com veículos climatizados e caixas higienizadas."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAFDFF] py-14 sm:py-[100px] text-center">
        <div className="mx-auto max-w-[1050px] px-4 sm:px-5">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-4 sm:mb-5 text-3xl sm:text-4xl md:text-5xl font-black text-[#00BFB2]">Traga seu Aumigo!</h2>
          <p className="mb-8 sm:mb-10 text-base sm:text-xl font-bold">Ganhe 20% de desconto na primeira visita.</p>
          <a
            href="#_"
            className="inline-block rounded-full bg-[#FFD166] px-8 py-4 sm:px-11 sm:py-5 text-lg sm:text-xl font-black text-[#2C3E50] shadow-[0_8px_0px_#D8A524] transition-all active:translate-y-2 active:shadow-none hover:brightness-105"
          >
            PEGAR MEU DESCONTO
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FAFDFF] py-12 sm:py-20 text-center">
        <div className="mx-auto max-w-[1050px] px-4 sm:px-5">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-8 sm:mb-10 text-3xl sm:text-4xl md:text-5xl font-black text-[#00BFB2]">O que os Pais de Pets dizem</h2>
          <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-8 text-left sm:grid-cols-2">
            <div className="rounded-[30px] border-2 border-[#FFD166] bg-white p-6 sm:p-8 shadow-[0_10px_20px_rgba(0,0,0,0.03)]">
              <p className="mb-4 text-sm sm:text-lg italic">
                &quot;A Mel (minha Poodle) tem muito medo de secador. O pessoal da PetLove usou um método de algodão no ouvidinho e secador silencioso. Ela saiu abanando o rabo!&quot;
              </p>
              <strong className="text-[#FF6B6B] text-sm sm:text-base">— Camila &amp; Mel</strong>
            </div>
            <div className="rounded-[30px] border-2 border-[#FFD166] bg-white p-6 sm:p-8 shadow-[0_10px_20px_rgba(0,0,0,0.03)]">
              <p className="mb-4 text-sm sm:text-lg italic">
                &quot;O serviço de Taxi Dog é super seguro. A van é climatizada e o motorista tem muito carinho no trato com os animais.&quot;
              </p>
              <strong className="text-[#FF6B6B] text-sm sm:text-base">— Pedro &amp; Max</strong>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[800px] px-4 sm:px-5 py-12 sm:py-20">
        <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-8 sm:mb-10 text-center text-3xl sm:text-4xl md:text-5xl font-black text-[#00BFB2]">Dúvidas Frequentes</h2>
        <FAQItem
          question="Vocês atendem gatos também?"
          answer="Com certeza! Temos um espaço totalmente separado e gatificado para o banho e tosa de felinos, livre de estresse ou contato visual com os cães."
        />
        <FAQItem
          question="Posso acompanhar o banho?"
          answer="Sim! Nossa área de estética é envidraçada para os tutores acompanharem o tratamento de perto se desejarem."
        />
      </section>

      {/* WhatsApp Float */}
      <a
        href="#_"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-14 w-14 sm:h-[70px] sm:w-[70px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_20px_rgba(37,211,102,0.4)] transition-transform hover:rotate-[10deg] hover:scale-110"
      >
        <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="mt-14 sm:mt-[60px] rounded-[40px] bg-white p-8 sm:p-10 text-center text-[#2C3E50] transition-transform hover:-translate-y-4 md:mt-0">
      <div className="-mt-[70px] sm:-mt-20 mb-5 flex h-[65px] w-[65px] sm:h-20 sm:w-20 items-center justify-center rounded-full border-[6px] sm:border-8 border-[#00BFB2] bg-[#FFD166] mx-auto">
        {icon}
      </div>
      <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-black text-[#00BFB2]">{title}</h3>
      <p className="text-sm sm:text-base">{description}</p>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 rounded-[20px] bg-white p-4 sm:p-5 shadow-sm">
      <button
        className="flex w-full items-center justify-between text-left text-base sm:text-xl font-black text-[#00BFB2] gap-4"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span>{question}</span>
        <span className="ml-2 flex-shrink-0">▾</span>
      </button>
      {isOpen && <p className="mt-2.5 text-sm sm:text-base font-medium text-[#2C3E50]">{answer}</p>}
    </div>
  )
}
