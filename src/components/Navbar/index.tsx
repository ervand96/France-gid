"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "@/constants/navbarData";
import Container from "../Container";
import Button from "../Button";
import menuIcon from "../../assets/elements/menu.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="fixed z-[888] inset-x-0 bg-primary/90">
        <Container>
          <div className="flex justify-between items-center py-[18px] px-[10px]">
            <Button children={"Book Now"} styles="lg:hidden bg-accent text-primary text-[12px] rounded-[6px] px-[12px] py-[5px] font-[600] hover:bg-accent/50 hover:text-[#fff] transition-all duration-500" handleClick={() => console.log("aaa")} />
            <Link href={"/"}>Elite Paris Guide</Link>
            <div className="flex items-center justify-end lg:justify-center">
              <ul className="hidden lg:flex justify-center items-center gap-[32px] ">
                {navData && navData.map((item, index) => (
                  <li key={index} className="text-[16px] font-[400] leading-[150%] text-secondary hover:text-gray-500">
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
                <Button children={"Book Now"} styles="bg-accent text-primary text-[16px] rounded-[6px] px-[24px] py-[10px] font-[500] cursor-pointer hover:bg-accent/50 hover:text-[#fff] transition-all duration-500" handleClick={() => console.log("aaa")} />
              </ul>

              <div className="flex items-center gap-[20px] z-[100]">
                <button className="lg:hidden" onClick={toggleMenu}>
                  <Image
                    src={menuIcon}
                    alt="Navbar menu icon"
                    className="w-[30px] h-[30px]"
                  />
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="lg:hidden mt-[20px] flex flex-col items-end gap-[20px] bg-primary p-[20px] rounded-xl">
              {navData && navData.map((item, index) => (
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
