"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Inbox, GitFork } from "lucide-react";

const CARDS = [
    {
        icon: TrendingUp,
        title: "Unpredictable Revenue",
        description:
            "Relying on referrals and word-of-mouth creates inconsistent revenue cycles. Design a systematic lead engine for predictable growth.",
        tag: "LEAD GENERATION",
    },
    {
        icon: Inbox,
        title: "Drowning in Manual Work",
        description:
            "Your team spends hours on data entry, follow-ups and scheduling. Free them to focus on high-value work that actually moves the needle.",
        tag: "HIGH OVERHEAD",
    },
    {
        icon: GitFork,
        title: "No Systems to Scale On",
        description:
            "When your process lives in people's heads, you can't grow without chaos. Delegate with confidence knowing that tasks will get done the same way every time.",
        tag: "UNSCALABLE",
    },
];

export function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });

    // Card 0 (left) transforms
    const x0 = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);
    const rotate0 = useTransform(scrollYProgress, [0, 1], [0, -6]);
    const opacity0 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Card 1 (center) transforms
    const y1 = useTransform(scrollYProgress, [0, 1], ["60px", "0px"]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Card 2 (right) transforms
    const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 6]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 bg-background border-t border-border/40 relative overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 opacity-40 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground mb-6 leading-tight">
                        You&apos;re leaving{" "}
                        <span className="text-primary">money on the table</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto text-balance">
                        Most SMBs are hemorrhaging time and revenue on problems that have already been solved — they just haven&apos;t been built for you yet.
                    </p>
                </motion.div>

                {/* Cards container */}
                <div className="relative flex items-center justify-center min-h-[400px]">
                    {/* Card 0 — Left */}
                    <motion.div
                        style={{ x: x0, rotate: rotate0, opacity: opacity0, zIndex: 10 }}
                        className="absolute w-full max-w-[300px] sm:max-w-[320px]"
                    >
                        <CardItem card={CARDS[0]} />
                    </motion.div>

                    {/* Card 1 — Center */}
                    <motion.div
                        style={{ y: y1, opacity: opacity1, zIndex: 20 }}
                        className="relative w-full max-w-[300px] sm:max-w-[320px]"
                    >
                        <CardItem card={CARDS[1]} />
                    </motion.div>

                    {/* Card 2 — Right */}
                    <motion.div
                        style={{ x: x2, rotate: rotate2, opacity: opacity2, zIndex: 10 }}
                        className="absolute w-full max-w-[300px] sm:max-w-[320px]"
                    >
                        <CardItem card={CARDS[2]} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function CardItem({ card }: { card: typeof CARDS[0] }) {
    const Icon = card.icon;
    return (
        <div className="group flex flex-col gap-4 p-8 rounded-3xl bg-card border border-border shadow-xl min-h-[340px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30">
            <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center border border-border transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/30">
                <Icon className="h-5 w-5 text-foreground/70 transition-colors duration-300 group-hover:text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground leading-snug">
                {card.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {card.description}
            </p>
        </div>
    );
}
