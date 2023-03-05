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
                'core': resolve(__dirname, 'clients/assets/scss/vuexy/scss/core.scss'),
                'core-dark': resolve(__dirname, 'clients/assets/scss/vuexy/scss/core-dark.scss'),
                'theme-default': resolve(__dirname, 'clients/assets/scss/vuexy/scss/theme-default.scss'),
                'theme-default-dark': resolve(__dirname, 'clients/assets/scss/vuexy/scss/theme-default-dark.scss'),
                'theme-semi-dark': resolve(__dirname, 'clients/assets/scss/vuexy/scss/theme-semi-dark.scss'),
                'theme-semi-dark-dark': resolve(__dirname, 'clients/assets/scss/vuexy/scss/theme-semi-dark-dark.scss'),
                'theme-bordered': resolve(__dirname, 'clients/assets/scss/vuexy/scss/theme-bordered.scss'),
                'theme-bordered-dark': resolve(__dirname, 'clients/assets/scss/vuexy/scss/theme-bordered-dark.scss'),
                'libs': resolve(__dirname, 'clients/assets/scss/libs.scss')
            },
            output: {
                assetFileNames: ({ name }) => {
                    if (/^theme-.*\.css$/.test(name ?? '')) {
                        return 'css/themes/[name].dist[extname]';
                    }
                    else if (/\.css$/.test(name ?? '')) {
                        return 'css/[name].dist[extname]';
                    }
                    return '[name].dist[extname]';
                }
            }
        }
    }
})
