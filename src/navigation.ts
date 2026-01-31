import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'On this page',
      links: [
        {
          text: 'About me',
          href: getPermalink('/#aboutme'),
        },
        {
          text: 'How do I approach my projects?',
          href: getPermalink('/#project-design'),
        },
        {
          text: 'My Soft Skills',
          href: getPermalink('/#soft-skills'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Discover My Blog!',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
  actions: [{ text: 'Follow me on my social media!', href: 'https://link.clelia.dev', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'All my links', href: 'https://link.clelia.dev' },
    { text: 'Blog', href: 'https://clelia.dev/blog' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/itsclelia' },
    {
      ariaLabel: 'BlueSky',
      icon: 'tabler:brand-bluesky',
      href: 'https://bsky.app/profile/cle-does-things.bsky.social',
    },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/clelia-astra-bertelli-583904297/',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/AstraBert/' },
  ],
  footNote: `
    Built with <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo/astrowind"> onWidget</a>, made by Clelia Astra Bertelli · 2025 · All rights reserved.
  `,
};
