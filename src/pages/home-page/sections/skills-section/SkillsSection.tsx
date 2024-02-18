import { IconName } from "../../../../assets/icon-lib.tsx";
import { useRef } from "react";
import Section from "../../../../layout/Section.tsx";
import IconTitle from "../../../../components/IconTitle.tsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFadeInAnimation } from "../../../../hooks/useFadeAnimation.tsx";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../hooks/useFetch.tsx";
import ErrorComponent from "../../../../components/ErrorComponent.tsx";
import Icon from "../../../../components/Icon.tsx";
import { customCubic } from "../../../../assets/lib.ts";

gsap.registerPlugin(ScrollTrigger);

export interface Skill {
  id: string;
  name: string;
  icon: IconName;
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
  const { data, loading, error } = useFetch<SkillSection[]>(
    "/api/skills/skills.json",
  );

  useFadeInAnimation({
    ref: titleRef,
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorComponent errorMessage={error} />;

  return (
    <Section id={"skills"} customClass={"py-5 lg:py-[10rem] flex flex-col"}>
      <IconTitle
        itemRef={titleRef}
        customClass={"!mb-15 text-xl"}
        title={t("common:labels.aboutMySkills")}
        icon={<Icon name={"toolIcon"} />}
      />

      <div
        className={`skills lg:max-w-[80vw] w-full mx-auto grid gap-10 grid-cols-1 lg:grid-cols-3`}
      >
        {data?.map((data, index) => (
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

function SkillsBlock({ data, index = 0 }: Readonly<SkillsBlockTypes>) {
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
      <h3 className="button lg:w-full primary skill-title mb-4">
        {data.title[currentLang ?? "en"]}
      </h3>

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

function Skill({ name, icon }: Readonly<Skill>) {
  return (
    <li
      className={
        "button bg-alternative min-w-max max-w-max dark:bg-transparent dark:border-alternative inline-flex gap-x-2 items-center"
      }
    >
      <span className={"w-6 h-6 aspect-square"}>
        <Icon name={icon} />
      </span>
      <span>{name}</span>
    </li>
  );
}