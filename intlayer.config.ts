import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.SPANISH, Locales.FRENCH],
    defaultLocale: Locales.ENGLISH,
  },
  editor: {
    applicationURL: "https://next-15-intlayer-template-xt83.vercel.app/",
    clientId: "17dad84b9f737800f98671b116ed6751",
    clientSecret:
      "aa57f36b27727fe978aefad6b1ecbe6b4b40205dfba1bae1cf0dbaf6df12edf5",
    dictionaryPriorityStrategy: "distant_first",
    enabled: true,
  },
  build: {
    importMode: "dynamic",
  },
  log: {
    mode: "verbose",
  },
};

export default config;
