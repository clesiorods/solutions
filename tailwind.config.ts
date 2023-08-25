import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light': '#f9f9f9',
        'card-light': '#ffffff',
        'dark': 'rgb(23 27 37)',
        'card-dark': 'rgb(11 15 25)',
        'highlight-dark': '#020617'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      blur: {
        full: '194px'
      }
    },
  },
  plugins: [],
}
export default config
