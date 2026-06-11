import { projectsData } from "@/data/projects";
import { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
    const { title, description, tags, liveUrl, repoUrl, featured } = project;

    return (
        <article
            className={`relative flex flex-col gap-4 p-7 rounded border border-border hover:border-primary transition-all duration-200 hover:-translate-y-1 ${
                featured ? "bg-surface-2" : "bg-surface"
            }`}
        >
            {featured && (
                <span className="absolute top-5 right-5 text-[0.65rem] font-bold tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    Featured
                </span>
            )}

            <h3 className="font-display font-bold text-lg text-foreground">
                {title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {description}
            </p>

            <ul className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                    <li
                        key={tag}
                        className="text-[0.7rem] font-semibold text-muted-foreground bg-muted border border-border px-2.5 py-0.5 rounded-sm"
                    >
                        {tag}
                    </li>
                ))}
            </ul>

            <div className="flex gap-5 pt-3 border-t border-border">
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.8125rem] font-semibold text-primary hover:text-primary/70 transition-colors"
                    >
                        Live ↗
                    </a>
                )}
                {repoUrl && (
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.8125rem] font-semibold text-muted-foreground hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                )}
            </div>
        </article>
    );
}

export default function Projects() {
    const featured = projectsData.filter((p) => p.featured);
    const others = projectsData.filter((p) => !p.featured);

    return (
        <section id="projects" className="bg-background py-24">
            <div className="max-w-5xl mx-auto px-6">
                <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                    Work
                </span>
                <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-foreground mb-12">
                    Selected Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                    {featured.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>

                {others.length > 0 && (
                    <>
                        <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                            Other projects
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {others.map((p) => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
