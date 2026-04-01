"use client"

import { useEffect, useRef } from "react"

const items = [
  "SALSA",
  "BACHATA",
  "SHOWS",
  "ENTRETENIMIENTO",
  "EVENTOS",
  "FRANQUICIAS",
  "BAILE",
  "ARTE",
  "PASION",
  "DIAMOND",
]

export function MarqueeBanner() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let frame: number
    let pos = 0

    const animate = () => {
      pos -= 0.5
      if (pos <= -(el.scrollWidth / 2)) {
        pos = 0
      }
      el.style.transform = `translateX(${pos}px)`
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="overflow-hidden bg-[var(--diamond-magenta)] py-3">
      <div ref={scrollRef} className="flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-sm font-bold tracking-widest uppercase text-white"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
