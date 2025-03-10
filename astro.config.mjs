import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import node from '@astrojs/node';

import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://lancerhacks.github.io',
  base: '/MadHacks2023',
  integrations: [sitemap(), tailwind(), compress(), react()]
})

