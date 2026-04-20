import { useTranslations } from "next-intl";
import { HeaderType } from "./type";

export default function Header({
  blockStyles,
  headingStyles,
  subHeadingStyles,
  isDark,
}: HeaderType) {
  const t = useTranslations("HeroSection");

  return (
    <div
      className={`${isDark ? "text-primary" : "text-secondary"} flex flex-col justify-center gap-[24px] ${blockStyles}`}
    >
      <h3
        className={`text-[32px] sm:text-[44px] lg:text-[72px] font-[500] leading-[110%] ${headingStyles}`}
        style={{ fontFamily: "Oswald" }}
      >
        {t("RecommendedExcursions")}
      </h3>
      <div className="w-[96px] h-[4px] bg-accent"></div>
      <h4
        className={`max-w-[700px] text-[16px] lg:text-[18px] font-[400] leading-[150%] ${subHeadingStyles}`}
      >
        {t("ExcursionsThatWillReveal")}
      </h4>
    </div>
  );
}
