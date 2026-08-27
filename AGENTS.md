# AI Chatbot — Agent Instructions

## Commands

- `npm run dev` — Start Vite dev server (port 5173)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

No typecheck or test runner is configured. Lint is the only verification step.

## Architecture

Single-page React 19 app, no backend server, no database, no state management library. All state lives in `App.jsx` (`messages` array, `isLoading` boolean). Chat history is ephemeral — lost on refresh.

## Provider System

AI providers live in `src/components/Assistants/`. The active provider is imported in `App.jsx`:

```js
import chat from "./components/Assistants/opencode";
```

Each provider exports a `chat()` function or `Assistant` class. Switching providers = change this single import.

**Currently active:** OpenCode (proxies through Vite to local `127.0.0.1:4096`).

**Available but not wired:**
- `openai.js` — `Assistant` class with `chat()` and `chatStream()`, model `gpt-5.4-mini`
- `googleai.js` — `Assistant` class using `@google/genai`, model `gemini-3.6-flash`
- `deepseekai.js` — Extends `openai.js` `Assistant`, overrides `baseURL` to `api.deepseek.com`
- `@anthropic-ai/sdk` is in dependencies but has no assistant module — not yet integrated

## Vite Proxy

`vite.config.js` proxies `/opencode` → `http://127.0.0.1:4096` (strips the `/opencode` prefix). OpenCode backend must be running locally for the active provider to work.

## Environment Variables

Copy `.env.example` to `.env`. Keys used:
- `VITE_GEMINI_API_KEY`
- `VITE_OPEN_AI_API_KEY`
- `VITE_DEEPSEEK_API_KEY`
- `VITE_ANTHROPIC_API_KEY` (unused in code)

**Gotcha:** `.env.example` has a duplicate `VITE_GEMINI_API_KEY` line — the second one should be `VITE_OPEN_AI_API_KEY`.

All SDKs use `dangerouslyAllowBrowser: true` — API keys are exposed in the client bundle. This is dev/prototyping only.

## Styling

CSS Modules throughout (`*.module.css`). Global theme uses CSS `light-dark()` for automatic light/dark mode. No CSS-in-JS.

## Linting

ESLint flat config (`eslint.config.js`):
- `react-hooks` (recommended)
- `react-refresh` (Vite config)
- Ignores `dist/`

## Adding a New Provider

1. Create `src/components/Assistants/<name>.js`
2. Export a `chat(message)` function or `Assistant` class with a `chat(content)` method
3. Update the import in `src/App.jsx`
4. Add API key to `.env` if needed
