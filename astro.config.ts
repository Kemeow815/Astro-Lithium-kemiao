import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import UnoCSS from 'unocss/astro';
import injectDefaultLayout from './src/utils/injectDefaultLayouts';

// https://astro.build/config
export default defineConfig({
  site: 'https://i.kemiao.online',
  integrations: [mdx(), sitemap(), solidJs(), UnoCSS()],
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [injectDefaultLayout, remarkMath],
    rehypePlugins: [rehypeKatex],
    gfm: true,
  },
});
