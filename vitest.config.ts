/// <reference types="vitest" />
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Jsx from "@vitejs/plugin-vue-jsx";
import { nuxtPaths, paths } from "./utils/parse-tsconfig";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
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
});
