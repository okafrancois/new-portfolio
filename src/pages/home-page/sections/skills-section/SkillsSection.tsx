import { darkModeIcon, lightModeIcon } from "../../../../assets/icon-lib.tsx";
import { ReactNode } from "react";
import Section from "../../../../layout/Section.tsx";
import IconTitle from "../../../../components/IconTitle.tsx";
import { ulid } from "ulid";

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

interface Skill {
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
  return (
    <Section customClass={"h-[100vh] py-[200px] flex flex-col"}>
      <IconTitle
        customClass={"mb-8"}
        title={"Skills Overview"}
        icon={lightModeIcon}
      />

      <div className={`skills grid gap-8 grid-cols-${datas.length}`}>
        {datas.map((data) => (
          <div key={data.id} className="skill">
            <h4 className="button w-full primary skill-title mb-4">
              {data.title}
            </h4>

            <ul className="skill-list flex flex-col gap-4">
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
        ))}
      </div>
    </Section>
  );
}

function Skill({ name, icon }: Skill) {
  return (
    <li
      className={
        "button bg-alternative max-w-[200px] w-full dark:bg-transparent dark:border-alternative flex gap-x-2 items-center"
      }
    >
      <span className={"w-6 h-6 aspect-square"}>{icon}</span>
      <span>{name}</span>
    </li>
  );
}