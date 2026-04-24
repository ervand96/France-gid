import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import NotFoundContent from "./NotFoundContent";

export default async function NotFound() {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NotFoundContent />
    </NextIntlClientProvider>
  );
}