import { logo } from "../assets/icon-lib.tsx";
import profilPic from "../assets/img/profile-pic-berny-itouou.png";
import profilPicDark from "../assets/img/ellipse-photo-dark.png";
import DarkModeSwitcher from "../components/DarkModeSwitcher.tsx";
import { Button } from "../components/Button.tsx";

export default function Header() {
  return (
    <header
      className={"c-container py-4 flex justify-between fixed z-50 top-0"}
    >
      <div className="logo aspect-square flex items-center">{logo}</div>
      <nav className={"hidden sm:flex items-center gap-x-2 "}>
        <a className={"button alternative"} href="#">
          Skills
        </a>
        <a className={"button alternative"} href="#">
          Projects
        </a>
        <a className={"button alternative"} href="#">
          Contact
        </a>
      </nav>
      <div className="cta-button flex gap-x-3">
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
          label={"Contact Me"}
          link={"mailto:itoutouberny@gmail.com"}
        />
      </div>
    </header>
  );
}