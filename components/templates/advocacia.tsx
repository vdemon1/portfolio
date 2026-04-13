"use client"

import { type ReactNode } from "react"
import { Scale, BookOpen, Shield, ChevronRight } from "lucide-react"
import Image from "next/image"

export function AdvocaciaTemplate() {
  return (
    <div className="overflow-x-hidden text-[#1E293B]" style={{ background: "#F8FAFC", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 sm:h-24 max-w-[1200px] items-center justify-between px-4 sm:px-5">
          <a href="#_" style={{ fontFamily: "'Montserrat', sans-serif" }} className="flex items-center gap-3 text-xl sm:text-2xl lg:text-3xl tracking-widest text-[#0F172A] uppercase">
            <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-[#B49A5E]" />
            <span className="font-light">Mendonça</span>
            <strong className="font-semibold text-[#B49A5E]">Advogados</strong>
          </a>
          <a
            href="#_"
            className="hidden sm:inline-flex items-center justify-center border border-[#B49A5E] px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-widest text-[#B49A5E] uppercase transition-colors hover:bg-[#B49A5E] hover:text-white"
          >
            Fale Conosco
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0F172A] py-16 sm:py-[100px] text-white">
        {/* Background Image Setup */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-5">
          <div className="max-w-[700px]">
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <div className="h-[1px] w-8 sm:w-12 bg-[#B49A5E]"></div>
              <span className="text-xs sm:text-sm tracking-[0.2em] text-[#B49A5E] uppercase">Excelência Jurídica</span>
            </div>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-6 sm:mb-8 text-3xl sm:text-5xl md:text-6xl font-light leading-[1.1]">
              Protegendo seu <br className="hidden sm:block" />
              <strong className="font-bold text-[#B49A5E]">patrimônio e legado.</strong>
            </h1>
            <p className="mb-8 sm:mb-10 text-base sm:text-lg lg:text-xl font-light leading-relaxed text-gray-300">
              Atuação especializada, ética e resolutiva para empresas e pessoas que exigem o mais alto padrão de segurança jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#_"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-[#B49A5E] px-6 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-[#8A7340] hover:shadow-[0_10px_20px_rgba(180,154,94,0.3)]"
              >
                Agendar Consulta Privativa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white py-14 sm:py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-5">
          <div className="mb-10 sm:mb-16 text-center">
            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-4 text-2xl sm:text-3xl md:text-4xl font-light text-[#0F172A]">
              Áreas de <strong className="font-semibold text-[#B49A5E]">Atuação</strong>
            </h2>
            <div className="mx-auto h-[1px] w-[60px] sm:w-[80px] bg-[#B49A5E]"></div>
          </div>
          <div className="grid gap-6 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <ExpertiseCard
              icon={<Shield className="h-6 w-6 sm:h-8 sm:w-8" />}
              title="Direito Empresarial"
              description="Assessoria completa, blindagem patrimonial, planejamento sucessório e resolução de litígios societários."
            />
            <ExpertiseCard
              icon={<Scale className="h-6 w-6 sm:h-8 sm:w-8" />}
              title="Cível e Contratos"
              description="Elaboração e revisão de contratos complexos, com foco na mitigação de riscos e segurança bilateral."
            />
            <ExpertiseCard
              icon={<BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />}
              title="Direito Tributário"
              description="Planejamentos estratégicos para otimização da carga fiscal de forma lícita e contencioso administrativo."
            />
          </div>
        </div>
      </section>

      {/* The Office */}
      <section className="bg-[#F8FAFC] py-14 sm:py-20 lg:py-[100px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 sm:gap-16 px-4 sm:px-5 md:grid-cols-2">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1555322964-b8923a10ded2?auto=format&fit=crop&w=800&q=80"
              alt="Nosso Escritório"
              width={600}
              height={800}
              className="w-full shadow-[20px_20px_0_0_#B49A5E]"
            />
          </div>
          <div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-light leading-tight text-[#0F172A]">
              Uma década de <br />
              <strong className="font-semibold text-[#B49A5E]">resultados consistentes.</strong>
            </h2>
            <p className="mb-6 text-sm sm:text-base leading-relaxed text-[#475569]">
              Nosso escritório se destaca pelo atendimento focado e personalizado. Não tratamos casos como números, entendemos a fundo a necessidade do cliente para traçar as estratégias legais mais eficientes e seguras.
            </p>
            <p className="mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed text-[#475569]">
              Com uma equipe de advogados sêniores de vasta experiência e atualização constante na jurisprudência, somos a garantia de que seus interesses estão nas melhores mãos possíveis.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 border-t border-gray-200 pt-6 sm:pt-8">
              <div>
                <strong style={{ fontFamily: "'Montserrat', sans-serif" }} className="block text-2xl sm:text-3xl md:text-4xl text-[#B49A5E]">12+</strong>
                <span className="text-xs sm:text-sm tracking-wider text-[#475569] uppercase">Anos de Histórico</span>
              </div>
              <div>
                <strong style={{ fontFamily: "'Montserrat', sans-serif" }} className="block text-2xl sm:text-3xl md:text-4xl text-[#B49A5E]">2.5k</strong>
                <span className="text-xs sm:text-sm tracking-wider text-[#475569] uppercase">Casos Defendidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a
        href="#_"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#B49A5E] text-white shadow-[0_4px_15px_rgba(180,154,94,0.4)] transition-all hover:scale-110"
      >
        <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}

function ExpertiseCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="group border border-gray-100 bg-white p-8 sm:p-10 transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] cursor-pointer">
      <div className="mb-6 text-[#B49A5E] transition-transform duration-500 group-hover:-translate-y-2">{icon}</div>
      <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-4 text-lg sm:text-xl font-semibold text-[#0F172A]">{title}</h3>
      <p className="mb-6 text-sm sm:text-base leading-relaxed text-[#475569]">{description}</p>
      <a href="#_" className="inline-flex items-center text-xs sm:text-sm tracking-widest text-[#B49A5E] uppercase transition-colors hover:text-[#0F172A]">
        Saber Mais <ChevronRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  )
}
