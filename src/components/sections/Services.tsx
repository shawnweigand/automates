"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Lightbulb, Wrench, RefreshCcw } from "lucide-react";

const SERVICES = [
    {
        title: "AI Strategy",
        description: "We analyze your operations top-to-bottom. We identify where AI can drastically cut costs, accelerate output, and give you a competitive edge. This isn't generic advice; it's an actionable roadmap.",
        icon: Lightbulb,
    },
    {
        title: "AI Implementation",
        description: "Once the strategy is set, we build it. From custom LLM integrations and automated workflows to CRM data pipelines. We handle the technical heavy-lifting and train your team to use the new systems.",
        icon: Wrench,
    },
    {
        title: "AI Management",
        description: "AI moves fast. We don't build and abandon. We provide ongoing support, optimization, and updates to ensure your AI systems adapt as your business—and the underlying technology—evolves.",
        icon: RefreshCcw,
    },
];

export function Services() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="services" className="py-24 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground mb-4">
                        How we <span className="text-primary">Transform</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A comprehensive three-phase approach to guarantee actual ROI, not just shiny new tools.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {SERVICES.map((service, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full bg-card shadow-lg hover:shadow-xl border-border/50 hover:border-primary/50 transition-all group">
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
