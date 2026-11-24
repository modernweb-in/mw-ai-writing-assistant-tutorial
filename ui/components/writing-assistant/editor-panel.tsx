import { AlignLeft, Copy, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function EditorPanel() {
    
    return (
        <section className="flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-200 focus-within:border-primary/40 focus-within:shadow-md focus-within:shadow-primary/5">
            <div className="flex h-14 items-center justify-between border-b border-border px-5">
                <div className="flex items-center gap-2">
                    <AlignLeft size={16} className="text-primary" />

                    <h3 className="text-sm font-semibold">Your text</h3>
                </div>

                <span className="text-xs text-muted-foreground">Original</span>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <Textarea
                    placeholder="Paste your text here or start writing..."
                    aria-label="Original text"
                    className="min-h-[270px] flex-1 resize-none border-0 bg-transparent p-2 text-sm leading-7 shadow-none placeholder:text-muted-foreground/70 focus-visible:ring-0"
                />

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{/* TODO: Display word count. */}0 words</span>
                        <span>{/* TODO: Display character count. */}0 characters</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="ui-interactive ui-icon-button h-8 gap-1.5 px-2 text-xs text-muted-foreground"
                        >
                            <Copy size={14} className="ui-icon" />
                            Copy
                        </Button>

                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="ui-interactive ui-icon-button h-8 gap-1.5 px-2 text-xs text-muted-foreground hover:text-destructive"
                        >
                            <Trash2 size={14} className="ui-icon" />
                            Clear
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
