import { Sparkles } from "lucide-react";

export function Introduction() {
    return (
        <section className="hero-glow mb-9 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent/60 px-3 py-1.5 text-xs font-medium text-primary">
                <Sparkles size={13} />
                AI writing workspace
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Your ideas,
                <span className="bg-linear-to-r from-primary via-violet-500 to-purple-400 bg-clip-text text-transparent">
                    {" "}
                    better written.
                </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                Improve your writing, refine your ideas, and create content with
                a little help from AI.
            </p>
        </section>
    );
}
