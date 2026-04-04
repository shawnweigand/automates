"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Network, Users, Activity } from "lucide-react";

const DIFFERENTIATORS = [
    {
        title: "Holistic Discovery",
        description: "We don't just ask what you want to automate. We analyze your entire workflow to find the highest-ROI bottlenecks.",
    },
    {
        title: "Hands-on Implementation",
        description: "We don't just hand you a blueprint. We roll up our sleeves to build, test, and deploy the actual automation systems into your existing stack.",
    },
    {
        title: "Strategic Partnership",
        description: "Systems break and technology evolves. We partner with you to actively monitor, maintain, and optimize your workflows as your business grows.",
    },
];

export function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderVisual = () => {
        switch (activeIndex) {
            case 0: return (
                <motion.div key="v0" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="absolute inset-8 border border-border/40 rounded-2xl bg-black/40 backdrop-blur flex flex-col justify-end p-6">
                    <Network className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-primary/10" />
                    <div className="h-2 w-1/3 bg-primary/40 rounded-full mb-4 z-10"></div>
                    <div className="h-2 w-3/4 bg-border rounded-full mb-3 z-10"></div>
                    <div className="h-2 w-1/2 bg-border rounded-full mb-6 z-10"></div>
                    <div className="flex gap-3 z-10">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                            <div className="h-4 w-4 rounded-full bg-primary/80"></div>
                        </div>
                        <div className="flex-1 rounded-xl border border-border bg-black/50"></div>
                    </div>
                </motion.div>
            );
            case 1: return (
                <motion.div key="v1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="absolute inset-8 border border-border/40 rounded-2xl bg-black/40 backdrop-blur flex flex-col items-center justify-center p-6 gap-8">
                    <Users className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-primary/10" />
                    <div className="flex gap-4 w-full justify-center z-10 relative mt-8">
                        <div className="h-14 w-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shadow-lg"><div className="w-6 h-6 rounded-full bg-primary/50" /></div>
                        <div className="h-16 w-16 rounded-full bg-primary/40 border border-primary/50 flex items-center justify-center -translate-y-4 shadow-xl"><div className="w-6 h-6 rounded-full bg-primary" /></div>
                        <div className="h-14 w-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shadow-lg"><div className="w-6 h-6 rounded-full bg-primary/50" /></div>
                    </div>
                </motion.div>
            );
            case 2: return (
                <motion.div key="v2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="absolute inset-8 border border-border/40 rounded-2xl bg-black/40 backdrop-blur flex flex-col items-center justify-end p-6 gap-2">
                    <Activity className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-primary/10" />
                    <div className="w-full flex items-end justify-between h-32 gap-3 z-10">
                        <div className="w-1/4 bg-primary/30 rounded-t-md h-[30%]"></div>
                        <div className="w-1/4 bg-primary/50 rounded-t-md h-[50%]"></div>
                        <div className="w-1/4 bg-primary/80 rounded-t-md h-[75%]"></div>
                        <div className="w-1/4 bg-primary rounded-t-md h-[100%] relative">
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] border-2 border-background"></div>
                        </div>
                    </div>
                </motion.div>
            );
        }
    };

    return (
        <section id="about" className="py-24 bg-background border-t border-border/40 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
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
                            {DIFFERENTIATORS.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`flex gap-4 p-4 rounded-2xl cursor-pointer transition-all border ${activeIndex === index ? 'bg-card border-primary/30 shadow-md' : 'border-transparent hover:bg-card/50'}`}
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className={`h-6 w-6 transition-colors ${activeIndex === index ? 'text-primary' : 'text-muted-foreground'}`} />
                                    </div>
                                    <div>
                                        <h3 className={`font-semibold text-lg transition-colors ${activeIndex === index ? 'text-foreground' : 'text-foreground/80'}`}>{item.title}</h3>
                                        <p className="text-muted-foreground mt-1 text-sm md:text-base">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:ml-auto w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-border/50 bg-card p-1 shadow-2xl"
                    >
                        {/* Decorative abstract tech visual placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background rounded-3xl"></div>
                        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-background to-transparent"></div>

                        <AnimatePresence mode="wait">
                            {renderVisual()}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
