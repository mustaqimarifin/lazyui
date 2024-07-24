import { extname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import nodeResolve from '@rollup/plugin-node-resolve'
import ts from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import tw from 'tailwindcss'
import auto from 'autoprefixer'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'
import { glob } from 'glob'
import pkg from './package.json' with { type: 'json' }

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const input = Object.fromEntries(
  glob.sync('src/**/*.{ts,tsx}', {
    ignore: ['src/**/*.d.ts'],
  })
    .map(file => [
      relative('src', file.slice(0, file.length - extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
)

export default {
  /*  input: {
    index: 'src/index.tsx',
    altbutton: 'src/components/AltButton/index.tsx',
    button: 'src/components/Button/index.tsx',
    typography: 'src/components/Typography/index.tsx',
    icon: 'src/components/Icon/index.tsx',
    image: 'src/components/Image/index.tsx',
    badge: 'src/components/Badge/index.tsx',
    alert: 'src/components/Alert/index.tsx',
    modal: 'src/components/Modal/index.tsx',
    dropdown: 'src/components/Dropdown/index.tsx',
    space: 'src/components/Space/index.tsx',
    loading: 'src/components/Loading/index.tsx',
  }, */
  input,
  external: [
    'react/jsx-runtime',
    /@babel\/runtime/,
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'class-variance-authority',
    './src',
  ],
  output: [
    {
      // hoistTransitiveImports: false,
      chunkFileNames: 'chunks/[name][hash].js',
      assetFileNames: 'assets/[name][extname]',
      entryFileNames: '[name].js',
      dir: 'dist',
      format: 'es',
    },
  ],
  treeshake: {
    preset: 'smallest',
  },
  plugins: [
    nodeResolve({
      extensions,
    }),
    json(),
    postcss({
      plugins: [tw(), auto()],
      config: {
        path: './postcss.config.mjs',
        ctx: {},
      },
      minimize: true,
      modules: {
        generateScopedName: '[local]',
      },
    }),
    commonjs({
      ignoreGlobal: false,
      include: 'node_modules/**',
    }),
    babel({ babelHelpers: 'runtime', exclude: 'node_modules/**', extensions }),
    esbuild({
      include: /\.[jt]sx?$/,
      exclude: /node_modules/,
      pure: ['document.createElement'],
      treeShaking: true,
      minify: true,
      target: 'esnext',
      jsx: 'automatic',
      loaders: {
        '.json': 'json',
        '.js': 'jsx',
      },
    }),
    ts(),

  ],
}
