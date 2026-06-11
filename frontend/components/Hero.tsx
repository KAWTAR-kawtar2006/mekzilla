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
    <div className="hero bg-[#00466b] flex flex-row px-4 pt-15  pl-25 sm:pt-20 lg:pt-20">
    <div className="hero  ">
      <div className="hero-title  mb-4 max-w-6xl">
         <h1 className="mb-3 text-[20px] font-medium uppercase leading-none text-[#A3D6D4] sm:mb-5 sm:text-[20px] lg:text-[20px]">
          {t("hero.title")}
        </h1>
        <h1 className="mb-3 text-[23px] font-semibold leading-none text-white sm:mb-5 sm:text-[50px] lg:text-[43px]">
          {t("hero.title2")}
        </h1>

        <h1 className="mb-6 text-[23px] font-semibold leading-none text-white sm:mb-5 sm:text-[50px] lg:text-[43px]">
          {t("hero.suiteTitle")}
        </h1>

        <ul>
          <li className="mb-3 text-[14px]  leading-none text-white sm:mb-5 sm:text-[20px] lg:text-[15px]">
            {t("hero.li1")}
          </li>
          <li className="mb-3 text-[14px]  leading-none text-white sm:mb-5 sm:text-[20px] lg:text-[15px]">
            {t("hero.li2")}
          </li><li className="mb-3 text-[14px]  leading-none text-white sm:mb-5 sm:text-[20px] lg:text-[15px]">
            {t("hero.li3")}
          </li><li className="mb-3 text-[14px]  leading-none text-white sm:mb-5 sm:text-[20px] lg:text-[15px]">
            {t("hero.li4")}
          </li>
        </ul>
        
        </div>
    <div className="mt-7 flex flex-col  gap-4 pb-5 text-[14px] sm:flex-row sm:items-center sm:gap-5 sm:pb-5 lg:pb-10">

      {/* Bouton principal */}
      <Link href="/#contact" className="flex w-full font-semibold uppercase gap-3 rounded-xl px-7 py-4 text-white sm:w-auto
      bg-[#38ACA8]  
      hover:bg-[#ffff] hover:text-[#38ACA8]
      sm:pl-10 sm:pr-10 transition
      border border-[#38ACA8] 
      hover:border-[#ffffff]
      cursor-pointer">
        <span>{t("hero.cta")}</span>
      </Link>


    </div>

    </div>
    <div className="pl-50">
      <Image
          src="/fleche.svg"
          alt="flèche"
          width={20}
          height={10}
          className=""
        />
    </div>
    </div>
  )
}
