import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Fernandez",
    role: "Directora de Eventos, Corp. Azteca",
    text: "Diamond Entertainment transformo nuestra gala corporativa en una experiencia inolvidable. Los bailarines y la produccion fueron de primer nivel.",
    rating: 5,
  },
  {
    name: "Carlos Gutierrez",
    role: "Estudiante de Salsa Online",
    text: "Las clases virtuales son increibles. Aprendi a bailar salsa en 3 meses sin salir de casa. Los instructores son pacientes y muy profesionales.",
    rating: 5,
  },
  {
    name: "Ana Rodriguez",
    role: "Franquiciataria, CDMX",
    text: "Invertir en la franquicia Diamond fue la mejor decision de mi vida. El modelo de negocio es solido y el equipo te apoya en cada paso.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[var(--diamond-orange)]">
            Testimonios
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-5xl text-balance">
            Lo que Dicen de Nosotros
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-[var(--diamond-purple)]/20 bg-background p-8 transition-all hover:border-[var(--diamond-magenta)]/40"
            >
              <Quote className="h-8 w-8 text-[var(--diamond-magenta)]/30 mb-4" />
              <p className="text-foreground/70 leading-relaxed">{t.text}</p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[var(--diamond-gold)] text-[var(--diamond-gold)]"
                  />
                ))}
              </div>
              <div className="mt-4 border-t border-[var(--diamond-purple)]/10 pt-4">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-foreground/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
