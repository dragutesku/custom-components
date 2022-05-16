  import svelte from 'rollup-plugin-svelte';
  import commonjs from '@rollup/plugin-commonjs';
  import resolve from '@rollup/plugin-node-resolve';
  import serve from 'rollup-plugin-dev-server';
  import livereload from 'rollup-plugin-livereload';
  import { terser } from 'rollup-plugin-terser';
  import { 
  less,
  typescript
} from 'svelte-preprocess';

  const production = process.env.NODE_ENV === 'production';
  const dev = process.env.NODE_ENV === 'development';

  export default {
    input: 'src/index.js',
    output: {
      sourcemap: true,
      format: 'umd',
      name: 'app',
      file: 'dist/rnd-intersection-observer.js'
    },
    plugins: [
      commonjs(),
      svelte({
        preprocess: [
          typescript({
            sourceMap: !production,
            inlineSources: !production,
          }),
          less()
        ],
        compilerOptions: {
          // enable run-time checks when not in production
          customElement: true,
          dev: !production
        }
      }),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      dev && serve({
        open: true,
        verbose: true,
        allowCrossOrigin: true,
        historyApiFallback: false,
        host: 'localhost',
        port: 5050,
      }),
      dev && livereload({ watch: ['', 'dist'] }),
      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && 
      terser({
        output: {
          comments: "all"
        },
      })
    ],
    watch: {
      clearScreen: false
    }
  };
