import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import path from 'path';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        models: path.resolve('./src/main/models'),
        utils: path.resolve('./src/main/utils'),
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        components: path.resolve('./src/renderer/src/components'),
        utils: path.resolve('./src/renderer/src/utils'),
      },
    },
  },
});
