"use client";

import React from "react";
import { Layers, FlaskConical, Rocket } from "lucide-react";


/* ── Live row widths (full / solid feel) ── */
const LIVE_WIDTHS = ["88%", "82%", "75%", "85%"];

/* ── Build / Test / Deploy steps ── */
const STEPS = [
    {
        label: "Build",
        description: "Custom automations inside your existing tools",
        Icon: Layers,
        iconBg: "bg-primary/10 dark:bg-primary/20",
        iconColor: "text-primary",
        dotColor: "bg-primary",
        rowBg: "",
    },
    {
        label: "Test",
        description: "Real data, edge cases, failure modes covered",
        Icon: FlaskConical,
        iconBg: "bg-amber-100 dark:bg-amber-900/30",
        iconColor: "text-amber-600 dark:text-amber-400",
        dotColor: "bg-amber-500",
        rowBg: "",
    },
    {
        label: "Deploy",
        description: "Shipped, connected, running in production",
        Icon: Rocket,
        iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        dotColor: "bg-emerald-500",
        rowBg: "bg-emerald-50/60 dark:bg-emerald-950/30",
    },
];



export function ImplementationCard() {
    return (
        <div className="w-full mx-auto bg-card border border-border rounded-2xl shadow-lg overflow-hidden flex flex-col">

            {/* ── Top split panel ── */}
            <div className="grid grid-cols-2 divide-x divide-border">

                {/* Left — Blueprint */}
                <div className="bg-muted/50 dark:bg-muted/20 p-4 flex flex-col gap-3">
                    <span className="text-[9px] font-semibold tracking-widest uppercase text-muted-foreground">
                        Blueprint
                    </span>
                    <div className="flex flex-col gap-2 flex-1">

                        {/* Row 1 — partially filled, two bars, second faded */}
                        <div className="h-7 rounded border border-dashed border-border/70 dark:border-border/50 flex items-center px-2 gap-1.5">
                            <div className="h-1.5 w-[42%] rounded-full bg-muted-foreground/25" />
                            <div className="h-1.5 w-[22%] rounded-full bg-muted-foreground/12" />
                        </div>

                        {/* Row 2 — mid-sentence with blinking cursor */}
                        <div className="h-7 rounded border border-dashed border-border/70 dark:border-border/50 flex items-center px-2 gap-1.5">
                            <div className="h-1.5 w-[35%] rounded-full bg-muted-foreground/25" />
                            <div
                                className="h-3 w-px bg-muted-foreground/50"
                                style={{ animation: "blink 1s step-start infinite" }}
                            />
                        </div>

                        {/* Row 3 — nearly empty ghost */}
                        <div className="h-7 rounded border border-dashed border-border/40 dark:border-border/30 flex items-center px-2" style={{ opacity: 0.4 }} />

                        {/* Row 4 — barely exists */}
                        <div className="h-7 rounded border border-dashed border-border/30 dark:border-border/20 flex items-center px-2" style={{ opacity: 0.2 }} />

                    </div>
                    <p className="text-[10px] italic text-muted-foreground/70 mt-1">What others deliver.</p>
                </div>

                {/* Right — Live in Your Stack */}
                <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 flex flex-col gap-3">
                    <span className="text-[9px] font-semibold tracking-widest uppercase text-emerald-700 dark:text-emerald-400">
                        Live in Your Stack
                    </span>
                    <div className="flex flex-col gap-2 flex-1">
                        {LIVE_WIDTHS.map((w, i) => (
                            <div
                                key={i}
                                className="h-7 rounded border border-emerald-300/60 dark:border-emerald-700/50 bg-emerald-100/60 dark:bg-emerald-900/30 flex items-center px-2 justify-between"
                            >
                                <div
                                    className="h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
                                    style={{ width: w }}
                                />
                                <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 ml-2" />
                            </div>
                        ))}
                    </div>
                    <p className="text-[10px] italic text-emerald-700/70 dark:text-emerald-400/70 mt-1">What we deliver.</p>
                </div>
            </div>

            {/* ── Steps ── */}
            <div className="flex flex-col px-4 py-3 gap-0">
                {STEPS.map(({ label, description, Icon, iconBg, iconColor, dotColor, rowBg }) => (
                    <div
                        key={label}
                        className={`flex items-center gap-3 py-3 px-1 rounded-xl ${rowBg}`}
                    >
                        {/* Icon circle */}
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
                            <Icon className={`w-4 h-4 ${iconColor}`} />
                        </div>

                        {/* Label + description */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-foreground leading-tight">{label}</p>
                            <p className="text-[11px] text-muted-foreground leading-tight mt-0.5 truncate">
                                {description}
                            </p>
                        </div>

                        {/* Status dot */}
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColor}`} />
                    </div>
                ))}
            </div>

        </div>
    );
}
