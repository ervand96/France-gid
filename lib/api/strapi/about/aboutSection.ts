import { STRAPI_URL } from "lib/strapi";

export async function fetchAboutData(locale: string) {
  const params = new URLSearchParams();
  params.set("locale", locale);
  params.append("populate", "stats");
  params.append("populate", "gallery");

  const url = `${STRAPI_URL}/api/about-page?${params.toString()}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("Strapi Error Status:", res.status);
    return null;
  }

  const result = await res.json();
  return result.data;
}
