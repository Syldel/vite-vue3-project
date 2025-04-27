import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_BASE_PATH || '/',
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
          '@vueuse/core',
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
  }
})
