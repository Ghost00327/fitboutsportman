import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  let server = {}
  if (mode === "dev-proxy") {
    server = {
      proxy: {
        '/api': {
          target: 'https://api-dev.fitbout.io',
          changeOrigin: true,
          headers: {
            "X-Impersonate-User": "1"
          }
        },
      }
    }
  }

  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: server
  }
})
