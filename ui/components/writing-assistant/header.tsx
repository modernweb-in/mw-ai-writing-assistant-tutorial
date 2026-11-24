import { PenLine } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-20 border-b border-border/80 bg-card/85 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
                <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-violet-400 text-white shadow-md shadow-primary/20">
                        <PenLine size={16} strokeWidth={2} />
                    </div>

                    <div>
                        <h1 className="text-sm font-semibold tracking-tight">
                            Writing Assistant
                        </h1>

                        <p className="text-[11px] text-muted-foreground">
                            Your AI-powered writing workspace
                        </p>
                    </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 sm:flex">
                    <span className="size-1.5 rounded-full bg-emerald-500" />

                    <span className="text-xs text-muted-foreground">
                        Workspace ready
                    </span>
                </div>
            </div>
        </header>
    );
}
