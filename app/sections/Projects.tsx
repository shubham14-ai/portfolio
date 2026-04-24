"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { NeonCard } from "../components/effects/NeonCard";
import { GlitchText } from "../components/effects/GlitchText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Bot, Code2, Layers, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const filteredProjects = portfolioConfig.projects.filter((project) =>
    activeCategory === "all" ? true : project.category.includes(activeCategory)
  );

  // Reset index when category changes
  useEffect(() => {
    setCurrentProjectIndex(0);
  }, [activeCategory]);

  const goToPrev = () => {
    setCurrentProjectIndex(prev => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentProjectIndex(prev => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

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

        {/* Carousel Navigation - 3 cards with middle zoom */}
        <div className="relative">
          {filteredProjects.length > 0 && (
            <div className="overflow-hidden">
              <div className="flex justify-center items-center gap-4">
                {/* Previous Card */}
                {filteredProjects.length > 1 && (
                  <motion.div 
                    className="w-1/3 min-w-[300px] cursor-pointer"
                    onClick={goToPrev}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0.6, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <NeonCard
                      className="h-full flex flex-col p-4"
                      glowColor={filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].color === "#00f0ff" ? "cyan" : filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].color === "#ff00a0" ? "magenta" : filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].color === "#7b2dff" ? "purple" : "green"}
                      hoverScale={1.03}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className="p-2 rounded-lg"
                          style={{ background: `${filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].color}20` }}
                        >
                          {filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].icon === "Bot" ? (
                            <Bot className="w-5 h-5" style={{ color: filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].color }} />
                          ) : filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].icon === "Sparkles" ? (
                            <Sparkles className="w-5 h-5" style={{ color: filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].color }} />
                          ) : filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].icon === "Layers" ? (
                            <Layers className="w-5 h-5" style={{ color: filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].color }} />
                          ) : (
                            <Code2 className="w-5 h-5" style={{ color: filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].color }} />
                          )}
                        </div>
                        {filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].featured && (
                          <Badge 
                            className="bg-[#ff00a0]/20 text-[#ff00a0] border-[#ff00a0]/50 text-xs"
                          >
                            <Sparkles className="w-2 h-2 mr-1" />
                            F
                          </Badge>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-1 truncate">
                        {filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].title}
                      </h3>
                      <p className="text-[#a0a0b0] text-xs mb-2 line-clamp-2">
                        {filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].tech.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-1 py-0.5 rounded bg-[#1a1a25] text-[#a0a0b0] border border-[#00f0ff]/20 truncate max-w-[60px]"
                          >
                            {tech}
                          </span>
                        ))}
                        {filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].tech.length > 2 && (
                          <span className="text-xs px-1 py-0.5 rounded bg-[#1a1a25] text-[#a0a0b0]">
                            +{filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length].tech.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Status */}
                      <div className="pt-2 border-t border-[#00f0ff]/10">
                        <span className="text-xs text-[#a0a0b0] italic">Details</span>
                      </div>
                    </NeonCard>
                  </motion.div>
                )}

                {/* Current (Middle) Card - Zoomed */}
                <motion.div 
                  className="w-1/2 min-w-[400px]"
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1.05, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <NeonCard
                    className="h-full flex flex-col p-6"
                    glowColor={filteredProjects[currentProjectIndex].color === "#00f0ff" ? "cyan" : filteredProjects[currentProjectIndex].color === "#ff00a0" ? "magenta" : filteredProjects[currentProjectIndex].color === "#7b2dff" ? "purple" : "green"}
                    hoverScale={1.03}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ background: `${filteredProjects[currentProjectIndex].color}20` }}
                      >
                        {filteredProjects[currentProjectIndex].icon === "Bot" ? (
                          <Bot className="w-6 h-6" style={{ color: filteredProjects[currentProjectIndex].color }} />
                        ) : filteredProjects[currentProjectIndex].icon === "Sparkles" ? (
                          <Sparkles className="w-6 h-6" style={{ color: filteredProjects[currentProjectIndex].color }} />
                        ) : filteredProjects[currentProjectIndex].icon === "Layers" ? (
                          <Layers className="w-6 h-6" style={{ color: filteredProjects[currentProjectIndex].color }} />
                        ) : (
                          <Code2 className="w-6 h-6" style={{ color: filteredProjects[currentProjectIndex].color }} />
                        )}
                      </div>
                      {filteredProjects[currentProjectIndex].featured && (
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
                      {filteredProjects[currentProjectIndex].title}
                    </h3>
                    <p className="text-[#a0a0b0] text-sm mb-4 flex-grow leading-relaxed">
                      {filteredProjects[currentProjectIndex].description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {filteredProjects[currentProjectIndex].tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-[#1a1a25] text-[#a0a0b0] border border-[#00f0ff]/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {filteredProjects[currentProjectIndex].tech.length > 4 && (
                        <span className="text-xs px-2 py-1 rounded bg-[#1a1a25] text-[#a0a0b0]">
                          +{filteredProjects[currentProjectIndex].tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Status */}
                    <div className="pt-4 border-t border-[#00f0ff]/10 flex items-center justify-between">
                      <span className="text-xs text-[#a0a0b0] italic">Project Details Available</span>
                      <div className="flex gap-2">
                        {filteredProjects[currentProjectIndex].github && (
                          <a
                            href={filteredProjects[currentProjectIndex].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all duration-300"
                          >
                            <Github className="w-3 h-3" />
                            Code
                          </a>
                        )}
                        {filteredProjects[currentProjectIndex].demo && (
                          <a
                            href={filteredProjects[currentProjectIndex].demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] hover:bg-[#00ff9d]/20 transition-all duration-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </NeonCard>
                </motion.div>

                {/* Next Card */}
                {filteredProjects.length > 1 && (
                  <motion.div 
                    className="w-1/3 min-w-[300px] cursor-pointer"
                    onClick={goToNext}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0.6, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <NeonCard
                      className="h-full flex flex-col p-4"
                      glowColor={filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].color === "#00f0ff" ? "cyan" : filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].color === "#ff00a0" ? "magenta" : filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].color === "#7b2dff" ? "purple" : "green"}
                      hoverScale={1.03}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className="p-2 rounded-lg"
                          style={{ background: `${filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].color}20` }}
                        >
                          {filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].icon === "Bot" ? (
                            <Bot className="w-5 h-5" style={{ color: filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].color }} />
                          ) : filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].icon === "Sparkles" ? (
                            <Sparkles className="w-5 h-5" style={{ color: filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].color }} />
                          ) : filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].icon === "Layers" ? (
                            <Layers className="w-5 h-5" style={{ color: filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].color }} />
                          ) : (
                            <Code2 className="w-5 h-5" style={{ color: filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].color }} />
                          )}
                        </div>
                        {filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].featured && (
                          <Badge 
                            className="bg-[#ff00a0]/20 text-[#ff00a0] border-[#ff00a0]/50 text-xs"
                          >
                            <Sparkles className="w-2 h-2 mr-1" />
                            F
                          </Badge>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-1 truncate">
                        {filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].title}
                      </h3>
                      <p className="text-[#a0a0b0] text-xs mb-2 line-clamp-2">
                        {filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].tech.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-1 py-0.5 rounded bg-[#1a1a25] text-[#a0a0b0] border border-[#00f0ff]/20 truncate max-w-[60px]"
                          >
                            {tech}
                          </span>
                        ))}
                        {filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].tech.length > 2 && (
                          <span className="text-xs px-1 py-0.5 rounded bg-[#1a1a25] text-[#a0a0b0]">
                            +{filteredProjects[(currentProjectIndex + 1) % filteredProjects.length].tech.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Status */}
                      <div className="pt-2 border-t border-[#00f0ff]/10">
                        <span className="text-xs text-[#a0a0b0] italic">Details</span>
                      </div>
                    </NeonCard>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          {filteredProjects.length > 1 && (
            <div className="flex justify-center mt-6 gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-[#00f0ff]/50 text-[#00f0ff] hover:bg-[#00f0ff]/10"
                onClick={goToPrev}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-[#a0a0b0]">
                <span>{currentProjectIndex + 1}</span>
                <span>/</span>
                <span>{filteredProjects.length}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-[#00f0ff]/50 text-[#00f0ff] hover:bg-[#00f0ff]/10"
                onClick={goToNext}
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
