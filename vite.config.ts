import react from '@vitejs/plugin-react-swc'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url'
import path, { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
      name: 'demolib'
    },
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync('src/**/*.{ts,tsx}', { ignore: ['src/**/*.d.ts'] }).map((file: string) => {
          const entryName = path.relative('src', file.slice(0, file.length - path.extname(file).length)) // Remove `src/` and file extensions
          const entryUrl = fileURLToPath(new URL(file, import.meta.url)) // This expands the relative paths to absolute paths
          return [entryName, entryUrl]
        })
      ),
      output: {
        globals: {
          react: 'React'
        },
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]'
      },
      external: ['react', 'react-dom', 'react/jsx-runtime']
    }
  },
  plugins: [react(), libInjectCss(), dts({ rollupTypes: true }), visualizer({ filename: 'rollup-build-size.html' })]
})
