"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Cursos", href: "#cursos" },
  { label: "Shows", href: "#shows" },
  { label: "Franquicias", href: "#franquicias" },
  { label: "Nosotros", href: "#nosotros" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--diamond-navy)]/90 backdrop-blur-md border-b border-[var(--diamond-purple)]/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Diamond className="h-7 w-7 text-[var(--diamond-gold)] transition-transform group-hover:rotate-12" />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-wider text-foreground">
              DIAMOND
            </span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-[var(--diamond-gold)]">
              ENTERTAINMENT
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-[var(--diamond-gold)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-[var(--diamond-purple)]/20"
            asChild
          >
            <Link href="#login">Iniciar Sesion</Link>
          </Button>
          <Button
            className="bg-[var(--diamond-magenta)] text-white hover:bg-[var(--diamond-magenta)]/80 font-semibold"
            asChild
          >
            <Link href="#cursos">Reservar Ahora</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--diamond-navy)] border-t border-[var(--diamond-purple)]/20 animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-foreground/70 transition-colors hover:text-[var(--diamond-gold)] border-b border-[var(--diamond-purple)]/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 flex flex-col gap-2">
              <Button
                variant="ghost"
                className="w-full justify-center text-foreground/70 hover:text-foreground hover:bg-[var(--diamond-purple)]/20"
                asChild
              >
                <Link href="#login" onClick={() => setMobileOpen(false)}>
                  Iniciar Sesion
                </Link>
              </Button>
              <Button
                className="w-full bg-[var(--diamond-magenta)] text-white hover:bg-[var(--diamond-magenta)]/80 font-semibold"
                asChild
              >
                <Link href="#cursos" onClick={() => setMobileOpen(false)}>
                  Reservar Ahora
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
