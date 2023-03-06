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
        minify: true,
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
                assetFileNames: ({ name }) => {
                    if (/^theme-.*\.css$/.test(name ?? '')) {
                        return 'css/themes/[name].dist[extname]';
                    }
                    else if (/\.css$/.test(name ?? '')) {
                        return 'css/[name].dist[extname]';
                    }
                    return '[name].dist[extname]';
                },
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
                    if (id.includes('menu.js')) return 'libs/menu';
              
                    // main chuck
                    if (id.includes('main.js')) return 'main';

                    // libs chuck
                    if (id.includes('libs-script.js') || 
                        id.includes('libs-style.js')) return 'libs-scrpt';

                    // customizer chuck
                    if (id.includes('template-customizer.js')) return 'libs/customizer';
                    if (id.includes('_template-customizer.html')) return 'components/customizer';
                    if (id.includes('config.js')) return 'utils/config';

                    // styles
                    if (id.includes('core.scss')) return 'core';
                    if (id.includes('core-dark.scss')) return 'core-dark';
                    if (id.includes('theme-default.scss')) return 'theme-default';
                    if (id.includes('theme-default-dark.scss')) return 'theme-default-dark';
                    if (id.includes('theme-semi-dark.scss')) return 'theme-semi-dark';
                    if (id.includes('theme-semi-dark-dark.scss')) return 'theme-semi-dark-dark';
                    if (id.includes('theme-bordered.scss')) return 'theme-bordered';
                    if (id.includes('theme-bordered-dark.scss')) return 'theme-bordered-dark';
                    if (id.includes('libs.scss') || id.includes('customizer.scss')) return 'libs';


                    console.info(id);
                    // other script chuck
                    return "scripts";
                },

            }
        }
    }
})
