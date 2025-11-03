import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configure base URL for GitHub Pages deployment at https://omagemz.github.io/Rubies/
export default defineConfig({
  plugins: [react()],
  base: '/Rubies/',
})
