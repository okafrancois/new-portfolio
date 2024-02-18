import IconTitle from "../../../../components/IconTitle.tsx";
import Section from "../../../../layout/Section.tsx";
import { Button } from "../../../../components/Button.tsx";
import { useRef } from "react";
import { useFadeInAnimation } from "../../../../hooks/useFadeAnimation.tsx";
import { customCubic } from "../../../../assets/lib.ts";
import { useTranslation } from "react-i18next";
import Icon from "../../../../components/Icon.tsx";

const featuresProjects = [
  {
    id: "sowen-group",
    title: "sowen-group.fr",
    link: "https://sowen-group.fr",
  },
  {
    id: "alvo-market",
    title: "alvo.market",
    link: "https://alvo.market",
  },
  {
    id: "futuribles",
    title: "futuribles.fr",
    link: "https://futuribles.fr",
  },
];

export default function CoverSection() {
  const { t } = useTranslation();
  const subtitleRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLElement | null>(null);
  const titleCover = useRef<HTMLElement | null>(null);
  const coverButton = useRef<HTMLDivElement | null>(null);
  const coverDetailsRef = useRef<HTMLDivElement>(null);
  const defaultConf: {
    duration: number;
    ease: string;
    animationType: "fadeInUp";
  } = {
    duration: 0.5,
    ease: customCubic,
    animationType: "fadeInUp",
  };

  useFadeInAnimation({
    ref: subtitleRef,
    ...defaultConf,
  });

  useFadeInAnimation({
    ref: titleRef,
    delay: 0.1,
    ...defaultConf,
  });

  useFadeInAnimation({
    ref: titleCover,
    delay: 0.2,
    ...defaultConf,
  });

  useFadeInAnimation({
    ref: coverButton,
    delay: 0.2,
    ...defaultConf,
  });

  useFadeInAnimation({
    ref: coverDetailsRef,
    delay: 0.5,
    duration: 0.5,
  });

  return (
    <Section
      customClass={"min-h-[100vh] py-10 flex flex-col justify-center relative"}
    >
      <div className="py-20 lg:py-0 base-part mb-8 flex-grow flex flex-col lg:flex-row lg:items-center gap-y-4 gap-x-[4rem]">
        <h1
          className={"cover-title flex max-w-max flex-col text-md lg:flex-grow"}
        >
          <span ref={subtitleRef} className="sub-title font-bold">
            {t("common:labels.title1")}
          </span>
          <span
            ref={titleRef}
            className="opacity-0 translate-y-[20px] min-w-max title text-[3rem] md:text-[5rem] lg:text-[7rem] font-black"
          >
            {t("common:labels.title2")}
          </span>
          <span ref={titleCover} className={"opacity-0 translate-y-[20px]"}>
            <span className="font-bold">{t("common:labels.role")}</span>{" "}
            {t("common:labels.title3")}
          </span>
        </h1>
        <div
          ref={coverButton}
          className="cover-cta opacity-0 translate-y-[20px]  flex items-end min-w-[30%]"
        >
          <Button
            theme={"alternative"}
            customClass={
              "projects lg:translate-y-10 button text-md lg:text-xl px-8 lg:!px-15 lg:!py-4"
            }
            label={t("common:actions.exploreWork")}
            link={"#projects"}
            target={"_self"}
          />
        </div>
      </div>
      <div
        ref={coverDetailsRef}
        className="opacity-0 infos-part mb-5 lg:mb-0 flex gap-y-8 justify-between flex-wrap"
      >
        <div className="about-me max-w-[400px]">
          <IconTitle
            customClass={"mb-3"}
            title={t("common:labels.aboutMe")}
            icon={<Icon name={"aboutIcon"} />}
          />
          <p className="text lg:pl-8">{t("common:labels.coverQuote")}</p>
        </div>
        <div className="details w-full lg:max-w-max">
          <IconTitle
            customClass={"mb-3"}
            title={t("common:labels.quickResume")}
            icon={<Icon name={"infosBubbleIcon"} />}
          />
          <div className="lg:pl-8 details-rows flex flex-col gap-y-2">
            <ul className={"details-items flex flex-wrap gap-2"}>
              <li className={"hidden md:block"}>
                <p
                  className={
                    "bubble-item min-w-max primary opacity-70 pointer-events-none"
                  }
                >
                  {t("common:resume.role")}
                </p>
              </li>
              <li>
                <p
                  className={
                    "bubble-item min-w-max primary opacity-70 pointer-events-none"
                  }
                >
                  {t("common:resume.speciality")}
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
                  {t("common:resume.experience")}
                </p>
              </li>

              <li className={"hidden md:block"}>
                <p
                  className={
                    "bubble-item min-w-max alternative border-dashed opacity-50 pointer-events-none"
                  }
                >
                  {t("common:resume.contract")}
                </p>
              </li>
              <li>
                <p
                  className={
                    "bubble-item min-w-max alternative border-dashed opacity-50 pointer-events-none"
                  }
                >
                  {t("common:resume.location")}
                </p>
              </li>
            </ul>
            <ul className={"details-items flex flex-wrap gap-2"}>
              {featuresProjects.map((project) => (
                <li key={project.id}>
                  <Button
                    label={project.title}
                    link={project.link}
                    target={"_blank"}
                    theme={"alternative"}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}