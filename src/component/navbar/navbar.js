import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

import { Nav, NavLink, NavMenu, NavBtn } from "./NavbarElements";

import Navbar from "./burger/Navbar";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useDispatch } from "react-redux";
import { langData } from "../../redux/people/peopleSlice";

const Navbars = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
    dispatch(langData(lang))
  
  }
  return (
    <div>
      <Nav className="flex justify-center items-center">
        <div class="d-block  d-sm-none z-30">
          <Navbar />
        </div>
        <div class="d-none d-sm-block flex w-full items-center">
          <NavMenu>
            <NavLink className="text-white font-bold" to="/" activeStyle>
              {t("nav.home")}
            </NavLink>
            <NavLink className="text-white font-bold" to="/about" activeStyle>
              {t("nav.about")}
            </NavLink>

            <NavLink className="text-white font-bold" to="/project" activeStyle>
              {t("nav.project")}
            </NavLink>
            <NavLink className="text-white font-bold" to="/blogs" activeStyle>
              {t("nav.blog")}
            </NavLink>
            <NavLink className="text-white font-bold" to="/contact" activeStyle>
              {t("nav.contact")}
            </NavLink>
          </NavMenu>
        </div>

        <NavBtn>
          <button className="mr-1" onClick={() => handleClick("en")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              id="flag-icon-css-gb"
              viewBox="0 0 512 512"
            >
              <path fill="#012169" d="M0 0h512v512H0z" />
              <path
                fill="#FFF"
                d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
              />
              <path
                fill="#C8102E"
                d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
              />
              <path
                fill="#FFF"
                d="M176 0v512h160V0H176zM0 176v160h512V176H0z"
              />
              <path
                fill="#C8102E"
                d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"
              />
            </svg>
          </button>

          <button onClick={() => handleClick("tr")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              id="flag-icon-css-tr"
              viewBox="0 0 512 512"
            >
              <g fill-rule="evenodd">
                <path fill="#e30a17" d="M0 0h512v512H0z" />
                <path
                  fill="#fff"
                  d="M348.8 264c0 70.6-58.3 127.9-130.1 127.9s-130.1-57.3-130.1-128 58.2-127.8 130-127.8S348.9 193.3 348.9 264z"
                />
                <path
                  fill="#e30a17"
                  d="M355.3 264c0 56.5-46.6 102.3-104.1 102.3s-104-45.8-104-102.3 46.5-102.3 104-102.3 104 45.8 104 102.3z"
                />
                <path
                  fill="#fff"
                  d="M374.1 204.2l-1 47.3-44.2 12 43.5 15.5-1 43.3 28.3-33.8 42.9 14.8-24.8-36.3 30.2-36.1-46.4 12.8-27.5-39.5z"
                />
              </g>
            </svg>
          </button>

          <span
            onClick={() => setTheme(colorTheme)}
            class="w-10 h-10 bg-black block rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center"
          >
            {colorTheme === "light" ? (
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            ) : (
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </span>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbars;
