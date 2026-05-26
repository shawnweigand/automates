"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Bios } from "@/components/sections/Bios";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Search, Link as LinkIcon, Cpu, Handshake } from "lucide-react";

const ROTATING_TEXTS = ["Online Coaching", "Agencies", "Consultants"];

const CLAUDE_SERVICES = [
  {
    title: "Online Coaches",
    description:
      "Scale your coaching program without operational headache. We automate your backend logistics, client materials, marketing assets, and founder schedule so you can focus entirely on high-impact transformation.",
    solutions: [
      "Client-facing deliverables (training decks, worksheets, workbooks)",
      "Internal and client reporting (weekly/monthly/quarterly insights, survey analysis)",
      "Founder support (calendar, email, travel coordination)",
      "Sales and client experience workflows (session prep, tracking, reminders)",
      "Content scheduling support (articles, weekly newsletters, website blogs)",
    ],
    accentColor: "text-violet-400",
    imageSrc: "/coaches.webp",
  },
  {
    title: "Agencies",
    description:
      "Keep client projects moving swiftly and profitably. We build automated systems to handle new client onboarding, team task routing, campaign reporting, and final asset delivery with zero friction.",
    solutions: [
      "Client onboarding & asset gathering (questionnaires, brand kits, portal setup)",
      "Project management & task routing (ticket creation, status updates, team notifications)",
      "Client-facing reporting (campaign dashboards, ROI analytics, monthly reviews)",
      "Resource & capacity management (time logs, project scheduling, team allocation)",
      "Fulfillment & QA workflows (file structure organization, asset exports, handoff checklists)",
    ],
    accentColor: "text-emerald-400",
    imageSrc: "/agencies.png",
  },
  {
    title: "Consultants",
    description:
      "Turn your specialized expertise into a highly scalable practice. We automate your custom research gathering, client-ready proposals, diagnostics, and ongoing retainer management.",
    solutions: [
      "Diagnostic audits & intake forms (prospect assessments, scoring models, next-step advice)",
      "Research & data synthesis (market briefs, industry roundups, competitor analysis)",
      "Proposal & contract execution (personalized scopes of work, e-signatures, invoicing)",
      "Client engagement & retainer management (regular progress reports, feedback loops, renewal alerts)",
      "Founder & administrative support (itinerary planning, expense tracking, calendar management)",
    ],
    accentColor: "text-orange-400",
    imageSrc: "/consultants.png",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Find exactly where you're losing time and money.",
    description:
      "We go deep with you on a full operational audit to map out every pillar of your business, understand each of the workflows, and identify exactly where the bottlenecks exist.",
    icon: Search,
  },
  {
    number: "02",
    title: "Integrate",
    subtitle: "Connect Claude directly to your existing tools and workflows.",
    description:
      "With a clear picture of your operations, we integrate Claude into every system that you work with - priming your business for AI-native optimization.",
    icon: LinkIcon,
  },
  {
    number: "03",
    title: "Automate",
    subtitle: "Replace repetitive manual work with custom AI systems.",
    description:
      "We build bespoke AI plugins and intelligent agents tailored to your business, converting manual bottlenecks into seamless, instant executions that run with precision.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Handover",
    subtitle: "Empower your team and continuously optimize performance.",
    description:
      "We train your team for frictionless adoption with customized SOPs to ensure your AI systems grow alongside your business.",
    icon: Handshake,
  },
];

