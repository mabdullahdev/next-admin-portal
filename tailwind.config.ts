import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
        primary: {
          DEFAULT: '#F1F1F1',
          inverse: '#1A1A1A',
          dark: '#2563eb'
        },
        secondary: {
          DEFAULT: '#6b7280',
          dark: '#4b5563'
        },
        danger: {
          DEFAULT: '#ef4444',
          dark: '#dc2626'
        },
        aside: {
          DEFAULT: '#EBEBEB',
          dark: '#1E1E1E',
        },
        nav: {
          heading: {
            light: '#A0A0A0',
            dark: '#A4A4A4'
          },
          li: {
            a: '#FF883F',
            DEFAULT: '#1E1E1E',
            hover: {
              DEFAULT: '#F1F1F1',
            },
            active: {
              DEFAULT: '#FAFAFA'
            }
          }
        }
      },
      height: {
        'calc-100-minus-top-bar': 'calc(100% - var(--pg-top-bar-height))',
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          '@apply inline-flex items-center justify-center px-3 py-1.5 font-light text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 ease-in-out': {},
        },
        '.btn-primary': {
          '@apply bg-primary text-white hover:bg-primary-dark focus:ring-primary': {},
        },
        '.btn-secondary': {
          '@apply bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary': {},
        },
        '.btn-danger': {
          '@apply bg-danger text-white hover:bg-danger-dark focus:ring-danger': {},
        },
      });
    }),
  ],
};
export default config;
