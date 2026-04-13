import Link from "next/link"
import { ArrowRight, Check, MessageCircle, Sparkles, Shield, Palette, Smartphone, TrendingUp, Headphones, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TemplateCard } from "@/components/template-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { FAQItem } from "@/components/faq-item"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const templates = [
  {
    id: "advocacia",
    title: "Advocacia Premium",
    category: "Escritorios de Advocacia",
    description: "Design sofisticado com tons dourados e azul marinho. Perfeito para transmitir confianca e profissionalismo.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    color: "#D4AF37",
  },
  {
    id: "consultoria",
    title: "Consultoria B2B",
    category: "Empresas e Consultorias",
    description: "Layout corporativo moderno com foco em conversao. Ideal para consultorias e servicos empresariais.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    color: "#0052FF",
  },
  {
    id: "manutencao",
    title: "Servicos 24h",
    category: "Eletricistas e Manutencao",
    description: "Visual impactante em dark mode com laranja vibrante. Transmite urgencia e profissionalismo.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    color: "#FF5A00",
  },
  {
    id: "estetica",
    title: "Clinica de Estetica",
    category: "Beleza e Bem-estar",
    description: "Elegante e feminino com tons rose. Perfeito para clinicas de estetica e spas.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    color: "#CFA6A6",
  },
  {
    id: "petshop",
    title: "Pet Shop",
    category: "Pets e Veterinarios",
    description: "Design divertido e colorido. Ideal para pet shops, veterinarios e servicos para animais.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    color: "#00BFB2",
  },
  {
    id: "infoproduto",
    title: "Vendas Digital",
    category: "Infoprodutos e Cursos",
    description: "Alta conversao com urgencia e escassez. Perfeito para vender cursos e produtos digitais.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    color: "#00FF66",
  },
]

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Advogado",
    content: "Meu site ficou incrivel! Ja recebi varios clientes atraves do WhatsApp que veio pelo site. Investimento que se pagou em uma semana.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Ana Paula",
    role: "Dona de Pet Shop",
    content: "O site ficou a cara do meu negocio! Os clientes adoram e agora consigo muito mais agendamentos pelo WhatsApp.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Roberto Silva",
    role: "Eletricista",
    content: "Nunca imaginei que ter um site seria tao importante. Hoje 80% dos meus clientes vem pelo Google e WhatsApp do site.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
  },
]

