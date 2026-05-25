"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { MessageSquare, Cog, Bot, CheckCircle2 } from "lucide-react";

const ROTATING_TEXTS = ["Online Coaching", "Agencies", "Consultants"];

const CLAUDE_SERVICES = [
  {
    icon: MessageSquare,
    title: "Communication Agents",
    description:
      "Deploy AI agents that handle inbound inquiries, qualify leads, schedule meetings, and follow up automatically — so no opportunity slips through the cracks.",
    solutions: [
      "AI-powered inbound chat agents",
      "Automated meeting scheduling",
      "Multi-channel follow-up flows",
      "Customer support automation",
      "Sentiment analysis & routing",
    ],
    accentColor: "text-violet-400",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description:
      "Eliminate the manual overhead killing your team's productivity. We identify your highest-cost bottlenecks and build automations that make your operations run themselves.",
    solutions: [
      "Client & project onboarding",
      "Invoice & document processing",
      "Reporting & dashboards",
      "Scheduling & coordination",
      "Cross-tool workflow integration",
    ],
    accentColor: "text-emerald-400",
  },
  {
    icon: Bot,
    title: "AI-Native Operating System",
    description:
      "We go beyond individual automations to wire your entire business on an AI-native foundation — connecting your tools, data, and workflows into one intelligent, self-optimizing system.",
    solutions: [
      "Unified data & tool integration",
      "AI-assisted decision making",
      "Custom internal AI assistants",
      "Real-time performance monitoring",
      "Continuous system optimization",
    ],
    accentColor: "text-orange-400",
  },
];

