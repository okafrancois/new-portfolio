import { darkModeIcon, lightModeIcon } from "../assets/icon-lib.tsx";
import { useLayoutEffect } from "react";

export default function DarkModeSwitcher() {
  const darkMode = localStorage.getItem("darkMode");
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      root.classList.contains("dark").toString(),
    );
  };

  useLayoutEffect(() => {
    if (darkMode === "true") {
      const root = document.documentElement;
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }

    if (darkMode === undefined) {
      if (prefersDarkMode.matches) {
        const root = document.documentElement;
        root.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      }
    }
  }, [darkMode, prefersDarkMode]);

  return (
    <button onClick={() => toggleDarkMode()}>
      <span className={"dark:text-alternative dark:hidden icon"}>
        {darkModeIcon}
      </span>
      <span className={"hidden dark:inline-flex dark:text-alternative icon"}>
        {lightModeIcon}
      </span>
    </button>
  );
}