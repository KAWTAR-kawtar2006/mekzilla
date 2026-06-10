"use client";



import Image from "next/image";

import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
import { useState } from "react";
export default function Services() {

  
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { t } = useTranslation();



   const secteurs = [
  {
    img: "/SecteursActivites/1-Marches-Bancaires.webp",
    alt: "Marches-Bancaires",
    title: t("secteurs.title1"),
    desc: t("secteurs.description1"),
  },
  {
    img: "/SecteursActivites/2-Assurance.webp",
    alt: "Assurance",
    title: t("secteurs.title2"),
    desc: t("secteurs.description2"),
  },
  {
    img: "/SecteursActivites/3-Secteur-Public.webp",
    alt: "Secteur-Public",
    title: t("secteurs.title3"),
    desc: t("secteurs.description3"),
  },
  {
    img: "/SecteursActivites/4-Sante.webp",
    alt: "Sante",
    title: t("secteurs.title4"),
    desc: t("secteurs.description4"),
  },
  {
    img: "/SecteursActivites/5-Retail-&-Consumer.webp",
    alt: "Retail-Consumer",
    title: t("secteurs.title5"),
    desc: t("secteurs.description5"),
  },
  {
    img: "/SecteursActivites/6-Hotellerie-Voyage.webp",
    alt: "Hotellerie-Voyage",
    title: t("secteurs.title6"),
    desc: t("secteurs.description6"),
  },
  {
    img: "/SecteursActivites/7-Automobile.webp",
    alt: "Automobile",
    title: t("secteurs.title7"),
    desc: t("secteurs.description7"),
  },
  {
    img: "/SecteursActivites/8-Industrie-manufacturiere.webp",
    alt: "Industrie-manufacturiere",
    title: t("secteurs.title8"),
    desc: t("secteurs.description8"),
  },
  {
    img: "/SecteursActivites/9-Energy.webp",
    alt: "Energy",
    title: t("secteurs.title9"),
    desc: t("secteurs.description9"),
  },
];

  // langue actuelle depuis i18next
  const currentLang = i18n.language;
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // (optionnel)
    setLangOpen(false);
    setMobileOpen(false);
  };

  return (
    <div>
      
    <section id="services" className="scroll-mt-15 px-6 py-20 bg-[#e2eeed]">
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* CARD 1 */}
        <div className="border-1 border-[#36aba7] bg-white rounded-lg  p-5 grid gap-4">

          {/* IMAGE */}
          <div>
            <Image 
              src="/services/algorithm.svg"
              width={150}
              height={150}
              alt="file-code"
              className="opacity-80 "
            />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-black font-semibold mb-3 mb-2 ml-2">
               {t("services.title1")}
            </h3>
            <p className="text-black text-sm leading-relaxed ml-2">
              {t("services.description1")}
            </p>
          </div>

        </div>

        {/* CARD 2 */}
        <div className="border-1 border-[#36aba7] bg-white rounded-lg p-5 grid gap-4">

          <div>
            <Image 
              src="/services/cloud-server.svg"
              width={150}
              height={150}
              alt="cloud"
              className="opacity-80"
            />
          </div>

          <div>
            <h3 className="text-black font-semibold mb-3 ml-2">
              {t("services.title2")}
            </h3>
            <p className="text-black text-sm leading-relaxed ml-2">
              {t("services.description2")}
            </p>
          </div>

        </div>
        {/* CARD 3 */}
        <div className="border-1 border-[#36aba7] bg-white rounded-lg p-5 grid gap-4">

          <div>
            <Image 
              src="/services/cloud-server.svg"
              width={150}
              height={150}
              alt="cloud"
              className="opacity-80"
            />
          </div>

          <div>
            <h3 className="text-black font-semibold mb-3 ml-2">
              {t("services.title2")}
            </h3>
            <p className="text-black text-sm leading-relaxed ml-2">
              {t("services.description2")}
            </p>
          </div>

        </div>

        {/* CARD 4 */}
        <div className="border-1 border-[#36aba7] bg-white rounded-lg p-5 grid gap-4">

          <div>
            <Image 
              src="/services/laptop-phone.svg"
              width={120}
              height={120}
              alt="mobile"
              className="opacity-80"
            />
          </div>

          <div>
            <h3 className="text-black font-semibold mb-3 ml-2">
              {t("services.title3")}
            </h3>
            <p className="text-black text-sm leading-relaxed ml-2">
              {t("services.description3")}
            </p>
          </div>

        </div>
      </div>
    </section>
   <section className="bg-black px-6">
    <div className="mx-auto max-w-4xl">
        <h1 className="text-[#ffffff]/90 text-3xl md:text-5xl font-bold text-center pb-10"> {t("services.h1")}</h1>
        <p className="text-white text-m leading-relaxed text-center pb-20">
          {t("services.p")}
        </p>
      </div>
      </section>



     


  <section id="secteurs" className="scroll-mt-24 bg-black grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-6 md:px-10 lg:px-15 gap-x-8 gap-y-12 lg:gap-y-20 pb-20">

    {secteurs.map((item, index) => (
      <div
        key={index}
        className="overflow-hidden  hover:shadow-[0_3px_5px_rgba(255,255,255,0.09)] transition duration-300 h-full flex flex-col"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[420px] md:h-[350px] lg:h-[480px]">
          <Image
            src={item.img}
            alt={item.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <p className="text-white text-2xl pt-8 px-4">
          {item.title}
        </p>

        <div className="w-16 h-[1px] bg-[#555c2f] mt-2 mb-6 ml-4"></div>

        <p className="text-[#CECECE] text-sm leading-relaxed px-4 pb-10">
          {item.desc}
        </p>
      </div>
    ))}

  </section>

      
   </div>
    

  );
}
