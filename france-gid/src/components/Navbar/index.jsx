"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="fixed top-2 z-[888] inset-x-[10px] lg:inset-x-auto bg-[#1B3A2F]/60 lg:backdrop-blur shadow-2xl py-[10px] px-[30px] text-[#EBE7DD] rounded-lg">
        <div className="flex items-center justify-end lg:justify-center gap-[50px] font-bold ">
          <ul className="hidden lg:flex gap-[50px] ">
            {["home", "contact", "ev ayln"].map((item, index) => (
              <li key={index} className="hover:text-gray-300">
                <Link href={`/${item}`}>{item}</Link>
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
            {["home", "contact", "ev ayln"].map((item, index) => (
              <Link
                key={index}
                href={`/${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-300"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
