import { fetchAboutData } from "lib/api/strapi/about/aboutSection";
import AboutGuideSection from "../AboutGuideSection";

export default async function AboutSectionWrapper({
  locale,
}: {
  locale: string;
}) {
  const aboutData = await fetchAboutData(locale);
  console.log(aboutData, "AboutGuideSection");

  if (!aboutData) return null;

  return <AboutGuideSection aboutData={aboutData} />;
}
