import { StrapiResponse, TourCard } from "../../../utils/tourCardType";

export async function fetchTourCards(
  locale: string,
  category: string,
): Promise<StrapiResponse<TourCard> | null> {
  const params = new URLSearchParams();
  params.set("locale", locale);
  params.set("populate", "bgImg");
  params.set("filters[filterCategory][$eq]", category);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/tour-cards?${params.toString()}`,
      {
        next: { revalidate: 60 },
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    );

    if (!res.ok) {
      console.error("Failed fetch tours:", res.status);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("fetchTourCards failed:", error);
    return null;
  }
}
