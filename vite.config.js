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
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			roboto: [
  				'Roboto',
  				'sans-serif'
  			],
  			lato: [
  				'Lato',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			sourceSansPro: [
  				'Source Sans Pro',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			baloo: [
  				'Baloo 2',
  				'sans-serif'
  			],
  			quicksand: [
  				'Quicksand',
  				'sans-serif'
  			],
  			titilliumWeb: [
  				'Titillium Web',
  				'sans-serif'
  			],
  			raleway: [
  				'Raleway',
  				'sans-serif'
  			],
  			sairaExtraCondensed: [
  				'Saira Extra Condensed',
  				'sans-serif'
  			],
  			robotoThin: [
  				'Roboto',
  				'sans-serif',
  				'100'
  			],
  			robotoLight: [
  				'Roboto',
  				'sans-serif',
  				'300'
  			],
  			ralewayThin: [
  				'Raleway',
  				'sans-serif',
  				'100'
  			],
  			sairaThin: [
  				'Saira Extra Condensed',
  				'sans-serif',
  				'100'
  			],
  			oswald: [
  				'Oswald',
  				'sans-serif'
  			],
  			exo: [
  				'Exo 2',
  				'sans-serif'
  			],
  			bebasNeue: [
  				'Bebas Neue',
  				'sans-serif'
  			],
  			robotoCondensed: [
  				'Roboto Condensed',
  				'sans-serif'
  			]
  		},
    }}
})
