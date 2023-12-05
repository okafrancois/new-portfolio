import { ulid } from "ulid";
import { Project } from "./types.tsx";
import IconTitle from "../../../../components/IconTitle.tsx";
import { lightModeIcon } from "../../../../assets/icon-lib.tsx";
import Section from "../../../../layout/Section.tsx";
import FeaturedProject from "./FeaturedProject.tsx";

export default function ProjectsSection() {
  return (
    <Section customClass={"min-h-[100vh] py-[100px] flex flex-col"}>
      <IconTitle
        customClass={"!mb-15 text-xl"}
        title={"Project selection"}
        icon={lightModeIcon}
        titleId={"projects"}
      />

      <div className="flex flex-col gap-16 lg:gap-0">
        {projects.map((project, index) => (
          <FeaturedProject data={project} key={project.id} index={index} />
        ))}
      </div>
    </Section>
  );
}

const projects: Project[] = [
  {
    id: ulid(),
    role: "Frontend Developer",
    enterprise: "Codelitt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/400/600",
    link: "https://www.google.com",
    technologies: [
      {
        id: ulid(),
        name: "React",
        icon: "icon",
      },
      {
        id: ulid(),
        name: "React",
        icon: "icon",
      },
      {
        id: ulid(),
        name: "React",
        icon: "icon",
      },
    ],
  },
  {
    id: ulid(),
    role: "Backend Developer",
    enterprise: "Initech",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/400/600",
    link: "https://www.example.com",
    technologies: [
      {
        id: ulid(),
        name: "Node.js",
        icon: "icon",
      },
      {
        id: ulid(),
        name: "Express.js",
        icon: "icon",
      },
      {
        id: ulid(),
        name: "MongoDB",
        icon: "icon",
      },
    ],
  },
  {
    id: ulid(),
    role: "Full stack developer",
    enterprise: "Hooli",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/400/600",
    link: "https://www.example.net",
    technologies: [
      {
        id: ulid(),
        name: "React",
        icon: "icon",
      },
      {
        id: ulid(),
        name: "Node.js",
        icon: "icon",
      },
      {
        id: ulid(),
        name: "MongoDB",
        icon: "icon",
      },
    ],
  },
  {
    id: ulid(),
    role: "Data analyst",
    enterprise: "Pied Piper",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/400/600",
    link: "https://www.example.org",
    technologies: [
      {
        id: ulid(),
        name: "Python",
        icon: "icon",
      },
      {
        id: ulid(),
        name: "Pandas",
        icon: "icon",
      },
      {
        id: ulid(),
        name: "R",
        icon: "icon",
      },
    ],
  },
];