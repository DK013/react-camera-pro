/* eslint-disable prettier/prettier */
import typescriptPlugin from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: "json" };
import typescript from 'typescript';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescriptPlugin({
        typescript: typescript,
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
      {
        file: 'example/src/Camera/index.js',
        format: 'es',
        banner: '/* eslint-disable */',
      },
    ],
  },
];
