import { defineConfig } from 'vite';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
import BetterLitTypesPlugin from 'cem-plugin-better-lit-types';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginCustomElementsManifest({
      files: ['./src/**/*.ts'],
      lit: true,
      plugins: [BetterLitTypesPlugin],
    }),
  ],
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
