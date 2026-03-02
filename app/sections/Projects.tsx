"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { NeonCard } from "../components/effects/NeonCard";
import { GlitchText } from "../components/effects/GlitchText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Bot, Code2, Layers } from "lucide-react";
import { portfolioConfig } from "@/lib/content";

type ProjectCategory = "all" | "ai" | "fullstack" | "saas";

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "ai", label: "AI/ML" },
  { value: "fullstack", label: "Full-Stack" },
  { value: "saas", label: "SaaS" },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = portfolioConfig.projects.filter((project) =>
    activeCategory === "all" ? true : project.category.includes(activeCategory)
  );

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#00f0ff] font-mono text-sm tracking-wider uppercase mb-2 block">
            &lt;Projects /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GlitchText text="Featured Work" className="text-white" as="span" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] mx-auto rounded-full mb-6" />
          <p className="text-[#a0a0b0] max-w-2xl mx-auto">
            A selection of projects showcasing AI systems, full-stack applications, and SaaS platforms.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-[#00f0ff] text-[#0a0a0f] shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  : "border border-[#00f0ff]/30 text-[#00f0ff] hover:bg-[#00f0ff]/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <NeonCard
                className="h-full flex flex-col p-6"
                glowColor={project.color === "#00f0ff" ? "cyan" : project.color === "#ff00a0" ? "magenta" : project.color === "#7b2dff" ? "purple" : "green"}
                hoverScale={1.03}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ background: `${project.color}20` }}
                  >
                    {project.icon === "Bot" ? (
                      <Bot className="w-6 h-6" style={{ color: project.color }} />
                    ) : project.icon === "Sparkles" ? (
                      <Sparkles className="w-6 h-6" style={{ color: project.color }} />
                    ) : project.icon === "Layers" ? (
                      <Layers className="w-6 h-6" style={{ color: project.color }} />
                    ) : (
                      <Code2 className="w-6 h-6" style={{ color: project.color }} />
                    )}
                  </div>
                  {project.featured && (
                    <Badge 
                      className="bg-[#ff00a0]/20 text-[#ff00a0] border-[#ff00a0]/50"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a0a0b0] text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-[#1a1a25] text-[#a0a0b0] border border-[#00f0ff]/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded bg-[#1a1a25] text-[#a0a0b0]">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Status */}
                <div className="pt-4 border-t border-[#00f0ff]/10">
                  <span className="text-xs text-[#a0a0b0] italic">Project Details Available</span>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
