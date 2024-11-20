import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',  // Make Vite listen on all network interfaces
    port: 5173          // Ensure it matches the port you're exposing
  }
})
