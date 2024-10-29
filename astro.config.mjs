// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site:'https://agua17.github.io',
  base:'/portfolio_agua/',
  integrations: [tailwind()],
});