import { defineConfig } from 'astro/config';
import { docus } from 'docus-astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    docus(),
  ]
});