const faqs = [
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer: "Seu site fica pronto em ate 7 dias uteis apos o envio de todas as informacoes e imagens. Para projetos urgentes, oferecemos entrega expressa em 48 horas.",
  },
  {
    question: "O site funciona no celular?",
    answer: "Sim! Todos os nossos sites sao 100% responsivos e otimizados para funcionar perfeitamente em celulares, tablets e computadores.",
  },
  {
    question: "Preciso pagar hospedagem?",
    answer: "Sim, a hospedagem e um custo a parte que varia de R$15 a R$50/mes dependendo do plano. Cuidamos de toda a configuracao para voce.",
  },
  {
    question: "Posso fazer alteracoes depois?",
    answer: "Claro! Oferecemos 30 dias de suporte gratuito para pequenas alteracoes. Apos esse periodo, temos pacotes de manutencao acessiveis.",
  },
  {
    question: "O site vem com WhatsApp integrado?",
    answer: "Sim! Todos os sites incluem botao flutuante do WhatsApp configurado com seu numero, alem de formularios de contato.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="glass fixed top-0 left-0 right-0 z-50 border-b border-border/50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-xl font-bold tracking-tight transition-smooth hover:opacity-80">
            WebPro<span className="text-gradient">Studio</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#beneficios" className="text-sm text-muted-foreground transition-smooth hover:text-foreground">
              Beneficios
            </Link>
            <Link href="#templates" className="text-sm text-muted-foreground transition-smooth hover:text-foreground">
              Templates
            </Link>
            <Link href="#depoimentos" className="text-sm text-muted-foreground transition-smooth hover:text-foreground">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground transition-smooth hover:text-foreground">
              FAQ
            </Link>
          </nav>
          <Button asChild className="bg-accent text-accent-foreground transition-smooth hover:bg-accent/90 hover-glow">
            <a href="https://wa.me/5521992800424?text=Ol%C3%A1%2C%20vi%20seu%20an%C3%BAncio%20na%20OLX%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <div className="animate-fade-in-down mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            <Sparkles className="h-4 w-4" />
            Mais de 100 sites entregues
          </div>
          
          <h1 className="animate-fade-in-up font-heading mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Sites profissionais que{" "}
            <span className="text-gradient">convertem visitantes em clientes</span>
          </h1>
          
          <p className="animate-fade-in-up delay-200 mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl" style={{ animationDelay: "200ms" }}>
            Landing pages de alta conversao prontas em ate 7 dias. Design premium, WhatsApp integrado e otimizado para aparecer no Google.
          </p>
          
          <div className="animate-fade-in-up delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "300ms" }}>
            <Button asChild size="lg" className="h-14 gap-2 bg-accent px-8 text-lg text-accent-foreground transition-smooth hover:bg-accent/90 hover-glow animate-pulse-glow">
              <a href="https://wa.me/5521992800424?text=Ol%C3%A1%2C%20vi%20seu%20an%C3%BAncio%20na%20OLX%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                Quero meu site agora
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg transition-smooth hover:bg-secondary">
              <Link href="#templates">Ver templates</Link>
            </Button>
          </div>
          
          <div className="animate-fade-in-up delay-400 mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              Pronto em 7 dias
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              100% responsivo
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              WhatsApp integrado
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute left-10 top-1/3 h-20 w-20 rounded-full bg-accent/10 blur-2xl animate-float" />
        <div className="absolute right-10 bottom-1/3 h-32 w-32 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-in-up" className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Escolha seu template</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Templates premium desenvolvidos para diferentes nichos. Cada um foi criado pensando nas necessidades especificas do seu tipo de negocio.
            </p>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, index) => (
              <AnimateOnScroll key={template.id} animation="fade-in-up" delay={index * 100}>
                <TemplateCard template={template} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-in-up" className="mb-16 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Por que ter um site profissional?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Seu negocio merece uma presenca online que transmita confianca e converta visitantes em clientes.
            </p>
          </AnimateOnScroll>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: TrendingUp, title: "Mais Clientes", desc: "Apareca no Google quando seus clientes pesquisarem por servicos como o seu. Seja encontrado 24 horas por dia, 7 dias por semana." },
              { icon: Shield, title: "Credibilidade Instantanea", desc: "Transmita profissionalismo desde o primeiro contato. Um site bem feito passa confianca e diferencia voce da concorrencia." },
              { icon: MessageCircle, title: "WhatsApp Integrado", desc: "Receba mensagens direto no seu WhatsApp com um clique. Facilite o contato e converta visitantes em conversas de venda." },
              { icon: Smartphone, title: "100% Responsivo", desc: "Seu site funciona perfeitamente em celulares, tablets e computadores. A maioria dos seus clientes vai te encontrar pelo celular." },
              { icon: Palette, title: "Design Personalizado", desc: "Adaptamos cores, fotos e textos para combinar com a identidade do seu negocio. Seu site sera unico e com a sua cara." },
              { icon: Headphones, title: "Suporte Humanizado", desc: "Acompanhamento durante todo o processo e suporte apos a entrega. Voce nao vai ficar na mao, estamos aqui para ajudar." },
            ].map((benefit, index) => (
              <AnimateOnScroll key={benefit.title} animation="fade-in-up" delay={index * 100}>
                <div className="group card-lift rounded-2xl border border-border bg-background p-8 transition-smooth hover:border-accent/50">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-smooth group-hover:bg-accent/20 group-hover:scale-110">
                    <benefit.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading mb-3 text-xl font-semibold">{benefit.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{benefit.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          
          <AnimateOnScroll animation="fade-in-up" className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-lg text-muted-foreground">Quer saber quanto custa ter um site profissional?</p>
            <Button asChild size="lg" className="h-14 gap-2 bg-accent px-10 text-lg font-semibold text-accent-foreground transition-smooth hover:bg-accent/90 hover-glow animate-pulse-glow">
              <a href="https://wa.me/5521992800424?text=Ol%C3%A1%2C%20vi%20seu%20an%C3%BAncio%20na%20OLX%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Solicitar Orcamento Gratuito
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">Resposta em ate 2 horas</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-in-up" className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">O que nossos clientes dizem</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Veja os resultados reais de quem ja tem um site profissional conosco.
            </p>
          </AnimateOnScroll>
          
          {/* Rating Summary */}
          <AnimateOnScroll animation="fade-in-scale" className="mb-12 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg font-medium">4.9/5 baseado em 100+ avaliacoes</p>
          </AnimateOnScroll>
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 150}>
                <TestimonialCard testimonial={testimonial} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-in-up" className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Perguntas frequentes</h2>
            <p className="text-muted-foreground">
              Tire suas duvidas sobre nossos servicos.
            </p>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <AnimateOnScroll animation="fade-in-scale">
            <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Pronto para ter seu site profissional?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Solicite seu orcamento gratuito e descubra como podemos transformar seu negocio.
            </p>
            <Button asChild size="lg" className="h-16 gap-3 bg-accent px-12 text-xl font-semibold text-accent-foreground transition-smooth hover:bg-accent/90 hover-glow animate-pulse-glow">
              <a href="https://wa.me/5521992800424?text=Ol%C3%A1%2C%20vi%20seu%20an%C3%BAncio%20na%20OLX%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                Solicitar Orcamento Gratuito
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              2024 WebPro Studio. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground transition-smooth hover:text-foreground">
                Termos de Uso
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-smooth hover:text-foreground">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5521992800424?text=Ol%C3%A1%2C%20vi%20seu%20an%C3%BAncio%20na%20OLX%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-smooth hover:scale-110 animate-pulse-glow"
        aria-label="Contato pelo WhatsApp"
        style={{ boxShadow: "0 0 20px rgba(37, 211, 102, 0.5)" }}
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
