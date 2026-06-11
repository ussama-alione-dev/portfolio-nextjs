import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

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
    title: "Youssef El Amrani — Full-Stack Developer",
    description:
        "Portfolio of Youssef El Amrani — full-stack developer specialising in Next.js, TypeScript, and Node.js.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${syne.variable}`}>
            <body>{children}</body>
        </html>
    );
}
