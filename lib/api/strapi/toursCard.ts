import { STRAPI_URL } from "../../strapi";
import { StrapiResponse, TourCard } from "../../utils/tourCardType";

export async function fetchTourCards(
  locale: string,
): Promise<StrapiResponse<TourCard>> {
  const res = await fetch(
    `${STRAPI_URL}/api/tour-cards?locale=${locale}&populate=*`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed fetch tours");
  }

  return res.json();
}
