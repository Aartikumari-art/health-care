import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  server: {
    host: true, // This makes it use 0.0.0.0 instead of localhost
    port: process.env.PORT || 5173,
  },
};

