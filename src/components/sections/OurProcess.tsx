"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Pencil, Wrench, BarChart3 } from "lucide-react";

const STEPS = [
    {
        number: "01",
        title: "Discover",
        subtitle: "We go deep before we build anything.",
        description: "We embed ourselves in your business with a full operational audit — mapping workflows, bottlenecks, and data sources to find exactly where you're losing time and money.",
        icon: Search,
    },
    {
        number: "02",
        title: "Design",
        subtitle: "Architecture built for your business.",
        description: "With a clear picture of your operations, we design a bespoke automation architecture purpose-built for your specific tools, team, and goals — with a clear roadmap before a single line is written.",
        icon: Pencil,
    },
    {
        number: "03",
        title: "Implement",
        subtitle: "We build, test, and deploy — end to end.",
        description: "We handle the full build, rigorous testing, and smooth deployment. No hand-off decks. No DIY setup. We train your team so adoption is frictionless from day one.",
        icon: Wrench,
    },
    {
        number: "04",
        title: "Optimize",
        subtitle: "Systems that improve as you grow.",
        description: "Go-live is just the beginning. We actively monitor performance, respond to changes in your business, and continuously refine your systems so they scale with you.",
        icon: BarChart3,
    },
];

export function OurProcess() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 80%", "end 20%"],
    });

    const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const pointerY = useTransform(scrollYProgress, [0, 1], ["0%", "calc(100% - 24px)"]);

    return (
        <section
            id="our-process"
            ref={sectionRef}
            className="py-24 bg-background border-t border-border/40 relative overflow-hidden"
        >
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground">
                        How we go from <span className="text-primary">chaos to clarity</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">
                    {/* Track */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px" />

                    {/* Animated fill */}
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-px bg-primary -translate-x-px origin-top"
                        style={{ scaleY: lineScaleY }}
                    />

                    {/* Moving pointer */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 z-30 w-6 h-6 rounded-full bg-primary border-2 border-background shadow-[0_0_20px_rgba(91,63,255,0.6)]"
                        style={{ top: pointerY }}
                    />

                    {/* Steps */}
                    {STEPS.map((step, i) => {
                        const isLeft = i % 2 === 0;
                        const Icon = step.icon;

                        return (
                            <div key={i} className="grid grid-cols-2 pb-20 last:pb-0 relative">

                                {isLeft ? (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-60px" }}
                                            transition={{ duration: 0.6 }}
                                            className="pr-12"
                                        >
                                            <StepCard step={step} Icon={Icon} />
                                        </motion.div>
                                        <div />
                                    </>
                                ) : (
                                    <>
                                        <div />
                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-60px" }}
                                            transition={{ duration: 0.6 }}
                                            className="pl-12"
                                        >
                                            <StepCard step={step} Icon={Icon} />
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, Icon }: { step: typeof STEPS[0]; Icon: typeof STEPS[0]["icon"] }) {
    return (
        <div className="group bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{step.number}</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">{step.title}</h3>
            <p className="text-xs text-muted-foreground font-medium mb-3">{step.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
        </div>
    );
}
