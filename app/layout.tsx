import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-syne",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Oussama ali1 — Full-Stack Developer",
    description:
        "Portfolio of Oussama ali1 — full-stack developer specialising in Next.js, TypeScript, and Node.js.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${syne.variable}`}>
            <Navbar />
            <body>{children}</body>
            <Footer />
        </html>
    );
}
