"use client";

import { motion } from "framer-motion";
import { Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const TEAM = [
    {
        name: "Shawn Weigand",
        role: "Co-Founder",
        bio: "Place a short biography here. Discuss your background, your expertise, and how you help businesses transform with AI and automation.",
        image: "/bios/shawn.PNG",
        linkedin: "https://www.linkedin.com/in/shawn-weigand/",
        youtube: "https://www.youtube.com/@shawnbuildsai",
        scale: 1.5,
        objectPosition: "center top",
        translateX: "-2%",
        translateY: "10%",
    },
    {
        name: "JC Unser",
        role: "Co-Founder",
        bio: "Place a short biography here. Discuss their technical leadership, past projects, and deep knowledge of AI implementation.",
        image: "/bios/jc.JPG",
        linkedin: "https://www.linkedin.com/in/john-charles-unser/",
        scale: 2.5,
        objectPosition: "center top",
        translateX: "2%",
        translateY: "27%",
    }
];

export function Bios() {
    return (
        <section id="team" className="py-24 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground mb-4">
                        Meet the <span className="text-primary">Experts</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        The people behind the automation. We bring years of real-world experience building systems that scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {TEAM.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-card border border-border shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="shrink-0 flex flex-col items-center">
                                {person.image ? (
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10 mb-4">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full h-full object-cover"
                                            style={{
                                                objectPosition: person.objectPosition || "center",
                                                transform: `scale(${person.scale || 1}) translate(${person.translateX || "0%"}, ${person.translateY || "0%"})`
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-32 h-32 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center mb-4">
                                        <span className="text-4xl font-heading font-bold text-primary/40">{person.name.charAt(0)}</span>
                                    </div>
                                )}

                                <div className="flex gap-2">
                                    {person.linkedin && (
                                        <Link href={person.linkedin} target="_blank" className="p-2 bg-muted hover:bg-primary/20 rounded-full transition-colors text-muted-foreground hover:text-primary">
                                            <Linkedin className="w-5 h-5" />
                                        </Link>
                                    )}
                                    {person.youtube && (
                                        <Link href={person.youtube} target="_blank" className="p-2 bg-muted hover:bg-red-500/20 rounded-full transition-colors text-muted-foreground hover:text-red-500">
                                            <Youtube className="w-5 h-5" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col text-center sm:text-left">
                                <h3 className="text-2xl font-bold font-heading text-foreground mb-1">{person.name}</h3>
                                <p className="text-primary font-medium mb-4">{person.role}</p>
                                <p className="text-muted-foreground leading-relaxed">
                                    {person.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
