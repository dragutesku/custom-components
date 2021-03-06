import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-dev-server';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = process.env.NODE_ENV === 'production';
const dev = process.env.NODE_ENV === 'development';

export default {
  input: "src/index.js",
  output: {
    sourcemap: true,
    format: 'umd',
    name: 'app',
    file: 'dist/live-timer.js'
  },
  plugins: [
    commonjs(),
    resolve(),
    // DEVELOPMENT
    dev && serve({
      open: true,
      verbose: true,
      allowCrossOrigin: true,
      historyApiFallback: false,
      host: 'localhost',
      port: 5050,
    }),
    dev && livereload({ watch: ['', 'dist'] }),

    // PRODUCTION
    production && terser()
  ], 
  watch: {
    clearScreen: false
  }
}
