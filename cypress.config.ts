import { defineConfig } from "cypress";

import vitestConfig from "./vitest.config";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: vitestConfig,
    },
  },
});
