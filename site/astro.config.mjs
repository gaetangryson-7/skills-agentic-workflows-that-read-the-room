import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      // Forwarded Codespaces/port-forwarding URLs use these hosts; Vite blocks them otherwise.
      allowedHosts: ['.app.github.dev', '.github.dev'],
    },
  },
});
