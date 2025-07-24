import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.SPANISH, Locales.FRENCH],
    defaultLocale: Locales.ENGLISH,
  },
  editor: {
    applicationURL: "http://localhost:3000",

    enabled: true,
  },
  log: {
    mode: "verbose",
  },
};

export default config;
