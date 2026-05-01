import { fetchAboutData } from "lib/api/strapi/about/aboutSection";
import AboutGuideSection from "../AboutGuideSection";
import { notFound } from "next/navigation";

export default async function AboutSectionWrapper({
  locale,
}: {
  locale: string;
}) {
  const aboutData = await fetchAboutData(locale);

  if (!aboutData) notFound();

  return <AboutGuideSection aboutData={aboutData} />;
}
