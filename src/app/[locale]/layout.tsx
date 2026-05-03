import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ModalProvider } from "@/context/ModalContext";
import { NextIntlClientProvider } from "next-intl";
import LocaleSync from "../shared/LocaleSync";
import ContactModalWrapper from "../shared/ContactModalWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
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
    <html lang={currentLocale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={currentLocale} messages={messages}>
          <ModalProvider>
            <LocaleSync />
            <ContactModalWrapper />
            {children}
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
