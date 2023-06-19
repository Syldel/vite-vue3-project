import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vitest',
      ],
      dts: true,
    }),
  ],
  test: {
    include: ['**/*.test.{j,t}s'],
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', 'src'),
    },
  },
})
