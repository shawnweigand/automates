"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        quote: "AutoMates didn't just sell us a script; they re-engineered how our data flows between sales and fulfillment. Absolute game-changer for our margins.",
        name: "Sarah Jenkins",
        role: "COO, Nexus Freight",
    },
    {
        quote: "Our biggest bottleneck was lead triage. Now, AI handles classification and scoring instantly. 30% increase in qualified meetings within month one.",
        name: "Marcus Thorne",
        role: "VP of RevOps, Nexus Financial",
    },
    {
        quote: "What impressed me most was the ongoing management. When OpenAI shipped an update that broke our old parser, they had it fixed before we even noticed.",
        name: "Emily Chen",
        role: "Founder, Acme Logistics",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-card/30 border-t border-border/40 relative overflow-hidden">

            {/* Abstract Background Element */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground mb-4">
                        Don't just take our word for it.
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Hear from leaders who have transformed their operations with our bespoke AI solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="flex flex-col justify-between p-8 rounded-2xl bg-background border border-border"
                        >
                            <Quote className="h-8 w-8 text-primary/40 mb-6" />
                            <p className="text-foreground text-lg italic mb-8 leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold font-heading text-primary border border-primary/30">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
