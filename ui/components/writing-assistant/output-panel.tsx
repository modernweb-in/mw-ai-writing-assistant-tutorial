import {
    ArrowRight,
    Copy,
    RefreshCw,
    Sparkles,
    WandSparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function OutputPanel() {

    return (
        <section className="flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex h-14 items-center justify-between border-b border-border px-5">
                <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />

                    <h3 className="text-sm font-semibold">Your result</h3>
                </div>

                <span className="text-xs text-muted-foreground">
                    AI generated
                </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
                {
                false ? (
                    <div className="flex flex-1 flex-col items-center justify-center text-center">
                        <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-accent">
                            <RefreshCw
                                size={21}
                                className="animate-spin text-primary"
                            />
                        </div>

                        <h4 className="text-sm font-medium">
                            Working on your text...
                        </h4>

                        <p className="mt-2 text-xs text-muted-foreground">
                            This may take a few moments.
                        </p>
                    </div>
                ) : 
                false ? (
                    <div
                        className="animate-fade-up flex flex-1 flex-col"
                    >
                        
                        <div className="mb-3 flex items-center gap-2 text-xs text-primary">
                            <RefreshCw size={13} className="animate-spin" />
                            Regenerating...
                        </div>

                        <div className="flex-1 whitespace-pre-wrap text-sm leading-7 text-foreground">
                            {/* TODO: Render Output */}
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
                            <span className="text-xs text-muted-foreground">
                                0 words
                            </span>

                            <div className="flex flex-wrap gap-1">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="ui-interactive ui-icon-button h-8 gap-1.5 text-xs"
                                >
                                    <ArrowRight
                                        size={14}
                                        className="ui-icon text-primary"
                                    />
                                    Replace original
                                </Button>

                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="ui-interactive ui-icon-button h-8 gap-1.5 text-xs"
                                >
                                    <Copy size={14} className="ui-icon" />
                                    Copy
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
                        <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-accent">
                            <WandSparkles size={21} className="text-primary" />
                        </div>

                        <h4 className="text-sm font-medium">
                            Your result will appear here
                        </h4>

                        <p className="mt-2 max-w-xs text-xs leading-5 text-muted-foreground">
                            Select a writing tool, enter your text, and generate
                            your first result.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
