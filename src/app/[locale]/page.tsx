import HeroSection from "@/app/shared/HeroSection";
import Header from "@/app/shared/Header";
import Container from "@/app/shared/Container";
import NewStrapiCard from "../features/newStrapiCard";
import GetInTouch from "../shared/getInTouch";
import CallToAction from "../features/CallToAction";
import CategoryCards from "../shared/category";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      <HeroSection />
      <div>
        <section className="bg-white py-[100px]">
          <Container>
            <div className="flex flex-col items-center">
              <Header
                blockStyles="items-center"
                isDark
                subHeadingStyles="text-center"
              />
              {/* <NewStrapiCard locale={locale} /> */}
              <CategoryCards />
            </div>
          </Container>
        </section>
      </div>
      <CallToAction />
      <GetInTouch />
    </div>
  );
}
