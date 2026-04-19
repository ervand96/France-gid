import Card from "@/app/shared/Card";
import { fetchTourCards } from "lib/api/strapi/toursCard";
import { TourCard } from "lib/utils/tourCardType";

const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default async function NewStrapiCard({ locale }: { locale: string }) {
  const tours = await fetchTourCards(locale);
  console.log(tours);

  return (
    <>
      {tours?.data?.map((tour: TourCard) => {
        const imageUrl = `${strapiURL}${tour.bgImg.formats?.medium?.url}`;

        return (
          <Card
            key={tour.id}
            primaryText={tour.primaryText}
            secondaryText={tour.duration}
            description={tour.category}
            bgImage={imageUrl}
          />
        );
      })}
    </>
  );
}
