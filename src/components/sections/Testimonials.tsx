"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        quote: "It would not have been possible to build a Global Technology Center of Excellence as rapidly as we did without the hiring automation [AutoMates] created to fit our needs.",
        name: "Tami Ushiroda",
        role: "Global Technology Center Site Lead, The Estée Lauder Companies Inc.",
        image: "/testimonials/tami.jpg",
    },
    {
        quote: "I had a great experience working with [AutoMates]... [AutoMates] really understood what I needed and delivered exactly as discussed... knowledge and technical skills in automation are top level... everything was done efficiently, properly structured, and worked perfectly.",
        name: "Ibrahim Mikaeel",
        role: "Director, FlowSec AI",
        image: "/testimonials/ibrahim.jpg",
    },
    // {
    //     quote: "What impressed me most was the ongoing management. When OpenAI shipped an update that broke our old parser, they had it fixed before we even noticed.",
    //     name: "Emily Chen",
    //     role: "Founder, Acme Logistics",
    //     // image: "/images/emily.jpg"
    // }
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
        <section id="testimonials" className="py-24 bg-slate-50 border-t border-border/40 relative overflow-hidden">

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
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

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
                                        {testimonial.image ? (
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="h-12 w-12 rounded-full object-cover shrink-0 border border-border"
                                            />
                                        ) : (
                                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold font-heading text-primary border border-primary/30 shrink-0">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                        )}
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
