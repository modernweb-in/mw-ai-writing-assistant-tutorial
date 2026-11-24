import { ArrowRight, RefreshCw, Sparkles, WandSparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function GenerationSettings() {
    return (
        <section className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
                <WandSparkles size={16} className="text-primary" />

                <h3 className="text-sm font-semibold">Customize your result</h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="tone"
                        className="mb-2 block text-xs font-medium text-foreground"
                    >
                        Writing tone
                    </label>

                    <select
                        id="tone"
                        className="ui-interactive h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                    >
                        <option value="professional">Professional</option>
                        <option value="casual">Casual</option>
                        <option value="friendly">Friendly</option>
                        <option value="formal">Formal</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="length"
                        className="mb-2 block text-xs font-medium text-foreground"
                    >
                        Output length
                    </label>

                    <select
                        id="length"
                        className="ui-interactive h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                    >
                        <option value="short">Short</option>
                        <option value="medium">Medium</option>
                        <option value="long">Long</option>
                    </select>
                </div>
            </div>

            <div className="mt-5">
                <label
                    htmlFor="output-format"
                    className="mb-2 block text-xs font-medium text-foreground"
                >
                    Output format
                </label>

                <select
                    id="output-format"
                    className="ui-interactive h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                >
                    <option value="auto">Automatic</option>
                    <option value="paragraphs">Paragraphs</option>
                    <option value="bullets">Bullet points</option>
                    <option value="email">Email</option>
                    <option value="steps">Step-by-step</option>
                </select>

                <p className="mt-2 text-xs text-muted-foreground">
                    Choose how you want your generated content structured.
                </p>
            </div>

            <div className="mt-5">
                <label
                    htmlFor="instructions"
                    className="mb-2 block text-xs font-medium text-foreground"
                >
                    Additional instructions
                    <span className="ml-1 font-normal text-muted-foreground">
                        (optional)
                    </span>
                </label>

                <Textarea
                    id="instructions"
                    placeholder="E.g. Keep the language simple, avoid technical jargon..."
                    className="min-h-20 resize-none text-sm"
                />
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                    Your original text will remain unchanged.
                </p>

                <Button
                    type="button"
                    className="ui-interactive ui-primary-button h-10 gap-2 rounded-lg px-5"
                >
                    {false ? (
                        <>
                            <RefreshCw size={15} className="animate-spin" />
                            Generating...
                        </>
                    ) : (
                        <>
                            <Sparkles size={15} />

                            {false ? "Regenerate result" : "Generate result"}

                            <ArrowRight size={15} />
                        </>
                    )}
                </Button>
            </div>

            {false && (
                <div
                    role="alert"
                    className="animate-fade-in mt-4 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                >
                    {/* TODO: Display the error message. */}
                </div>
            )}
        </section>
    );
}
