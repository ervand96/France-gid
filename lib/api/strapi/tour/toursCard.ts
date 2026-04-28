import { STRAPI_URL } from "../../../strapi";
import { StrapiResponse, TourCard } from "../../../utils/tourCardType";

export async function fetchTourCards(
  locale: string,
  category: string,
): Promise<StrapiResponse<TourCard>> {
  const params = new URLSearchParams();
  params.set("locale", locale);
  params.set("populate", "bgImg");
  params.set("filters[filterCategory][$eq]", category);

  const res = await fetch(`${STRAPI_URL}/api/tour-cards?${params.toString()}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed fetch tours");

  return res.json();
}
