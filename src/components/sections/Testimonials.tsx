"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        quote: "It would not have been possible to build a Global Technology Center of Excellence as rapidly as we did without the hiring automation [AutoMates] created to fit our needs.",
        name: "Tami", //Ushiroda",
        role: "Global Technology Center Site Lead, The Estée Lauder Companies Inc.",
        image: "/testimonials/tami.jpg",
    },
    {
        quote: "I had a great experience working with [AutoMates]... [AutoMates] really understood what I needed and delivered exactly as discussed... knowledge and technical skills in automation are top level... everything was done efficiently, properly structured, and worked perfectly.",
        name: "Ibrahim ", //Mikaeel",
        role: "Director, FlowSec AI",
        image: "/testimonials/ibrahim.jpg",
    },
    {
        quote: "[AutoMates] consistently stood out as someone with deep expertise, strong execution, and a genuine drive to improve the way teams operate... [AutoMates] combines technical depth with practical thinking, and has a real talent for building solutions that create lasting value.",
        name: "Mackensie", // Alvarez",
        role: "Director of SRE & Engineering, The Estée Lauder Companies Inc.",
        image: "/testimonials/mack.jpeg"
    },
    {
        quote: "[AutoMates] did a spectacular job on this project.",
        name: "Bob", // Lueck",
        role: "Managing Director, White Hat Growth Partners",
        image: "/testimonials/bob.jpeg"
    }
];

export function Testimonials({ theme = "light" }: { theme?: "light" | "dark" }) {
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

    const isDark = theme === "dark";

    return (
        <section
            id="testimonials"
            className={
                isDark
                    ? "py-24 relative overflow-hidden"
                    : "py-24 bg-slate-50 border-t border-border/40 relative overflow-hidden"
            }
            style={
                isDark
                    ? {
                        backgroundColor: "#FAF9F5",
                        borderTop: "1px solid rgba(38, 38, 36, 0.08)",
                    }
                    : undefined
            }
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 mb-16">
                <div className="text-center max-w-2xl mx-auto">
                    <h2
                        className={
                            isDark
                                ? "text-3xl font-bold sm:text-4xl mb-4"
                                : "font-heading text-3xl font-bold sm:text-4xl text-foreground mb-4"
                        }
                        style={
                            isDark
                                ? {
                                    fontFamily: "var(--font-heading), serif",
                                    color: "#262624",
                                }
                                : undefined
                        }
                    >
                        Don't just take our word for it.
                    </h2>
                    <p
                        className={isDark ? "text-lg max-w-md mx-auto text-balance" : "text-muted-foreground text-lg max-w-md mx-auto text-balance"}
                        style={
                            isDark
                                ? {
                                    fontFamily: "var(--font-sans), sans-serif",
                                    color: "#262624",
                                    opacity: 0.75,
                                }
                                : undefined
                        }
                    >
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
                <div
                    className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-20 pointer-events-none"
                    style={{
                        background: isDark
                            ? "linear-gradient(to right, #FAF9F5, transparent)"
                            : "linear-gradient(to right, #f8fafc, transparent)",
                    }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-20 pointer-events-none"
                    style={{
                        background: isDark
                            ? "linear-gradient(to left, #FAF9F5, transparent)"
                            : "linear-gradient(to left, #f8fafc, transparent)",
                    }}
                />

                <motion.div
                    ref={scrollerRef}
                    style={{ x }}
                    className="flex gap-8 w-max px-4"
                >
                    {/* Render multiple identical sets to allow seamless wrapping across wide screens */}
                    {[0, 1, 2, 3].map((setIndex) => (
                        <div key={`set-${setIndex}`} className="flex gap-8">
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div
                                    key={`testimonial-${setIndex}-${index}`}
                                    className={
                                        isDark
                                            ? "flex flex-col justify-between p-8 rounded-2xl border w-[350px] md:w-[450px] shrink-0"
                                            : "flex flex-col justify-between p-8 rounded-2xl bg-card shadow-lg border border-border w-[350px] md:w-[450px] shrink-0"
                                    }
                                    style={
                                        isDark
                                            ? {
                                                backgroundColor: "#FFFFFF",
                                                borderColor: "rgba(38, 38, 36, 0.08)",
                                            }
                                            : undefined
                                    }
                                >
                                    <Quote
                                        className="h-8 w-8 mb-6"
                                        style={{
                                            color: isDark ? "rgba(19, 126, 255, 0.2)" : "rgba(91, 63, 255, 0.2)",
                                        }}
                                    />
                                    <p
                                        className={
                                            isDark
                                                ? "text-lg italic mb-8 leading-relaxed"
                                                : "text-foreground text-lg italic mb-8 leading-relaxed"
                                        }
                                        style={
                                            isDark
                                                ? {
                                                    fontFamily: "var(--font-sans), sans-serif",
                                                    color: "#262624",
                                                    opacity: 0.85,
                                                }
                                                : undefined
                                        }
                                    >
                                        "{testimonial.quote}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        {testimonial.image ? (
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="h-12 w-12 rounded-full object-cover shrink-0 border"
                                                style={
                                                    isDark
                                                        ? {
                                                            borderColor: "rgba(38, 38, 36, 0.08)",
                                                        }
                                                        : {
                                                            borderColor: "var(--border)",
                                                        }
                                                }
                                            />
                                        ) : (
                                            <div
                                                className={
                                                    isDark
                                                        ? "h-12 w-12 rounded-full flex items-center justify-center font-bold font-heading shrink-0 border"
                                                        : "h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold font-heading text-primary border border-primary/30 shrink-0"
                                                }
                                                style={
                                                    isDark
                                                        ? {
                                                            backgroundColor: "rgba(19, 126, 255, 0.1)",
                                                            borderColor: "rgba(19, 126, 255, 0.2)",
                                                            color: "#137EFF",
                                                        }
                                                        : undefined
                                                }
                                            >
                                                {testimonial.name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <h4
                                                className={isDark ? "font-semibold" : "font-semibold text-foreground"}
                                                style={
                                                    isDark
                                                        ? {
                                                            fontFamily: "var(--font-sans), sans-serif",
                                                            color: "#262624",
                                                        }
                                                        : undefined
                                                }
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p
                                                className={isDark ? "text-sm" : "text-sm text-muted-foreground"}
                                                style={
                                                    isDark
                                                        ? {
                                                            fontFamily: "var(--font-sans), sans-serif",
                                                            color: "#262624",
                                                            opacity: 0.5,
                                                        }
                                                        : undefined
                                                }
                                            >
                                                {testimonial.role}
                                            </p>
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
