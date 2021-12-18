import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  root: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', 'sass', '.json'],
    alias: [
      {
        find: /^magic-design$/,
        replacement: path.resolve(__dirname, '../packages/magic-design/index.ts'),
      },
      {
        find: '@magic-design/theme-chalk/src/index.scss',
        replacement: `${path.resolve(__dirname, `../packages`)}/theme-chalk/src/index.scss`,
      },
      {
        find: /^@magic-design\/(.+)/,
        replacement: `${path.resolve(__dirname, `../packages`)}/$1/index.ts`,
      },
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(__dirname, `./src`) + '/$1',
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/mixin.scss";@import "@/styles/var.scss";`
      }
    }
  }
})
