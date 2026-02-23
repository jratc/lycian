import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                runtimeCaching: [
                    {
                        // Cache Leaflet map tiles for offline viewing during the trek
                        urlPattern: /^https:\/\/[a-c]\.tile\.openstreetmap\.org\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'osm-map-tiles',
                            expiration: {
                                maxEntries: 2000,
                                maxAgeSeconds: 60 * 60 * 24 * 30 // Cache for 30 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    }
                ]
            },
            manifest: {
                name: 'Lycian Way Trek Companion',
                short_name: 'Lycian Way',
                description: 'Offline-first companion app for the Lycian Way 14-day trekking itinerary.',
                theme_color: '#ffffff',
                background_color: '#f8fafc',
                display: 'standalone',
                icons: [
                    {
                        // Placeholder for real icons
                        src: '/vite.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml'
                    }
                ]
            }
        })
    ]
})
