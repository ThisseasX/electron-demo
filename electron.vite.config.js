import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import path from 'path';
import pugPlugin from './src/plugins/vite-plugin-pug';

const VENDOR_CHUNKS = ['lowdb'];

const getChunkName = (id) => {
  if (id.endsWith('.pug')) {
    console.log(id);
    return path.basename(id);
  }

  return VENDOR_CHUNKS.find((chunk) => id.includes(chunk));
};

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin({ exclude: VENDOR_CHUNKS }), pugPlugin()],
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
          chunkFileNames: 'chunks/[name].js',
          assetFileNames: 'chunks/[name].[ext]',
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
