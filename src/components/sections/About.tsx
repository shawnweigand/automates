"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Wrench, Handshake } from "lucide-react";

const DIFFERENTIATORS = [
    {
        title: "Holistic Discovery",
        description: "We don't just ask what you want to automate. We analyze your entire workflow to find the highest-ROI bottlenecks.",
        icon: Search,
    },
    {
        title: "Hands-on Implementation",
        description: "We don't just hand you a blueprint. We roll up our sleeves to build, test, and deploy the actual automation systems into your existing stack.",
        icon: Wrench,
    },
    {
        title: "Strategic Partnership",
        description: "Systems break and technology evolves. We partner with you to actively monitor, maintain, and optimize your workflows as your business grows.",
        icon: Handshake,
    },
];

/* ────────────────────────────────────────────
   Main About Section
   ──────────────────────────────────────────── */
export function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderEmptyCard = () => (
        <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full rounded-2xl bg-card shadow-lg border border-border"
        />
    );

    return (
        <section id="about" className="py-24 bg-background border-t border-border/40 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl self-center"
                    >
                        <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl mb-6">
                            Not just an agency.<br />
                            <span className="text-primary">Your transformation partner.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 text-balance">
                            Most agencies build a bot and walk away. At AutoMates, we believe true transformation requires deep understanding, strategic implementation, and ongoing education.
                            We bridge the gap between advanced AI capabilities and your daily business operations.
                        </p>

                        <div className="flex flex-col gap-2">
                            {DIFFERENTIATORS.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`flex gap-4 p-3.5 rounded-2xl cursor-pointer transition-all border ${activeIndex === index ? 'bg-card border-primary/30 shadow-md' : 'border-transparent hover:bg-card/50'}`}
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <Icon className={`h-5 w-5 transition-colors ${activeIndex === index ? 'text-primary' : 'text-muted-foreground'}`} />
                                        </div>
                                        <div>
                                            <h3 className={`font-semibold text-base md:text-lg transition-colors ${activeIndex === index ? 'text-foreground' : 'text-foreground/80'}`}>{item.title}</h3>
                                            <p className="text-muted-foreground mt-0.5 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center p-4 lg:p-8"
                    >
                        <AnimatePresence mode="wait">
                            <div className="w-full h-full max-w-sm lg:max-w-md aspect-[4/3] lg:aspect-square">
                                {renderEmptyCard()}
                            </div>
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
