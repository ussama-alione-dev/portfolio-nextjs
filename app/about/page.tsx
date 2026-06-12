import { aboutData } from "@/data/about";

export const metadata = {
    title: "About — Oussama",
};

const values = [
    {
        icon: "⚡",
        title: "Ship fast, iterate",
        text: "I prefer working versions over perfect drafts. Feedback early beats surprises late.",
    },
    {
        icon: "🧩",
        title: "Keep it simple",
        text: "The best code is the code that doesn't need explaining. I write for the next developer.",
    },
    {
        icon: "🤝",
        title: "Communicate clearly",
        text: "I give updates before they're asked for and flag blockers as soon as they appear.",
    },
];

export default function AboutPage() {
    const { bio, location, experiences, email } = aboutData;

    return (
        <>
            <div className="max-w-3xl mx-auto mt-20 mb-16 px-6 flex flex-col sm:flex-row gap-12 items-center">
                <div className="flex-1">
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                        About me
                    </p>
                    <h1 className="font-display text-5xl text-foreground leading-tight mb-5">
                        I build things
                        <br />
                        people enjoy using.
                    </h1>
                    <div className="flex flex-col gap-3">
                        {bio.map((paragraph, i) => (
                            <p
                                key={i}
                                className="text-lg text-muted-foreground max-w-prose"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                        📍 {location}
                    </p>
                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-85 transition-opacity"
                    >
                        Say hello →
                    </a>
                </div>
                <div className="flex-shrink-0">
                    <div className="w-44 h-44 rounded-full bg-secondary border-2 border-primary flex items-center justify-center font-display text-6xl text-primary select-none">
                        O
                    </div>
                </div>
            </div>

            <hr className="max-w-3xl mx-auto border-border" />

            <hr className="max-w-3xl mx-auto border-border" />

            <section className="max-w-3xl mx-auto my-16 px-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-8">
                    Experience
                </p>
                <div className="flex flex-col gap-8">
                    {experiences.map((item, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-[90px_1fr] gap-6 relative"
                        >
                            {i < experiences.length - 1 && (
                                <div className="absolute left-[89px] top-0 bottom-[-2rem] w-px bg-border" />
                            )}
                            <span className="text-xs font-semibold text-primary pt-1 text-right">
                                {item.year}
                            </span>
                            <div className="pl-6 relative">
                                <span className="absolute left-[-4px] top-[6px] w-[10px] h-[10px] rounded-full bg-primary border-2 border-background" />
                                <p className="font-semibold text-foreground">
                                    {item.role}
                                </p>
                                <p className="text-xs text-muted-foreground mb-1">
                                    {item.company}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="max-w-3xl mx-auto border-border" />

            <section className="max-w-3xl mx-auto my-16 px-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-6">
                    How I work
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                    {values.map(({ icon, title, text }) => (
                        <div
                            key={title}
                            className="bg-card border border-border rounded-xl p-5"
                        >
                            <div className="text-2xl mb-3">{icon}</div>
                            <p className="font-semibold text-card-foreground mb-1">
                                {title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
