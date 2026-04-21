"use client";

import { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [locked, setLocked] = useState<boolean>(false);

  const cleanPath = pathname.replace(/^\/(ru|en)(?=\/|$)/, "");

  const nextLocale = locale === "en" ? "ru" : "en";

  const newPath = `/${nextLocale}${cleanPath || ""}`;

  const handleSwitch = () => {
    if (locked || isPending) return;

    setLocked(true);

    startTransition(() => {
      router.replace(newPath, { scroll: false });

      setTimeout(() => {
        setLocked(false);
      }, 700);
    });
  };

  return (
    <button
      onClick={handleSwitch}
      disabled={locked || isPending}
      className="flex items-center gap-2 cursor-pointer disabled:opacity-50"
    >
      {locale === "en" ? (
        <>
          <ReactCountryFlag
            countryCode="RU"
            svg
            style={{ width: "20px", height: "20px" }}
          />
          RU
        </>
      ) : (
        <>
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{ width: "20px", height: "20px" }}
          />
          EN
        </>
      )}
    </button>
  );
}
