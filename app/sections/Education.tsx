"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlitchText } from "../components/effects/GlitchText";
import { NeonCard } from "../components/effects/NeonCard";
import { portfolioConfig } from "@/lib/content";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00f0ff] font-mono text-sm tracking-wider uppercase mb-2 block">
            &lt;Education /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GlitchText text="Education" className="text-white" as="span" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] mx-auto rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NeonCard className="p-8" glowColor="cyan">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="p-4 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-[#00f0ff]" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {portfolioConfig.education.degree}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-[#ff00a0]" />
                  <span className="text-[#ff00a0] font-medium">{portfolioConfig.education.honours}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-[#a0a0b0] mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {portfolioConfig.education.institution}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {portfolioConfig.education.period}
                  </span>
                </div>

                {/* CGPA Badge */}
                <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-[#00f0ff]/10 to-[#ff00a0]/10 border border-[#00f0ff]/30">
                  <span className="text-[#00f0ff] font-mono font-bold text-lg">
                    CGPA: {portfolioConfig.education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </NeonCard>
        </motion.div>
      </div>
    </section>
  );
}
