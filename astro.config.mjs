import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  base: "/Portfolio/", // coincide con tu repo
  build: {
    assets: "_astro",
  },
});
