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
            // Strip any leading subfolders like 'Party/Rathgar' -> 'Rathgar'
            const cleanName = pageName.includes('/')
              ? pageName.split('/').pop()
              : pageName;

            const slug = cleanName.trim().toLowerCase().replace(/ /g, '-');

            // Route all wikilinks directly to the backlinks index route
            return [`backlinks/${slug}`];
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