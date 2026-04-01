"use client"

import { useState } from "react"
import { Check, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basico",
    price: "29",
    period: "/mes",
    description: "Perfecto para quienes empiezan a bailar",
    features: [
      "2 clases en vivo por semana",
      "Acceso a grabaciones",
      "Comunidad online",
      "Material de apoyo",
    ],
    color: "var(--diamond-purple)",
    popular: false,
  },
  {
    name: "Premium",
    price: "59",
    period: "/mes",
    description: "Para quienes quieren dominar la salsa",
    features: [
      "Clases ilimitadas en vivo",
      "Acceso a grabaciones",
      "Comunidad VIP",
      "Feedback personalizado",
      "Masterclasses exclusivas",
      "Certificacion Diamond",
    ],
    color: "var(--diamond-magenta)",
    popular: true,
  },
  {
    name: "Corporativo",
    price: "Cotizar",
    period: "",
    description: "Shows y eventos para tu empresa",
    features: [
      "Shows personalizados",
      "Produccion completa",
      "Coordinacion de evento",
      "Vestuario profesional",
      "DJ y sonido incluido",
    ],
    color: "var(--diamond-gold)",
    popular: false,
  },
]

export function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[var(--diamond-red)]">
            Planes y Precios
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-5xl text-balance">
            Elige tu Plan Ideal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60 leading-relaxed">
            Opciones flexibles para que comiences tu viaje con Diamond
            Entertainment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-[var(--diamond-magenta)]/60 bg-card scale-[1.02]"
                  : "border-[var(--diamond-purple)]/20 bg-card"
              } ${hoveredIndex === i ? "border-[var(--diamond-gold)]/60" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 flex items-center gap-1 rounded-full bg-[var(--diamond-magenta)] px-3 py-1">
                  <Flame className="h-3 w-3 text-white" />
                  <span className="text-xs font-bold text-white">Popular</span>
                </div>
              )}

              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-foreground/50">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                {plan.price !== "Cotizar" && (
                  <span className="text-sm text-foreground/50">$</span>
                )}
                <span className="text-4xl font-extrabold text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-foreground/50">{plan.period}</span>
                )}
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/70">
                    <Check
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: plan.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full font-semibold text-white"
                style={{ backgroundColor: plan.color }}
              >
                {plan.price === "Cotizar" ? "Solicitar Cotizacion" : "Comenzar Ahora"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
