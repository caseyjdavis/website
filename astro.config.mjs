import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/caseyjdavis',
  base: '/website',
  integrations: [mdx(), svelte(), react(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank'
    }]]
  }
});