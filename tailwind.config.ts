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

const grayA = {
  1: 'hsla(0, 0%, 0%, 0.01)',
  2: 'hsla(0, 0%, 0%, 0.02)',
  3: 'hsla(0, 0%, 0%, 0.06)',
  4: 'hsla(0, 0%, 0%, 0.09)',
  5: 'hsla(0, 0%, 0%, 0.12)',
  6: 'hsla(0, 0%, 0%, 0.15)',
  7: 'hsla(0, 0%, 0%, 0.19)',
  8: 'hsla(0, 0%, 0%, 0.27)',
  9: 'hsla(0, 0%, 0%, 0.45)',
  10: 'hsla(0, 0%, 0%, 0.49)',

}
/* .dark, .dark-theme {
  --blue-1: #0e1119;
  --blue-2: #151923;
  --blue-3: #1f263b;
  --blue-4: #28314f;
  --blue-5: #333e60;
  --blue-6: #404c73;
  --blue-7: #4f5d89;
  --blue-8: #5f70a5;
  --blue-9: #6475aa;
  --blue-10: #57689c;
  --blue-11: #a6b8eb;
  --blue-12: #dde7ff;

  --blue-a1: #0012f409;
  --blue-a2: #4477f714;
  --blue-a3: #6188ff2d;
  --blue-a4: #688afd43;
  --blue-a5: #7798ff55;
  --blue-a6: #84a1ff69;
  --blue-a7: #8ca8ff81;
  --blue-a8: #8faaff9f;
  --blue-a9: #92adffa4;
  --blue-a10: #89a6ff95;
  --blue-a11: #b4c7ffea;
  --blue-a12: #dde7ff;

  --blue-contrast: #fff;
  --blue-surface: #19213580;
  --blue-indicator: #6475aa;
  --blue-track: #6475aa;
}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
    .dark, .dark-theme {
      --blue-1: oklch(17.8% 0.017 270);
      --blue-2: oklch(21.3% 0.021 270);
      --blue-3: oklch(27.1% 0.04 270);
      --blue-4: oklch(32% 0.054 270);
      --blue-5: oklch(37% 0.061 270);
      --blue-6: oklch(42.4% 0.066 270);
      --blue-7: oklch(48.5% 0.073 270);
      --blue-8: oklch(55.3% 0.085 270);
      --blue-9: oklch(57.1% 0.085 270);
      --blue-10: oklch(52.6% 0.085 270);
      --blue-11: oklch(78.7% 0.075 270);
      --blue-12: oklch(92.7% 0.037 270);

      --blue-a1: color(display-p3 0 0.071 0.984 / 0.03);
      --blue-a2: color(display-p3 0.341 0.506 0.996 / 0.072);
      --blue-a3: color(display-p3 0.416 0.557 0.996 / 0.169);
      --blue-a4: color(display-p3 0.455 0.565 0.996 / 0.253);
      --blue-a5: color(display-p3 0.506 0.616 0.996 / 0.32);
      --blue-a6: color(display-p3 0.549 0.647 1 / 0.4);
      --blue-a7: color(display-p3 0.584 0.671 1 / 0.492);
      --blue-a8: color(display-p3 0.588 0.675 0.996 / 0.606);
      --blue-a9: color(display-p3 0.608 0.686 1 / 0.627);
      --blue-a10: color(display-p3 0.573 0.663 1 / 0.568);
      --blue-a11: color(display-p3 0.729 0.788 0.996 / 0.9);
      --blue-a12: color(display-p3 0.882 0.914 1 / 0.992);

      --blue-contrast: #fff;
      --blue-surface: color(display-p3 0.102 0.118 0.196 / 0.5);
      --blue-indicator: oklch(57.1% 0.085 270);
      --blue-track: oklch(57.1% 0.085 270);
    }
  }
}
:root, .light, .light-theme {
  --custom-1: #fdfcfe;
  --custom-2: #fbf8fd;
  --custom-3: #f4eef6;
  --custom-4: #ede5f0;
  --custom-5: #e7ddeb;
  --custom-6: #e0d5e5;
  --custom-7: #d7c9dd;
  --custom-8: #c7b4cf;
  --custom-9: #726478;
  --custom-10: #64566a;
  --custom-11: #6d5f73;
  --custom-12: #261c2a;

  --custom-a1: #5500aa03;
  --custom-a2: #6e00b707;
  --custom-a3: #5a007811;
  --custom-a4: #4f006c1a;
  --custom-a5: #4b006922;
  --custom-a6: #4300622a;
  --custom-a7: #43005f36;
  --custom-a8: #41015c4b;
  --custom-a9: #1700219b;
  --custom-a10: #15001ea9;
  --custom-a11: #170020a0;
  --custom-a12: #0b0010e3;

  --custom-contrast: #fff;
  --custom-surface: #faf6fdcc;
  --custom-indicator: #726478;
  --custom-track: #726478;
}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
    :root, .light, .light-theme {
      --custom-1: oklch(99.2% 0.004 315.8);
      --custom-2: oklch(98.3% 0.007 315.8);
      --custom-3: oklch(95.6% 0.013 315.8);
      --custom-4: oklch(93.2% 0.017 315.8);
      --custom-5: oklch(90.9% 0.022 315.8);
      --custom-6: oklch(88.6% 0.025 315.8);
      --custom-7: oklch(85.4% 0.031 315.8);
      --custom-8: oklch(79.4% 0.043 315.8);
      --custom-9: oklch(52.4% 0.035 315.8);
      --custom-10: oklch(47.5% 0.035 315.8);
      --custom-11: oklch(50.5% 0.035 315.8);
      --custom-12: oklch(24.5% 0.029 315.8);

      --custom-a1: color(display-p3 0.349 0.024 0.675 / 0.012);
      --custom-a2: color(display-p3 0.302 0.024 0.722 / 0.028);
      --custom-a3: color(display-p3 0.298 0.008 0.416 / 0.067);
      --custom-a4: color(display-p3 0.271 0.004 0.388 / 0.102);
      --custom-a5: color(display-p3 0.239 0.008 0.388 / 0.134);
      --custom-a6: color(display-p3 0.22 0.004 0.361 / 0.165);
      --custom-a7: color(display-p3 0.224 0.004 0.353 / 0.212);
      --custom-a8: color(display-p3 0.208 0.004 0.329 / 0.291);
      --custom-a9: color(display-p3 0.075 0 0.118 / 0.604);
      --custom-a10: color(display-p3 0.067 0 0.11 / 0.659);
      --custom-a11: color(display-p3 0.071 0 0.114 / 0.624);
      --custom-a12: color(display-p3 0.035 0 0.059 / 0.891);

      --custom-contrast: #fff;
      --custom-surface: color(display-p3 0.98 0.965 0.984 / 0.8);
      --custom-indicator: oklch(52.4% 0.035 315.8);
      --custom-track: oklch(52.4% 0.035 315.8);
    }
  }
} */
const brand = {
  1: 'hsl(340, 100%, 99%)',
  2: 'hsl(343, 78%, 98%)',
  3: 'hsl(341, 100%, 96%)',
  4: 'hsl(341, 94%, 93%)',
  5: 'hsl(340, 81%, 89%)',
  6: 'hsl(338, 69%, 85%)',
  7: 'hsl(338, 60%, 80%)',
  8: 'hsl(336, 55%, 73%)',
  9: 'hsl(336, 80%, 58%)',
  10: 'hsl(336, 73%, 54%)',
  11: 'hsl(336, 75%, 45%)',
  12: 'hsl(332, 63%, 24%)',
}
/* const brand = {
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
 */
export const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx }',
    './src/lib/**/*.{js,ts,jsx,tsx }',
  ],
  // darkMode: ['media'],
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
        'grayA': { ...grayA },
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
        'bg-primary': {
          light: 'white',
          dark: gray[8],
        },
        'bg-secondary': {
          light: gray[1],
          dark: gray[7],
        },
        'bg-alt': {
          light: gray[1],
          dark: gray[6],
        },
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
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
  },
  plugins: [a],
}

export default config
