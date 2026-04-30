"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, MessageSquare, Cog, Bot, CheckCircle2 } from "lucide-react";

const SERVICES = [
    {
        icon: TrendingUp,
        title: "Lead Generation",
        description:
            "Stop relying on referrals. We build automated outbound engines with deep data enrichment and AI-drafted personalized messaging that fill your pipeline while you focus on closing deals.",
        solutions: [
            "Lead sourcing & enrichment",
            "Personalized email outreach",
            "CRM automation & hygiene",
            "Follow-up & nurture sequences",
            "Pipeline reporting",
        ],
        accentColor: "text-primary",
    },
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

export function HowWeHelp() {
    return (
        <section id="how-we-help" className="py-24 bg-background border-t border-border/40 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground mb-6">
                        End-to-end automation,{" "}
                        <span className="text-primary">across every department</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto text-balance">
                        From sales to operations, we identify where you&apos;re losing time and build the systems to win it back.
                    </p>
                </motion.div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {SERVICES.map((service, index) => (
                        <FlipCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FlipCard({
    service,
    index,
}: {
    service: typeof SERVICES[0];
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
            className="relative h-72 cursor-pointer"
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
                    className="absolute inset-0 rounded-2xl bg-card border border-border shadow-xl flex flex-col justify-between p-8"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0">
                            <Icon className={`h-4 w-4 ${service.accentColor}`} />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-foreground">
                            {service.title}
                        </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                    </p>
                    <p className="text-xs text-muted-foreground/50 italic">Hover to see solutions →</p>
                </div>

                {/* Back Face — bulleted solutions list */}
                <div
                    className="absolute inset-0 rounded-2xl bg-card border border-border shadow-xl flex flex-col justify-center p-8 gap-3"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <ul className="flex flex-col gap-3">
                        {service.solutions.map((solution, i) => (
                            <li key={i} className="flex items-center gap-2.5">
                                <CheckCircle2 className={`h-4 w-4 shrink-0 ${service.accentColor}`} />
                                <span className="text-sm text-muted-foreground">{solution}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
}
