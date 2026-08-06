import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Journey To Our End',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Locations',
          items: [{ autogenerate: { directory: 'Locations' } }],
        },
        {
          label: 'NPCs',
          items: [{ autogenerate: { directory: 'NPCs' } }],
        },
        {
          label: 'Party',
          items: [{ autogenerate: { directory: 'Party' } }],
        },
        {
          label: 'Recaps',
          items: [{ autogenerate: { directory: 'Recaps' } }],
        },
      ],
    }),
  ],
});