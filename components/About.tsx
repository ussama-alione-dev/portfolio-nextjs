import { aboutData } from "@/data/about";

export default function About() {
    const { bio, skills, location, email } = aboutData;

    return (
        <section id="about" className="bg-surface py-24">
            <div className="max-w-5xl mx-auto px-6">
                <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                    About
                </span>
                <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-foreground mb-12">
                    A bit about me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <div className="space-y-5">
                            {bio.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="text-muted-foreground leading-[1.8]"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-8 space-y-3">
                            <div className="flex gap-6 text-sm">
                                <span className="text-muted-foreground w-20 shrink-0">
                                    Location
                                </span>
                                <span className="text-foreground">
                                    {location}
                                </span>
                            </div>
                            <div className="flex gap-6 text-sm">
                                <span className="text-muted-foreground w-20 shrink-0">
                                    Email
                                </span>
                                <a
                                    href={`mailto:${email}`}
                                    className="text-primary hover:underline"
                                >
                                    {email}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                            Skills
                        </h3>
                        <ul className="space-y-5 ">
                            {skills.map((skill) => (
                                <li key={skill.name}>
                                    <div className="flex justify-between mb-1.5 text-sm">
                                        <span className="text-foreground">
                                            {skill.name}
                                        </span>
                                        <span className="text-muted-foreground"></span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
