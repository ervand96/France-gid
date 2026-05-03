import { fetchWithRetry } from "../fetchWithRetry";

export async function fetchAboutData(locale: string) {
  const params = new URLSearchParams();
  params.set("locale", locale);
  params.append("populate", "stats");
  params.append("populate", "gallery");

  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about-page?${params.toString()}`;

  try {
    const res = await fetchWithRetry(url, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    });

    if (!res.ok) {
      console.error("Strapi Error Status:", res.status);
      return null;
    }

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("fetchAboutData failed:", error);
    return null;
  }
}
