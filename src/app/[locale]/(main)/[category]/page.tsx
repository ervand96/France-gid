import NewStrapiCard from "@/app/features/newStrapiCard";
import { categoryMap, CategoryPageProps } from "@/constants/categoryEnum";
import Container from "@/app/shared/Container";
import { notFound } from "next/navigation";
import BackButton from "@/app/shared/BackButton";
import Header from "@/app/shared/Header";


export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;

  const selectedCategory = categoryMap[category as keyof typeof categoryMap];

  if (!selectedCategory) {
    return notFound();
  }


  return (
    <div className="bg-primary">
      <Container>
        <div className="px-[20px] py-[100px] md:py-[150px]">
          <BackButton
            styles="text-secondary/50 hover:text-secondary"
          />
          <div className="flex flex-col items-center gap-[50px]">
            <Header
              blockStyles="flex flex-col items-center"
              heading="Selected category"
              subHeading="Explore the directions based on your selected category" />
            <NewStrapiCard
              locale={locale}
              category={selectedCategory}
              categorySlug={category}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
