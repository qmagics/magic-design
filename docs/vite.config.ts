import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';

const getCodeMap = (realFolderPath: string): Record<string, string> => {
  const map = { realFolderPath };
  const prefixKey = realFolderPath.substring(realFolderPath.lastIndexOf('/') + 1, realFolderPath.length);
  const filenames = fs.readdirSync(realFolderPath);

  filenames.forEach(filename => {
    const content = fs.readFileSync(path.join(realFolderPath, filename), 'utf8');
    map[`./${prefixKey}/${filename}`] = content;
  })

  return map;
}

/** 解析源代码插件 */
const resolveSourceCodeMap = () => {
  return {
    name: 'resolve-source-code-map',
    async resolveId(source, importer, options) {
      if (source.endsWith('.$scm')) {
        return path.join(path.dirname(importer), source);
      }
      return null;
    },
    load(id) {
      if (id.endsWith('.$scm')) {
        const realFolderPath = id.replace('.$scm', '');
        return `export default ${JSON.stringify(getCodeMap(realFolderPath))}`;
      }
      return null;
    }
    // async resolveId(source, importer, options) {
    //   if (source.includes('.$text')) {
    //     return path.join(path.dirname(importer), source);
    //   }
    //   return null;
    // },
    // load(id) {
    //   if (id.endsWith('.$text')) {
    //     const realFilePath = id.replace('.$text', '');
    //     const code = JSON.stringify(`${fs.readFileSync(realFilePath)}`);
    //     return `export default ${code}`;
    //   }
    //   return null;
    // }
  }
}

export default defineConfig({
  plugins: [vue(), resolveSourceCodeMap()],
  root: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', 'sass', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/mixin.scss";@import "@/styles/var.scss";`
      }
    }
  }
})
