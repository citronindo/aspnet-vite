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
        emptyOutDir: true,
        manifest: false,
        minify: false,
        external: ['jquery'],
        commonjsOptions: {
            requireReturnsDefault: 'auto'
        },
        rollupOptions: {
            input: {
                'libs-script': resolve(__dirname, 'clients/apps/core/libs-script.js'),
                'main': resolve(__dirname, 'clients/apps/core/main.js'),
            },
            output: {
                chunkFileNames: 'js/[name].dist.js',
                entryFileNames: 'js/[name].dist.js',
                manualChunks: (id) => {

                    // node modules chunks
                    if (id.includes('node_modules')) {
                        if (id.includes('/jquery')) return 'libs/jquery';
                        if (id.includes('/@popperjs+core')) return 'libs/popper';
                        if (id.includes('/bootstrap')) return 'libs/bootstrap';
                        if (id.includes('/perfect-scrollbar')) return 'libs/perfect-scrollbar';
                        if (id.includes('/node-waves')) return 'libs/node-waves';
                        if (id.includes('/hammerjs')) return 'libs/hammer';
                        if (id.includes('/i18next')) return 'libs/i18n';
                        if (id.includes('/typeahead.js')) return 'libs/typeahead';
                        if (id.includes('/react') || id.includes('/react-dom')) return 'libs/react';
                        return 'libs/vendor';
                    }

                    // commonjs chuck
                    if(id.includes('commonjsHelpers.js') 
                        || id.includes('commonjs-dynamic-modules')) 
                    {
                        return 'libs/commonjs';
                    }
                    // helpers chuck
                    if(id.includes('helpers.js')) return 'libs/helpers';
              
                    // main chuck
                    if (id.includes('main.js')) return 'main';

                    // libs-script chuck
                    if (id.includes('libs-script.js')) return 'libs-script';

                    // other script chuck
                    return "scripts";
                },

            }
        }
    }
})
