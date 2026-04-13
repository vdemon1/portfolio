"use client"

import { useState, type ReactNode } from "react"
import { Layers, ArrowRight, PieChart, Network, Handshake } from "lucide-react"
import Image from "next/image"

export function ConsultoriaTemplate() {
  return (
    <div className="text-[#0F172A]" style={{ background: "#F0F4F8", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.07)]">
        <div className="mx-auto flex h-16 sm:h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6">
          <a href="#_" className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-black text-[#0052FF]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Layers className="h-6 w-6 sm:h-7 sm:w-7" /> VERTEX
          </a>
          <a
            href="#_"
            className="rounded-md bg-[#0052FF] px-4 py-2 sm:px-6 sm:py-2.5 font-semibold text-white text-sm sm:text-base transition-colors hover:bg-[#003ECC] whitespace-nowrap"
          >
            Falar com Consultor
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-[#F0F4F8] py-16 sm:py-[100px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 sm:gap-[60px] px-4 sm:px-6 md:grid-cols-2">
          <div>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-5 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Escale processos. <br />Maximize lucros.
            </h1>
            <p className="mb-8 sm:mb-10 text-base sm:text-xl text-[#64748B]">
              Nós arquitetamos soluções estratégicas baseadas em dados para alavancar a performance corporativa B2B em mercados competitivos.
            </p>
            <a
              href="#_"
              className="inline-flex items-center gap-2.5 rounded-lg bg-[#0052FF] px-7 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold text-white shadow-[0_10px_20px_rgba(0,82,255,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#003ECC] hover:shadow-[0_15px_30px_rgba(0,82,255,0.3)]"
            >
              Solicitar Diagnóstico <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
              alt="Consultancy Session"
              width={800}
              height={600}
              className="rounded-[20px] shadow-[0_30px_60px_rgba(0,82,255,0.15)] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#0F172A] py-8 sm:py-10 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-6 sm:gap-5 px-4 sm:px-6 text-center grid-cols-3">
          <div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0052FF]">+$200M</h3>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mt-1">Aumento em Receita</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0052FF]">98%</h3>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mt-1">Retenção de Clientes</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0052FF]">15+</h3>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mt-1">Anos no Mercado</p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-16 sm:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="mx-auto mb-10 sm:mb-[60px] max-w-[600px] text-center">
            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-4 text-3xl sm:text-4xl font-black text-[#0052FF]">Inteligência Operacional</h2>
            <p className="text-base sm:text-lg text-[#64748B]">
              Metodologias ágeis e dados para estruturar o núcleo do seu negócio e sustentar o crescimento.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
            <SolutionCard
              icon={<PieChart className="h-6 w-6" />}
              title="Auditoria Financeira"
              description="Mapeamento de KPIs, reestruturação de fluxo de caixa e redução agressiva de custos operacionais ocultos."
            />
            <SolutionCard
              icon={<Network className="h-6 w-6" />}
              title="Otimização de Processos"
              description="Implementação de rotinas automatizadas e frameworks que aumentam a produtividade da equipe em até 40%."
            />
            <SolutionCard
              icon={<Handshake className="h-6 w-6" />}
              title="Reestruturação Comercial"
              description="Implementação de CRM avançado, treinamento de SDRs e criação de funis de vendas B2B preditivos."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0F172A] py-16 sm:py-[100px] text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-10 sm:mb-[50px] text-center text-3xl sm:text-4xl font-black">Casos de Sucesso B2B</h2>
          <div className="grid gap-5 sm:gap-8 sm:grid-cols-2">
            <div className="rounded-xl border-l-4 border-[#0052FF] bg-white/5 p-6 sm:p-8">
              <p className="mb-4 text-sm sm:text-base italic leading-relaxed">
                &quot;A consultoria reduziu nosso CAC em 40% e triplicou as conversões do time de Inside Sales.&quot;
              </p>
              <strong className="text-[#0052FF] text-sm sm:text-base">— Roberto Almeida, CEO TechSolutions</strong>
            </div>
            <div className="rounded-xl border-l-4 border-[#0052FF] bg-white/5 p-6 sm:p-8">
              <p className="mb-4 text-sm sm:text-base italic leading-relaxed">
                &quot;Processos que demoravam dias agora são automatizados. O ROI do projeto foi atingido no segundo mês.&quot;
              </p>
              <strong className="text-[#0052FF] text-sm sm:text-base">— Mariana Costa, Diretora de Operações</strong>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F0F4F8] py-14 sm:py-[100px]">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-8 sm:mb-10 text-center text-3xl sm:text-4xl font-black">Dúvidas Frequentes</h2>
          <FAQItem
            question="Para qual tamanho de empresa a consultoria é indicada?"
            answer="Nossas metodologias são escaláveis, desenhadas para empresas a partir de 20 funcionários até organizações com matrizes complexas de mais de 500 colaboradores."
          />
          <FAQItem
            question="Qual o prazo médio de implementação?"
            answer="O diagnóstico leva de 2 a 4 semanas, com o ciclo completo de implantação variando entre 3 a 6 meses, dependendo das urgências operacionais mapeadas."
          />
        </div>
      </section>

      {/* WhatsApp Float */}
      <a
        href="#_"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-14 w-14 sm:h-[65px] sm:w-[65px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_20px_rgba(37,211,102,0.3)] transition-transform hover:scale-110"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}

function SolutionCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-2xl bg-[#F0F4F8] p-7 sm:p-10 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
      <div className="mb-5 sm:mb-6 flex h-[55px] w-[55px] sm:h-[60px] sm:w-[60px] items-center justify-center rounded-xl bg-[#0052FF]/10 text-[#0052FF]">
        {icon}
      </div>
      <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mb-3 text-xl sm:text-2xl font-bold">{title}</h3>
      <p className="text-sm sm:text-base text-[#64748B]">{description}</p>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-2.5 rounded-lg bg-white p-4 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <button
        className="flex w-full cursor-pointer items-center justify-between text-left font-bold text-[#0F172A] text-sm sm:text-base gap-4"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span>{question}</span>
        <span className="text-xl text-[#0052FF] flex-shrink-0">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="pt-4 text-sm sm:text-base text-[#64748B]">{answer}</p>}
    </div>
  )
}
