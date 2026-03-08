"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
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
    {
        quote: "The strategic audit alone was worth the engagement. They identified three massive inefficiencies we'd become blind to, and the custom bot they built paid for itself in six weeks.",
        name: "David Kim",
        role: "CEO, Elevate E-Commerce",
    },
    {
        quote: "We thought AI was just for tech companies until AutoMates showed us how to automate our archaic inventory management. It feels like magic, but it's just great engineering.",
        name: "Rachel Alarie",
        role: "Operations Director, RetailNow",
    },
    {
        quote: "I was skeptical about their 'training' promise, but they actually got my front-line staff excited to use the new automated workflows. That's never happened before.",
        name: "Michael Peterson",
        role: "Founder, Apex Services",
    }
];

export function Testimonials() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const speed = useRef(1); // Normal speed

    useAnimationFrame((t, delta) => {
        if (!scrollerRef.current || !scrollerRef.current.children[0]) return;

        // Adjust scroll position
        const moveBy = speed.current * (delta / 16);
        let currentX = x.get();
        currentX -= moveBy;

        // Wrap logic
        const set1 = scrollerRef.current.children[0] as HTMLElement;
        const set1Width = set1.offsetWidth;
        const gap = 32; // gap-8 = 32px
        const wrapPoint = set1Width + gap;

        if (Math.abs(currentX) >= wrapPoint) {
            currentX += wrapPoint;
        }

        x.set(currentX);
    });

    return (
        <section id="testimonials" className="py-24 bg-card/30 border-t border-border/40 relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 mb-16">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground mb-4">
                        Don't just take our word for it.
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Hear from leaders who have transformed their operations with our bespoke AI solutions.
                    </p>
                </div>
            </div>

            <div
                className="w-full relative overflow-hidden pb-10"
                onMouseEnter={() => (speed.current = 0.25)}
                onMouseLeave={() => (speed.current = 1)}
            >
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

                <motion.div
                    ref={scrollerRef}
                    style={{ x }}
                    className="flex gap-8 w-max px-4"
                >
                    {/* Render two identical sets to allow seamless wrapping */}
                    {[0, 1].map((setIndex) => (
                        <div key={`set-${setIndex}`} className="flex gap-8">
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div
                                    key={`testimonial-${setIndex}-${index}`}
                                    className="flex flex-col justify-between p-8 rounded-2xl bg-card shadow-lg border border-border w-[350px] md:w-[450px] shrink-0"
                                >
                                    <Quote className="h-8 w-8 text-primary/40 mb-6" />
                                    <p className="text-foreground text-lg italic mb-8 leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold font-heading text-primary border border-primary/30 shrink-0">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
