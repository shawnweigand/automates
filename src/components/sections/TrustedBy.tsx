"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

// Add your logo paths here after dropping them in the public/logos folder!
const LOGOS = [
    { id: 1, name: "The Estée Lauder Companies Inc.", image: "/logos/esteelauder.png", scale: 1.5 },
    { id: 2, name: "FlowSec AI", image: "/logos/flowsec.png", scale: 1 },
    { id: 3, name: "LiveFlow", image: "/logos/liveflow.png", scale: 0.75 },
    // redmax
    // lazard
    // rippling
    // contentflow?
    // collegeadvisor?
];

export function TrustedBy() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const speed = useRef(1); // Normal speed
    const isInitialized = useRef(false);

    useAnimationFrame((t, delta) => {
        if (!scrollerRef.current || !scrollerRef.current.children[0]) return;

        const set1 = scrollerRef.current.children[0] as HTMLElement;
        const set1Width = set1.offsetWidth;
        const gap = 32; // gap-8 = 32px
        const wrapPoint = set1Width + gap;

        // Initialize to negative left offset so we can scroll right into view
        if (!isInitialized.current) {
            x.set(-wrapPoint);
            isInitialized.current = true;
        }

        // Adjust scroll position moving right (+)
        const moveBy = speed.current * (delta / 16);
        let currentX = x.get();
        currentX += moveBy;

        // Wrap logic for right-scrolling
        if (currentX >= 0) {
            currentX -= wrapPoint;
        }

        x.set(currentX);
    });

    return (
        <section id="trusted-by" className="py-24 bg-background overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-center text-foreground text-lg mb-8 font-medium">
                        Trusted by industry leaders
                    </p>
                </div>
            </div>

            <div
                className="w-full relative overflow-hidden pb-10"
                onMouseEnter={() => (speed.current = 0.25)}
                onMouseLeave={() => (speed.current = 1)}
            >
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

                <motion.div
                    ref={scrollerRef}
                    style={{ x }}
                    className="flex gap-8 w-max px-4"
                >
                    {/* Render multiple identical sets to allow seamless wrapping across wide screens */}
                    {[0, 1, 2, 3].map((setIndex) => (
                        <div key={`logo-set-${setIndex}`} className="flex gap-8 items-center">
                            {LOGOS.map((logo) => (
                                <div
                                    key={`logo-${setIndex}-${logo.id}`}
                                    className="flex items-center justify-center shrink-0 w-[300px] h-[120px] grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100"
                                >
                                    {logo.image ? (
                                        <img src={logo.image} alt={logo.name} className="max-w-full max-h-full object-contain" style={{ transform: `scale(${logo.scale || 1})` }} />
                                    ) : (
                                        <span className="font-heading font-bold text-2xl text-primary/60 text-center" style={{ transform: `scale(${logo.scale || 1})` }}>{logo.name}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