export default function ClaudeLanding() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .trusted-themed img {
          filter: brightness(0) invert(61%) !important;
        }
        /* Custom local overrides for the copied general Navbar */
        .no-nav-border header {
          border-bottom: none !important;
          font-family: var(--font-sans), sans-serif !important; /* Entire Navbar uses Inter secondary font */
        }
        /* Color all general links, logo, and menu to warm white */
        .no-nav-border header a:not([href="#contact"]), 
        .no-nav-border header span,
        .no-nav-border header svg {
          color: #F0EEE6 !important;
        }
        /* Keep AutoMates branding in Playfair Display primary font */
        .no-nav-border header span.font-heading,
        .no-nav-border header a span {
          font-family: var(--font-heading), serif !important;
        }
        .no-nav-border header a:not([href="#contact"]):hover {
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }
        /* Style 'Book a Call' button to match 'Discover Your Strategy' CTA */
        .no-nav-border header a[href="#contact"] {
          background-color: #D87756 !important;
          color: #F0EEE6 !important;
          border-radius: 1rem !important; /* rounded-2xl (16px) */
          font-family: var(--font-sans), sans-serif !important;
          box-shadow: 0 10px 15px -3px rgba(216, 119, 86, 0.15) !important;
          transition: all 0.3s ease !important;
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
        .no-nav-border header a[href="#contact"]:hover {
          background-color: rgba(216, 119, 86, 0.9) !important;
          transform: scale(1.02) !important;
        }
      `}</style>

      <div
        className="w-full min-h-screen flex flex-col selection:bg-white/10 selection:text-white no-nav-border"
        style={{ backgroundColor: "#262624" }}
      >
        {/* Sticky Top Navbar Wrapper */}
        <div
          className="sticky top-0 z-50 w-full"
          style={{ "--background": "#262624" } as React.CSSProperties}
        >
          <Navbar />
        </div>

        {/* Hero Section - Centered and occupying remaining viewport space with extra top padding */}
        <main className="flex flex-1 flex-col items-center justify-center gap-8 p-6 pt-36 text-center">
          {/* Main Brand Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <Image
              src="/tools/claude.png"
              alt="Claude"
              width={72}
              height={72}
              className="object-contain"
              priority
            />
            <h1
              className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-3 text-5xl sm:text-6xl font-medium tracking-wide"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              <span style={{ color: "#F0EEE6" }}>Claude</span>
              <span className="text-3xl sm:text-4xl italic" style={{ color: "#F0EEE6", opacity: 0.8 }}>for</span>

              {/* Animated Rotating Segment with padding and negative margin to prevent descender clipping */}
              <span className="inline-flex justify-center md:justify-start min-w-[280px] sm:min-w-[380px] overflow-hidden py-3 -my-3">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_TEXTS[index]}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="inline-block"
                    style={{ color: "#D67854" }}
                  >
                    {ROTATING_TEXTS[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          {/* Description Paragraph - styled in Inter secondary font, scaled down slightly (text-base sm:text-lg) */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              color: "#F0EEE6",
              opacity: 0.75
            }}
          >
            AutoMates is a team of Claude AI experts that helps businesses implement and get <span className="italic">actual value</span> out of these new AI tools.
          </p>

          {/* Discover Your Strategy CTA Button */}
          <div className="flex justify-center mt-2">
            <button
              className="px-8 py-4 text-lg font-semibold text-[#F0EEE6] shadow-lg shadow-[#D87756]/10 transition-all duration-300 hover:scale-[1.02] hover:bg-[#D87756]/90 rounded-2xl cursor-pointer"
              style={{
                backgroundColor: "#D87756",
                fontFamily: "var(--font-sans), sans-serif"
              }}
            >
              Discover Your Strategy
            </button>
          </div>
        </main>

        {/* Trusted By Section - Shifted up, client logos colored #9C9A92, title removed */}
        <div className="trusted-themed mb-12" style={{ "--background": "#262624" } as React.CSSProperties}>
          <TrustedBy showTitle={false} />
        </div>

        {/* How We Help Section */}
        <section id="how-we-help" className="py-24 relative overflow-hidden w-full" style={{ borderTop: "1px solid rgba(240, 238, 230, 0.08)" }}>
          {/* Background glow */}
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none"
            style={{ backgroundColor: "rgba(216, 119, 86, 0.05)" }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl font-bold sm:text-4xl mb-6"
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#F0EEE6"
                }}
              >
                End-to-end automation,{" "}
                <span style={{ color: "#D67854" }}>across every department</span>
              </h2>
              <p
                className="text-lg max-w-xl mx-auto text-balance"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  color: "#F0EEE6",
                  opacity: 0.75
                }}
              >
                From sales to operations, we identify where you&apos;re losing time and build the systems to win it back.
              </p>
            </motion.div>

            {/* 3x1 Grid - Side-by-side on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {CLAUDE_SERVICES.map((service, index) => (
                <ClaudeFlipCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function ClaudeFlipCard({
  service,
  index,
}: {
  service: typeof CLAUDE_SERVICES[0];
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="relative h-72 cursor-pointer w-full"
      style={{ perspective: "1200px" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        {/* Front Face — icon + title + description */}
        <div
          className="absolute inset-0 rounded-2xl border shadow-2xl flex flex-col justify-between p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "#2C2C29",
            borderColor: "rgba(240, 238, 230, 0.08)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-xl border flex items-center justify-center shrink-0"
              style={{
                backgroundColor: "rgba(240, 238, 230, 0.05)",
                borderColor: "rgba(240, 238, 230, 0.08)",
              }}
            >
              <Icon className={`h-4 w-4 ${service.accentColor}`} />
            </div>
            <h3
              className="text-lg font-bold"
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#F0EEE6",
              }}
            >
              {service.title}
            </h3>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              color: "#F0EEE6",
              opacity: 0.75,
            }}
          >
            {service.description}
          </p>
          <p
            className="text-xs italic"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              color: "#F0EEE6",
              opacity: 0.4,
            }}
          >
            Hover to see solutions →
          </p>
        </div>

        {/* Back Face — bulleted solutions list */}
        <div
          className="absolute inset-0 rounded-2xl border shadow-2xl flex flex-col justify-center p-8 gap-3"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#2C2C29",
            borderColor: "rgba(240, 238, 230, 0.08)",
          }}
        >
          <ul className="flex flex-col gap-3">
            {service.solutions.map((solution, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <CheckCircle2 className={`h-4 w-4 shrink-0 ${service.accentColor}`} />
                <span
                  className="text-sm font-medium"
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    color: "#F0EEE6",
                    opacity: 0.85,
                  }}
                >
                  {solution}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
