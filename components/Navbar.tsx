"use client";

import { useState, useEffect } from "react";
import { heroData } from "@/data/hero";
import Link from "next/link";

const NAV_LINKS = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    {
        label: "Contact",
        href: `mailto:${heroData.email ?? "aliouaneoussaa89@example.com"}`,
    },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const firstName = heroData.name.split(" ")[0];

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
                scrolled
                    ? "bg-background/85 backdrop-blur-md border-b border-border"
                    : "border-b border-transparent"
            }`}
        >
            <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
                <a
                    href="#hero"
                    className="font-display font-bold text-xl tracking-tight text-foreground"
                >
                    {firstName}
                    <span className="text-primary">.</span>
                </a>

                <nav
                    aria-label="Main navigation"
                    className="flex items-center gap-8"
                >
                    {NAV_LINKS.map((link) => (
                        <Link
                            href={link.href}
                            key={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
