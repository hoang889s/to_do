import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    
    tailwindcss(),
    react()
  ],
<<<<<<< HEAD
  base: '/to_do/',
=======
  base: '/viec_can_lam/',
>>>>>>> d9e977da052652ed60b5ccd86b083f0bdb110a4c
})
