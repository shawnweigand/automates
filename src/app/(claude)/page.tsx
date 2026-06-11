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
import { CheckCircle2, Search, MessageSquare, Send, Calendar } from "lucide-react";

const ROTATING_TEXTS = ["chasing referrals", "unpredictable revenue", "empty pipelines"];

const CLAUDE_SERVICES = [
  {
    title: "Done For You",
    description:
      "We discover your ideal prospects and build the entire outreach from scratch. You never touch a list, write an email, or follow up - we handle all of it.",
    solutions: [
      "Custom copywriting for your offer",
      "List building of the most qualified leads",
      "Discover your ideal customer persona",
      "Daily inbox management",
      "Response handling for positive replies",
      "Follow up sequences to prospects",
      "Dedicated account manager",
    ],
    accentColor: "text-violet-400",
    imageSrc: "/coaches.webp",
  },
  {
    title: "Guaranteed Meetings",
    description:
      "We don't just send emails - we guarantee booked sales calls on your calendar. If we don't deliver, you get your money back.",
    solutions: [
      "Pre-qualified leads only",
      "Sales calls booked on your calendar",
      "Target audience profile filtering",
      "Personalized prospect research reports",
      "100% risk-free guarantee"
    ],
    accentColor: "text-emerald-400",
    imageSrc: "/agencies.png",
  },
  {
    title: "Predictable Pipeline",
    description:
      "No more feast-or-famine revenue cycles. Our 8-week campaigns build a consistent, predictable stream of new business opportunities.",
    solutions: [
      "8-week structured outreach sprint",
      "Lead list data enrichment & cleansing",
      "Domain setup & warm-up",
      "Maximized deliverability",
      "Continuous copy optimization",
      "Weekly campaign reporting"
    ],
    accentColor: "text-orange-400",
    imageSrc: "/consultants.png",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Profile",
    subtitle: "Identify your ideal target audience.",
    description:
      "We discover your exact buyers, compile high-accuracy prospect data, and thoroughly cleanse target lists to protect your sender reputation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Craft",
    subtitle: "Write highly personalized outreach sequences.",
    description:
      "We draft custom copywriting sequences tailored to spark positive conversations and drive interest, rather than fill spam folders.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Launch",
    subtitle: "Deploy custom domains and launch campaigns.",
    description:
      "We build and warm up specialized sender domains, launching your campaigns safely utilizing advanced deliverability checks.",
    icon: Send,
  },
  {
    number: "04",
    title: "Book",
    subtitle: "Handle replies and route warm sales calls.",
    description:
      "We manage all replies, answer objections, and follow up relentlessly, booking qualified meetings directly on your calendar.",
    icon: Calendar,
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
        /* Color all general links, logo, and menu to dark charcoal */
        .no-nav-border header a:not([href="#contact"]), 
        .no-nav-border header span,
        .no-nav-border header svg {
          color: #262624 !important;
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
          background-color: #137EFF !important;
          color: #F0EEE6 !important;
          border-radius: 1rem !important; /* rounded-2xl (16px) */
          font-family: var(--font-sans), sans-serif !important;
          box-shadow: 0 10px 15px -3px rgba(19, 126, 255, 0.15) !important;
          transition: all 0.3s ease !important;
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
        .no-nav-border header a[href="#contact"] svg {
          color: #F0EEE6 !important;
        }
        .no-nav-border header a[href="#contact"]:hover {
          background-color: rgba(19, 126, 255, 0.9) !important;
          transform: scale(1.02) !important;
        }
      `}</style>

      <div
        className="w-full min-h-screen flex flex-col selection:bg-black/10 selection:text-black no-nav-border"
        style={{ backgroundColor: "#FAF9F5" }}
      >
        {/* Sticky Top Navbar Wrapper */}
        <div
          className="sticky top-0 z-50 w-full"
          style={{ "--background": "#FAF9F5" } as React.CSSProperties}
        >
          <Navbar />
        </div>

        {/* Hero Section - Centered and occupying remaining viewport space with extra top padding */}
        <main className="flex flex-1 flex-col items-center justify-center gap-8 p-6 pt-36 text-center">
          {/* Main Brand Header */}
          <div className="flex justify-center text-center">
            <h1
              className="text-5xl sm:text-6xl font-medium tracking-wide text-center leading-tight"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              <span style={{ color: "#262624" }}>Tired </span>
              <span className="text-3xl sm:text-4xl italic" style={{ color: "#262624", opacity: 0.8 }}>of </span>

              {/* Animated Rotating Segment with padding and negative margin to prevent descender clipping */}
              <span
                className="inline-flex justify-center overflow-hidden py-3 -my-3"
                style={{ verticalAlign: "-0.05em" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_TEXTS[index]}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="inline-block"
                    style={{ color: "#137EFF" }}
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
              color: "#262624",
              opacity: 0.75
            }}
          >
            We guarantee booked sales calls for your business - <span className="italic">or your money back</span>.
          </p>

          {/* Discover Your Strategy CTA Button */}
          <div className="flex justify-center mt-2">
            <Link
              href="#contact"
              className="px-8 py-4 text-lg font-semibold text-[#F0EEE6] shadow-lg shadow-[#137EFF]/10 transition-all duration-300 hover:scale-[1.02] hover:bg-[#137EFF]/90 rounded-2xl cursor-pointer"
              style={{
                backgroundColor: "#137EFF",
                fontFamily: "var(--font-sans), sans-serif"
              }}
            >
              Find out how
            </Link>
          </div>
        </main>

        {/* Trusted By Section - Shifted up, client logos colored #9C9A92, title removed */}
        <div className="trusted-themed mb-12" style={{ "--background": "#FAF9F5" } as React.CSSProperties}>
          <TrustedBy showTitle={false} />
        </div>

        {/* How We Help Section */}
        <section id="how-we-help" className="py-24 relative overflow-hidden w-full" style={{ borderTop: "1px solid rgba(38, 38, 36, 0.08)" }}>

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
                  color: "#262624"
                }}
              >
                Spend your time on{" "}
                <span style={{ color: "#137EFF" }}>what actually matters</span>
              </h2>
              <p
                className="text-lg max-w-xl mx-auto text-balance"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  color: "#262624",
                  opacity: 0.75
                }}
              >
                We run your entire outreach so you can focus on delivering, not filling the pipeline.
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
          style={{ borderTop: "1px solid rgba(38, 38, 36, 0.08)" }}
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
                  color: "#262624",
                }}
              >
                How we build your <span style={{ color: "#137EFF" }}>pipeline</span>
              </h2>
              <p
                className="text-lg max-w-xl mx-auto text-balance"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  color: "#262624",
                  opacity: 0.75
                }}
              >
                Our step-by-step roadmap to launch your campaigns and start booking sales calls.
              </p>
            </motion.div>

            {/* Timeline */}
            <div ref={processTimelineRef} className="relative">
              {/* Track Line */}
              <div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-px"
                style={{ backgroundColor: "rgba(38, 38, 36, 0.08)" }}
              />

              {/* Animated Line Fill */}
              <motion.div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-px origin-top"
                style={{
                  scaleY: lineScaleY,
                  backgroundColor: "#137EFF",
                }}
              />

              {/* Moving Pointer Indicator */}
              <motion.div
                className="absolute left-4 md:left-1/2 -translate-x-1/2 z-30 w-6 h-6 rounded-full border-2 shadow-[0_0_20px_rgba(214,120,84,0.6)]"
                style={{
                  top: pointerY,
                  backgroundColor: "#137EFF",
                  borderColor: "#FAF9F5",
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
            backgroundColor: "#FFFFFF",
            borderColor: "rgba(38, 38, 36, 0.08)",
          }}
        >
          {/* Top Half: Centered Rounded Square in color #FAF9F5, same width as text */}
          <div
            className="w-full aspect-square rounded-2xl border shrink-0 mx-auto overflow-hidden relative"
            style={{
              backgroundColor: "#FAF9F5",
              borderColor: "rgba(38, 38, 36, 0.05)",
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
                  color: "#262624",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-left"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  color: "#262624",
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
                color: "#262624",
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
            backgroundColor: "#FFFFFF",
            borderColor: "rgba(38, 38, 36, 0.08)",
          }}
        >
          <div className="w-full">
            <h3
              className="text-lg font-bold text-left mb-2"
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#262624",
              }}
            >
              {service.title}
            </h3>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-6"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                color: "#137EFF",
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
                      color: "#262624",
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
              color: "#262624",
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
        backgroundColor: "#FFFFFF",
        borderColor: "rgba(38, 38, 36, 0.08)",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="h-9 w-9 rounded-xl flex items-center justify-center border transition-colors"
          style={{
            backgroundColor: "rgba(19, 126, 255, 0.1)",
            borderColor: "rgba(19, 126, 255, 0.2)",
          }}
        >
          <Icon className="h-4 w-4" style={{ color: "#137EFF" }} />
        </div>
        <span
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            color: "#137EFF",
          }}
        >
          {step.number}
        </span>
      </div>
      <h3
        className="text-xl font-bold mb-1"
        style={{
          fontFamily: "var(--font-heading), serif",
          color: "#262624",
        }}
      >
        {step.title}
      </h3>
      <p
        className="text-xs font-medium mb-3"
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          color: "#262624",
          opacity: 0.6,
        }}
      >
        {step.subtitle}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          color: "#262624",
          opacity: 0.75,
        }}
      >
        {step.description}
      </p>
    </div>
  );
}
