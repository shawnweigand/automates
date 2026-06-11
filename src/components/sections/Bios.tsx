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
        bio: "As an AI Engineer at a $1B+ digital media company and having implemented AI solutions for both Fortune-500 beauty giant The Estée Lauder Companies and prestigious financial firm Lazard, Shawn is no stranger to understanding what makes AI and automation actually work for businesses. His foundation was built on traditional engineering and now spans to fully agentic AI systems.\n\nToday, he's all-in on AI and its integration into business workflows. When he's not building for clients, Shawn shares AI and automation strategies on LinkedIn and YouTube for teams who are ready to work smarter and win the next decade.",
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
        bio: "On paper, John's experience is centered around building high-performing revenue teams at VC-backed SaaS companies. But between the lines, he's an automation expert who is energized by building with AI.\n\nWhile scaling revenue teams, John found that the largest efficiency gains often came from optimizing his team's backend processes. So he spent much of his time building AI-based systems for his teams. He's built inbound lead scoring systems, cold email infrastructure, automated CRM enrichment, and complex internal workflows using tools like n8n, Clay, and Claude Code to wire it all together. He's well-versed across a wide range of softwares and tools, and his curiosity drives him to learn new systems constantly.",
        image: "/bios/jc.JPG",
        linkedin: "https://www.linkedin.com/in/john-charles-unser/",
        scale: 2.5,
        objectPosition: "center top",
        translateX: "2%",
        translateY: "27%",
    }
];

