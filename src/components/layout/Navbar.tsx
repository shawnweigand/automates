"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";

const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "How We Help", href: "#how-we-help" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        alt="AutoMates Robot Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                    />
                    <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                        AutoMates<span className="text-primary"></span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="#contact" className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center text-sm font-medium transition-colors">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book a Call
                    </Link>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger render={<Button variant="ghost" size="icon" className="hover:bg-transparent" />}>
                            <Menu className="h-6 w-6 text-foreground" />
                            <span className="sr-only">Toggle Menu</span>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle className="text-left font-heading font-bold text-xl flex items-center gap-2">
                                    <Image
                                        src="/logo.png"
                                        alt="AutoMates"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 object-contain"
                                    />
                                    AutoMates<span className="text-primary">.</span>
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="mt-8 flex flex-col gap-6">
                                {NAV_LINKS.map((link) => (
                                    <SheetClose
                                        key={link.name}
                                        render={<Link href={link.href} className="text-lg font-medium text-foreground hover:text-primary" />}
                                    >
                                        {link.name}
                                    </SheetClose>
                                ))}
                                <SheetClose
                                    render={<Link href="#contact" className="mt-4 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium transition-colors" />}
                                >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Book a Call
                                </SheetClose>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}
