import {
  LocalPromiseParams,
  NextLayoutIntlayer,
  generateStaticParams,
} from "next-intlayer";
import { Inter } from "next/font/google";
import {
  getHTMLTextDir,
  getIntlayer,
  getTranslation,
  IConfigLocales,
  t,
} from "intlayer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  const metadata = getIntlayer("page-metadata", locale);
  const t = <T,>(content: IConfigLocales<T>) => getTranslation(content, locale);

  return {
    ...metadata,
    title: t<string>({
      en: `Intlayer | ${locale} | Demo`,
      fr: `Intlayer | ${locale} | Démo`,
      es: `Intlayer | ${locale} | Demostración`,
    }),
  };
};

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default LocaleLayout;

export { generateStaticParams };
