import Link from "next/link"
import { Diamond, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-[var(--diamond-purple)]/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Diamond className="h-6 w-6 text-[var(--diamond-gold)]" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-wider text-foreground">
                  DIAMOND
                </span>
                <span className="text-[9px] font-medium tracking-[0.3em] text-[var(--diamond-gold)]">
                  ENTERTAINMENT
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-foreground/50 leading-relaxed">
              Transformando momentos ordinarios en experiencias extraordinarias
              desde 2010.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="text-foreground/40 hover:text-[var(--diamond-magenta)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-foreground/40 hover:text-[var(--diamond-magenta)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-foreground/40 hover:text-[var(--diamond-magenta)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-foreground mb-4">
              Servicios
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Clases de Salsa", href: "#cursos" },
                { label: "Shows Corporativos", href: "#shows" },
                { label: "Eventos Privados", href: "#shows" },
                { label: "Franquicias", href: "#franquicias" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/50 hover:text-[var(--diamond-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-foreground mb-4">
              Empresa
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Nosotros", href: "#nosotros" },
                { label: "Blog", href: "#" },
                { label: "Carreras", href: "#" },
                { label: "Contacto", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/50 hover:text-[var(--diamond-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-foreground mb-4">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-foreground/50">
                <Mail className="h-4 w-4 text-[var(--diamond-magenta)]" />
                info@diamondentertainment.com
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/50">
                <Phone className="h-4 w-4 text-[var(--diamond-magenta)]" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/50">
                <MapPin className="h-4 w-4 text-[var(--diamond-magenta)]" />
                Miami, FL - USA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[var(--diamond-purple)]/10 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-foreground/40">
            {"2025 Diamond Entertainment. Todos los derechos reservados."}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">
              Politica de Privacidad
            </Link>
            <Link href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">
              Terminos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
