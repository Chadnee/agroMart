import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
   plugins: [
    tailwindcss()
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
  	extend: {
  		  fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    }}
})
