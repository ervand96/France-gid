import Card from "@/app/shared/Card";
import { fetchTourCards } from "lib/api/strapi/toursCard";
import { TourCard } from "lib/utils/tourCardType";

// const strapiURL = process.env.NEXT_PRIVATE_STRAPI_URL;

export default async function NewStrapiCard({ locale }: { locale: string }) {
  const tours = await fetchTourCards(locale);

  return (
    <div className="flex flex-wrap justify-center items-center gap-x-[24px] gap-y-[40px] my-[64px]">
      {tours ? (
        tours &&
        tours?.data?.map((tour: TourCard) => {
          const imageUrl = `${tour.bgImg.formats?.medium?.url}`;
          return (
            <div key={tour.id} className="shadow-xl/50 rounded-lg group">
              <Card
                stylesOfCard="relative w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] rounded-lg flex flex-col items-start justify-end gap-[8px] p-[12px] lg:p-[24px] cursor-pointer group transition-all duration-500 hover:scale-110"
                bgImage={imageUrl}
                primaryText={tour.primaryText}
                primaryTextStyles="text-[16px] lg:text-[24px] font-[500] leading-[120%] text-secondary transition-all duration-500"
                textBlockStyles="w-full flex flex-col lg:flex-row justify-between lg:items-center items-start gap-y-[8px]"
                secondaryText={`📅 ${tour.duration}`}
                secondaryTextStyles="text-[14px] font-[400] leading-[143%] text-secondary transition-all duration-500"
                descriptionStyles="text-[11px] font-[600] leading-[143%] text-accent bg-secondary rounded-md px-[5px] py-[2px] group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-500"
                description={tour.category}
              >
                <span className="absolute w-8 h-8 flex justify-center items-center top-[14px] right-[14px] text-[24px] rounded-full group-hover:text-primary group-hover:bg-secondary/20 transition-all duration-500">
                  &#10095;
                </span>
              </Card>
            </div>
          );
        })
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}
