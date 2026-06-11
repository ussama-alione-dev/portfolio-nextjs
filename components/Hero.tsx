import { heroData } from "@/data/hero";

export default function Hero() {
    const { name, title, tagline, ctaPrimary, ctaSecondary, availableForWork } =
        heroData;

    return (
        <section
            id="hero"
            className="relative min-h-svh flex items-center overflow-hidden pt-16"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-6 pointer-events-none"
            >
                {Array.from({ length: 6 }).map((_, i) => (
                    <span
                        key={i}
                        className="border-r border-foreground/[0.03]"
                    />
                ))}
                <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-background to-transparent col-span-6" />
            </div>

            <div
                aria-hidden="true"
                className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
                {availableForWork && (
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-border text-xs font-medium text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                        Available for work
                    </span>
                )}

                <h1 className="font-display font-extrabold text-[clamp(3rem,9vw,6.5rem)] leading-none tracking-[-0.04em] text-foreground mb-3">
                    {name}
                </h1>

                <p className="font-display text-[clamp(1.25rem,3vw,2rem)] font-normal text-primary mb-6">
                    {title}
                </p>

                <p className="max-w-xl text-[1.0625rem] text-muted-foreground leading-relaxed mb-10">
                    {tagline}
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href={ctaPrimary.href}
                        className="inline-flex items-center px-7 py-3 rounded-sm bg-primary hover:bg-primary/80 text-primary-foreground font-semibold text-[0.9375rem] transition-colors active:scale-95"
                    >
                        {ctaPrimary.label}
                    </a>
                    <a
                        href={ctaSecondary.href}
                        className="inline-flex items-center px-7 py-3 rounded-sm border border-border hover:border-muted-foreground text-foreground font-semibold text-[0.9375rem] transition-colors active:scale-95"
                    >
                        {ctaSecondary.label}
                    </a>
                </div>
            </div>
        </section>
    );
}
