import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BarChart3, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock database for case studies
const CASE_STUDIES_DB: Record<string, any> = {
    "acme-logistics": {
        company: "Acme Logistics",
        result: "85% reduction",
        metric: "in manual data entry",
        description: "Automated global shipment tracking and document parsing, saving their team over 40 hours a week and eliminating human error in custom clearances.",
        icon: Clock,
        content: `Acme Logistics was struggling with an outdated, paper-heavy customs clearance process. Every international shipment required manual data entry from dozens of PDFs and supplier emails into their central ERP.\n\nWe implemented a custom AI agent that intercepts supplier emails, uses OCR and LLMs to extract key shipment details, validates against customs regulations, and pushes the clean structured data directly into their ERP via API. \n\n**The Result:** \n- 85% reduction in manual data entry.\n- Error rate dropped to 0.01%.\n- Saved over 40 hours per week allowing their team to focus on strategic vendor relationships.`
    },
    "zenith-marketing": {
        company: "Zenith Marketing",
        result: "3x growth",
        metric: "in lead engagement",
        description: "Implemented a fully autonomous outbound engine utilizing deep data enrichment and personalized AI-drafted messaging at scale.",
        icon: TrendingUp,
        content: `Zenith Marketing had a massive database of cold leads but a poor conversion rate on their outbound sequences. Their SDRs were spending hours manually researching prospects to send personalized emails.\n\nWe built an autonomous outbound engine. Instead of a generic sequence, the system enriches the lead data via Clearbit and LinkedIn APIs, feeds it to a custom-prompted LLM to draft highly personalized, relevant hooks, and routes the approved copy to their sending infrastructure.\n\n**The Result:** \n- 3x growth in lead engagement.\n- SDRs doubled their daily output.\n- Pipeline volume increased by $4.2M in the first quarter.`
    },
    "nexus-financial": {
        company: "Nexus Financial",
        result: "$120k saved",
        metric: "in annual operational costs",
        description: "Strategic overhaul of their CRM data pipelines. We built an AI system that automatically normalized, scored, and routed inbound leads.",
        icon: BarChart3,
        content: `Nexus Financial services a high volume of inbound leads from various web channels, but lead qualification was entirely manual. High-value prospects were falling through the cracks, and unqualified leads were wasting sales time.\n\nWe completely overhauled their CRM data pipeline. We deployed an AI system that intercepts every inbound lead, scores it based on their historical closing data, enriches the profile with intent signals, and instantly routes high-priority prospects to the top-performing closers while nurturing the rest.\n\n**The Result:** \n- $120k saved in annual operational costs.\n- Lead response time dropped from 4 hours to 3 minutes.\n- Conversion rate on high-intent leads increased by 22%.`
    }
};

export function generateStaticParams() {
    return [
        { slug: "acme-logistics" },
        { slug: "zenith-marketing" },
        { slug: "nexus-financial" },
    ];
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const study = CASE_STUDIES_DB[params.slug];

    if (!study) {
        notFound();
    }

    const Icon = study.icon;

    return (
        <div className="flex min-h-screen flex-col selection:bg-primary/30 selection:text-primary pt-16">
            <Navbar />
            <main className="flex-1">
                <section className="py-24 bg-background border-t border-border/40 min-h-[70vh]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

                        <div className="mb-12">
                            <Link href="/#case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                                &larr; Back to Case Studies
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                                <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                                {study.company}
                            </h1>
                        </div>

                        <div className="mb-12 p-8 rounded-2xl bg-card border border-border">
                            <h2 className="text-5xl font-heading font-bold text-foreground mb-2">{study.result}</h2>
                            <p className="text-primary font-medium text-xl">{study.metric}</p>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-wrap">
                            {study.content}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
