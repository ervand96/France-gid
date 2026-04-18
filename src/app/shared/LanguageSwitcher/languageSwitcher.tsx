"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { LocationEnum } from "@/constants/locationEnum";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const cleanPath = pathname.replace(/^\/(ru|en)(?=\/|$)/, "") || "/";

  const isEnglish = locale === LocationEnum.EN;

  const href = isEnglish
    ? cleanPath
    : `/en${cleanPath === "/" ? "" : cleanPath}`;

  return (
    <Link
      href={href}
      scroll={false}
      className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition"
    >
      <span>{isEnglish ? "🇷🇺 Russian" : "🇬🇧 English"}</span>
    </Link>
  );
}
