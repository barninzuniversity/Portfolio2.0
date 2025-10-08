"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Github, Instagram, FileText } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    value: "ibrahim.zaouali888@gmail.com",
    href: "mailto:ibrahim.zaouali888@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "@barninzuniversity",
    href: "https://github.com/barninzuniversity",
    icon: Github,
  },
  {
    name: "Instagram",
    value: "@ibrahimzaouali",
    href: "https://instagram.com/ibrahimzaouali",
    icon: Instagram,
  },
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          <div className={`space-y-4 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Let's Connect</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm always interested in discussing mathematics, new projects, or collaboration opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Card
                  key={link.name}
                  className={`p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${0.2 + index * 0.1}s`,
                  }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{link.name}</h3>
                      <p className="text-sm text-muted-foreground break-all">{link.value}</p>
                    </div>
                  </a>
                </Card>
              )
            })}
          </div>

          <div className={`text-center pt-8 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
            <Button size="lg" className="gap-2" asChild>
              <a href="/cv-ibrahim-zaouali.pdf" download>
                <FileText className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </div>

          <div className={`text-center pt-12 ${isVisible ? "animate-fade-in delay-600" : "opacity-0"}`}>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ibrahim Zaouali. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