export function Bios({ theme = "light" }: { theme?: "light" | "dark" }) {
    const isDark = theme === "dark";

    return (
        <section
            id="team"
            className={
                isDark
                    ? "py-24 relative overflow-hidden"
                    : "py-24 bg-background border-t border-border/40"
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
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
                        Meet the <span style={{ color: isDark ? "#137EFF" : "var(--color-primary)" }}>Experts</span>
                    </h2>
                    <p
                        className={isDark ? "text-lg" : "text-muted-foreground text-lg"}
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
                        The people behind the automation. We bring years of real-world experience building systems that scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {TEAM.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={
                                isDark
                                    ? "flex flex-col gap-6 p-6 rounded-3xl border shadow-xl"
                                    : "flex flex-col gap-6 p-6 rounded-3xl bg-card border border-border shadow-md hover:shadow-xl transition-shadow"
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
                            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                                <div className="shrink-0">
                                    {person.image ? (
                                        <div
                                            className="w-40 h-40 rounded-full overflow-hidden border-4"
                                            style={{
                                                borderColor: isDark ? "rgba(19, 126, 255, 0.15)" : "rgba(91, 63, 255, 0.1)",
                                            }}
                                        >
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
                                        <div
                                            className="w-40 h-40 rounded-full border-4 flex items-center justify-center"
                                            style={{
                                                backgroundColor: isDark ? "rgba(19, 126, 255, 0.1)" : "rgba(91, 63, 255, 0.1)",
                                                borderColor: isDark ? "rgba(19, 126, 255, 0.2)" : "rgba(91, 63, 255, 0.2)",
                                            }}
                                        >
                                            <span
                                                className="text-4xl font-heading font-bold"
                                                style={{ color: isDark ? "#137EFF" : "var(--color-primary)" }}
                                            >
                                                {person.name.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col flex-1 justify-center min-h-[12rem]">
                                    <h3
                                        className={
                                            isDark
                                                ? "text-4xl font-bold mb-2"
                                                : "text-4xl sm:text-4xl font-bold font-heading text-foreground mb-2"
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
                                        {person.name}
                                    </h3>
                                    <p
                                        className={
                                            isDark
                                                ? "text-xl sm:text-2xl font-medium mb-6"
                                                : "text-primary text-xl sm:text-2xl font-medium mb-6"
                                        }
                                        style={
                                            isDark
                                                ? {
                                                    fontFamily: "var(--font-sans), sans-serif",
                                                    color: "#137EFF",
                                                }
                                                : undefined
                                        }
                                    >
                                        {person.role}
                                    </p>

                                    <div className="flex gap-3 justify-center sm:justify-start">
                                        {person.linkedin && (
                                            <Link
                                                href={person.linkedin}
                                                target="_blank"
                                                className={
                                                    isDark
                                                        ? "p-3 rounded-full transition-colors bg-[#262624]/[0.04] text-[#262624] hover:bg-[#0A66C2]/15 hover:text-[#0A66C2]"
                                                        : "p-3 bg-muted hover:bg-primary/20 rounded-full transition-colors text-muted-foreground hover:text-primary"
                                                }
                                            >
                                                <Linkedin className="w-6 h-6" />
                                            </Link>
                                        )}
                                        {person.youtube && (
                                            <Link
                                                href={person.youtube}
                                                target="_blank"
                                                className={
                                                    isDark
                                                        ? "p-3 rounded-full transition-colors bg-[#262624]/[0.04] text-[#262624] hover:bg-[#FF0000]/15 hover:text-[#FF0000]"
                                                        : "p-3 bg-muted hover:bg-red-500/20 rounded-full transition-colors text-muted-foreground hover:text-red-500"
                                                }
                                            >
                                                <Youtube className="w-6 h-6" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <p
                                    className={
                                        isDark
                                            ? "text-lg leading-relaxed whitespace-pre-line"
                                            : "text-muted-foreground text-lg leading-relaxed whitespace-pre-line"
                                    }
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
                                    {person.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Team Specializations
                <div className="mt-20">
                    <p
                        className={
                            isDark
                                ? "text-center text-lg mb-8"
                                : "text-center text-muted-foreground text-lg mb-8"
                        }
                        style={
                            isDark
                                ? {
                                    fontFamily: "var(--font-sans), sans-serif",
                                    color: "#F0EEE6",
                                    opacity: 0.5,
                                }
                                : undefined
                        }
                    >
                        We specialize in
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={
                            isDark
                                ? "flex flex-wrap justify-center items-center gap-12 md:gap-24 text-[#F0EEE6]/60"
                                : "flex flex-wrap justify-center items-center gap-12 md:gap-24 text-muted-foreground"
                        }
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
                                                <BadgeCheck
                                                    className="w-4 h-4"
                                                    style={{ color: isDark ? "#D67854" : "var(--color-primary)" }}
                                                />
                                                <span
                                                    className="text-[10px] sm:text-xs font-bold uppercase tracking-wider"
                                                    style={{ color: isDark ? "#D67854" : "var(--color-primary)" }}
                                                >
                                                    {tech.status}
                                                </span>
                                            </div>
                                        )}

                                        <div
                                            className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm font-medium px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg z-20"
                                            style={
                                                isDark
                                                    ? {
                                                        backgroundColor: "#2C2C29",
                                                        color: "#F0EEE6",
                                                        border: "1px solid rgba(240, 238, 230, 0.08)",
                                                    }
                                                    : {
                                                        backgroundColor: "var(--color-foreground)",
                                                        color: "var(--color-background)",
                                                    }
                                            }
                                        >
                                            {tech.name}
                                            <div
                                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                                                style={
                                                    isDark
                                                        ? {
                                                            backgroundColor: "#2C2C29",
                                                            borderRight: "1px solid rgba(240, 238, 230, 0.08)",
                                                            borderBottom: "1px solid rgba(240, 238, 230, 0.08)",
                                                        }
                                                        : {
                                                            backgroundColor: "var(--color-foreground)",
                                                        }
                                                }
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-heading font-semibold tracking-wide uppercase text-sm">{tech.name}</span>
                                        {tech.status && (
                                            <span
                                                className="text-[10px] font-bold uppercase"
                                                style={{ color: isDark ? "#D67854" : "var(--color-primary)" }}
                                            >
                                                {tech.status}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
                */}
            </div>
        </section>
    );
}
