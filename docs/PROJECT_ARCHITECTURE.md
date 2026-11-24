# Project Architecture

Modern Web AI Writing Assistant is built using Next.js, with the frontend and backend managed within a single application.

This document provides a high-level overview of the application's architecture and how its main components work together.

## 1. Architecture Overview

The application consists of four main parts:

- **Frontend:** Provides the writing interface where users select operations, enter text, configure preferences, and view generated results.
- **Backend:** Handles API requests, validates user input, constructs AI prompts, and coordinates content generation.
- **AI Providers:** External AI services responsible for processing writing requests and generating content.
- **Rate Limiting:** Uses Upstash Redis to help protect the API from excessive requests.

## 2. High-Level Architecture Diagram

```text
┌─────────────────────────────┐
│        User / Browser       │
│                             │
│      Writing Interface      │
│                             │
│  - Text Input               │
│  - Writing Operations       │
│  - Generation Settings      │
│  - Generated Output         │
└─────────────--──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Next.js Backend       │
│                             │
│       API Route             │
│                             │
│  - Request Validation       │
│  - Prompt Construction      │
│  - AI Provider Management   │
│  - Request Protection       │
└──────-──────────────--──────┘
        │              │
        ▼              ▼
┌──────────────┐  ┌─────────────────┐
│ Upstash Redis│  │   AI Providers  │
│              │  │                 │
│ Rate Limiting│  │ Groq            │
│              │  │ Gemini          │
└──────────────┘  └────────-────────┘
                           │
                           ▼
                    Generated Content
                           │
                           ▼
                     User / Browser
```

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend and backend application framework |
| React | User interface |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| shadcn/ui | Reusable UI components |
| Vercel AI SDK | AI provider integration and text generation |
| Zod | Request validation |
| Upstash Redis | Rate limiting |
| Groq | Primary AI provider |
| Google Gemini | Fallback AI provider |

## 4. Request Flow

At a high level, a typical writing request follows this process:

1. The user selects a writing operation and configures the desired output.
2. The frontend sends the request to the Next.js backend.
3. The backend validates the request and applies rate limiting.
4. The backend constructs the appropriate prompts.
5. The AI integration layer sends the request to an available provider.
6. The generated content is returned to the frontend.
7. The user can review, copy, or further modify the generated result.

## 5. Important Design Decisions

### Next.js for frontend and backend

The application uses Next.js for both the user interface and server-side API functionality. This avoids maintaining a separate backend service.

### Bring Your Own Key (BYOK)

Users configure their own AI provider API keys through environment variables. The application uses these credentials to communicate with the configured providers.

### Multiple AI Providers

The application supports multiple AI providers, with Groq configured as the primary provider and Gemini as the fallback.

### API Protection

Request validation, body-size limits, and Redis-based rate limiting help protect the generation endpoint from invalid or excessive requests.

---

This document is intended as a high-level introduction. Detailed implementation, API behavior, and configuration are covered throughout the tutorial.
