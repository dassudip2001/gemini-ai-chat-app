# Personal Projects

This repository currently contains two separate AI-related projects:

- `chat-app-client`: a Next.js chat app using Google Gemini and MongoDB
- `chat_api`: a Python CrewAI project for multi-agent research/report generation

## Repository Structure

```text
.
|-- Readme.md
|-- chat-app-client/
`-- chat_api/
```

## Prerequisites

- Node.js 18+
- Yarn (or npm/pnpm)
- Python 3.10 to 3.13
- `uv` (for Python dependency management)
- MongoDB instance (local or cloud)
- API keys:
  - Google Gemini API key (for `chat-app-client`)
  - OpenAI API key (for `chat_api` CrewAI usage)

## Project 1: chat-app-client

A Next.js 15 app with:

- Chat UI
- `/api/chat` route that:
  - accepts user input
  - calls Gemini (`gemini-1.5-flash`)
  - stores chat history in MongoDB
- Optional credential-based auth scaffolding via NextAuth

### Setup

1. Go to the app directory:

```bash
cd chat-app-client
```

2. Install dependencies:

```bash
yarn install
```

3. Create `.env.local` from `example.env` and set values:

```env
NEXTAUTH_SECRET=your-secret
GEMINI_API_KEY=your-gemini-api-key
MONGODB_URI=your-mongodb-connection-string
```

4. Start development server:

```bash
yarn dev
```

5. Open:

- `http://localhost:3000`
- Health route: `http://localhost:3000/api`

### Useful Commands

```bash
yarn dev
yarn build
yarn start
yarn lint
```

## Project 2: chat_api

A CrewAI-based Python project that runs a two-agent workflow:

- `researcher`: gathers information on a topic
- `reporting_analyst`: compiles a detailed markdown report

The default run generates `report.md`.

### Setup

1. Go to the project directory:

```bash
cd chat_api
```

2. Install `uv` if needed:

```bash
pip install uv
```

3. Install dependencies:

```bash
crewai install
```

4. Configure `.env`:

```env
MODEL=gpt-4o-mini
OPENAI_API_KEY=your-openai-api-key
```

### Run

```bash
crewai run
```

Alternative script entry points from `pyproject.toml` are available (`run_crew`, `train`, `replay`, `test`, `run_with_trigger`).

## Notes

- The two projects are independent; `chat-app-client` does not call `chat_api` by default.
- Keep secrets in local env files and do not commit them.
