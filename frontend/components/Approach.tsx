"use client";
import Image from "next/image";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

export default function NotreApproche() {

  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { t } = useTranslation();

  const currentLang = i18n.language;
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setLangOpen(false);
    setMobileOpen(false);
  };

  return (
    <div id="methodologie" className="scroll-mt-15 bg-black text-center">

      <section className="bg-black px-3 py-5">

        <div className="w-full my-8 overflow-hidden pb-10">
          <div
            className="
              h-[1px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-[#545c2f]
              to-transparent
              animate-[shine_3s_linear_infinite]
              transition-all
              duration-300
            "
          />
        </div>

        <div className="max-w-6xl mx-auto">

          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-xl mb-7 text-center mx-auto">
            {t("approach.title1p1")}
          </p>

          {/* Main title */}
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-6">
            {t("approach.title2p1")}
          </h2>

          {/* Separator */}
          <div className="w-32 md:w-50 h-px bg-[#7f865b] mt-3 mb-5 mx-auto"></div>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-1 px-4 sm:px-10 md:px-20 lg:px-40">
            {t("approach.description1p1")}
          </p>

        </div>
      </section>

      {/* Cards */}
      <section className="
        grid
        grid-cols-1
        sm:grid-cols-3
        lg:grid-cols-3
         xl:grid-cols-5
        gap-6
        px-4
        pb-15
        max-w-7xl
        mx-auto
      ">

        {/* 01 */}
        <div className="relative pt-5 pb-5 pl-1 pr-1">

          <div>
            <Image
              src="/methodology/icon-1.svg"
              alt=""
              width={60}
              height={60}
              className="mx-auto mt-4"
            />
          </div>

          <p className="text-white text-xl text-center pt-3 pb-2">01</p>

          <p className="text-white text-xl text-center pb-2">
            {t("approach.title1")}
          </p>

          <div className="w-10 h-px bg-[#7f865b] mx-auto my-3"></div>

          <p className="text-white/90 text-sm text-center">
            {t("approach.description1")}
          </p>

          <Image
            src="/fleche_D.svg"
            width={20}
            height={20}
            alt="fleche"
            className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2"
          />
        </div>

        {/* 02 */}
        <div className="relative pt-5 pb-5 pl-1 pr-1">

          <Image
            src="/methodology/icon-2.svg"
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-4"
          />

          <p className="text-white text-xl text-center pt-3 pb-2">02</p>

          <p className="text-white text-xl text-center pb-2">
            {t("approach.title2")}
          </p>

          <div className="w-10 h-px bg-[#7f865b] mx-auto my-3"></div>

          <p className="text-white/90 text-sm text-center">
            {t("approach.description2")}
          </p>

          <Image
            src="/fleche_D.svg"
            width={20}
            height={20}
            alt="fleche"
            className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2"
          />
        </div>

        {/* 03 */}
        <div className="relative pt-5 pb-5 pl-1 pr-1">

          <Image
            src="/methodology/icon-3.svg"
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-4"
          />

          <p className="text-white text-xl text-center pt-3 pb-2">03</p>

          <p className="text-white text-xl text-center pb-2">
            {t("approach.title3")}
          </p>

          <div className="w-10 h-px bg-[#7f865b] mx-auto my-3"></div>

          <p className="text-white/90 text-sm text-center">
            {t("approach.description3")}
          </p>

          <Image
            src="/fleche_D.svg"
            width={20}
            height={20}
            alt="fleche"
            className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2"
          />
        </div>

        {/* 04 */}
        <div className="relative pt-5 pb-5 pl-1 pr-1">

          <Image
            src="/methodology/icon-4.svg"
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-4"
          />

          <p className="text-white text-xl text-center pt-3 pb-2">04</p>

          <p className="text-white text-xl text-center pb-2">
            {t("approach.title4")}
          </p>

          <div className="w-10 h-px bg-[#7f865b] mx-auto my-3"></div>

          <p className="text-white/90 text-sm text-center">
            {t("approach.description4")}
          </p>

          <Image
            src="/fleche_D.svg"
            width={20}
            height={20}
            alt="fleche"
            className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2"
          />
        </div>

        {/* 05 */}
        <div className="pt-5 pb-5">

          <Image
            src="/methodology/icon-5.svg"
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-4"
          />

          <p className="text-white text-xl text-center pt-3 pb-2">05</p>

          <p className="text-white text-xl text-center pb-2">
            {t("approach.title5")}
          </p>

          <div className="w-10 h-px bg-[#7f865b] mx-auto my-3"></div>

          <p className="text-white/90 text-sm text-center">
            {t("approach.description5")}
          </p>
        </div>

      </section>

    </div>
  );
}
