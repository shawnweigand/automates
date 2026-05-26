"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
    {
        question: "How does integrating Claude help my business?",
        answer: "Claude acts as an intelligent reasoning layer inside your existing workflows. Instead of simply syncing data, Claude can analyze complex client intake forms, generate tailored proposals, synthesize research, draft workbooks, and automate administrative tasks with human-like quality.",
    },
    {
        question: "Which AI models do you typically implement?",
        answer: "We build exclusively within the Anthropic Claude model family—specifically Haiku, Sonnet, and Opus. By specializing in Anthropic's ecosystem, we design highly optimized, cost-efficient systems: utilizing Haiku for fast, high-volume tasks; Sonnet for robust daily operations and intermediate reasoning; and Opus for highly complex, multi-step analytical processes.",
    },
    {
        question: "Do we need to migrate our databases or tools to use AI?",
        answer: "Not at all. We connect AI directly to the software you already use—whether that's Slack, Notion, your CRM, email, or internal databases. The goal is zero friction: your team gets the power of custom AI without having to learn a brand-new platform.",
    },
    {
        question: "How do you ensure the AI outputs are accurate and reliable?",
        answer: "We design every integration with strict guardrails, advanced prompt engineering, and structured validation layers. Before any system goes live, we run it through comprehensive edge-case testing to prevent hallucinations and guarantee consistent, high-quality output.",
    },
    {
        question: "What does the handover and training process look like?",
        answer: "We train your team for frictionless adoption so they can run with the new systems confidently from day one. We hand over 100% ownership, source code, and complete documentation, ensuring your team is fully empowered to maintain, operate, and scale your AI workflows independently.",
    },
];

export function Faq({ theme = "light" }: { theme?: "light" | "dark" }) {
    const isDark = theme === "dark";

    return (
        <section
            id="faq"
            className={
                isDark
                    ? "py-24 relative overflow-hidden"
                    : "py-24 bg-slate-50 border-t border-border/40"
            }
            style={
                isDark
                    ? {
                          backgroundColor: "#262624",
                          borderTop: "1px solid rgba(240, 238, 230, 0.08)",
                      }
                    : undefined
            }
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="max-w-2xl">
                    <h2
                        className={isDark ? "text-3xl font-bold sm:text-4xl" : "font-heading text-3xl font-bold sm:text-4xl"}
                        style={
                            isDark
                                ? {
                                      fontFamily: "var(--font-heading), serif",
                                      color: "#F0EEE6",
                                  }
                                : undefined
                        }
                    >
                        Common Questions
                    </h2>
                    <p
                        className={isDark ? "mt-4 text-lg" : "mt-4 text-muted-foreground text-lg"}
                        style={
                            isDark
                                ? {
                                      fontFamily: "var(--font-sans), sans-serif",
                                      color: "#F0EEE6",
                                      opacity: 0.75,
                                  }
                                : undefined
                        }
                    >
                        Everything you need to know about partnering with AutoMates.
                    </p>
                </div>

                <Accordion className="w-full mt-8 flex flex-col gap-4">
                    {FAQS.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className={
                                isDark
                                    ? "rounded-2xl px-6 transition-all overflow-hidden border hover:border-[#D67854]/40 hover:-translate-y-0.5 duration-300 shadow-lg"
                                    : "bg-card shadow-lg hover:shadow-xl border border-border hover:border-primary/40 rounded-2xl px-6 transition-all overflow-hidden"
                            }
                            style={
                                isDark
                                    ? {
                                          backgroundColor: "#2C2C29",
                                          borderColor: "rgba(240, 238, 230, 0.08)",
                                      }
                                    : undefined
                            }
                        >
                            <AccordionTrigger
                                className={
                                    isDark
                                        ? "text-left font-medium text-lg transition-colors hover:no-underline hover:text-[#D67854]"
                                        : "text-left font-medium text-lg text-foreground hover:text-primary transition-colors hover:no-underline"
                                }
                                style={
                                    isDark
                                        ? {
                                              fontFamily: "var(--font-sans), sans-serif",
                                              color: "#F0EEE6",
                                          }
                                        : undefined
                                }
                            >
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent
                                className={
                                    isDark
                                        ? "text-base leading-relaxed pb-6"
                                        : "text-muted-foreground text-base leading-relaxed pb-6"
                                }
                                style={
                                    isDark
                                        ? {
                                              fontFamily: "var(--font-sans), sans-serif",
                                              color: "#F0EEE6",
                                              opacity: 0.75,
                                          }
                                        : undefined
                                }
                            >
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
