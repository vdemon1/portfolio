"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Template {
  id: string
  title: string
  category: string
  description: string
  image: string
  color: string
}

interface TemplateCardProps {
  template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/templates/${template.id}`}>
      <Card className="group card-lift overflow-hidden border-border bg-card transition-smooth">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={template.image}
            alt={template.title}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Eye className="h-4 w-4" />
              Ver Preview
            </div>
          </div>
          
          <div
            className="absolute bottom-4 left-4 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: template.color }}
          >
            {template.category}
          </div>
        </div>
        <CardContent className="p-5">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="font-heading text-lg font-semibold transition-colors duration-300 group-hover:text-accent">{template.title}</h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{template.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
