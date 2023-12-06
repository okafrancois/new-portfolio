import { logo } from "../assets/icon-lib.tsx";
import profilPic from "../assets/img/profile-pic-berny-itouou.png";
import profilPicDark from "../assets/img/ellipse-photo-dark.png";
import DarkModeSwitcher from "../components/DarkModeSwitcher.tsx";
import { Button } from "../components/Button.tsx";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher.tsx";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header
      className={"c-container py-4 flex justify-between fixed z-50 top-0"}
    >
      <div className="logo aspect-square flex items-center">
        <span className={"icon"}>{logo}</span>
      </div>
      <nav className={"hidden sm:flex items-center gap-x-2 "}>
        <a className={"button alternative"} href="#skills">
          {t("common:navigation.skills")}
        </a>
        <a className={"button alternative"} href="#projects">
          {t("common:navigation.projects")}
        </a>
        <a className={"button alternative"} href="#contact">
          {t("common:navigation.contact")}
        </a>
      </nav>
      <div className="cta-button flex gap-x-3">
        <LanguageSwitcher />
        <DarkModeSwitcher />
        <Button
          icon={
            <>
              <img
                className={"dark:hidden w-full"}
                src={profilPic}
                alt="My profil picture"
              />
              <img
                className={"hidden dark:inline w-full"}
                src={profilPicDark}
                alt="My profil picture"
              />
            </>
          }
          customClass={"pl-2"}
          label={t("common:actions.contact")}
          link={"mailto:itoutouberny@gmail.com"}
        />
      </div>
    </header>
  );
}