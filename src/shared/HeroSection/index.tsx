type Props = {
  generalStyles?: string;
  heading: string;
  coloredPart: string;
  subHeading: string;
  headingStyles?: string;
  subHeadingStyles?: string;
};

import Button from "../Button";
import Container from "../Container";
import phoneIcon from "../../assets/elements/phone.png";
import Image from "next/image";

export default function HeroSection({
  generalStyles,
  heading,
  coloredPart,
  subHeading,
  headingStyles,
  subHeadingStyles,
}: Props) {
  return (
    <section className="bg-[url('/paris-gif.gif')] bg-cover bg-center min-h-screen">
      <Container>
        <div
          className={`flex flex-col items-center justify-center min-h-screen gap-[48px] px-[10px] ${generalStyles}`}
        >
          <div className="flex flex-col items-center justify-center text-center gap-[24px]">
            <h1
              className={`text-[36px] sm:text-[48px] lg:text-[96px]  font-[500] leading-[110%] text-secondary ${headingStyles}`}
              style={{ fontFamily: "Oswald" }}
            >
              {heading}
              <br />
              <span className="text-accent">{coloredPart}</span>
            </h1>
            <h2
              className={`max-w-[700px] lg:text-[22px] text-[18px] font-[400] leading-[150%] text-secondary ${subHeadingStyles}`}
            >
              {subHeading}
            </h2>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-[16px]">
            <Button
              children="Заказать экскурсию"
              styles="min-w-[255px] px-[40px] py-[18px] text-primary text-[16px] leading-[150%] font-[600] bg-accent border-[2px] border-accent rounded-[6px] hover:bg-accent/50 hover:text-[#fff] transition-all duration-500"
              handleClick={() => console.log("aaa")}
            />
            <Button
              styles="min-w-[255px] flex justify-center items-center gap-[8px] px-[40px] py-[18px] text-secondary text-[16px] leading-[150%] font-[600] border-[2px] border-secondary rounded-[6px] hover:bg-primary hover:border-primary transition-all duration-500"
              handleClick={() => console.log("aaa")}
            >
              <Image src={phoneIcon} alt="Phone icon" width={20} height={20} />
              <p>Связаться с нами</p>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
