import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

function copyManifest() {
  return {
    name: 'copy-manifest',
    closeBundle() {
      fs.copyFileSync(
        resolve(__dirname, 'manifest.json'),
        resolve(__dirname, 'dist/manifest.json')
      )
    }
  }
}

export default defineConfig({
  plugins: [react(), copyManifest()],
  resolve: {
    alias: {
      '@jpass/ui': resolve(__dirname, '../ui/src/index.ts'),
      '@jpass/core': resolve(__dirname, '../core/src/index.ts')
    }
  },
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/index.html'),
        background: resolve(__dirname, 'src/background.ts'),
        content: resolve(__dirname, 'src/content.ts')
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'background' || chunkInfo.name === 'content') {
            return '[name].js'
          }
          return 'assets/[name]-[hash].js'
        }
      }
    }
  }
})
