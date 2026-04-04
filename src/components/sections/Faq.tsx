"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
    {
        question: "Do you only work with specific tools?",
        answer: "No. While we have our favorites (like n8n, Make, Claude, and Clay), we are technology-agnostic. We conduct an audit first, and then select the best stack for your specific infrastructure and goals.",
    },
    {
        question: "How long does a typical transformation take?",
        answer: "Our initial holistic discovery takes 4 weeks. Implementation timelines vary widely based on complexity, but most initial high-impact systems are live within 4 to 6 weeks.",
    },
    {
        question: "Do our employees need to know how to code?",
        answer: "Not at all. A core part of our philosophy is user adoption. We build robust systems under the hood but deliver clean, easy-to-use interfaces (like Slack bots, internal web apps, or direct CRM integrations) so your team can use them immediately without technical friction.",
    },
    {
        question: "What happens if it breaks?",
        answer: "That's exactly why we are positioned as partners. Automation inevitably requires maintenance. We actively monitor your systems, handle changes, and optimize workflows as new features are released.",
    },
];

export function Faq() {
    return (
        <section id="faq" className="py-24 bg-slate-50 border-t border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="max-w-2xl">
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl">Common Questions</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Everything you need to know about partnering with AutoMates.
                    </p>
                </div>

                <Accordion className="w-full mt-8 flex flex-col gap-4">
                    {FAQS.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-card shadow-lg hover:shadow-xl border border-border hover:border-primary/40 rounded-2xl px-6 transition-all overflow-hidden"
                        >
                            <AccordionTrigger className="text-left font-medium text-lg text-foreground hover:text-primary transition-colors hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
