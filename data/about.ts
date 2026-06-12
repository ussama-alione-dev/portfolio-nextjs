import { AboutData } from "@/types";

export const aboutData: AboutData = {
    bio: [
        "I'm a full-stack developer based in Morocco with 4+ years of experience building production web applications — ranging from SaaS dashboards to e-commerce platforms.",
        "I enjoy working across the stack: designing component systems with React and Next.js on the front-end, and building clean APIs with Node.js or Python on the back-end.",
        "When I'm not coding, I'm reading about system design, contributing to open-source, or exploring the mountains around Beni Mellal.",
    ],
    skills: [
        { name: "TypeScript / JavaScript" },
        { name: "React / Next.js" },
        { name: "Node.js / Express" },
        { name: "PostgreSQL / Prisma" },
        { name: "Docker / CI-CD" },
        { name: "Figma / UI Design" },
    ],
    location: "Beni Mellal, Morocco",
    email: "aliouaneoussama89@example.com",

    experiences: [
        {
            year: "2023 →",
            role: "Senior Frontend Developer",
            company: "Freelance / Remote",
            description:
                "Building web apps for startups across Europe and MENA. Focus on performance and developer experience.",
        },
        {
            year: "2021",
            role: "Full-stack Developer",
            company: "Softech, Casablanca",
            description:
                "Led the frontend rewrite of an e-commerce platform serving 50k+ monthly users.",
        },
        {
            year: "2019",
            role: "Junior Developer",
            company: "Digital Agency, Rabat",
            description:
                "Delivered WordPress and React projects for local clients.",
        },
    ],
};
