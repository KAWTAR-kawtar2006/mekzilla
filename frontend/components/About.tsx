"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

export default function About() {

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
  return (
    <div id="about" className="scroll-mt-15 bg-black">
        <section className="bg-black w-full overflow-hidden">
  <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-6 sm:px-10 lg:px-16 py-22">

    {/* IMAGE SIDE */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <Image
        src={"/About/about.png"}
        width={2000}
        height={90}
        alt="about"
        className="w-full max-w-md lg:max-w-lg h-auto"
      />
    </div>

    {/* TEXT SIDE */}
    <div className="w-full lg:w-1/2">

      {/* MAIN TITLE */}
      <h2 className="text-4xl md:text-4xl font-bold text-white leading-tight">
        {t("about.about")}
      </h2>

      <hr className="bg-[#555c2f] w-20 h-1 mt-3 mb-5 border-[#555c2f]" />

      {/* DESCRIPTION */}
      <p className="text-[#cfcfcf] text-sm md:text-base leading-7 md:leading-7 mb-4">
        {t("about.pAbout")}
      </p>

      {/* LIST */}
      <ul className="list-disc pl-5 text-[#cfcfcf] text-sm md:text-base leading-7 md:leading-7 ">
        <li>{t("about.li1")}</li>
        <li>{t("about.li2")}</li>
        <li>{t("about.li3")}</li>
      </ul>

    </div>
  </div>
</section>
     <section className="pb-10 px-4 sm:px-6 lg:px-10">

  <div
    className="
      ml-0 lg:ml-10
      pl-6
      pb-6
      pr-6
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]
      gap-6
      lg:gap-0
      items-center
    "
  >

    {/*BLOC 1 (plus large) */}
    <div className="flex gap-4 pr-0 lg:pr-6 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
      <div>
        <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">
          {t("approach.title1p2")}
        </h3>

        <p className="text-[#dadada]/70 text-sm leading-relaxed">
          {t("approach.description1p2")}
        </p>
      </div>
    </div>

    {/* BLOC 2 */}
    <div className="text-center px-4 lg:border-r border-[#d2d2d2]/30">
      <Image
        src="/methodology/account.svg"
        width={60}
        height={60}
        alt="icon"
        className="mx-auto opacity-80"
      />
      <h3 className="text-white mt-3 text-sm">
        {t("approach.title6")}
      </h3>
    </div>

    {/* BLOC 3 */}
    <div className="text-center px-4 md:border-l border-[#d2d2d2]/30 lg:border-r border-[#d2d2d2]/30">
      <Image
        src="methodology/webhook.svg"
        width={60}
        height={60}
        alt="icon"
        className="mx-auto opacity-80"
      />
      <h3 className="text-white mt-3 text-sm">
        {t("approach.title7")}
      </h3>
    </div>

    {/* BLOC 4 */}
    <div className="text-center px-4 ">
      <Image
        src="/methodology/shield.svg"
        width={60}
        height={60}
        alt="icon"
        className="mx-auto opacity-80"
      />
      <h3 className="text-white mt-3 text-sm">
        {t("approach.title8")}
      </h3>
    </div>

    {/* BLOC 5 */}
    <div className="text-center px-4 md:border-l border-[#d2d2d2]/30">
      <Image
        src="/methodology/monitoring.svg"
        width={60}
        height={60}
        alt="icon"
        className="mx-auto opacity-80"
      />
      <h3 className="text-white mt-3 text-sm">
        {t("approach.title9")}
      </h3>
    </div>

  </div>
</section>
   
      </div>
      
   
  );
}
