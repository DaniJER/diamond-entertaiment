import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Music, Building2, ArrowRight } from "lucide-react"

const services = [
  {
    id: "cursos",
    icon: GraduationCap,
    title: "Clases Virtuales de Salsa",
    description:
      "Aprende a bailar salsa desde cualquier lugar del mundo con nuestros instructores certificados. Clases en vivo, horarios flexibles y seguimiento personalizado para todos los niveles.",
    image: "/images/courses.jpg",
    alt: "Clase de salsa con instructores profesionales",
    features: ["Clases en vivo", "Todos los niveles", "Horarios flexibles", "Certificacion"],
    cta: "Ver Cursos",
    href: "#cursos",
    color: "var(--diamond-magenta)",
  },
  {
    id: "shows",
    icon: Music,
    title: "Shows y Espectaculos",
    description:
      "Producimos espectaculos de primer nivel para eventos corporativos, fiestas privadas, festivales y mas. Coreografias originales, vestuario profesional y una puesta en escena impresionante.",
    image: "/images/shows.jpg",
    alt: "Show espectacular de Diamond Entertainment",
    features: ["Eventos corporativos", "Fiestas privadas", "Festivales", "Produccion completa"],
    cta: "Conocer Shows",
    href: "#shows",
    color: "var(--diamond-orange)",
  },
  {
    id: "franquicias",
    icon: Building2,
    title: "Franquicias Diamond",
    description:
      "Unete a nuestra red de franquicias y emprende en la industria del entretenimiento. Te ofrecemos un modelo de negocio probado, capacitacion completa y soporte continuo.",
    image: "/images/franchise.jpg",
    alt: "Oportunidad de franquicia Diamond Entertainment",
    features: ["Modelo probado", "Capacitacion completa", "Soporte continuo", "Alta rentabilidad"],
    cta: "Ser Franquiciatario",
    href: "#franquicias",
    color: "var(--diamond-gold)",
  },
]

export function ServicesSection() {
  return (
    <section id="cursos" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[var(--diamond-magenta)]">
            Nuestros Servicios
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-5xl text-balance">
            Todo lo que Necesitas para Brillar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60 leading-relaxed">
            Desde clases de baile hasta shows espectaculares y oportunidades de
            negocio, tenemos algo increible para ti.
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id === "cursos" ? undefined : service.id}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${service.color} 0%, transparent 60%)`,
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon
                    className="h-6 w-6"
                    style={{ color: service.color }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-foreground/60 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-8 font-semibold text-white"
                  style={{ backgroundColor: service.color }}
                  asChild
                >
                  <Link href={service.href} className="flex items-center gap-2">
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
