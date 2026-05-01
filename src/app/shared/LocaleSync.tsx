"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSync({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];

    if (cookieValue && cookieValue !== currentLocale) {
      const newPath = pathname.replace(`/${currentLocale}`, `/${cookieValue}`);
      router.replace(newPath);
    }
  }, [currentLocale, pathname, router]);

  return null;
}
