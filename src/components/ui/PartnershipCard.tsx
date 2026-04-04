"use client";

import React from "react";
import { GitBranch, Plug, ShieldCheck } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Chart geometry
   viewBox: 0 0 360 140
   X:  Mo.1 = 40   Mo.6 = 180   Mo.12 = 320
   Y:  baseline = 120   top = 16
───────────────────────────────────────────────────────────── */
const X1 = 40;
const X6 = 180;
const X12 = 320;

// Growth with AutoMates — steep curve (cubic bezier via polyline approximation)
const GROWTH_PTS = `${X1},112 ${X6},64 ${X12},18`;

// Unmanaged — shallower rise
const UNMANAGED_PTS = `${X1},112 ${X6},84 ${X12},60`;

/* ── Touchpoint events ── */
const EVENTS = [
    {
        title: "Workflow Redesigned",
        description: "Rebuilt lead routing after a CRM migration mid-engagement",
        month: "Mo. 1",
        svgColor: "#8b5cf6", // violet-500
        Icon: GitBranch,
        iconBg: "bg-violet-100 dark:bg-violet-900/40",
        iconColor: "text-violet-600 dark:text-violet-400",
        bg: "bg-violet-50 dark:bg-violet-950/40",
        border: "border-violet-200 dark:border-violet-800/50",
        dot: "bg-violet-500",
        titleColor: "text-violet-900 dark:text-violet-100",
        descColor: "text-violet-700/70 dark:text-violet-300/60",
        monthColor: "text-violet-500 dark:text-violet-400",
    },
    {
        title: "New Integration Added",
        description: "Connected Shopify inventory sync to fulfillment automation",
        month: "Mo. 6",
        svgColor: "#f59e0b", // amber-500
        Icon: Plug,
        iconBg: "bg-amber-100 dark:bg-amber-900/40",
        iconColor: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-50 dark:bg-amber-950/40",
        border: "border-amber-200 dark:border-amber-800/50",
        dot: "bg-amber-500",
        titleColor: "text-amber-900 dark:text-amber-100",
        descColor: "text-amber-700/70 dark:text-amber-300/60",
        monthColor: "text-amber-500 dark:text-amber-400",
    },
    {
        title: "Silent Failure Caught",
        description: "Detected and patched a billing sync error before it escalated",
        month: "Mo. 12",
        svgColor: "var(--primary)", // brand blue
        Icon: ShieldCheck,
        iconBg: "bg-primary/10 dark:bg-primary/20",
        iconColor: "text-primary",
        bg: "bg-primary/5 dark:bg-primary/10",
        border: "border-primary/20 dark:border-primary/30",
        dot: "bg-primary",
        titleColor: "text-foreground",
        descColor: "text-muted-foreground",
        monthColor: "text-primary",
    },
];

export function PartnershipCard() {
    return (
        <div className="w-full mx-auto bg-card border border-border rounded-2xl shadow-lg overflow-hidden flex flex-col">

            {/* ── Header ── */}
            <div className="px-5 pt-5 pb-3 flex flex-col gap-1">
                <span className="text-[9px] font-semibold tracking-widest uppercase text-muted-foreground">
                    Ongoing Partnership
                </span>
                <h3 className="text-[15px] font-bold text-foreground leading-snug">
                    Your growth, continuously supported.
                </h3>
            </div>

            {/* ── Chart ── */}
            <div className="px-4 pb-2">
                <svg
                    viewBox="0 0 360 140"
                    className="w-full"
                    aria-hidden="true"
                    overflow="visible"
                >
                    {/* Grid lines — subtle */}
                    {[120, 88, 56, 24].map((y) => (
                        <line
                            key={y}
                            x1={X1} y1={y} x2={X12} y2={y}
                            stroke="currentColor"
                            strokeOpacity="0.07"
                            strokeWidth="1"
                        />
                    ))}

                    {/* X-axis ticks */}
                    {[
                        { x: X1, label: "Mo. 1" },
                        { x: X6, label: "Mo. 6" },
                        { x: X12, label: "Mo. 12+" },
                    ].map(({ x, label }) => (
                        <text
                            key={label}
                            x={x}
                            y={136}
                            textAnchor="middle"
                            fontSize="8"
                            fill="currentColor"
                            opacity="0.4"
                            className="font-sans"
                        >
                            {label}
                        </text>
                    ))}

                    {/* Unmanaged line — gray dashed */}
                    <polyline
                        points={UNMANAGED_PTS}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.25"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Growth line — brand primary, solid, slightly thicker */}
                    <polyline
                        points={GROWTH_PTS}
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Dots on growth line — each pulses with its event color */}

                    {/* Mo.1 — violet */}
                    <circle
                        cx={X1} cy={112} r="8"
                        fill={EVENTS[0].svgColor}
                        fillOpacity="0.15"
                        className="origin-[40px_112px] animate-ping"
                        style={{ animationDuration: "2.4s", animationDelay: "0s" }}
                    />
                    <circle cx={X1} cy={112} r="4" fill={EVENTS[0].svgColor} />

                    {/* Mo.6 — amber */}
                    <circle
                        cx={X6} cy={64} r="8"
                        fill={EVENTS[1].svgColor}
                        fillOpacity="0.15"
                        className="origin-[180px_64px] animate-ping"
                        style={{ animationDuration: "2.4s", animationDelay: "0.8s" }}
                    />
                    <circle cx={X6} cy={64} r="4" fill={EVENTS[1].svgColor} />

                    {/* Mo.12+ — brand primary */}
                    <circle
                        cx={X12} cy={18} r="8"
                        fill={EVENTS[2].svgColor}
                        fillOpacity="0.15"
                        className="origin-[320px_18px] animate-ping"
                        style={{ animationDuration: "2.4s", animationDelay: "1.6s" }}
                    />
                    <circle cx={X12} cy={18} r="4" fill={EVENTS[2].svgColor} />
                </svg>

                {/* Legend */}
                <div className="flex items-center gap-4 mt-1 px-1">
                    <div className="flex items-center gap-1.5">
                        <div className="h-0.5 w-5 rounded-full bg-primary" />
                        <span className="text-[10px] text-muted-foreground">With AutoMates</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <svg width="20" height="4" viewBox="0 0 20 4" className="shrink-0">
                            <line
                                x1="0" y1="2" x2="20" y2="2"
                                stroke="currentColor"
                                strokeOpacity="0.35"
                                strokeWidth="1.5"
                                strokeDasharray="4 3"
                            />
                        </svg>
                        <span className="text-[10px] text-muted-foreground">Unmanaged</span>
                    </div>
                </div>
            </div>

            {/* ── Touchpoint events ── */}
            <div className="flex flex-col gap-2 px-4 pb-5 pt-2">
                {EVENTS.map(({ title, description, month, Icon, iconBg, iconColor, bg, border, titleColor, descColor, monthColor }) => (
                    <div
                        key={title}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${bg} ${border}`}
                    >
                        {/* Icon circle */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
                            <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                            <p className={`text-[13px] font-semibold leading-tight ${titleColor}`}>{title}</p>
                            <p className={`text-[11px] leading-tight mt-0.5 truncate ${descColor}`}>{description}</p>
                        </div>

                        {/* Timestamp */}
                        <span className={`text-[11px] font-semibold shrink-0 ${monthColor}`}>{month}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
