import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--diamond-navy)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, var(--diamond-magenta) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, var(--diamond-purple) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--diamond-gold)]/30 bg-[var(--diamond-gold)]/10 px-4 py-1.5 mb-6">
          <Sparkles className="h-4 w-4 text-[var(--diamond-gold)]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--diamond-gold)]">
            Comienza Hoy
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-foreground sm:text-5xl text-balance">
          {"Listo para Vivir la Experiencia Diamond?"}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60 leading-relaxed">
          Ya sea que quieras aprender a bailar, contratar un show espectacular o
          emprender con nuestra franquicia, estamos aqui para ti.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-[var(--diamond-magenta)] text-white hover:bg-[var(--diamond-magenta)]/80 font-bold text-base px-8"
            asChild
          >
            <Link href="#cursos" className="flex items-center gap-2">
              Comenzar Ahora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground/10 font-semibold text-base px-8"
            asChild
          >
            <Link href="#nosotros">Conocer Mas</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
