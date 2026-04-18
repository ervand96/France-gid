import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "../shared/Navbar";

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const currentLocale = locale === "en" ? "en" : "ru";

  const messages = (await import(`@/messages/${currentLocale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
    </NextIntlClientProvider>
  );
}
