import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "../shared/Navbar";
import { LocationEnum } from "@/constants/locationEnum";
import Footer from "../shared/Footer";

type Props = {
  children: ReactNode;
  params: Promise<{
    locale?: string;
  }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale = LocationEnum.RU } = await params;

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
