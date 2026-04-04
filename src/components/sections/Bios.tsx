"use client";

import { motion } from "framer-motion";
import { Linkedin, Youtube, BadgeCheck } from "lucide-react";
import Link from "next/link";

const TECHNOLOGIES = [
    { name: "Make", image: "/tools/make.png", status: "Certified" },
    { name: "Anthropic Claude", image: "/tools/claude.png", status: "Certified" },
    { name: "Microsoft Azure Cloud", image: "/tools/microsoft.png", status: "Certified" },
    { name: "n8n", image: "/tools/n8n.png" },
    { name: "Clay", image: "/tools/clay.webp" },
    { name: "Zapier", image: "/tools/zapier.png" },
    { name: "Apollo", image: "/tools/apollo.webp" },
    { name: "Instantly", image: "/tools/instantly.png" },
    { name: "Monday", image: "/tools/monday.png" },
    { name: "Salesforce", image: "/tools/salesforce.png" },
    { name: "QuickBooks", image: "/tools/quickbooks.svg" },
    { name: "Slack", image: "/tools/slack.png" },
    { name: "Notion", image: "/tools/notion.png" }
];

const TEAM = [
    {
        name: "Shawn Weigand",
        role: "Co-Founder",
        bio: "With a background in engineering and cloud infrastructure for Fortune 500 companies, Shawn brings a builder's mindset to every engagement. His foundation was built on writing Javascript and Python scripts to automate IT tasks, and has evolved into designing end-to-end systems using tools like n8n and Claude to unlock measurable ROI for operations-heavy teams. \n\nToday, he's all-in on AI - integrating Claude, Gemini, and OpenAI into business workflows. When he's not building for clients, Shawn shares AI and automation strategies on YouTube and LinkedIn for teams ready to work smarter.",
        image: "/bios/shawn.PNG",
        linkedin: "https://www.linkedin.com/in/shawn-weigand/",
        youtube: "https://www.youtube.com/@shawnbuildsai",
        scale: 1.5,
        objectPosition: "center top",
        translateX: "-2%",
        translateY: "10%",
    },
    {
        name: "John Unser",
        role: "Co-Founder",
        bio: "On paper, John's experience is centered around building high-performing revenue teams at VC-backed SaaS companies. But between the lines, he's an automation expert who is energized by building with AI.\n\nWhile scaling revenue teams, John found that the largest efficiency gains often came from optimizing his team's backend processes. So he spent much of his time building AI-based systems that made his teams exponentially more efficient. He's built inbound lead scoring systems, cold email infrastructure, automated CRM enrichment, and complex SOPs. He uses tools like n8n, Clay, and Claude Code to wire it all together, and he's well-versed across a wide range of softwares and tools.",
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
                    {TEAM.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col gap-8 p-8 rounded-3xl bg-card border border-border shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
                                <div className="shrink-0">
                                    {person.image ? (
                                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
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
                                        <div className="w-48 h-48 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                                            <span className="text-5xl font-heading font-bold text-primary/40">{person.name.charAt(0)}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col flex-1 justify-center min-h-[12rem]">
                                    <h3 className="text-4xl sm:text-4xl font-bold font-heading text-foreground mb-2">{person.name}</h3>
                                    <p className="text-primary text-xl sm:text-2xl font-medium mb-6">{person.role}</p>

                                    <div className="flex gap-3 justify-center sm:justify-start">
                                        {person.linkedin && (
                                            <Link href={person.linkedin} target="_blank" className="p-3 bg-muted hover:bg-primary/20 rounded-full transition-colors text-muted-foreground hover:text-primary">
                                                <Linkedin className="w-6 h-6" />
                                            </Link>
                                        )}
                                        {person.youtube && (
                                            <Link href={person.youtube} target="_blank" className="p-3 bg-muted hover:bg-red-500/20 rounded-full transition-colors text-muted-foreground hover:text-red-500">
                                                <Youtube className="w-6 h-6" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                                    {person.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Team Specializations */}
                <div className="mt-20">
                    <p className="text-center text-muted-foreground text-lg mb-8">
                        We specialize in
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center items-center gap-12 md:gap-24 text-muted-foreground"
                    >
                        {TECHNOLOGIES.map((tech, index) => (
                            <div key={index} className="relative flex flex-col items-center group">
                                {tech.image ? (
                                    <>
                                        <div className="relative mb-3">
                                            <img
                                                src={tech.image}
                                                alt={tech.name}
                                                className="h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                            />
                                        </div>

                                        {tech.status && (
                                            <div className="flex items-center gap-1.5 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-300">
                                                <BadgeCheck className="w-4 h-4 text-primary" />
                                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">
                                                    {tech.status}
                                                </span>
                                            </div>
                                        )}

                                        {/* Tooltip */}
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg z-20">
                                            {tech.name}
                                            {/* Tooltip Arrow */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"></div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-heading font-semibold tracking-wide uppercase text-sm">{tech.name}</span>
                                        {tech.status && <span className="text-[10px] text-primary font-bold uppercase">{tech.status}</span>}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
