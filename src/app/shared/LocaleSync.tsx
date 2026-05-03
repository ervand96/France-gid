"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "@/navigation";

export default function LocaleSync() {
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (lastPathname.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      lastPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
