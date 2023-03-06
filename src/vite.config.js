import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslint({
            cache: false,
            fix: false
        })
    ],
    jsx: 'react',
    base: "/dist",
    resolve: {
        alias: {
            '@apps': resolve(__dirname, 'clients/apps'),
            '@libs': resolve(__dirname, 'clients/libs'),
            '@assets': resolve(__dirname, 'clients/assets'),
            '@scss': resolve(__dirname, 'clients/assets/scss'),
            '@img': resolve(__dirname, 'clients/assets/img'),
        }
    },
    server: {
        port: 5175
    },
    build: {
        outDir: './wwwroot/dist',
        emptyOutDir: false,
        manifest: false,
        minify: true,
        rollupOptions: {
            input: {
                'pages/index': resolve(__dirname, 'clients/apps/pages/page-index.jsx'),
                'pages/test-page': resolve(__dirname, 'clients/apps/pages/test-page.jsx'),
            },
            output: {
                entryFileNames: 'js/[name].dist.js',
                chunkFileNames: 'js/[name].dist.js',
                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                        return 'img/[name][extname]';
                    }
                    if (/\.css$/.test(name ?? '')) {
                        return 'css/[name].dist[extname]';
                    }
                    return '[name].dist[extname]';
                },
                manualChunks: {
                    'libs/react': ['react', 'react-dom'],
                }
            }
        }
    }
})
