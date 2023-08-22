import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://safer07.github.io",
  base: "/wargame",
  // outDir: "./docs",
});

// это настройка только для Git pages. нужно удалять параметр site и base, чтобы ссылки нормально работали
