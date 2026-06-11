"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
    {
        question: "How do you guarantee booked meetings?",
        answer: "We design and run highly targeted outreach campaigns. If we do not deliver the agreed number of qualified sales calls on your calendar within the 8-week period, you get a full refund of your money or we work until we do - no questions asked.",
    },
    {
        question: "What counts as a qualified meeting?",
        answer: "We define qualification criteria together before launching your campaigns. A qualified meeting is a booked call with a decision-maker who fits your Ideal Customer Persona (ICP) and has confirmed their interest in learning more about your services.",
    },
    {
        question: "Do I need to write the outreach copy or buy target lists?",
        answer: "No, we handle everything. Our service is completely Done For You, including ideal customer persona discovery, copywriting, custom list building, inbox management, response handling, and campaign optimization.",
    },
    {
        question: "How do you protect my main domain and email reputation?",
        answer: "We never send cold outreach from your primary business domain. Instead, we purchase and set up specialized sender domains, warm them up using advanced warm-up protocols, and monitor deliverability to ensure your primary email remains fully protected.",
    },
    {
        question: "How long does it take to launch and see results?",
        answer: "Our setup and onboarding process takes about 2 weeks. This includes domain setup, warm-up, persona research, list building, and copywriting. Once launched, most campaigns start booking calls within the first 7 to 10 days.",
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
                        backgroundColor: "#FAF9F5",
                        borderTop: "1px solid rgba(38, 38, 36, 0.08)",
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
                                    color: "#262624",
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
                                    color: "#262624",
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
                                    ? "rounded-2xl px-6 transition-all overflow-hidden border hover:border-[#137EFF]/40 hover:-translate-y-0.5 duration-300 shadow-lg"
                                    : "bg-card shadow-lg hover:shadow-xl border border-border hover:border-primary/40 rounded-2xl px-6 transition-all overflow-hidden"
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
                            <AccordionTrigger
                                className={
                                    isDark
                                        ? "text-left font-medium text-lg transition-colors hover:no-underline hover:text-[#137EFF]"
                                        : "text-left font-medium text-lg text-foreground hover:text-primary transition-colors hover:no-underline"
                                }
                                style={
                                    isDark
                                        ? {
                                            fontFamily: "var(--font-sans), sans-serif",
                                            color: "#262624",
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
                                            color: "#262624",
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
