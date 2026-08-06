import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkWikiLink from 'remark-wiki-link';

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          pageResolver: (pageName) => [
            pageName.toLowerCase().replace(/ /g, '-'),
          ],
          hrefTemplate: (permalink) => `/${permalink}`,
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: 'Journey To Our End',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Locations',
          autogenerate: { directory: 'Locations', collapsed: true },
        },
        {
          label: 'NPCs',
          autogenerate: { directory: 'NPCs', collapsed: true },
        },
        {
          label: 'Party',
          autogenerate: { directory: 'Party', collapsed: true },
        },
        {
          label: 'Recaps',
          autogenerate: { directory: 'Recaps', collapsed: true },
        },
      ],
    }),
  ],
});