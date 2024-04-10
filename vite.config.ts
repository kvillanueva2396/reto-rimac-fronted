import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'BRSomona',
            local: 'BRSomona',
            src: '/public/assets/fonts/BRSonoma/*.otf',
          },
          {
            name: 'Lato',
            local: 'Lato',
            src: '/public/assets/fonts/Lato/*.ttf',
          },
        ],
      },
    }),
  ],
});
