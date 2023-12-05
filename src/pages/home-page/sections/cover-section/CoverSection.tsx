import IconTitle from "../../../../components/IconTitle.tsx";
import { aboutIcon, infosBubble } from "../../../../assets/icon-lib.tsx";
import Section from "../../../../layout/Section.tsx";
import { Button } from "../../../../components/Button.tsx";

export default function CoverSection() {
  return (
    <Section
      customClass={"min-h-[100dvh] py-10 flex flex-col justify-center relative"}
    >
      <div className="py-20 lg:py-0 base-part mb-8 flex-grow flex flex-col lg:flex-row lg:items-center gap-y-4 gap-x-[4rem]">
        <h1 className={"flex max-w-max flex-col text-md lg:flex-grow"}>
          <span className="sub-title font-bold">Hello there, I'm</span>
          <span className="min-w-max title text-[3rem] md:text-[5rem] lg:text-[7rem] font-black">
            Berny Itoutou
          </span>
          <span>
            {" "}
            I'm a <span className="font-bold">Frontend Developer</span> based in
            France.
          </span>
        </h1>
        <div className="cover-cta flex items-end min-w-[30%]">
          <Button
            theme={"alternative"}
            customClass={"text-md lg:text-xl px-8 lg:!px-15 lg:!py-4"}
            label={"Explore my work"}
            link={"#projects"}
            target={"_self"}
          />
        </div>
      </div>
      <div className="infos-part mb-5 lg:mb-0 flex gap-y-8 justify-between flex-wrap">
        <div className="about-me max-w-[400px]">
          <IconTitle customClass={"mb-3"} title={"About Me"} icon={aboutIcon} />
          <p className="text lg:pl-8">
            I'm a Frontend Developer based in France. I have a serious passion
            for UI effects, animations and creating intuitive, dynamic user
            experiences. Let's make something special.
          </p>
        </div>
        <div className="details w-full lg:max-w-max">
          <IconTitle
            customClass={"mb-3"}
            title={"Quick resume"}
            icon={infosBubble}
          />
          <div className="lg:pl-8 details-rows flex flex-col gap-y-2">
            <ul className={"details-items flex flex-wrap gap-2"}>
              <li className={"hidden md:block"}>
                <p
                  className={
                    "bubble-item min-w-max primary opacity-70 pointer-events-none"
                  }
                >
                  Frontend Developer
                </p>
              </li>
              <li>
                <p
                  className={
                    "bubble-item min-w-max primary opacity-70 pointer-events-none"
                  }
                >
                  Specialised in Javascript
                </p>
              </li>
            </ul>
            <ul className={"details-items flex flex-wrap gap-2"}>
              <li>
                <p
                  className={
                    "bubble-item min-w-max alternative border-dashed opacity-50 pointer-events-none"
                  }
                >
                  3+ years of experience
                </p>
              </li>

              <li className={"hidden md:block"}>
                <p
                  className={
                    "bubble-item min-w-max alternative border-dashed opacity-50 pointer-events-none"
                  }
                >
                  Freelance
                </p>
              </li>
              <li>
                <p
                  className={
                    "bubble-item min-w-max alternative border-dashed opacity-50 pointer-events-none"
                  }
                >
                  Remote / Hybride
                </p>
              </li>
            </ul>
            <ul className={"details-items flex flex-wrap gap-2"}>
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
              <li className={"hidden md:block"}>
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
  );
}