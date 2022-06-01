import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { VscGithubAlt } from "../Misc/Icons.collection";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import type { linkProps } from "../../@types/prop.types";
import {useState, useEffect} from "react";

const TextLink: NextComponentType<NextPageContext, {}, linkProps> = ({
  text,
  url,
}) => {
  return (
    <a
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl dark:text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </a>
  );
};

const Header: NextComponentType = () => {

  const [mounted, setMounted] = useState(false);
  const {systemTheme , theme, setTheme} = useTheme ();
  
  useEffect(() =>{
    setMounted(true);
  },[])

  const renderThemeChanger= () => {
    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
      )
    }
 };  


  return (
    <header
      className={`font-jost py-8 sm:flex sm:flex-row sm:items-center sm:justify-between`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" url="#" />
        <TextLink text="Skills" url="#skills" />
        <TextLink text="Projects" url="#projects" />
        <TextLink text="Contact" url="#contact" />
        
      </p>

        <a
          className="float-right mr-2 rounded-lg dark:bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
        >
          {renderThemeChanger()}
        </a>
    </header>
  );
};

export default Header;
