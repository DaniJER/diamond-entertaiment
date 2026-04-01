import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dance.jpg"
          alt="Espectaculo de baile Diamond Entertainment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--diamond-navy)]/80 via-[var(--diamond-navy)]/60 to-[var(--diamond-navy)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--diamond-gold)]/30 bg-[var(--diamond-gold)]/10 px-4 py-1.5 mb-8">
          <Sparkles className="h-4 w-4 text-[var(--diamond-gold)]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--diamond-gold)]">
            Shows y Eventos Artisticos
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          Donde el Arte se{" "}
          <span className="text-[var(--diamond-magenta)]">Encuentra</span>{" "}
          con el{" "}
          <span className="text-[var(--diamond-gold)]">Entretenimiento</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
          Creamos experiencias inolvidables a traves de shows espectaculares,
          clases virtuales de salsa y oportunidades de franquicia. Lleva el
          entretenimiento al siguiente nivel con Diamond Entertainment.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-[var(--diamond-magenta)] text-white hover:bg-[var(--diamond-magenta)]/80 font-bold text-base px-8"
            asChild
          >
            <Link href="#cursos">Explorar Cursos</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[var(--diamond-gold)]/40 text-[var(--diamond-gold)] hover:bg-[var(--diamond-gold)]/10 hover:text-[var(--diamond-gold)] font-semibold text-base px-8"
            asChild
          >
            <Link href="#shows" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Ver Shows
            </Link>
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "500+", label: "Shows Realizados" },
            { value: "10K+", label: "Estudiantes" },
            { value: "15+", label: "Paises" },
            { value: "50+", label: "Franquicias" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-[var(--diamond-gold)]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-foreground/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
