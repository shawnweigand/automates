"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, Clock, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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

export default function CaseStudiesPage() {
    return (
        <div className="flex min-h-screen flex-col selection:bg-primary/30 selection:text-primary">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-background relative overflow-hidden">
                    {/* Abstract background element */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Measurable <span className="text-primary">Impact.</span>
                            </h1>
                            <p className="text-muted-foreground text-xl leading-relaxed">
                                We don't just build technology; we deliver results that move the needle.
                                Explore how we've helped SMBs transform their operations through strategic AI implementation.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="py-24 bg-card/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                                            <div className="mt-8 pt-6 border-t border-border flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                                                View Detailed Story
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
