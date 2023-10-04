/* eslint-disable no-undef */
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import esbuild from 'esbuild';

esbuild
    .build({
        entryPoints: ['./src/index.ts'],
        outfile: 'lib/index.js',
        bundle: true,
        minify: true,
        treeShaking: true,
        platform: 'node',
        format: 'esm',
        target: 'node18',
        external: ['react', 'react-dom', 'tailwindcss', 'tailwind-tints'],
        jsx: 'automatic',
        plugins: [nodeExternalsPlugin()],
    })
    .catch((e) => console.log(e));
