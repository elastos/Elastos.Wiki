module.exports = {
  title: "Elastos Wiki",
  tagline: "Elastos Ecosystem Wiki",
  url: "https://elastos-wiki.netlify.app",
  baseUrl: "/",
  organizationName: "elastos",
  projectName: "wiki",
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "https://use.fontawesome.com/221fd444f5.js",
    "/js/copy-code-button.js",
    "/js/mixpanel.js",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Source+Code+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap",
    "/css/copy-code-button.css",
    "/css/landing-page.css",
    "/css/elastos.min.css",
  ],
  favicon: "img/favicon.ico",
  trailingSlash: true,
  customFields: {
    disableHeaderTitle: true,
    fonts: {
      myFont: ["Inter", "sans-serif"],
    },
  },
  themes: ["@saucelabs/theme-github-codeblock"],
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          editUrl: "https://github.com/racollette/Elastos.Docs/edit/master/website",
          path: "../docs",
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        // googleAnalytics: {
        //   trackingID: "UA-100373569-7",
        //   anonymizeIP: true,
        // },
        blog: {},
        theme: {
          customCss: "/src/css/customTheme.css",
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    prism: {
      additionalLanguages: [
        "rust",
        "java",
        "python",
        "ruby",
        "go",
        "toml",
        "typescript",
      ],
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    algolia: {
      indexName: "matic_developer",
      appId: '16JCDEHCCN',
      apiKey: "757c19b23127e9c6959da7f13b71cfab",
      contextualSearch: true,
      algoliaOptions: {},
    },
    navbar: {
      title: "WIKI",
      logo: {
        alt: 'Elastos Logo',
        src: "img/elastos_logo_black.svg",
        srcDark: 'img/elastos_logo_white.svg',
      },
      items: [
        {
          to: "/start/welcome",
          label: "Get Started",
          position: "left",
        },
        {
          to: "/learn/welcome",
          label: "Learn",
          position: "left",
        },
        {
          to: "/build/welcome",
          label: "Build",
          position: "left",
        },
        {
          to: "/tutorials/welcome",
          label: "Tutorials",
          position: "left",
        },
        {
          href: "/nodes/welcome",
          label: "Nodes",
          position: "right",
        },
        {
          href: "/integrator/exchange-integration",
          label: "Integrate",
          position: "right",
        },
       
        {
          type: "localeDropdown",
          position: "right",
        }
      ],
    },
    image: "img/elastos_logo_black.svg",
    footer: {
      links: [],
      copyright: "Copyright © 2022 Elastos",
      logo: {
        src: "img/elastos_logo_black.svg",
      },
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      "zh-CN": {
        label: "简体中文",
      },
    },
  },
};
