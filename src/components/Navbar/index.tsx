"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "@/constants/navbarData";
import Container from "../Container";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center  w-full">
      <div className="fixed z-[888] inset-x-0 bg-[#0A1628]/90 text-[#EBE7DD] py-[30px]">
        <Container>
          <div className="flex items-center justify-end lg:justify-center gap-[50px] font-bold ">
            <ul className="hidden lg:flex gap-[50px] ">
              {navData.map((item, index) => (
                <li key={index} className="hover:text-gray-300">
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-[20px] z-[100]">
              <button className="md:hidden" onClick={toggleMenu}>
                <Image
                  src={"https://cdn-icons-png.freepik.com/512/7216/7216128.png"}
                  alt="menu"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-[15px] flex flex-col items-end gap-[20px] bg-[#1B3A2F] p-[20px] rounded-xl">
              {navData.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-gray-300"
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
