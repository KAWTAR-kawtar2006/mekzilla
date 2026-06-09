"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 4900);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="
            hidden lg:flex
            fixed bottom-6 right-6
            w-12 h-12
            bg-white
            rounded-full
            shadow-lg
            items-center justify-center
            hover:scale-110
            transition-all duration-300
            z-50
            cursor-pointer
          "
        >
          <Image
            src={"/arrow_top.svg"}
            width={30}
            height={30}
            alt="arrow_top"
          />
        </button>
      )}
    </>
  );
}