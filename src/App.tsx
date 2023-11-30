import Section from "./layout/Section.tsx";
import Header from "./layout/header/Header.tsx";
import IconTitle from "./components/icon-title/IconTitle.tsx";
import { aboutIcon, infosBubble } from "./assets/icon-lib.tsx";

function App() {
  return (
    <>
      <Header />
      <Section customClass={"h-[100vh] flex flex-col justify-center relative"}>
        <div className="base-part flex-grow flex items-center gap-x-[100px]">
          <h1 className={"flex flex-col flex-grow"}>
            <span className="sub-title font-bold">Hello there, I'm</span>
            <span className="title text-[100px] font-black">Berny Itoutou</span>
            <span>
              {" "}
              I'm a <span className="font-bold">Frontend Developer</span> based
              in France.
            </span>
          </h1>
          <div className="cover-cta flex items-end min-w-[30%]">
            <a className={"button alternative text-2xl"} href="#projects">
              See my work
            </a>
          </div>
        </div>
        <div className="infos-part pb-gutter flex justify-between">
          <div className="about-me max-w-[350px]">
            <IconTitle
              customClass={"mb-3"}
              title={"About Me"}
              icon={aboutIcon}
            />
            <p className="text pl-9">
              I'm a Frontend Developer based in France. I have a serious passion
              for UI effects, animations and creating intuitive, dynamic user
              experiences. Let's make something special.
            </p>
          </div>
          <div className="details w-full max-w-[500px]">
            <IconTitle
              customClass={"mb-3"}
              title={"Quick resume"}
              icon={infosBubble}
            />
            <div className="pl-10 details-rows flex flex-col gap-y-2">
              <ul className={"details-items flex gap-x-2"}>
                <li>
                  <p className={"bubble-item min-w-max alternative"}>
                    Frontend Developer
                  </p>
                </li>
                <li>
                  <p className={"bubble-item min-w-max alternative"}>
                    Specialised in Javascript
                  </p>
                </li>
              </ul>
              <ul className={"details-items flex gap-x-2"}>
                <li>
                  <p className={"bubble-item min-w-max alternative"}>
                    3+ years of experience
                  </p>
                </li>
                <li>
                  <p className={"bubble-item min-w-max alternative"}>
                    Freelance
                  </p>
                </li>
                <li>
                  <p className={"bubble-item min-w-max alternative"}>
                    Remote / Hybride
                  </p>
                </li>
              </ul>
              <ul className={"details-items flex gap-x-2"}>
                <li>
                  <a
                    href={"https://sowen-group.fr"}
                    className={"bubble-item min-w-max alternative"}
                  >
                    sowen-group.fr
                  </a>
                </li>
                <li>
                  <a
                    href={"https://alvo.market"}
                    className={"bubble-item min-w-max alternative"}
                  >
                    alvo.market
                  </a>
                </li>
                <li>
                  <a
                    href={"https://futuribles.fr"}
                    className={"bubble-item min-w-max alternative"}
                  >
                    futuribles.fr
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default App;