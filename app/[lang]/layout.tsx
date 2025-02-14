import "../global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { I18nProvider, Translations } from "fumadocs-ui/i18n";

const inter = Inter({
  subsets: ["latin"],
});

const cn: Partial<Translations> = {
  search: "Procurar",
  chooseLanguage: "Escolher idioma",
  chooseTheme: "Escolher tema",
  lastUpdate: "Última atualização",
  nextPage: "Próxima página",
  previousPage: "Página anterior",
  toc: "Índice",
};

const locales = [
  {
    name: "Português",
    locale: "pt",
  },
  {
    name: "English",
    locale: "en",
  },
];

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const lang = (await params).lang;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider locale={lang} locales={locales} translations={cn}>
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
