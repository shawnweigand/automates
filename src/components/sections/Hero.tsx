"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
    };

    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-20 pt-32">
            {/* Background Grid & Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute top-0 -z-10 h-full w-full bg-background">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 opacity-60 blur-[120px] rounded-full pointer-events-none"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mx-auto flex max-w-4xl flex-col items-center"
                >
                    <motion.div variants={item} className="mb-6 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                        <Sparkles className="h-4 w-4" />
                        <span>AI Transformation Partners for SMBs</span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="font-heading text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl w-full text-balance"
                    >
                        We help ambitious businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">scale with AI.</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl text-balance"
                    >
                        Stop settling for generic templates. We dive deep into your operations to architect, implement, and manage bespoke AI systems that drive actual measurable growth.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
                    >
                        <Link href="#contact" className="inline-flex h-14 px-8 rounded-full items-center justify-center text-base bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto group font-medium transition-colors">
                            Book your AI Audit
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="#services" className="inline-flex h-14 px-8 rounded-full items-center justify-center text-base border border-border bg-transparent hover:bg-muted w-full sm:w-auto font-medium transition-colors">
                            Explore Services
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
