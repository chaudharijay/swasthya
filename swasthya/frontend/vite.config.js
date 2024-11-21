import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // or any other port you'd like to use
  },
  build: {
    chunkSizeWarningLimit: 1000, // Set this to a higher value to suppress warnings
  },
})
