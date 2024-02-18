import { Project } from "./types.tsx";
import { Button } from "../../../../components/Button.tsx";
import { linkIcon } from "../../../../assets/icon-lib.tsx";
import profilPic from "../../../../assets/img/profile-pic-berny-itouou.png";
import profilPicDark from "../../../../assets/img/ellipse-photo-dark.png";
import { useRef } from "react";
import { useFadeInAnimation } from "../../../../hooks/useFadeAnimation.tsx";
import { customCubic } from "../../../../assets/lib.ts";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

interface FeaturedProjectProps {
  data: Project;
  index: number;
}

export default function FeaturedProject({
  data,
}: Readonly<FeaturedProjectProps>) {
  const currentLanguage = i18n.language;
  const { t } = useTranslation();
  const projectBlock = useRef<HTMLDivElement | null>(null);

  useFadeInAnimation({
    ref: projectBlock,
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  });

  return (
    <div
      ref={projectBlock}
      className="featured-project flex flex-col lg:flex-row lg:nth-child-even:self-end lg:nth-child-even:flex-row-reverse w-full gap-8 lg:max-w-[80%]"
    >
      <div className={"cover min-w-[50%] relative overflow-hidden rounded-2xl"}>
        <img
          className={"w-full aspect-[300/200] h-auto object-cover"}
          src={data.image}
          alt={"project cover for " + data.enterprise}
        />
      </div>
      <div className={"details flex flex-col items-start justify-center"}>
        <h3 className="role flex gap-x-2 mb-2 md:min-w-max flex-wrap gap-y-2">
          <span
            className={
              "button text-sm md:text-base min-w-max post pl-2 primary gap-x-2"
            }
          >
            <span>
              <img
                className={"dark:hidden aspect-square w-6 h-auto"}
                src={profilPic}
                alt="berny itoutou"
              />
              <img
                className={"hidden aspect-square w-6 h-auto dark:inline-block"}
                src={profilPicDark}
                alt="berny itoutou"
              />
            </span>{" "}
            {data.role[currentLanguage]}
          </span>
          <span
            className={
              "button text-sm md:text-base min-w-max enterprise alternative border-dashed"
            }
          >
            {data.enterprise}
          </span>
        </h3>
        <ul
          className={"techs text-sm md:text-base flex flex-wrap gap-x-2 mb-4"}
        >
          {data.technologies.map((item) => (
            <li key={item.id}>#{item.name}</li>
          ))}
        </ul>
        <p className={"description mb-4 max-w-[450px]"}>
          {data.description[currentLanguage]}
        </p>
        <Button
          icon={linkIcon}
          label={t("common:actions.seeWebsite")}
          link={data.link}
          target={"_blank"}
        />
      </div>
    </div>
  );
}