import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkWikiLink from 'remark-wiki-link';

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          aliasDivider: '|',
          pageResolver: (pageName) => {
            const clean = pageName.trim().toLowerCase().replace(/ /g, '-');

            // If a explicit path is provided (e.g. [[Party/Rathgar]]), use that path directly
            if (clean.includes('/')) {
              return [clean];
            }

            // Fallback resolver for simple links (e.g. [[Rathgar]])
            return [
              `party/${clean}`,
              `npcs/${clean}`,
              `locations/${clean}`,
              `relics/${clean}`,
              `recaps/${clean}`,
              clean,
            ];
          },
          hrefTemplate: (permalink) => `/${permalink.toLowerCase()}`,
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
          label: 'Relics',
          collapsed: true,
          items: [{ autogenerate: { directory: 'Relics' } }],
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