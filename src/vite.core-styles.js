import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint({
            cache: false,
            fix: false
        })
    ],
    resolve: {
        alias: {
            '@apps': resolve(__dirname, 'clients/apps'),
            '@libs': resolve(__dirname, 'clients/libs'),
            '@assets': resolve(__dirname, 'clients/assets'),
            '@scss': resolve(__dirname, 'clients/assets/scss'),
            '@img': resolve(__dirname, 'clients/assets/img'),
        }
    },
    build: {
        outDir: './wwwroot/dist',
        emptyOutDir: false,
        manifest: false,
        minify: true,
        rollupOptions: {
            input: {
                'core': resolve(__dirname, 'clients/assets/scss/core.scss'),
                'theme': resolve(__dirname, 'clients/assets/scss/theme.scss'),
                'libs': resolve(__dirname, 'clients/assets/scss/libs.scss')
            },
            output: {
                assetFileNames: (props) => {
                    if (/\.css$/.test(props.name ?? '')) {
                        return 'css/[name].dist[extname]';
                    }
                    return '[name].dist[extname]';
                }
            }
        }
    }
})
