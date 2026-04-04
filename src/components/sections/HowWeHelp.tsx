"use client";

import { motion } from "framer-motion";
import { PartyPopper, Users, BarChart3, Briefcase, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DEPARTMENTS = [
    {
        name: "Event Services",
        icon: PartyPopper,
        useCases: [
            "Vendor & Contract Automation",
            "Automated Attendee Onboarding",
            "Dynamic Scheduling & Reminders"
        ]
    },
    {
        name: "HR & Recruiting",
        icon: Users,
        useCases: [
            "AI Candidate Screening",
            "Automated Employee Onboarding",
            "Interview Scheduling Workflows"
        ]
    },
    {
        name: "Sales & Marketing",
        icon: BarChart3,
        useCases: [
            "Automated Lead Gen & Scoring",
            "Personalized Email Sequences",
            "Proposal & Contract Generation"
        ]
    },
    {
        name: "Operations & Finance",
        icon: Briefcase,
        useCases: [
            "Invoice Processing via AI",
            "Automated Expense Approvals",
            "Centralized Reporting Pipelines"
        ]
    }
];

export function HowWeHelp() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="how-we-help" className="py-24 bg-slate-50 border-t border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground mb-4">
                        How we <span className="text-primary">Help</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We build custom AI automations that unlock bandwidth and accelerate growth, no matter the department.
                    </p>
                </div>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {DEPARTMENTS.map((dept, index) => (
                        <motion.div key={index} variants={item} className="h-full">
                            <Card className="h-full bg-card shadow-md hover:shadow-lg border-border/50 hover:border-primary/30 transition-all group overflow-hidden">
                                <CardHeader className="pb-4">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <dept.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-heading">{dept.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {dept.useCases.map((useCase, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 mt-0.5">
                                                    <CheckCircle2 className="h-4 w-4 text-primary/70" />
                                                </div>
                                                <span className="text-muted-foreground text-sm leading-tight">{useCase}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
