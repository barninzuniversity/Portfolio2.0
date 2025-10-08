"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-mono font-semibold text-foreground hover:text-primary transition-colors"
          >
            {"<IZ />"}
          </button>
          <div className="flex items-center gap-6">
            <Button variant="ghost" onClick={() => scrollToSection("about")} className="text-sm font-medium">
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")} className="text-sm font-medium">
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")} className="text-sm font-medium">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
