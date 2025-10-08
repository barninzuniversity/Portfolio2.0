"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`space-y-6 ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
          <h1
            className="text-6xl md:text-8xl font-bold text-balance animate-fade-in-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            Ibrahim Zaouali
          </h1>
          <p
            className="text-2xl md:text-3xl text-muted-foreground font-light animate-fade-in-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            Math Olympiad Medalist & Developer
          </p>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            International mathematics competitor with medals from OFM, PAMO, and national olympiads, building innovative
            web applications
          </p>
          <div
            className="flex items-center justify-center gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            <Button
              size="lg"
              className="font-medium"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="font-medium bg-transparent" asChild>
              <a href="/cv-ibrahim-zaouali.txt" download="Ibrahim_Zaouali_CV.txt">
                Download CV
              </a>
            </Button>
          </div>
        </div>
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}
