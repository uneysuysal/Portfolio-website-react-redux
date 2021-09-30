import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { postMail } from "../../redux/people/peopleSlice";

const Contact = () => {
  const [isim, setIsim] = useState("");
  const [soyisim, setSoyisim] = useState("");
  const [email, setEmail] = useState("");
  const [mesaj, setMesaj] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const sendMail = () => {
    dispatch(postMail({isim, soyisim, email, mesaj}));
    setIsim("");
    setSoyisim("");
    setMesaj("");
    setEmail("");
}

  

  

  return (
    <div className="flex border-3 border-black justify-center items-center dark:bg-black h-screen">
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              for="grid-first-name"
            >
              {t('contact.name')}
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              onChange={(e) => setIsim(e.target.value)}
              value={isim}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              {t('contact.surname')}
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder=""
              onChange={(e) => setSoyisim(e.target.value)}
              value={soyisim}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              for="grid-password"
            >
              {t('contact.message')}
            </label>
            <textarea
              class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              onChange={(e) => setMesaj(e.target.value)}
              value={mesaj}
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-green-500 font-bold py-2 px-4 rounded dark:bg-white"
              type="button"
              onClick={sendMail}
            >
              {t('contact.send')}
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
