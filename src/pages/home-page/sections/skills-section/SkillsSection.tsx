import { darkModeIcon, toolIcon } from "../../../../assets/icon-lib.tsx";
import { ReactNode, useRef } from "react";
import Section from "../../../../layout/Section.tsx";
import IconTitle from "../../../../components/IconTitle.tsx";
import { ulid } from "ulid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFadeInAnimation } from "../../../../hooks/useFadeAnimation.tsx";
import { customCubic } from "../../../../App.tsx";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const datas: SkillSection[] = [
  {
    id: ulid(),
    title: "Frontend Development",
    skills: [
      {
        id: ulid(),
        name: "HTML",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "CSS",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "JavaScript",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "React",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Next.js",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Tailwind CSS",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Bootstrap",
        icon: darkModeIcon,
      },
    ],
  },
  {
    id: ulid(),
    title: "Backend Development",
    skills: [
      {
        id: ulid(),
        name: "Node.js",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Express.js",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "MongoDB",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "GraphQL",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Docker",
        icon: darkModeIcon,
      },
    ],
  },
  {
    id: ulid(),
    title: "Others",
    skills: [
      {
        id: ulid(),
        name: "Figma",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Git",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Github Actions",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Docker",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Canva",
        icon: darkModeIcon,
      },
      {
        id: ulid(),
        name: "Axios",
        icon: darkModeIcon,
      },
    ],
  },
];

export interface Skill {
  id: string;
  name: string;
  icon: ReactNode;
}

interface SkillSection {
  id: string;
  title: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useFadeInAnimation({
    ref: titleRef,
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  });

  return (
    <Section id={"skills"} customClass={"py-5 lg:py-[10rem] flex flex-col"}>
      <IconTitle
        itemRef={titleRef}
        customClass={"!mb-15 text-xl"}
        title={t("common:labels.aboutMySkills")}
        icon={toolIcon}
      />

      <div
        className={`skills lg:max-w-[70vw] w-full mx-auto grid gap-10 grid-cols-1 lg:grid-cols-3`}
      >
        {datas.map((data, index) => (
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
        {data.title}
      </h4>

      <ul className="skill-list flex flex-wrap gap-4">
        {data.skills.map((skill) => (
          <Skill
            key={skill.id}
            name={skill.name}
            icon={skill.icon}
            id={skill.id}
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
      <span className={"w-6 h-6 aspect-square"}>{icon}</span>
      <span>{name}</span>
    </li>
  );
}