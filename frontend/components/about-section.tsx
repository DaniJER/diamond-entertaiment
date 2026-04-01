import { Target, Heart, Zap, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excelencia",
    description:
      "Cada detalle cuenta. Nos comprometemos a ofrecer la mas alta calidad en cada espectaculo, clase y servicio.",
  },
  {
    icon: Heart,
    title: "Pasion",
    description:
      "El arte y el entretenimiento fluyen en nuestra sangre. Transmitimos energia y emocion en todo lo que hacemos.",
  },
  {
    icon: Zap,
    title: "Innovacion",
    description:
      "Combinamos tradicion con tecnologia para crear experiencias unicas que rompen esquemas.",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description:
      "Conectamos culturas a traves del baile y el entretenimiento, llegando a mas de 15 paises.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Story */}
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-[var(--diamond-gold)]">
              Nosotros
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl text-balance">
              Creando Experiencias Inolvidables desde 2010
            </h2>
            <p className="mt-6 text-foreground/60 leading-relaxed">
              Diamond Entertainment nacio con la vision de llevar el arte y el
              entretenimiento a un nuevo nivel. Lo que comenzo como un pequeno
              grupo de bailarines apasionados, hoy es una empresa internacional
              con presencia en mas de 15 paises.
            </p>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              Nuestra mision es transformar momentos ordinarios en recuerdos
              extraordinarios. Ya sea a traves de un show espectacular, una clase
              de salsa que despierta tu pasion por el baile, o una franquicia que
              te permite emprender en la industria del entretenimiento.
            </p>
          </div>

          {/* Right: Values Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-[var(--diamond-purple)]/20 bg-card p-6 transition-all hover:border-[var(--diamond-magenta)]/40"
              >
                <v.icon className="h-8 w-8 text-[var(--diamond-magenta)] mb-3" />
                <h3 className="font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
