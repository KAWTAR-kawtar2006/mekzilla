"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

import { FaMapMarkerAlt } from "react-icons/fa";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);

    setLangOpen(false);
    setMobileOpen(false);
  };

  return (
    <div className="bg-white w-full">

  <section className="bg-[#f7f7f5] py-10 px-6 lg:px-12 overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

    {/* CARD 1 */}
    <div className="bg-white rounded-2xl shadow-md px-4 py-5 flex items-center gap-5 hover:shadow-lg transition duration-300">
      
      <div className="w-13 h-13 rounded-full bg-[#6d7c22] flex items-center justify-center shrink-0">
        <Image
          src="/footer/telephone.svg"
          width={25}
          height={25}
          alt="telephone"
          className="invert"
        />
      </div>

      <div>
        <h3 className="text-black font-bold text-md">
          {t("footer.telephone")}
        </h3>

        <div className="w-10 h-[3px] bg-[#6d7c22] my-1 rounded-full"></div>

        <p className="text-gray-700 text-sm">
          +212 6 61 83 32 17
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-white rounded-2xl shadow-md px-6 py-5 flex items-center gap-5 hover:shadow-lg transition duration-300">
      
      <div className="w-13 h-13 rounded-full bg-[#6d7c22] flex items-center justify-center shrink-0">
        <Image
          src="/footer/gmail.svg"
          width={25}
          height={25}
          alt="email"
          className="invert"
        />
      </div>

      <div>
        <h3 className="text-black font-bold text-md">
          {t("footer.email")}
        </h3>

        <div className="w-10 h-[3px] bg-[#6d7c22] my-1 rounded-full"></div>

        <p className="text-gray-700 text-sm break-all">
          contact@ocode.ma
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-white rounded-2xl shadow-md px-6 py-5 flex items-center gap-5 hover:shadow-lg transition duration-300">
      
      <div className="w-13 h-13 rounded-full bg-[#6d7c22] flex items-center justify-center shrink-0">
       
         <FaMapMarkerAlt className="text-white w-7 h-7" />
      </div>

      <div>
        <h3 className="text-black font-bold text-md pt-8">
          {t("footer.address")}
        </h3>

        <div className="w-10 h-[3px] bg-[#6d7c22] my-1 rounded-full"></div>

        <p className="text-gray-700 text-base leading-6 text-sm">
          {t("footer.addressDesc")}
        </p>
      </div>
    </div>

  </div>
</section>



      

      {/* MAIN FOOTER */}
      <section className="px-6 md:px-10 py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:ml-20 ">

        {/* LOGO + DESC */}
        <div className="text-center md:text-left">
          <Image
            src="/footer/LOGO_OCODE.png"
            width={180}
            height={180}
            alt="O'CODE Logo"
            className="mx-auto md:mx-0"
          />

          <p className="text-black mt-4 leading-7 text-sm mr-13">
            {t("footer.desc")}
          </p>
        </div>

        {/* LIENS */}
        <div className="text-center md:text-left lg:ml-20">
          <h1 className="text-black text-sm font-semibold">
            {t("footer.pfoot1")}
          </h1>

          <hr className="bg-[#555c2f] w-20 h-1 mt-1 mb-4 border-[#555c2f] mx-auto md:mx-0" />

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#services" className="text-black cursor-pointer hover:text-[#555c2f] transition">
                {t("navbar.services")}
              </Link>
            </li>

            <li>
              <Link href="/#secteurs" className="text-black cursor-pointer hover:text-[#555c2f] transition">
                {t("navbar.sectors")}
              </Link>
            </li>

            <li>
              <Link href="/#methodologie" className="text-black cursor-pointer hover:text-[#555c2f] transition">
                {t("navbar.methodology")}
              </Link>
            </li>

            <li>
              <Link href="/#about" className="text-black cursor-pointer hover:text-[#555c2f] transition">
                {t("navbar.about")}
              </Link>
            </li>

           
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="text-center md:text-left">
          <h3 className="text-black text-sm font-semibold">
            {t("footer.pfoot2")}
          </h3>

          <hr className="bg-[#555c2f] w-32 h-1 mt-1 mb-4 border-[#555c2f] mx-auto md:mx-0" />

          <div className="flex justify-center md:justify-start gap-3">

            <a
              href="https://www.linkedin.com/company/ocodeofficiel/"
              className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-black text-sm transition duration-300 hover:bg-[#555c2f] hover:border-[#555c2f] hover:text-white"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/ocode_officiel?igsh=MWVwMGQ5bmd5Z21rNQ%3D%3D&utm_source=qr"
              className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-black text-sm transition duration-300 hover:bg-[#555c2f] hover:border-[#555c2f] hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/ocodeofficiel/"
              className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-black text-sm transition duration-300 hover:bg-[#555c2f] hover:border-[#555c2f] hover:text-white"
            >
              <FaFacebookF />
            </a>

           

          </div>
        </div>
      </section>

      {/* FOOTER BOTTOM */}
      <footer className="bg-white text-black text-center py-4 text-sm ">
        {t("footer.foot")}
      </footer>
    </div>
  );
}
