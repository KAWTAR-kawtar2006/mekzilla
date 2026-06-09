"use client";
import Image from "next/image";


import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
import Link from "next/link";
export default function Hero(){

  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  // langue actuelle depuis i18next
  const currentLang = i18n.language;
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // (optionnel)
    setLangOpen(false);
    setMobileOpen(false);
  };
  return(
    <div className="hero bg-[#000000] px-4 pt-15 text-center  sm:pt-20 lg:pt-20">
      <div className="hero-title mx-auto mb-4 max-w-6xl">
        <h1 className="mb-3 text-[40px] font-bold leading-none text-white sm:mb-5 sm:text-[50px] lg:text-[73px]">
          {t("hero.title")}
        </h1>

        <h1 className="mb-6 text-[40px] font-bold leading-none text-white sm:mb-8 sm:text-[50px] lg:text-[73px]">
          {t("hero.suiteTitle")}
        </h1>
        <p className="mx-auto max-w-3xl pb-2 text-base font-normal leading-relaxed text-[#d2d2d2] sm:text-[17px]">
          {t("hero.description")}
        </p>
        </div>
    <div className="mt-7 flex flex-col items-stretch justify-center gap-4 pb-5 text-[14px] sm:flex-row sm:items-center sm:gap-5 sm:pb-5 lg:pb-10">

      {/* Bouton principal */}
      <Link href="/#contact" className="flex w-full items-center justify-center gap-3 rounded-xl px-7 py-4 text-white sm:w-auto
      bg-gradient-to-b from-[#555c2f] to-[#1B2000] 
      hover:from-[#545C2F] hover:to-[#545C2F]
      sm:pl-10 sm:pr-10 transition
      border border-[#545C2F]
      cursor-pointer">
        <span>{t("hero.cta")}</span>
        <Image
          src="/fleche.svg"
          alt="flèche"
          width={20}
          height={10}
          className=""
        />
      </Link>

      {/* Bouton secondaire */}
      <Link href="/#services" className="w-full rounded-xl px-7 py-4 text-white sm:w-auto
      border border-[#545C2F]
      transition cursor-pointer
      sm:pl-10 sm:pr-10 transition">
        {t("hero.cta2")}
      </Link>

    </div>

    </div>
  )
}
