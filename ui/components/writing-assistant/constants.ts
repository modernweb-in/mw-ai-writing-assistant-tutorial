import {
    Expand,
    FileText,
    PenLine,
    RefreshCw,
    SpellCheck,
    WandSparkles,
} from "lucide-react";

import type { Operation } from "./types";

export const operations: {
    id: Operation;
    label: string;
    description: string;
    icon: typeof WandSparkles;
}[] = [
    {
        id: "improve",
        label: "Improve writing",
        description: "Make your writing clearer and more polished.",
        icon: WandSparkles,
    },
    {
        id: "rewrite",
        label: "Rewrite",
        description: "Express the same ideas in a different way.",
        icon: RefreshCw,
    },
    {
        id: "summarize",
        label: "Summarize",
        description: "Turn lengthy content into concise summaries.",
        icon: FileText,
    },
    {
        id: "grammar",
        label: "Fix grammar",
        description: "Correct grammar, spelling and punctuation.",
        icon: SpellCheck,
    },
    {
        id: "expand",
        label: "Expand text",
        description: "Develop your ideas with more detail.",
        icon: Expand,
    },
    {
        id: "generate",
        label: "Create from scratch",
        description: "Create new content from your instructions.",
        icon: PenLine,
    },
];
