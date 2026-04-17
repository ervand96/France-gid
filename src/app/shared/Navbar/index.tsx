"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "@/constants/navbarData";
import Container from "../Container";
import Button from "@/app/shared/Button";
import menuIcon from "@/assets/elements/menu.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="fixed z-[888] inset-x-0 bg-primary/90">
        <Container>
          <div className="flex justify-between items-center py-[18px] px-[20px]">
            <Link
              href={"/"}
              className="text-[24px] leading-[133%] font-[400]"
              style={{ fontFamily: "Oswald" }}
            >
              Elite Paris Guide
            </Link>
            <ul className="hidden xl:flex justify-center items-center xl:gap-[32px]">
              {navData &&
                navData.map((item, index) => (
                  <li
                    key={index}
                    className="text-[16px] font-[400] leading-[150%] text-secondary hover:text-gray-500"
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              <Button
                text={"Забронировать тур"}
                styles="bg-accent text-primary text-[16px] rounded-[6px] px-[24px] py-[10px] font-[600] hover:bg-accent/50 hover:text-[#fff] transition-all duration-500"
                onClick={() => console.log("aaa")}
              />
            </ul>
            <Button text={"s"} styles="xl:hidden" onClick={toggleMenu}>
              <Image
                src={menuIcon}
                alt="Navbar menu icon"
                className={`w-[30px] h-[30px] ${isMenuOpen && "rotate-90"}`}
              />
            </Button>
          </div>
          {isMenuOpen && (
            <div className="xl:hidden flex flex-col items-end gap-[20px] bg-primary px-[20px] rounded-xl">
              {navData &&
                navData.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[16px] font-[400] text-secondary"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
