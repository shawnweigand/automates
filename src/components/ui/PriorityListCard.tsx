"use client";

import React from "react";

interface OpportunityRow {
    rank: string;
    title: string;
    subtitle: string;
    barFill: number; // 0–100
    amount: string;
    bgClass: string;
    borderClass: string;
    textClass: string;
    mutedTextClass: string;
    barBgClass: string;
    barFillClass: string;
}

const OPPORTUNITIES: OpportunityRow[] = [
    {
        rank: "01",
        title: "Lead Qualification & Routing",
        subtitle: "CRM intake · email triage · rep assignment",
        barFill: 92,
        amount: "$8,400",
        bgClass: "bg-emerald-50 dark:bg-emerald-950/40",
        borderClass: "border-emerald-200 dark:border-emerald-800/60",
        textClass: "text-emerald-900 dark:text-emerald-100",
        mutedTextClass: "text-emerald-700/70 dark:text-emerald-300/60",
        barBgClass: "bg-emerald-200/60 dark:bg-emerald-800/40",
        barFillClass: "bg-emerald-500 dark:bg-emerald-400",
    },
    {
        rank: "02",
        title: "Proposal & Contract Generation",
        subtitle: "Template assembly · e-sign dispatch · follow-up",
        barFill: 71,
        amount: "$5,200",
        bgClass: "bg-violet-50 dark:bg-violet-950/40",
        borderClass: "border-violet-200 dark:border-violet-800/60",
        textClass: "text-violet-900 dark:text-violet-100",
        mutedTextClass: "text-violet-700/70 dark:text-violet-300/60",
        barBgClass: "bg-violet-200/60 dark:bg-violet-800/40",
        barFillClass: "bg-violet-500 dark:bg-violet-400",
    },
    {
        rank: "03",
        title: "Invoice & Payment Reconciliation",
        subtitle: "AP/AR sync · late-payment nudges · reporting",
        barFill: 52,
        amount: "$3,100",
        bgClass: "bg-amber-50 dark:bg-amber-950/40",
        borderClass: "border-amber-200 dark:border-amber-800/60",
        textClass: "text-amber-900 dark:text-amber-100",
        mutedTextClass: "text-amber-700/70 dark:text-amber-300/60",
        barBgClass: "bg-amber-200/60 dark:bg-amber-800/40",
        barFillClass: "bg-amber-500 dark:bg-amber-400",
    },
    {
        rank: "04",
        title: "Onboarding & Client Handoff",
        subtitle: "Welcome sequences · task provisioning · check-ins",
        barFill: 33,
        amount: "$1,800",
        bgClass: "bg-slate-100 dark:bg-slate-800/40",
        borderClass: "border-slate-200 dark:border-slate-700/60",
        textClass: "text-slate-600 dark:text-slate-400",
        mutedTextClass: "text-slate-500/70 dark:text-slate-500/60",
        barBgClass: "bg-slate-200/70 dark:bg-slate-700/40",
        barFillClass: "bg-slate-400 dark:bg-slate-500",
    },
];

export function PriorityListCard() {
    return (
        <div className="w-full mx-auto bg-card border border-border rounded-2xl shadow-lg p-6 flex flex-col gap-4">
            {/* Header */}
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    Discovery
                </span>
                <h3 className="text-lg font-bold text-foreground leading-tight">
                    Top automation opportunities.
                </h3>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-2">
                {OPPORTUNITIES.map((opp) => (
                    <div
                        key={opp.rank}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${opp.bgClass} ${opp.borderClass}`}
                    >
                        {/* Rank */}
                        <span
                            className={`text-2xl font-black tabular-nums leading-none shrink-0 ${opp.textClass}`}
                            style={{ fontVariantNumeric: "tabular-nums" }}
                        >
                            {opp.rank}
                        </span>

                        {/* Center block */}
                        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                            <p className={`text-sm font-semibold leading-tight truncate ${opp.textClass}`}>
                                {opp.title}
                            </p>
                            <p className={`text-[11px] leading-tight truncate ${opp.mutedTextClass}`}>
                                {opp.subtitle}
                            </p>
                            {/* Progress bar */}
                            <div className={`w-full h-1 rounded-full ${opp.barBgClass}`}>
                                <div
                                    className={`h-1 rounded-full ${opp.barFillClass}`}
                                    style={{ width: `${opp.barFill}%` }}
                                />
                            </div>
                        </div>

                        {/* Amount */}
                        <div className="shrink-0 text-right">
                            <span className={`text-sm font-bold ${opp.textClass}`}>{opp.amount}</span>
                            <span className={`block text-[10px] ${opp.mutedTextClass}`}>/month</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Totals footer */}
            <div className="border-t border-border pt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Total recoverable value</span>
                <span className="text-sm font-bold text-foreground">$18,500/mo</span>
            </div>
        </div>
    );
}