export default function ClaudeLanding() {
  const [index, setIndex] = useState(0);
  const processSectionRef = useRef<HTMLDivElement>(null);
  const processTimelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: processSectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pointerY = useTransform(scrollYProgress, [0, 1], ["0%", "calc(100% - 24px)"]);

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
          transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease !important;
        }
        .trusted-themed .relative:hover img {
          opacity: 1 !important;
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
            AI is here to stay, and the teams using it the right way are the ones who will <span className="italic">win the next decade</span>.
            {/* <span className="block mt-3">
              AutoMates is a team of Claude AI experts that helps businesses implement and see <span className="italic">actual value</span> out of these new AI tools.
            </span> */}
          </p>

          {/* Discover Your Strategy CTA Button */}
          <div className="flex justify-center mt-2">
            <Link
              href="#contact"
              className="px-8 py-4 text-lg font-semibold text-[#F0EEE6] shadow-lg shadow-[#D87756]/10 transition-all duration-300 hover:scale-[1.02] hover:bg-[#D87756]/90 rounded-2xl cursor-pointer"
              style={{
                backgroundColor: "#D87756",
                fontFamily: "var(--font-sans), sans-serif"
              }}
            >
              Discover Your Strategy
            </Link>
          </div>
        </main>

        {/* Trusted By Section - Shifted up, client logos colored #9C9A92, title removed */}
        <div className="trusted-themed mb-12" style={{ "--background": "#262624" } as React.CSSProperties}>
          <TrustedBy showTitle={false} />
        </div>

        {/* How We Help Section */}
        <section id="how-we-help" className="py-24 relative overflow-hidden w-full" style={{ borderTop: "1px solid rgba(240, 238, 230, 0.08)" }}>

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
                Spend your time on{" "}
                <span style={{ color: "#D67854" }}>what actually matters</span>
              </h2>
              <p
                className="text-lg max-w-xl mx-auto text-balance"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  color: "#F0EEE6",
                  opacity: 0.75
                }}
              >
                We remove the operational burden so you can focus on the things that move the needle.
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

        {/* Our Process Section */}
        <section
          id="our-process"
          ref={processSectionRef}
          className="py-24 relative overflow-hidden w-full"
          style={{ borderTop: "1px solid rgba(240, 238, 230, 0.08)" }}
        >

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <h2
                className="text-3xl font-bold sm:text-4xl mb-6"
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#F0EEE6",
                }}
              >
                How you go from <span style={{ color: "#D67854" }}>zero → AI-native</span>
              </h2>
              <p
                className="text-lg max-w-xl mx-auto text-balance"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  color: "#F0EEE6",
                  opacity: 0.75
                }}
              >
                Our step-by-step roadmap to build the systems you need to <span className="italic">win the next decade</span>.
              </p>
            </motion.div>

            {/* Timeline */}
            <div ref={processTimelineRef} className="relative">
              {/* Track Line */}
              <div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-px"
                style={{ backgroundColor: "rgba(240, 238, 230, 0.08)" }}
              />

              {/* Animated Line Fill */}
              <motion.div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-px origin-top"
                style={{
                  scaleY: lineScaleY,
                  backgroundColor: "#D67854",
                }}
              />

              {/* Moving Pointer Indicator */}
              <motion.div
                className="absolute left-4 md:left-1/2 -translate-x-1/2 z-30 w-6 h-6 rounded-full border-2 shadow-[0_0_20px_rgba(214,120,84,0.6)]"
                style={{
                  top: pointerY,
                  backgroundColor: "#D67854",
                  borderColor: "#262624",
                }}
              />

              {/* Steps */}
              {PROCESS_STEPS.map((step, i) => {
                const isLeft = i % 2 === 0;
                const Icon = step.icon;

                return (
                  <div key={i} className="relative flex flex-col md:grid md:grid-cols-2 pb-12 md:pb-20 last:pb-0">
                    {isLeft ? (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.6 }}
                          className="pl-12 pr-0 md:pl-0 md:pr-12 text-left md:text-right flex flex-col items-start md:items-end w-full"
                        >
                          <ProcessStepCard step={step} Icon={Icon} />
                        </motion.div>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.6 }}
                          className="pl-12 text-left flex flex-col items-start w-full"
                        >
                          <ProcessStepCard step={step} Icon={Icon} />
                        </motion.div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials theme="dark" />

        {/* Team Section */}
        <Bios theme="dark" />

        {/* FAQ Section */}
        <Faq theme="dark" />

        {/* Contact/Footer Section */}
        <Footer theme="dark" />
      </div >
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="relative h-full cursor-pointer w-full flex flex-col"
      style={{ perspective: "1200px" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full grid grid-cols-1 grid-rows-1 flex-1"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        {/* Front Face — centered square + title + description */}
        <div
          className={`col-start-1 row-start-1 w-full rounded-2xl border shadow-2xl flex flex-col p-8 justify-between text-left items-start transition-all duration-300 ${isFlipped ? "pointer-events-none select-none" : ""
            }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "#2C2C29",
            borderColor: "rgba(240, 238, 230, 0.08)",
          }}
        >
          {/* Top Half: Centered Rounded Square in color #30302E, same width as text */}
          <div
            className="w-full aspect-square rounded-2xl border shrink-0 mx-auto overflow-hidden relative"
            style={{
              backgroundColor: "#30302E",
              borderColor: "rgba(240, 238, 230, 0.05)",
            }}
          >
            {service.imageSrc && (
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            )}
          </div>

          <div className="flex-1 flex flex-col justify-between w-full mt-6">
            <div>
              <h3
                className="text-lg font-bold text-left mb-2.5"
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#F0EEE6",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-left"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  color: "#F0EEE6",
                  opacity: 0.75,
                }}
              >
                {service.description}
              </p>
            </div>

            <p
              className="text-xs text-left italic mt-4"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                color: "#F0EEE6",
                opacity: 0.4,
              }}
            >
              Hover to see solutions →
            </p>
          </div>
        </div>

        {/* Back Face — bulleted solutions list with Title Header */}
        <div
          className={`col-start-1 row-start-1 w-full rounded-2xl border shadow-2xl flex flex-col p-8 justify-between text-left items-start transition-all duration-300 ${!isFlipped ? "pointer-events-none select-none" : ""
            }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#2C2C29",
            borderColor: "rgba(240, 238, 230, 0.08)",
          }}
        >
          <div className="w-full">
            <h3
              className="text-lg font-bold text-left mb-2"
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#F0EEE6",
              }}
            >
              {service.title}
            </h3>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-6"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                color: "#D67854",
              }}
            >
              Deliverables &amp; Solutions
            </p>

            <ul className="flex flex-col gap-4 w-full">
              {service.solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3 justify-start">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${service.accentColor}`} />
                  <span
                    className="text-sm font-medium text-left leading-normal"
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

          <p
            className="text-xs italic mt-4"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              color: "#F0EEE6",
              opacity: 0.4,
            }}
          >
            ← Hover to return
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProcessStepCard({
  step,
  Icon,
}: {
  step: typeof PROCESS_STEPS[0];
  Icon: typeof PROCESS_STEPS[0]["icon"];
}) {
  return (
    <div
      className="group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl w-full text-left"
      style={{
        backgroundColor: "#2C2C29",
        borderColor: "rgba(240, 238, 230, 0.08)",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="h-9 w-9 rounded-xl flex items-center justify-center border transition-colors"
          style={{
            backgroundColor: "rgba(214, 120, 84, 0.1)",
            borderColor: "rgba(214, 120, 84, 0.2)",
          }}
        >
          <Icon className="h-4 w-4" style={{ color: "#D67854" }} />
        </div>
        <span
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            color: "#D67854",
          }}
        >
          {step.number}
        </span>
      </div>
      <h3
        className="text-xl font-bold mb-1"
        style={{
          fontFamily: "var(--font-heading), serif",
          color: "#F0EEE6",
        }}
      >
        {step.title}
      </h3>
      <p
        className="text-xs font-medium mb-3"
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          color: "#F0EEE6",
          opacity: 0.6,
        }}
      >
        {step.subtitle}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          color: "#F0EEE6",
          opacity: 0.75,
        }}
      >
        {step.description}
      </p>
    </div>
  );
}
