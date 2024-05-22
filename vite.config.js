import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png', 'images/*.jpg'], // Incluye tus imágenes y otros activos
            manifest: {
                display: 'standalone',
                display_override: ['window-controls-overlay'],
                lang: 'es-ES',
                name: 'QuizMatrix',
                short_name: 'QuizMatrix',
                description: 'App QuizMatrix',
                theme_color: '#0B0B0F',
                background_color: '#0B0B0F',
                icons: [
                    {
                        src: 'pwa-64x64.png',
                        sizes: '64x64',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/.*\.(png|jpg|jpeg|svg|gif)$/, // Ajusta el patrón de URL según tus necesidades
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
                            },
                        },
                    },
                    {
                        urlPattern: ({ request }) => request.destination === 'document',
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'html-cache',
                            expiration: {
                                maxEntries: 10,
                            },
                        },
                    },
                    {
                        urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'static-resources-cache',
                            expiration: {
                                maxEntries: 30,
                            },
                        },
                    },
                ],
            },
        }),
    ],
});
