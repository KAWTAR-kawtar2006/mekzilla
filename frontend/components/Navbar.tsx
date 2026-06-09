"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setLangOpen(false);
    setMobileOpen(false);
  };

  // SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar mx-auto sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black"
          : "bg-black"
      }`}
    >
      <div className="nav-container gap-4">

        {/* ================= MOBILE LOGO ================= */}
        <Link href="/" className="min-[769px]:hidden flex items-center">
          <Image
            src="/OCODElogo/PNG/OCODE.png"
            alt="O'Code"
            width={90}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* ================= LOGO DESKTOP (ANIMÉ) ================= */}
        <Link href="/">
          <div className="logo-area hidden min-[769px]:flex">
            
            <div className="logo relative flex items-center">

              {/* LOGO SVG (AVANT SCROLL) */}
              <div
                className={`flex items-center  transition-all duration-500 ${
                  scrolled
                    ? "opacity-0 -translate-y-2 scale-90 absolute"
                    : "opacity-100 translate-y-0 scale-100 relative"
                }`}
              >
                <span className="o">
                  <Image src="/OCODElogo/SVG/1-O'.svg" alt="O" width={30} height={30} />
                </span>

                <span className="letter letter-c">
                  <Image src="/OCODElogo/SVG/2-C.svg" alt="C" width={18} height={18} />
                </span>

                <span className="letter letter-o">
                  <Image src="/OCODElogo/SVG/3-O.svg" alt="O" width={22} height={22} />
                </span>

                <span className="letter letter-d">
                  <Image src="/OCODElogo/SVG/4-D.svg" alt="D" width={21} height={21} />
                </span>

                <span className="letter letter-e">
                  <Image src="/OCODElogo/SVG/5-E.svg" alt="E" width={15} height={15} />
                </span>
              </div>

              {/*  LOGO IMAGE (APRÈS SCROLL) */}
              <div
                className={`transition-all duration-500 ${
                  scrolled
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-2 scale-95 absolute"
                }`}
              >
                <Image
                  src="/OCODElogo/PNG/OCODE.png"
                  alt="O'Code"
                  width={90}
                  height={40}
                  className="object-contain"
                />
              </div>

            </div>

          </div>
        </Link>

        {/* ================= LINKS ================= */}
        <div className="text-m hidden min-[769px]:flex gap-6 text-white mr-auto ml-8 mt-1">
          <Link href="/#services" className="hover:text-[#DADADA]">
            {t("navbar.services")}
          </Link>
          <Link href="/#secteurs" className="hover:text-[#DADADA]">
            {t("navbar.sectors")}
          </Link>
          <Link href="/#methodologie" className="hover:text-[#DADADA]">
            {t("navbar.methodology")}
          </Link>
          <Link href="/#about" className="hover:text-[#DADADA]">
            {t("navbar.about")}
          </Link>
        </div>

        {/* ================= ACTIONS ================= */}
        <div className="text-m flex items-center pl-10 gap-4 text-white mt-1">

          <Link
            href="/#contact"
            className="text-sm hidden min-[769px]:inline-flex hover:text-[#DADADA]"
          >
            {t("navbar.contact")}
          </Link>

          {/* LANG */}
          <div className="text-sm hidden min-[769px]:inline-flex pr-3 pl-2">
            <button
              onClick={() => changeLanguage(currentLang === "fr" ? "en" : "fr")}
              className="text-sm flex items-center gap-2 cursor-pointer"
            >
              {currentLang.toUpperCase()}

              <Image
                src={
                  currentLang === "fr"
                    ? "/OCODElogo/pays/fr.svg"
                    : "/OCODElogo/pays/us.svg"
                }
                alt="lang"
                width={20}
                height={20}
                className="w-6 h-6 rounded-full object-cover"
              />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="min-[769px]:hidden p-2 border border-white/20 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Image src="/menu.svg" alt="menu" width={20} height={20} />
          </button>
        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div
          className={`min-[769px]:hidden absolute left-0 right-0 mt-2 rounded-md text-white z-40 text-sm transition-all duration-300 ${
            scrolled
              ? "bg-white/5 backdrop-blur-xl"
              : "bg-black"
          }`}
        >

          <Link
            href="/#services"
            className="block px-4 py-3 hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            {t("navbar.services")}
          </Link>

          <Link
            href="/#secteurs"
            className="block px-4 py-3 hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            {t("navbar.sectors")}
          </Link>

          <Link
            href="/#methodologie"
            className="block px-4 py-3 hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            {t("navbar.methodology")}
          </Link>

          <Link
            href="/#about"
            className="block px-4 py-3 hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            {t("navbar.about")}
          </Link>

          <Link
            href="/#contact"
            className="block px-4 py-3 hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            {t("navbar.contact")}
          </Link>

          {/* LANG MOBILE */}
          <div className="px-4 py-3">
            <button
              onClick={() =>
                changeLanguage(currentLang === "fr" ? "en" : "fr")
              }
              className="flex items-center gap-2 text-xs"
            >
              {currentLang.toUpperCase()}

              <Image
                src={
                  currentLang === "fr"
                    ? "/OCODElogo/pays/fr.svg"
                    : "/OCODElogo/pays/us.svg"
                }
                alt="lang"
                width={10}
                height={10}
                className="w-6 h-6 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
