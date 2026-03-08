"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const DIFFERENTIATORS = [
    {
        title: "Holistic Audits, Not Just Execution",
        description: "We don't just ask what you want to automate. We analyze your entire workflow to find the highest-ROI bottlenecks.",
    },
    {
        title: "Hands-on Team Education",
        description: "Technology is useless if your team doesn't adopt it. We train your staff so AI becomes a multiplier, not a hurdle.",
    },
    {
        title: "Long-term Management",
        description: "APIs break and models evolve. We stay on as your strategic partner to ensure your systems remain cutting-edge.",
    },
];

export function About() {
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
                            Not just an automation agency.<br />
                            <span className="text-primary">Your transformation partner.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 text-balance">
                            Most agencies build a bot and walk away. At AutoMates, we believe true transformation requires deep understanding, strategic implementation, and ongoing education.
                            We bridge the gap between advanced AI capabilities and your daily business operations.
                        </p>

                        <div className="flex flex-col gap-6">
                            {DIFFERENTIATORS.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-semibold text-lg">{item.title}</h3>
                                        <p className="text-muted-foreground mt-1">{item.description}</p>
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

                        {/* Abstract UI Elements */}
                        <div className="absolute inset-8 border border-border/40 rounded-2xl bg-black/40 backdrop-blur flex flex-col justify-end p-6">
                            <div className="h-2 w-1/3 bg-primary/40 rounded-full mb-4"></div>
                            <div className="h-2 w-3/4 bg-border rounded-full mb-3"></div>
                            <div className="h-2 w-1/2 bg-border rounded-full mb-6"></div>

                            <div className="flex gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                    <div className="h-4 w-4 rounded-full bg-primary/80"></div>
                                </div>
                                <div className="flex-1 rounded-xl border border-border bg-black/50"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
