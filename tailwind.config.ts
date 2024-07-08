import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{ts,jsx,tsx}',
    './components/**/*.{ts,jsx,tsx}',
    './app/**/*.{ts,jsx,tsx}',
    './src/**/*.{ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'verdeBase': '#2DCAB1',
        'gris': '#7D879C',
        'grisOscuro': '#2B3445',
        'black': '#000000',
        'white': '#FFFFFF',
        'verdeAgua': '#1CB59C',
        'celesteClaro': '#D3FFF5',
        'yellowChillon': '#FFB800',
        'beige': '#FFF8E5',
        'salmon': '#F56565',
        'rosadoClaro': '#FFDFDF',
        'grad-azulOscuro': '#0D5287',
        'grad-azulClaro': '#187DCA',
        'grad-celeste': '#05AACE',
        'grad-verdeAgua': '#04D2C6',
        'grad-verdeAguaClaro': '#26E4C7'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        banner: '50px',  
        h1: '44px',
        title: '36px',
        release: ['25px', {fontWeight: 'bold'} ],  
        description: ['14px', {fontWeight: 'semibold'} ],  
        chip: ['14px', {fontWeight: 'bold'} ]  
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #007CF0, #00DFD8)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
};

export default config;
