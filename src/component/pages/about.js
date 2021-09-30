import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import Skills from './skills';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { fetchAboutData } from '../../redux/people/peopleSlice';
import { URL } from '../../urls';
  
const About = () => {
  const About = useSelector((state) => state.fetchData.aboutData)
  const langD = useSelector((state) => state.fetchData.language)
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  console.log({About});
  
  useEffect(() => { 
    dispatch(fetchAboutData(langD));
    }, [langD]);

  if (!About) return null;
  return (

    <div className="dark:bg-black flex mx-auto flex-col items-center h-screen">
      <div className="pb-5 dark:bg-black">
        <div className="dark:bg-black">

      {About.map(about =>(
      <header class="max-h-full bg-white dark:bg-black">
  <div class="md:px-52 mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40 dark:bg-black">
    <div class="grid justify-center items-center order-1 col-span-1 dark:bg-black">
      <img class="lg:h-80 md:h-64 h-40 rounded-full" src={`${about.foto.url}`} alt="" />
    </div>
    <div class="mt-8 md:mt-0 lg:justify-end col-span-2 dark:bg-black">
      <h1 class="text-4xl text-gray-800 dark:text-white text-center md:text-left font-bold mb-6">{about.isim}, {about.meslek}</h1>
      <p class="text-xl text-gray-800 dark:text-white text-center md:text-left">{about.hakkinda}</p>
      <div className="flex justify-center dark:bg-black">
      <a class="mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-green-400" href={about.cv}>{t('about.cv')}</a>
    </div></div>
  </div>
</header>
))}


</div><Skills/>

</div>
    </div>
  );
};
  
export default About;
