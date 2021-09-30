import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { fetchProjectsData } from "../../redux/people/peopleSlice";


const Project = () => {
  const Project = useSelector(state => state.fetchData.projectsData)
  const langD = useSelector((state) => state.fetchData.language)
  const dispatch = useDispatch();
  const { t } = useTranslation();
  console.log({Project});
  
  useEffect(() => { 
    dispatch(fetchProjectsData(langD));
    }, [langD]);

  if (!Project) return null;
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 w-full dark:bg-black h-screen">
      {Project.map((project) => (
        <div key={project.id} className="project">
          <div class="max-w-2xl mx-auto mt-24 w-full">
            <div class="max-w-screen-md md:w-3/4 mx-auto w-full">
              <div class="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 w-full bg-green-500 rounded-xl">
                <p class="w-full text-2xl font-semibold text-white">
                  {project.isim}
                </p>
                <p class="w-full pb-8 text-sm tracking-wide leading-tight text-white">
                  {project.bilgi}
                </p>
                <div className="flex justify-start items-center gap-3 w-full">
                  <div className="w-3 h-3 rounded-full bg-white " />
                <span>
                  {project.dil}
                </span>
                  
                </div>
                <div class="rounded mr-auto">
                  <div class="opacity-95 border rounded-lg border-white px-4">
                    <a
                      class="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2"
                      href={project.codeurl}
                    >
                      koda git
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
