import { Project } from "@/types";

export const projectsData: Project[] = [
    {
        id: "devflow",
        title: "DevFlow",
        description:
            "A full-stack project management tool for small dev teams. Features real-time updates via WebSockets, kanban boards, and GitHub integration.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"],
        liveUrl: "https://devflow.example.com",
        repoUrl: "https://github.com/youssef/devflow",
        featured: true,
    },
    {
        id: "shopiq",
        title: "ShopIQ",
        description:
            "E-commerce platform with a personalised recommendation engine. Handles 10k+ products, Stripe checkout, and an admin analytics dashboard.",
        tags: ["React", "Node.js", "Stripe", "MongoDB", "Redis"],
        liveUrl: "https://shopiq.example.com",
        repoUrl: "https://github.com/youssef/shopiq",
        featured: true,
    },
    {
        id: "atlas-weather",
        title: "Atlas Weather",
        description:
            "Minimal weather PWA with 7-day forecasts, hourly breakdowns, and offline support. Consumes the Open-Meteo free API.",
        tags: ["Next.js", "PWA", "Tailwind", "Open-Meteo API"],
        liveUrl: "https://atlas-weather.example.com",
        repoUrl: "https://github.com/youssef/atlas-weather",
        featured: false,
    },
    {
        id: "linksnap",
        title: "LinkSnap",
        description:
            "URL shortener with click analytics, custom slugs, and QR code export. Built as a weekend project to learn Redis caching patterns.",
        tags: ["Node.js", "Redis", "PostgreSQL", "Docker"],
        repoUrl: "https://github.com/youssef/linksnap",
        featured: false,
    },
];
