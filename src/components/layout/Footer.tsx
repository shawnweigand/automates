"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InlineWidget } from "react-calendly";

import Image from "next/image";

export function Footer() {
    return (
        <footer id="contact" className="bg-background border-t border-border/40 py-20 relative overflow-hidden">

            {/* Abstract Background Element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col items-center text-center">

                <h2 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl text-foreground mb-6">
                    Ready to scale <span className="text-primary">intelligently?</span>
                </h2>
                <p className="text-muted-foreground text-lg sm:text-xl mb-12 max-w-2xl text-balance">
                    Book a free 45-minute discovery call with our team. We'll identify at least one immediate efficiency for your business on the call.
                </p>

                {/* 
            Calendly integration
        */}
                <div className="w-full max-w-4xl mx-auto bg-transparent rounded-2xl overflow-hidden mb-24">
                    <InlineWidget
                        url="https://calendly.com/weigandshawn/strategy"
                        styles={{ height: '700px', width: '100%' }}
                        pageSettings={{
                            backgroundColor: '0a0a0a',
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: '5b3fff',
                            textColor: 'ffffff'
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
                        <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                            AutoMates<span className="text-primary"></span>
                        </span>
                    </Link>

                    <nav className="flex gap-6 text-sm text-muted-foreground">
                        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="#case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
                        <Link href="mailto:hello@automates.com" className="hover:text-primary transition-colors">hello@automates.com</Link>
                    </nav>

                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} AutoMates. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
