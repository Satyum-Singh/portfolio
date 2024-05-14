"use client";

import React, { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = React.useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) setTheme(localTheme);
    else if(window.matchMedia("(prefers-color-scheme:dark)").matches) setTheme('dark');
    else setTheme('light');
  }, []);

  return (
    <button
      className="fixed bottom-14 right-14 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/20 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={24} /> : <BsMoon size={24} />}
    </button>
  );
}
