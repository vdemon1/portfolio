import React from "react"
import { notFound } from "next/navigation"
import { AdvocaciaTemplate } from "@/components/templates/advocacia"
import { ConsultoriaTemplate } from "@/components/templates/consultoria"
import { ManutencaoTemplate } from "@/components/templates/manutencao"
import { EsteticaTemplate } from "@/components/templates/estetica"
import { PetshopTemplate } from "@/components/templates/petshop"
import { InfoprodutoTemplate } from "@/components/templates/infoproduto"

const templates: Record<string, React.ComponentType> = {
  advocacia: AdvocaciaTemplate,
  consultoria: ConsultoriaTemplate,
  manutencao: ManutencaoTemplate,
  estetica: EsteticaTemplate,
  petshop: PetshopTemplate,
  infoproduto: InfoprodutoTemplate,
}

const templateNames: Record<string, string> = {
  advocacia: "Advocacia Premium",
  consultoria: "Consultoria B2B",
  manutencao: "Servicos 24h",
  estetica: "Clinica de Estetica",
  petshop: "Pet Shop",
  infoproduto: "Vendas Digital",
}

export async function generateStaticParams() {
  return Object.keys(templates).map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const name = templateNames[id] || "Template"
  return {
    title: `${name} | WebPro Studio`,
    description: `Preview do template ${name} - Landing page profissional para seu negocio.`,
  }
}

export default async function TemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const Template = templates[id]

  if (!Template) {
    notFound()
  }

  return (
    <div className="relative">
      {/* Fixed Header Bar */}
      <div className="fixed left-0 right-0 top-0 z-[100] flex h-14 items-center justify-between border-b border-white/10 bg-black/90 px-3 sm:px-4 backdrop-blur-md gap-2">
        <a href="/" className="text-xs sm:text-sm font-medium text-white hover:text-white/80 whitespace-nowrap flex-shrink-0">
          ← Voltar
        </a>
        <span className="hidden sm:block text-sm text-white/60 truncate text-center flex-1 px-2">Preview: {templateNames[id]}</span>
        <a
          href="https://wa.me/5521992800424?text=Ol%C3%A1%2C%20vi%20seu%20an%C3%BAncio%20na%20OLX%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[#25D366] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a] whitespace-nowrap flex-shrink-0"
        >
          Quero esse site
        </a>
      </div>

      {/* Template Content */}
      <div className="pt-14">
        <Template />
      </div>
    </div>
  )
}
