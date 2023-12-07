import {
  getSkillIcon,
  SkillIcon,
  toolIcon,
} from "../../../../assets/icon-lib.tsx";
import { useEffect, useRef, useState } from "react";
import Section from "../../../../layout/Section.tsx";
import IconTitle from "../../../../components/IconTitle.tsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFadeInAnimation } from "../../../../hooks/useFadeAnimation.tsx";
import { customCubic } from "../../../../App.tsx";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../hooks/useFetch.tsx";

gsap.registerPlugin(ScrollTrigger);

export interface Skill {
  id: string;
  name: string;
  icon: string;
}

interface SkillSection {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  skills: Skill[];
}

export default function SkillsSection() {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const { data } = useFetch("/api/skills/skills.json");
  const [skills, setSkills] = useState<SkillSection[]>([]);

  useFadeInAnimation({
    ref: titleRef,
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  });

  useEffect(() => {
    if (data) {
      setSkills(data);
    }
  }, [data]);

  return (
    <Section id={"skills"} customClass={"py-5 lg:py-[10rem] flex flex-col"}>
      <IconTitle
        itemRef={titleRef}
        customClass={"!mb-15 text-xl"}
        title={t("common:labels.aboutMySkills")}
        icon={toolIcon}
      />

      <div
        className={`skills lg:max-w-[80vw] w-full mx-auto grid gap-10 grid-cols-1 lg:grid-cols-3`}
      >
        {skills.map((data, index) => (
          <SkillsBlock key={data.id} data={data} index={index} />
        ))}
      </div>
    </Section>
  );
}

interface SkillsBlockTypes {
  data: SkillSection;
  index: number;
}

function SkillsBlock({ data, index = 0 }: SkillsBlockTypes) {
  const currentLang = localStorage.getItem("i18nextLng");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useFadeInAnimation({
    ref: sectionRef,
    duration: 0.5,
    delay: parseInt(`${0}.${index}`),
    triggerScroll: true,
    ease: customCubic,
  });

  return (
    <div ref={sectionRef} className="skill">
      <h4 className="button lg:w-full primary skill-title mb-4">
        {data.title[currentLang ?? "en"]}
      </h4>

      <ul className="skill-list flex flex-wrap gap-4">
        {data.skills.map((skill) => (
          <Skill
            key={skill.id}
            name={skill.name}
            id={skill.id}
            icon={skill.icon}
          />
        ))}
      </ul>
    </div>
  );
}

function Skill({ name, icon }: Skill) {
  return (
    <li
      className={
        "button bg-alternative min-w-max max-w-max dark:bg-transparent dark:border-alternative inline-flex gap-x-2 items-center"
      }
    >
      <span className={"w-6 h-6 aspect-square"}>
        {getSkillIcon(icon as keyof SkillIcon)}
      </span>
      <span>{name}</span>
    </li>
  );
}