import { darkModeIcon, lightModeIcon } from "../assets/icon-lib.tsx";

export default function DarkModeSwitcher() {
  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
  };

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