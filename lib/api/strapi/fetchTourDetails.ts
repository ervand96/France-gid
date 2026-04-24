import { STRAPI_URL } from "../../strapi";
import { categoryMap } from "@/constants/categoryEnum";
import { TourCard } from "../../utils/tourCardType";

const TOUR_DETAILS_POPULATE = [
  "bgImg",
  "highlights",
  "included",
  "notIncluded",
  "gallery",
  "pricing",
  "tourPlan",
  "contentSections",
]
  .map((field) => `populate[${field}][populate]=*`)
  .join("&");

export async function fetchTourDetails(
  locale: string,
  category: string,
  slug: string,
): Promise<TourCard | null> {
  const dbCategory = categoryMap[category as keyof typeof categoryMap];

  if (!dbCategory) {
    console.error(`[FetchTourDetails] Invalid category: ${category}`);
    return null;
  }

  const queryParams = new URLSearchParams({
    locale,
    "filters[slug][$eq]": slug,
    "filters[filterCategory][$eq]": dbCategory,
  });

  const url = `${STRAPI_URL}/api/tour-cards?${queryParams.toString()}&${TOUR_DETAILS_POPULATE}`;

  try {
    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: res.statusText }));
      console.error(`[Strapi Error ${res.status}]:`, error);
      return null;
    }

    const { data } = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    return data[0] as TourCard;
  } catch (error) {
    console.error("[fetchTourDetails] Critical Failure:", error);
    return null;
  }
}
