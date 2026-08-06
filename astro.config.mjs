import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Journey To Our End',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Locations', autogenerate: { directory: 'Locations' } },
        { label: 'NPCs', autogenerate: { directory: 'NPCs' } },
        { label: 'Party', autogenerate: { directory: 'Party' } },
        { label: 'Recaps', autogenerate: { directory: 'Recaps' } },
      ],
    }),
  ],
});