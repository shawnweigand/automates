"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const CASE_STUDIES = [
    {
        company: "Acme Logistics",
        slug: "acme-logistics",
        result: "85% reduction",
        metric: "in manual data entry",
        description: "Automated global shipment tracking and document parsing, saving their team over 40 hours a week and eliminating human error in custom clearances.",
        icon: Clock,
    },
    {
        company: "Zenith Marketing",
        slug: "zenith-marketing",
        result: "3x growth",
        metric: "in lead engagement",
        description: "Implemented a fully autonomous outbound engine utilizing deep data enrichment and personalized AI-drafted messaging at scale.",
        icon: TrendingUp,
    },
    {
        company: "Nexus Financial",
        slug: "nexus-financial",
        result: "$120k saved",
        metric: "in annual operational costs",
        description: "Strategic overhaul of their CRM data pipelines. We built an AI system that automatically normalized, scored, and routed inbound leads.",
        icon: BarChart3,
    },
];

export function CaseStudies() {
    return (
        <section id="case-studies" className="py-24 bg-background border-t border-border/40 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground mb-4">
                        Real <span className="text-primary">Results</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        We believe in metrics, not buzzwords. Here is how our transformations have impacted the bottom line for SMBs.
                    </p>
                    <Link href="/case-studies">
                        <Button variant="outline" size="lg" className="group">
                            See All Case Studies
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {CASE_STUDIES.map((study, index) => (
                        <Link key={index} href={`/case-studies/${study.slug}`} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl border border-border hover:border-primary/40 transition-all overflow-hidden h-full cursor-pointer"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-primary/10 rounded-md border border-primary/20">
                                            <study.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="font-semibold text-sm tracking-wider uppercase text-muted-foreground">{study.company}</span>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-4xl font-heading font-bold text-foreground mb-2">{study.result}</h3>
                                        <p className="text-primary font-medium">{study.metric}</p>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {study.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
