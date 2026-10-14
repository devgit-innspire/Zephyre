import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.zephyrbydimta.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
