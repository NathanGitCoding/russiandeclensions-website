import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        russian: {
          blue: {
            50: '#eef0ff',
            100: '#dde1ff',
            500: '#2A00FF',
            600: '#2200cc',
            bg: '#007FFF',
          },
          red: { 500: '#EF4444' },
        },
        section: {
          blue: {
            50: '#e6f2ff',
            500: '#0080FF',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-display)', 'system-ui', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
