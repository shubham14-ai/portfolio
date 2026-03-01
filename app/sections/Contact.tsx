"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GlitchText } from "../components/effects/GlitchText";
import { NeonCard } from "../components/effects/NeonCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check } from "lucide-react";
import { portfolioConfig } from "@/lib/content";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00f0ff] font-mono text-sm tracking-wider uppercase mb-2 block">
            &lt;Contact /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GlitchText text="Get In Touch" className="text-white" as="span" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] mx-auto rounded-full mb-6" />
          <p className="text-[#a0a0b0] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NeonCard className="p-6 h-full" glowColor="cyan">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#00f0ff]/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffaa00]" />
                  <div className="w-3 h-3 rounded-full bg-[#00ff9d]" />
                </div>
                <span className="ml-4 text-[#a0a0b0] font-mono text-sm">contact.sh</span>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {portfolioConfig.contact.map((info, index) => {
                  const IconComponent = info.icon === "Mail" ? Mail : info.icon === "Phone" ? Phone : MapPin;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/20 group-hover:border-[#00f0ff]/50 transition-colors">
                        <IconComponent className="w-5 h-5 text-[#00f0ff]" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-[#a0a0b0] text-sm">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-white hover:text-[#00f0ff] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleCopy(info.value, info.label)}
                        className="p-2 rounded-lg hover:bg-[#00f0ff]/10 transition-colors"
                        title="Copy to clipboard"
                      >
                        {copied === info.label ? (
                          <Check className="w-4 h-4 text-[#00ff9d]" />
                        ) : (
                          <Copy className="w-4 h-4 text-[#a0a0b0]" />
                        )}
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-[#00f0ff]/20">
                <p className="text-[#a0a0b0] text-sm mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {portfolioConfig.social.map((social) => {
                    const IconComponent = social.icon === "Github" ? Github : Linkedin;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00f0ff]/20 text-[#a0a0b0] hover:border-[#00f0ff]/50 hover:text-[#00f0ff] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Status */}
              <div className="mt-6 p-4 rounded-lg bg-[#00ff9d]/5 border border-[#00ff9d]/20">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff9d]" />
                  </span>
                  <span className="text-[#00ff9d] text-sm font-medium">Available for new opportunities</span>
                </div>
              </div>
            </NeonCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <NeonCard className="p-6" glowColor="magenta">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-[#ff00a0]" />
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#a0a0b0] text-sm mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="bg-[#1a1a25] border-[#00f0ff]/20 text-white placeholder:text-[#a0a0b0]/50 focus:border-[#00f0ff]/50 focus:ring-[#00f0ff]/20"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a0b0] text-sm mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="bg-[#1a1a25] border-[#00f0ff]/20 text-white placeholder:text-[#a0a0b0]/50 focus:border-[#00f0ff]/50 focus:ring-[#00f0ff]/20"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a0b0] text-sm mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-[#1a1a25] border-[#00f0ff]/20 text-white placeholder:text-[#a0a0b0]/50 focus:border-[#00f0ff]/50 focus:ring-[#00f0ff]/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] text-[#0a0a0f] font-semibold py-6 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-[#0a0a0f] border-t-transparent rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </NeonCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
