import Container from "@/app/shared/Container";
import CategoryCards from "@/app/shared/category";
import HeroSectionHome from "@/app/features/HeroSectionHome";
import AboutSectionWrapper from "@/app/shared/AboutSectionWrapper";
import TransferPromo from "@/app/features/TransferPromo";




export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div>
      <HeroSectionHome isHero />
      <section className="bg-white py-[100px]">
        <Container>
          <div className="flex flex-col items-center">
            <HeroSectionHome />
            <CategoryCards />
            <AboutSectionWrapper locale={locale} />
          </div>
        </Container>
        <TransferPromo />
      </section>
    </div>
  );
}
