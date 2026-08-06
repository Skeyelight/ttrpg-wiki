import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkWikiLink from 'remark-wiki-link';

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          // Converts spaces in page names to hyphens and lowercases them for valid URLs
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
        { label: 'Locations', items: [{ autogenerate: { directory: 'Locations' } }] },
        { label: 'NPCs', items: [{ autogenerate: { directory: 'NPCs' } }] },
        { label: 'Party', items: [{ autogenerate: { directory: 'Party' } }] },
        { label: 'Recaps', items: [{ autogenerate: { directory: 'Recaps' } }] },
      ],
    }),
  ],
});