import { defineConfig } from "cypress";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import Vue from "@vitejs/plugin-vue";
import Jsx from "@vitejs/plugin-vue-jsx";
import { defineConfig as viteDefineConfig } from "vite";
import { nuxtPaths, paths } from "./utils/parse-tsconfig";

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
      viteConfig: viteDefineConfig({
        plugins: [Vue(), Jsx(), vanillaExtractPlugin()],
        test: {
          globals: true,
          environment: "jsdom",
        },
        resolve: {
          alias: {
            ...nuxtPaths,
            ...paths,
          },
        },
        css: {
          postcss: { plugins: [require("tailwindcss"), require("autoprefixer")] },
        },
      }),
    },
  },
});
