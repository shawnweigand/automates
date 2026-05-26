"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InlineWidget } from "react-calendly";

import Image from "next/image";

export function Footer({ theme = "light" }: { theme?: "light" | "dark" }) {
    const isDark = theme === "dark";

    return (
        <footer
            id="contact"
            className={
                isDark
                    ? "py-20 relative overflow-hidden"
                    : "bg-background border-t border-border/40 py-20 relative overflow-hidden"
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col items-center text-center">
                <h2
                    className={
                        isDark
                            ? "text-3xl font-bold sm:text-4xl mb-6"
                            : "font-heading text-3xl font-bold sm:text-4xl text-foreground mb-6"
                    }
                    style={
                        isDark
                            ? {
                                  fontFamily: "var(--font-heading), serif",
                                  color: "#F0EEE6",
                              }
                            : undefined
                    }
                >
                    Ready to use{" "}
                    <span style={{ color: isDark ? "#D67854" : "var(--color-primary)" }}>
                        AI the right way?
                    </span>
                </h2>
                <p
                    className={
                        isDark
                            ? "text-base sm:text-lg mb-12 max-w-xl mx-auto text-balance"
                            : "text-muted-foreground text-base sm:text-lg mb-12 max-w-xl mx-auto text-balance"
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
                    Book a free 30-minute discovery call with our team. We'll identify at least one immediate efficiency for your business on the call.
                </p>

                {/* Calendly integration */}
                <div className="w-full max-w-4xl mx-auto bg-transparent rounded-2xl overflow-hidden mb-24">
                    <InlineWidget
                        url="https://calendly.com/d/ct2w-7p3-3sg/claude-discovery-call"
                        styles={{ height: "700px", width: "100%" }}
                        pageSettings={{
                            backgroundColor: "0a0a0a",
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: isDark ? "d67854" : "5b3fff",
                            textColor: "ffffff",
                        }}
                    />
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40 gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo.png"
                            alt="AutoMates Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                        />
                        <span
                            className={
                                isDark
                                    ? "text-xl font-bold tracking-tight"
                                    : "font-heading text-xl font-bold tracking-tight text-foreground"
                            }
                            style={
                                isDark
                                    ? {
                                          fontFamily: "var(--font-heading), serif",
                                          color: "#F0EEE6",
                                      }
                                    : undefined
                            }
                        >
                            AutoMates
                        </span>
                    </Link>

                    <p
                        className={
                            isDark ? "text-sm" : "text-sm text-muted-foreground"
                        }
                        style={
                            isDark
                                ? {
                                      fontFamily: "var(--font-sans), sans-serif",
                                      color: "#F0EEE6",
                                      opacity: 0.4,
                                  }
                                : undefined
                        }
                    >
                        &copy; {new Date().getFullYear()} AutoMates. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
