import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  server: {
    host: true, 
    port: process.env.PORT || 5173,
  },
};

