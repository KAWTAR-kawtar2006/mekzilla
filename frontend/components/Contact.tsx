'use client';

import { sendEmail } from '@/app/actions';
import { useState } from 'react';
import { getNames } from 'country-list';

import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";



export default function ContactForm() {
  const [token, setToken] = useState("");


  const [langOpen, setLangOpen] = useState(false);

  const { t } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setLangOpen(false);
    
  };


  const countries = getNames();

  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    msg: '',
    type: '',
  });

  async function handleForm(formData: FormData) {
    setLoading(true);
    setStatus({
      msg: '',
      type: '',
    });

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setStatus({
          msg: result.message,
          type: 'success',
        });

        const form =
          document.getElementById(
            'contact-form'
          ) as HTMLFormElement | null;

        form?.reset();
        setCountry('');
      } else {
        setStatus({
          msg: result.message,
          type: 'error',
        });
      }
    } catch (error) {
      console.error(error);

      setStatus({
        msg: 'Erreur, veuillez réessayer.',
        type: 'error',
      });
    } finally {
      setLoading(false);

      setTimeout(() => {
        setStatus({
          msg: '',
          type: '',
        });
      }, 4000);
    }
  }

  const input =
    'peer w-full rounded-md border border-[#DADDBF] bg-[#E7E7E7] px-4 py-3 text-sm text-[#0A1119] outline-none focus:border-[#555C2F] focus:ring-2 focus:ring-[#7F865B]/25';

  const wrapper = 'relative';

  const label = `
    absolute left-4 top-3 text-[#494949] text-sm transition-all pointer-events-none
    peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1
    peer-not-placeholder-shown:-top-2
    peer-not-placeholder-shown:text-xs
    peer-not-placeholder-shown:bg-white
    peer-not-placeholder-shown:px-1
  `;

  return (
   <section id="contact" className="scroll-mt-15 bg-white  py-18 sm:py-18">
  
  {/* TITRE */}
  <div className="px-4 sm:px-8 lg:px-0 lg:ml-67 grid gap-2">
    <h1 className="text-4xl sm:text-5xl font-bold text-black ">
      {t('contact.titleCtc')}
    </h1>

    <p className="text-base sm:text-lg text-[#0A1119]/80">
      {t('contact.pCtc')}
    </p>
  </div>

  {/* FORM */}
  <form
    id="contact-form"
    action={handleForm}
    className="px-4 sm:px-8 lg:mx-60 pt-5 pb-6 sm:pb-6 bg-white"
  >
    <div className="grid gap-5 sm:grid-cols-2">

      {/* NOM */}
      <div className={wrapper}>
        <input name="nom" required placeholder=" " className={input} />
        <label className={label}>{t('contact.lastname')}</label>
      </div>

      {/* PRENOM */}
      <div className={wrapper}>
        <input name="prenom" required placeholder=" " className={input} />
        <label className={label}>{t('contact.firstname')}</label>
      </div>

      {/* EMAIL */}
      <div className={wrapper}>
        <input
          type="email"
          name="email"
          required
          placeholder=" "
          className={input}
        />
        <label className={label}>{t('contact.email')}</label>
      </div>

      {/* TELEPHONE */}
      <div className={wrapper}>
        <input
          type="tel"
          name="num"
          placeholder=" "
          className={input}
        />
        <label className={label}>{t('contact.number')}</label>
      </div>

      {/* ENTREPRISE */}
      <div className={wrapper}>
        <input name="ese" required placeholder=" " className={input} />
        <label className={label}>{t('contact.enterprise')}</label>
      </div>

      {/* PAYS */}
      <div className="relative">
        <select
          name="pays"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`${input} ${
            country ? 'text-black' : 'text-[#494949]'
          }`}
        >
          <option value="" disabled>
            {t('contact.country')}
          </option>

          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* MESSAGE */}
      <div className="sm:col-span-2 relative">
        <textarea
          name="msg"
          rows={6}
          required
          placeholder=" "
          className={`${input} resize-none`}
        />
        <label className={label}>{t('contact.message')}</label>
      </div>
    </div>

    {/* CHECKBOX */}
    <div className="mt-4 text-sm sm:text-md text-[#555]">
      <input
        type="checkbox"
        name="donnee"
        className="mr-2"
        required
      />
      {t('contact.checkbox')}
    </div>

    <input
      type="text"
      name="website"
      className="hidden"
      tabIndex={-1}
      autoComplete="off"
    />

    {/* BUTTON */}
    <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
      <button
        type="submit"
        disabled={loading}
        className="bg-[#555C2F] text-white font-bold px-8 sm:px-12 py-3 rounded-3xl hover:bg-[#7F865B] cursor-pointer w-full sm:w-auto"
      >
        {loading
          ? t('contact.beforesubmit')
          : t('contact.submit')}
      </button>

      {status.msg && (
        <p
          className={
            status.type === 'success'
              ? 'text-[#555C2F] text-sm sm:text-md font-semibold'
              : 'text-red-700 text-sm sm:text-md font-semibold'
          }
        >
          {status.msg}
        </p>
      )}
    </div>
  </form>
</section>
  );
}
