"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Trophy, Award, GraduationCap, Code } from "lucide-react"

const achievements = [
  {
    title: "International Olympiads",
    description: "Bronze Medal at OFM 2024, Silver Medal at PAMO 2025, IMO Selection Test 8th nationally",
    icon: Trophy,
  },
  {
    title: "National Competitions",
    description: "Multiple Gold, Silver, and Bronze medals in National Mathematical Olympiad",
    icon: Award,
  },
  {
    title: "Advanced Training",
    description: "650+ hours OTIS training under Dr. Evan Chen (Level 58 Scholar), Harvard & Delft courses",
    icon: GraduationCap,
  },
  {
    title: "Technical Skills",
    description: "Python, Django, React, HTML. HarvardX CS50 certified. Built e-commerce and social platforms",
    icon: Code,
  },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className={`space-y-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">About Me</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              I'm Ibrahim Zaouali, a student at The Pioneer High School of Monastir, Tunisia (Class of 2026). I'm
              passionate about competitive mathematics and web development, representing Tunisia in international
              competitions while building innovative web applications.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              With achievements including a Bronze Medal at the Olympiad de la Francophonie en Mathématiques (OFM 2024),
              Silver Medal at PAMO 2025, and ranking 8th nationally in the IMO Selection Test, I combine rigorous
              mathematical thinking with modern development practices. 
            </p>
          </div>

          <div className="space-y-6">
            <h3
              className={`text-2xl md:text-3xl font-semibold ${
                isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              Achievements & Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <Card
                    key={achievement.title}
                    className={`p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${0.3 + index * 0.1}s`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold">{achievement.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
