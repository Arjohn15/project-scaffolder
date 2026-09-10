# Project Scaffolder

A personal, cross-platform CLI tool for scaffolding projects, folders, and files using [Plop.js](https://plopjs.com/). 

By linking this project globally, you can run the `my-scaffold` command from **any folder** on your machine to instantly generate boilerplate code.

## 🚀 Features
- **Globally Accessible:** Run `my-scaffold` anywhere via `npm link`.
- **Cross-Platform:** Works seamlessly on Windows, macOS, and Linux without shell spawning errors.
- **TypeScript Ready:** Write generators in TypeScript natively using Node.js ESM.
- **Interactive Prompts:** Built-in CLI menu for selecting which generator to run.
- **Fail-Safe Actions:** Safely skips existing files using `skipIfExists: true`.

## 📦 Installation & Setup

When setting this up on a new machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/project-scaffolder.git
   cd project-scaffolder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Link the tool globally:**
   ```bash
   npm link
   ```
   *(This registers the `my-scaffold` command globally on your system, pointing directly to this folder).*

## 💻 Usage

Navigate to any project directory on your computer where you want to generate files, and run:

```bash
# Opens the interactive generator menu
my-scaffold
```

Or, bypass the menu by providing the exact name of the generator:
```bash
my-scaffold "NextJS Bootstrap"
```

## 📂 Project Structure

```text
/project-scaffolder 
|---generators/          # Contains individual generator logic
|   |---next.ts          # Example: NextJS folder scaffold
|---node_modules/
|---package.json         # Defines the "bin" command ("my-scaffold")
|---plopfile.ts          # Main entry point that registers all generators
|---run-plop.js          # The cross-platform execution script
```

## 🛠️ Adding a New Generator

1. Create a new `.ts` file inside the `generators/` folder (e.g., `component.ts`).
2. Export a default function that takes the `plop` API:
   ```typescript
   import type { NodePlopAPI } from "plop";

   export default function (plop: NodePlopAPI) {
     plop.setGenerator("React Component", {
       description: "Creates a new React component",
       prompts: [], // Add prompts here if you want to ask for user input
       actions: [
         // Add file generation actions here
       ],
     });
   }
   ```
3. Import and register it inside `plopfile.ts`:
   ```typescript
   import type { NodePlopAPI } from "plop";
   import nextjsGenerator from "./generators/next.ts";
   import componentGenerator from "./generators/component.ts";

   export default async function (plop: NodePlopAPI) {
     nextjsGenerator(plop);
     componentGenerator(plop); // Register the new generator
   }
   ```
4. Save the files. The next time you type `my-scaffold`, your new generator will automatically appear in the list!

## ⚠️ Unlinking

If you ever need to remove the global command from your system, run this inside the `project-scaffolder` directory:
```bash
npm unlink
```
