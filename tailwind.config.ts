import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        aside: {
          light: '#FFFFFF',
          dark: '#1E1E1E'
        },
        nav: {
          heading: {
            light: '#A0A0A0',
            dark: '#A4A4A4'
          },
          li: {
            a: '#FF883F',
            light: '#1E1E1E',
            dark: '#F2F2F2',
            hover: {
              light: '#F2F2F2',
              dark: '#4E4E4E'
            },
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
