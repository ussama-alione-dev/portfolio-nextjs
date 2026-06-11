export interface HeroData {
    name: string;
    title: string;
    tagline: string;
    email?: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    availableForWork: boolean;
}

export interface Skill {
    name: string;
    level: number;
}

export interface AboutData {
    bio: string[];
    skills: Skill[];
    location: string;
    email: string;
}

export type ProjectTag = string;

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: ProjectTag[];
    liveUrl?: string;
    repoUrl?: string;
    featured: boolean;
}
