import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    solidPlugin(), 
    solidSvg(),
    federation({
      name: 'app-frame',
      remotes: {
        runner: "http://localhost:5001/remoteEntry.js"
      },
      shared: ['solidjs', 'bootstrap']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});
