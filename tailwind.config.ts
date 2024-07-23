import a from 'tailwindcss-animate'
import colors from 'tailwindcss/colors'

const gray = {
  1: '#eeeeee',
  2: '#e0e0e0',
  3: '#bbbbbb',
  4: '#666666',
  5: '#444444',
  6: '#333',
  7: '#2a2a2a',
  8: '#1f1f1f',
  9: '#181818',
  10: '#0f0f0f',
}

const brand = {
  1: 'hsl(168, 71%, 99%)',
  2: 'hsl(167, 53%, 97%)',
  3: 'hsl(165, 70%, 92%)',
  4: 'hsl(165, 67%, 87%)',
  5: 'hsl(165, 60%, 81%)',
  6: 'hsl(166, 52%, 75%)',
  7: 'hsl(167, 46%, 65%)',
  8: 'hsl(168, 45%, 52%)',
  9: 'hsl(167, 70%, 72%)',
  10: 'hsl(167, 61%, 68%)',
  11: 'hsl(170, 97%, 24%)',
  12: 'hsl(171, 51%, 17%)',
}

export const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx }',
    './src/lib/**/*.{js,ts,jsx,tsx }',
  ],
  darkMode: ['media'],
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: '#f0f2f5',
      lightmode: '#f0f2f5',
      darkmode: theme('colors.gray.600', 'currentColor'),
    }),
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'black': '#0',
        'white': '#fff',
        'gray': { ...gray },
        'brand': { ...brand },
        'dark': {
          1: '#eeeeee',
          2: '#e0e0e0',
          3: '#bbbbbb',
          4: '#666666',
          5: '#444444',
          6: '#2a2a2a',
          7: '#1f1f1f',
          8: '#181818',
          9: '#0f0f0f',
        },
        /*
          typography
        */
        'typography-body': {
          light: colors.slate[600],
          dark: gray[1],
        },
        'typography-body-secondary': {
          light: colors.slate[500],
          dark: gray[3],
        },
        'typography-body-strong': {
          light: colors.slate[100],
          dark: 'white',
        },
        'typography-body-faded': {
          light: colors.slate[400],
          dark: gray[4],
        },
        /*
          app backgrounds
        */
        'bg-primary': {
          light: 'white',
          dark: gray[8],
        },
        'bg-secondary': {
          light: gray[1],
          dark: gray[7],
        },
        'bg-alt': {
          light: gray[1], // gray[100],
          dark: gray[6],
        },

        /*
          Forms
        */
        'input-value': {
          light: gray[6],
          dark: gray[2],
        },
        'input-placeholder': {
          light: gray[3],
          dark: gray[4],
        },
        'input-border': {
          light: gray[3],
          dark: gray[5],
        },
        'input-label': {
          light: gray[6],
          dark: gray[2],
        },
        'input-border-hover': {
          light: gray[4],
          dark: gray[4],
        },
        'input-border-focus': {
          light: brand[3],
          dark: brand[3],
        },
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
  },
  plugins: [a],
}

export default config
