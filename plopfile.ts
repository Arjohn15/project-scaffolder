import type { NodePlopAPI } from "plop";
import nextjsGenerator from "./generators/next.ts";
import nestjsGenerator from "./generators/nest.ts";
import projectGenerator from "./generators/project.ts";

export default async function (plop: NodePlopAPI) {
  nextjsGenerator(plop);
  nestjsGenerator(plop);
  projectGenerator(plop);
}
