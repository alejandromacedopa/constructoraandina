import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/static'

export default defineConfig({
  output: 'static',
  vite: { plugins: [tailwind()] },
  adapter: vercel(),
});
