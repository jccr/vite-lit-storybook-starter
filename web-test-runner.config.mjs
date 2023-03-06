import { fileURLToPath } from 'url';
import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
    }),
  ],
};
