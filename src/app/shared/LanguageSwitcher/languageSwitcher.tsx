"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const cleanPath = pathname.replace(/^\/(ru|en)/, "");

  const nextLocale = locale === "en" ? "ru" : "en";

  const newPath = `/${nextLocale}${cleanPath || ""}`;

  return (
    <button
      onClick={() => router.push(newPath)}
      className="flex items-center gap-2"
    >
      {locale === "en" ? "🇷🇺 Russian" : "🇬🇧 English"}
    </button>
  );
}
