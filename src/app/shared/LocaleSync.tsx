"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSync({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (lastPathname.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      lastPathname.current = pathname;
    }

    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];

    if (cookieValue && cookieValue !== currentLocale) {
      const segments = pathname.split("/");
      const localeIndex = segments.findIndex((s) => s === currentLocale);

      if (localeIndex !== -1) {
        segments[localeIndex] = cookieValue;
        const newPath = segments.join("/") || "/";

        router.replace(newPath);
      }
    }
  }, [currentLocale, pathname, router]);

  return null;
}
