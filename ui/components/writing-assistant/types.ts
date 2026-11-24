export type Operation =
    | "improve"
    | "rewrite"
    | "summarize"
    | "grammar"
    | "expand"
    | "generate";

export type OutputFormat =
    | "auto"
    | "paragraphs"
    | "bullets"
    | "email"
    | "steps";
    
export type Tone = "professional" | "casual" | "friendly" | "formal";

export type WritingLength = "short" | "medium" | "long";