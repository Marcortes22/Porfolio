// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import analogjsangular from '@analogjs/astro-angular';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), analogjsangular()],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [
        '@mui/material',
        '@mui/system',
        '@mui/utils',
        '@mui/styled-engine',
        '@mui/styled-engine-sc',
        '@emotion/react',
        '@emotion/styled',
      ],
    },
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      // redirectToDefaultLocale: true,
    },
  },
});
