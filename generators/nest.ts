import type { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("NestJS Scaffold", {
    description:
      "Scaffold the existing NestJS project with customized folders and files",
    prompts: [],
    actions: [
      // Common Directories
      {
        type: "add",
        path: "src/common/decorators/.gitkeep",
        skipIfExists: true,
      },
      { type: "add", path: "src/common/dto/.gitkeep", skipIfExists: true },
      { type: "add", path: "src/common/enums/.gitkeep", skipIfExists: true },
      {
        type: "add",
        path: "src/common/exceptions/.gitkeep",
        skipIfExists: true,
      },
      { type: "add", path: "src/common/filters/.gitkeep", skipIfExists: true },
      { type: "add", path: "src/common/guards/.gitkeep", skipIfExists: true },
      {
        type: "add",
        path: "src/common/interceptors/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/common/middleware/.gitkeep",
        skipIfExists: true,
      },
      { type: "add", path: "src/common/pipes/.gitkeep", skipIfExists: true },
      {
        type: "add",
        path: "src/common/serializers/.gitkeep",
        skipIfExists: true,
      },
      { type: "add", path: "src/common/utils/.gitkeep", skipIfExists: true },

      // Config Files
      { type: "add", path: "src/config/app.config.ts", skipIfExists: true },
      {
        type: "add",
        path: "src/config/database.config.ts",
        skipIfExists: true,
      },

      // Database Directories
      { type: "add", path: "src/database/seeds/.gitkeep", skipIfExists: true },
      { type: "add", path: "src/database/prisma/.gitkeep", skipIfExists: true },

      // Template Module Directories
      {
        type: "add",
        path: "src/modules/template/dto/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/modules/template/entities/.gitkeep",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/modules/template/interfaces/.gitkeep",
        skipIfExists: true,
      },

      // Template Module Files
      {
        type: "add",
        path: "src/modules/template/template.controller.ts",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/modules/template/template.service.ts",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/modules/template/template.module.ts",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/modules/template/template.repository.ts",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/modules/template/template.controller.spec.ts",
        skipIfExists: true,
      },

      // Other Feature Directories
      { type: "add", path: "src/jobs/.gitkeep", skipIfExists: true },
      { type: "add", path: "src/integrations/.gitkeep", skipIfExists: true },
      { type: "add", path: "src/health/.gitkeep", skipIfExists: true },

      // Environment
      { type: "add", path: ".env", skipIfExists: true },
    ],
  });
}
