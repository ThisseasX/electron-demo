import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import path from 'path';

const VENDOR_CHUNKS = ['lowdb'];

const getChunkName = (id) => VENDOR_CHUNKS.find((chunk) => id.includes(chunk));

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin({ exclude: VENDOR_CHUNKS })],
    resolve: {
      alias: {
        models: path.resolve('./src/main/models'),
        db: path.resolve('./src/main/db'),
        utils: path.resolve('./src/main/utils'),
        shared: path.resolve('./src/shared'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: getChunkName,
        },
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        models: path.resolve('./src/preload/models'),
        shared: path.resolve('./src/shared'),
      },
    },
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
