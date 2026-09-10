import type { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("Project Root Scaffold", {
    description:
      "Scaffold the project root documentation folders and root files",
    prompts: [],
    actions: [
      // Docs Directories
      { type: "add", path: "docs/architecture/.gitkeep", skipIfExists: true },
      { type: "add", path: "docs/api/.gitkeep", skipIfExists: true },
      { type: "add", path: "docs/database/.gitkeep", skipIfExists: true },
      { type: "add", path: "docs/decisions/.gitkeep", skipIfExists: true },
      { type: "add", path: "docs/onboarding/.gitkeep", skipIfExists: true },

      // Root Files
      { type: "add", path: ".gitignore", skipIfExists: true },
      { type: "add", path: "README.md", skipIfExists: true },
    ],
  });
}
