import { logo } from "../../assets/icon-lib.tsx";
import profilPic from "../../assets/imgs/profile-pic-berny-itouou.png";

export default function Header() {
  return (
    <header
      className={"c-container py-4 flex justify-between fixed z-50 top-0"}
    >
      <div className="logo">{logo}</div>
      <nav className={"flex items-center gap-x-2"}>
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
      <div className="cta-button">
        <a className={"button pl-2 primary flex items-center gap-x-2"} href="#">
          <img className={"aspect-square w-7"} src={profilPic} alt="" />
          <span>Contact Me</span>
        </a>
      </div>
    </header>
  );
}