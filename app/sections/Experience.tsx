"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlitchText } from "../components/effects/GlitchText";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { portfolioConfig } from "@/lib/content";

const typeColors = {
  work: "#00f0ff",
  internship: "#7b2dff",
  freelance: "#00ff9d",
};

const typeLabels = {
  work: "Full-Time",
  internship: "Internship",
  freelance: "Freelance",
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00f0ff] font-mono text-sm tracking-wider uppercase mb-2 block">
            &lt;Experience /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GlitchText text="Work History" className="text-white" as="span" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff] via-[#7b2dff] to-[#ff00a0]" />

          {portfolioConfig.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.15 }}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                  style={{ 
                    borderColor: typeColors[exp.type],
                    background: "#0a0a0f",
                    boxShadow: `0 0 20px ${typeColors[exp.type]}50`,
                  }}
                >
                  <Briefcase className="w-4 h-4" style={{ color: typeColors[exp.type] }} />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}>
                <div 
                  className="p-6 rounded-lg border relative group transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    borderColor: `${typeColors[exp.type]}30`,
                    background: "rgba(18, 18, 26, 0.8)",
                  }}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      background: `radial-gradient(circle at center, ${typeColors[exp.type]}10, transparent 70%)`,
                    }}
                  />

                  {/* Type Badge */}
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-3"
                    style={{ 
                      background: `${typeColors[exp.type]}20`,
                      color: typeColors[exp.type],
                      border: `1px solid ${typeColors[exp.type]}40`,
                    }}
                  >
                    {typeLabels[exp.type]}
                  </span>

                  {/* Company & Role */}
                  <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                  <p className="text-[#00f0ff] font-medium mb-3">{exp.role}</p>

                  {/* Meta Info */}
                  <div className={`flex flex-wrap gap-4 text-sm text-[#a0a0b0] mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#a0a0b0] text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className={`flex items-start gap-2 text-sm text-[#a0a0b0] ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <ChevronRight 
                          className={`w-4 h-4 mt-0.5 flex-shrink-0`} 
                          style={{ color: typeColors[exp.type] }}
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
