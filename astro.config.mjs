import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://lancerhacks.github.io',
  base: '/LH8Website',
  integrations: [sitemap(), tailwind(), compress(), react()]
})

