// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const analyticsId = process.env.ANALYTICS_ID;
console.log('Got Analytics', analyticsId);
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ngx Barcode Scanner',
  tagline: 'Makes your angular components aware of width, height and position change',

  // Set the production url of your site here
  url: 'https://ngx-barcode-scanner.amarjanica.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  projectName: 'ngx-barcode-scanner', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: !!analyticsId ? {
          trackingID: analyticsId,
          anonymizeIP: true,
        } : undefined,
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
        },
        blog: false, // Optional: disable the blog plugin
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Ngx Barcode Scanner',
        items: [
          {href: 'https://www.amarjanica.com/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/eisberg-labs/ngx-barcode-scanner',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Eisberg Labs d.o.o.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
