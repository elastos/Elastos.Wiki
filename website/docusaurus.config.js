module.exports = {
  title: "Elastos Wiki",
  tagline: "Elastos Ecosystem Wiki",
  url: "https://docs.elastos.org",
  baseUrl: "/",
  organizationName: "elastos",
  projectName: "docs",
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
    "/css/near.min.css",
  ],
  favicon: "img/favicon.ico",
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
          sidebarPath: "./sidebars.json",
          routeBasePath: "/",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        googleAnalytics: {
          trackingID: "UA-100373569-7",
          anonymizeIP: true,
        },
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
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Wiki",
      logo: {
        alt: 'Elastos Logo',
        src: "img/elastos_logo_black.svg",
        srcDark: 'img/elastos_logo_white.svg',
        // src: "img/near_logo.svg",
        // srcDark: 'img/near_logo_white.svg',
      },
      items: [
        {
          to: "/learn/welcome",
          label: "Learn",
          position: "left",
        },
        {
          to: "/develop/welcome",
          label: "Build",
          position: "left",
        },
        {
          to: "/tutorials/welcome",
          label: "Tutorials",
          position: "left",
        },
        {
          to: "/api/rpc/introduction",
          label: "APIs",
          position: "left",
        },
        {
          href: "/integrator/exchange-integration",
          label: "Integrate",
          position: "right",
        },
        {
          href: "/nodes/welcome",
          label: "Nodes",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    image: "img/near_logo.svg",
    footer: {
      links: [],
      copyright: "Copyright © 2021 NEAR Protocol",
      logo: {
        src: "img/near_logo.svg",
      },
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "YKOT6G4YP0",
      // Public API key: it is safe to commit it
      apiKey: "753a063f1c543c6ad6efd803da3378e0",
      indexName: "elastos",
      siteId: '1681f912-c154-4bba-90a9-adc192dc8250',
      branch: 'master',
      selector: 'div#search',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "elastos-sdk\\.io",
      // Optional: Algolia search parameters
      searchParameters: {},
      //... other Algolia params
      placeholder: "Search the Docs...",
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
