// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://clack.house",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
