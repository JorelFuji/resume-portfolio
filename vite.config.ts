import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // You might need to install @types/node: yarn add -D @types/node

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This maps the "@" symbol to your src folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})