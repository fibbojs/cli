import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "./src/index"
  ],
  // Generates .d.ts declaration file
  declaration: true,
  // Emit CJS format
  rollup: {
    emitCJS: true,
  }
});
