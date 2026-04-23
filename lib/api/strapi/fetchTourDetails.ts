import { STRAPI_URL } from "../../strapi";
import { categoryMap } from "@/constants/categoryEnum";

export async function fetchTourDetails(
  locale: string,
  category: string,
  slug: string,
) {
  const dbCategory = categoryMap[category as keyof typeof categoryMap];

  const params = new URLSearchParams();

  params.set("locale", locale);
  params.set("populate", "*");

  params.set("filters[filterCategory][$eq]", dbCategory);
  params.set("filters[slug][$eq]", slug);

  const res = await fetch(`${STRAPI_URL}/api/tour-cards?${params.toString()}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed fetch tour details");

  return res.json();
}
