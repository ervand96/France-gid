import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import Navbar from "../shared/Navbar";

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const currentLocale = locale === "en" ? "en" : "ru";

  const messages =
    currentLocale === "en"
      ? (await import("@/messages/en.json")).default
      : (await import("@/messages/ru.json")).default;

  return (
    <NextIntlClientProvider locale={currentLocale} messages={messages}>
      <Navbar />
      {children}
    </NextIntlClientProvider>
  );
}
