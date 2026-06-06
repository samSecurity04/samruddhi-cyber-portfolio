import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://samSecurity04.github.io/samruddhi-cyber-portfolio/
export default defineConfig({
  base: '/samruddhi-cyber-portfolio/',
  plugins: [react()],
})
