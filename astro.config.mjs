// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // corregido desde '@astrojs/verce'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  output: 'server',
  adapter: vercel(),
});