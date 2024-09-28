import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
server: {
    host: '0.0.0.0', // Allow access via IP address
    port: 5173,      // Optionally specify a port (default is 5173)
  }
})
