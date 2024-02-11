import { type DefineNuxtConfig } from "nuxt/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { visualizer } from "rollup-plugin-visualizer";
import type { PrimeVueConfiguration, PrimeVuePTOptions } from "primevue/config";
import { primevue } from "../theme";

type NuxtConfig = Parameters<DefineNuxtConfig>[0];
/* Lift this config up to distribute to other config like vite, storybook, vitest, etc */
export const config: NuxtConfig = {
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === "development" ? "/" : "/home/papers/",
    buildAssetsDir: "/assets/",
    head: {
      title: "STAR",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "" },
      ],
      meta: [
        { content: "STAR", name: "description" },
        { property: "og:url", content: "" },
        { property: "og:title", content: "STAR" },
        { property: "og:description", content: "STAR" },
        { name: "google", content: "notranslate" },
      ],
    },
  },
  devtools: { enabled: true },
  alias: {
    "#storybook": "../.storybook",
    "#storybook/*": "../.storybook/*",
    "#stories": "../stories",
    "#star": "../components/star",
    "#star/*": "../components/star/*",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-primevue",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "shadcn-nuxt",
  ],
  // components: [{ path: "./components/star/atom", prefix: "Star" }],
  components: {
    dirs: [],
  },
  // Plugins
  primevue,
  // @ts-ignore TS(2322) FIXME: Type '{ ssr: false; app: { baseURL: string; buildA... Remove this comment to see the full error message
  tailwindcss: {
    cssPath: "./styles/global.css",
  },

  piniaPersistedstate: {
    storage: "localStorage",
  },
  shadcn: {
    componentDir: "./components/",
  },
  vite: {
    plugins: [vanillaExtractPlugin(), visualizer({ gzipSize: true, emitFile: true })],
    build: {
      rollupOptions: {
        output: {
          sourcemap: true,
        },
      },
    },
  },
  vue: {
    /** Enable defineModel marco,
     * which is an experimental feature for 3.3,
     * but officially launched in 3.4 (with some API changes) */
    defineModel: true,
  },
};
