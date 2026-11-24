import { Sparkles } from "lucide-react";

import { operations } from "./constants";

export function OperationSelector() {

    return (
        <section className="mb-7">
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">
                    What would you like to do?
                </h3>

                <span className="text-xs text-muted-foreground">
                    {operations.length} writing tools
                </span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {
                    operations.map((operation) => {
                        const Icon = operation.icon;
                        const isActive = operation.id === "improve";;

                        return (
                            <button
                                key={operation.id}
                                type="button"
                                aria-pressed={isActive}
                                className={`cursor-pointer ui-interactive group flex min-h-24 flex-col items-start gap-3 rounded-xl border p-3.5 text-left ${
                                    isActive
                                        ? "border-primary/40 bg-accent text-accent-foreground shadow-sm shadow-primary/10"
                                        : "border-border bg-card text-foreground hover:border-primary/30 hover:bg-accent/40 hover:shadow-sm"
                                }`}
                            >
                                <Icon
                                    size={19}
                                    strokeWidth={1.8}
                                    className={`ui-icon ${
                                        isActive
                                            ? "text-primary"
                                            : "text-muted-foreground group-hover:text-primary"
                                    }`}
                                />

                                <span className="text-xs font-medium leading-4">
                                    {operation.label}
                                </span>
                            </button>
                        );
                    })
                }
            </div>

            <div
                className="animate-fade-up mt-4 flex items-center gap-2 text-xs text-muted-foreground"
            >
                <Sparkles size={14} className="text-primary" />

                {/* TODO: Display the selected operation's description. */}
                
            </div>
            
        </section>
    );
}
