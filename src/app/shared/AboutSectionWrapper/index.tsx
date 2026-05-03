import { fetchAboutData } from "lib/api/strapi/about/aboutSection";
import AboutGuideSection from "../AboutGuideSection";

export default async function AboutSectionWrapper({
  locale,
}: {
  locale: string;
}) {
  const aboutData = await fetchAboutData(locale);

  if (!aboutData)
    return <div>Страница временно недоступна. Попробуйте позже.</div>;

  return <AboutGuideSection aboutData={aboutData} />;
}
