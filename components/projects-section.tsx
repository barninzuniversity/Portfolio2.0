"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Scholarship Finder Bot",
    description:
      "Intelligent n8n automation bot that searches and aggregates scholarship opportunities, integrating multiple APIs and services to help students find funding opportunities efficiently",
    tags: ["n8n", "Automation", "API Integration", "Workflows"],
    github: "https://github.com/barninzuniversity/ScholarshipFinderBot",
  },
  {
    title: "Social Chat Website",
    description:
      "Real-time social networking platform with chat functionality, user profiles, and interactive messaging features built with Django",
    tags: ["Python", "Django", "WebSockets", "JavaScript"],
    github: "https://github.com/barninzuniversity/SocialChat-",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce website built with React and Node.js featuring user authentication, product management, shopping cart, and secure checkout functionality",
    tags: ["React", "Node.js", "HTML", "CSS"],
    github: "https://github.com/barninzuniversity/Ecom",
  },
  {
    title: "CS50 Projects",
    description:
      "Portfolio of projects completed during HarvardX CS50 Computer Science and AI courses, demonstrating proficiency in algorithms, data structures, and AI concepts",
    tags: ["Python", "C", "AI", "Algorithms"],
    github: "https://github.com/code50/179976386",
  },
]

export function ProjectsSection() {
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
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div className={`space-y-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Featured Projects</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              A selection of web development projects and mathematical work showcasing problem-solving and technical
              skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-balance">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="https://github.com/barninzuniversity" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
