import type { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("NextJS Scaffold", {
    description:
      "Scaffold the existing NextJS project with customized folders and files",
    prompts: [],
    actions: [
      { type: "add", path: "src/app/(public)/.gitkeep", skipIfExists: true },
      { type: "add", path: "src/app/(protected)/.gitkeep", skipIfExists: true },
      { type: "add", path: "src/components/ui/.gitkeep", skipIfExists: true },
      {
        type: "add",
        path: "src/components/layout/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/components/shared/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/design-system/foundations/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/design-system/themes/light.css",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/design-system/themes/dark.css",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/design-system/components.css",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/design-system/tokens.css",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/features/template/components/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/features/template/constants/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/features/template/hooks/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/features/template/types/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/features/template/utils/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/features/template/api/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/hooks/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/lib/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/providers/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/store/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/styles/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/types/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/proxy.ts",
        skipIfExists: true,
      },
      {
        type: "add",
        path: ".env.local",
        skipIfExists: true,
      },
    ],
  });
}
