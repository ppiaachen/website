import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";

const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), icon(), playformCompress()],
  build: {
    assets: "_assets",
  },
});
