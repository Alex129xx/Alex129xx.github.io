import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alex129xx.github.io',
  output: 'static',
  build: {
    format: 'directory'
  }
});
