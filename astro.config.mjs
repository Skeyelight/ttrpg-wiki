import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkWikiLink from 'remark-wiki-link';

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          // Generates possible path matches for a link name
          pageResolver: (pageName) => {
            const slug = pageName.toLowerCase().replace(/ /g, '-');
            return [
              slug,
              `locations/${slug}`,
              `npcs/${slug}`,
              `party/${slug}`,
              `recaps/${slug}`,
            ];
          },
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
          collapsed: true,
          items: [{ autogenerate: { directory: 'Locations' } }],
        },
        {
          label: 'NPCs',
          collapsed: true,
          items: [{ autogenerate: { directory: 'NPCs' } }],
        },
        {
          label: 'Party',
          collapsed: true,
          items: [{ autogenerate: { directory: 'Party' } }],
        },
        {
          label: 'Recaps',
          collapsed: true,
          items: [{ autogenerate: { directory: 'Recaps' } }],
        },
      ],
    }),
  ],
});