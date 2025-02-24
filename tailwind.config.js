import {nextui} from '@nextui-org/react';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
       "background": "url('/assets/Background pattern.png')",
      },
    },
    screens: {
  		xs: '390px',
  		sm: '640px',
  		md: '768px',
  		mdSm: '800px',
  		mdLg: '900px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1500px',
  		'3xl': '1700px',
      '3xl' : '1700px',
    }
  },
  plugins: [nextui()],
};
