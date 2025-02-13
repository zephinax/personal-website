# Development

This guide provides instructions on how to set up and run the project locally.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (Latest LTS version recommended)
- **Yarn** (or use `npm` as an alternative)
- **Git** (for version control)

## Setup

### 1. Clone the repository

```sh
git clone https://github.com/ncdai/chanhdai.com.git
cd chanhdai.com
```

### 2. Install dependencies

```sh
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file based on `.env.example`:

```sh
cp .env.example .env.local
```

Then, update the necessary environment variables inside `.env.local`.

### 4. Run the development server

```sh
yarn dev
```

The application should now be available at http://localhost:3000

## Building for Production

```sh
yarn build
```

After building, start the application with:

```sh
NODE_ENV=production yarn start
```

## Registry

This project utilizes **shadcn Registry**, which allows you to manage and distribute custom components, hooks, pages, and other files across multiple React projects. By hosting a registry, you can reuse UI components easily without manually copying code between projects.

### Using Registry in other React projects

If you're working on a different React project and want to reuse the custom components from this repository, you can add them using the **shadcn CLI** with the following commands:

```sh
npx shadcn@latest add https://chanhdai.com/r/cn.json
npx shadcn@latest add https://chanhdai.com/r/simple-tooltip.json
npx shadcn@latest add https://chanhdai.com/r/switch-theme.json
npx shadcn@latest add https://chanhdai.com/r/flip-sentences.json
npx shadcn@latest add https://chanhdai.com/r/toggle-theme.json
```
> Note: These components are compatible with [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4) and [React 19](https://react.dev/blog/2024/12/05/react-19).

### Registry configuration

Documentation: [shadcn Registry Docs](https://ui.shadcn.com/docs/registry)

Source files:
  - `./registry.json`
  - `./src/registry`

Before using the registry, run the following command to build and generate the registry JSON files:

```sh
yarn registry:build
```

When running the `npx shadcn@latest add <registry-url>` command, the selected component will be automatically downloaded and integrated into your project.
