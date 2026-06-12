import { aboutData } from "@/data/about";

export default function ContactPage() {
    const { email, location } = aboutData;

    return (
        <>
            <div className="max-w-3xl mx-auto mt-20 mb-16 px-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                    Contact
                </p>
                <h1 className="font-display text-5xl text-foreground leading-tight mb-5">
                    Let's work
                    <br />
                    together.
                </h1>
                <p className="text-lg text-muted-foreground max-w-prose">
                    Have a project in mind or just want to say hi? Fill out the
                    form below or reach out directly — I usually respond within
                    24 hours.
                </p>
            </div>

            <hr className="max-w-3xl mx-auto border-border" />

            <div className="max-w-3xl mx-auto my-16 px-6 grid sm:grid-cols-[1fr_220px] gap-12">
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-foreground">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Oussama Aliouane"
                            className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-foreground">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-foreground">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Tell me about your project..."
                            className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="self-start inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-85 transition-opacity"
                    >
                        Send message →
                    </button>
                </form>

                <div className="flex flex-col gap-6 pt-1">
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                            Email
                        </p>
                        <a
                            href={`mailto:${email}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                            {email}
                        </a>
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                            Location
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {location}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                            Availability
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            Open to work
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
