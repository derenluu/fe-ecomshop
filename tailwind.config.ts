import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f0f2f5',
        secondary: '#ff813f',
        tertiary: '#222222',
      },
      backgroundImage: {
        hero: "url('/bgecom.png')",
        banneroffer: "url('/banneroffer.png')",
      },
      screens: {
        sm: '640px', // mobile screen
        md: '768px', // tablet screen
        lg: '1024px', // laptop screen
        xl: '1280px', // desktop screen
      },
    },
  },
  plugins: [],
};
export default config;
