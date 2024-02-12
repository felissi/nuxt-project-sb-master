import { defineConfig } from "cypress";

import vitestConfig from "./vitest.config";
import { initPlugin } from "@frsource/cypress-plugin-visual-regression-diff/plugins";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      initPlugin(on, config);
    },
    baseUrl: "http://localhost:3000",
  },
  env: {
    createMissingImages: true,
    imagesPath: "{spec_path}/__image_snapshots__",
  },
  component: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: vitestConfig,
    },
  },
});
