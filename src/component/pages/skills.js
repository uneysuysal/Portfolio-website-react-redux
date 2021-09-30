import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { fetchSkillsData } from "../../redux/people/peopleSlice";

export default function Skills() {
  const Skill = useSelector(state => state.fetchData.skillsData)
  const langD = useSelector((state) => state.fetchData.language)
  const dispatch = useDispatch();
  const { t } = useTranslation();

  
  
  useEffect(() => { 
    dispatch(fetchSkillsData(langD));
    }, [langD]);
console.log(Skill);
  if (!Skill) return null;
  return (
    <div className="">
      <hr className="bg-black dark:bg-white" />
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold dark:text-white" >{t('skills.skill')}</h1>
      </div>
      <br />

      <div className="flex justify-center gap-10 flex-wrap ">
        {Skill.map((skill) => (
          <div key={skill.id} className="">
            <img src={skill.svg} width="80" height="80" />
          </div>
        ))}
      </div>
    </div>
  );
}
