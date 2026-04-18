"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const cleanPath = pathname.replace(/^\/(ru|en)/, "");

  const nextLocale = locale === "en" ? "ru" : "en";

  const newPath = `/${nextLocale}${cleanPath || ""}`;

  return (
    <button
      onClick={() => router.push(newPath, { scroll: false })}
      className="flex items-center gap-2 cursor-pointer"
    >
      {locale === "en" ? (
        <>
          <ReactCountryFlag countryCode="RU" svg style={{ width: "20px", height: "20px" }} />
          RU
        </>
      ) : (
        <>
          <ReactCountryFlag countryCode="GB" svg style={{ width: "20px", height: "20px" }} />
          EN
        </>
      )}
    </button>
  );
}
