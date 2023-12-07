import IconTitle from "../../../../components/IconTitle.tsx";
import { starIcon } from "../../../../assets/icon-lib.tsx";
import Section from "../../../../layout/Section.tsx";
import FeaturedProject from "./FeaturedProject.tsx";
import { useEffect, useRef, useState } from "react";
import { useFadeInAnimation } from "../../../../hooks/useFadeAnimation.tsx";
import { customCubic } from "../../../../App.tsx";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../hooks/useFetch.tsx";
import { Project } from "./types.tsx";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const sectionTitle = useRef<HTMLHeadingElement | null>(null);
  const { data } = useFetch("/api/projects/projects.json");

  const [projects, setProjects] = useState<Project[]>([]);

  useFadeInAnimation({
    ref: sectionTitle,
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  });

  useEffect(() => {
    if (data) {
      setProjects(data);
    }
  }, [data]);

  return (
    <Section
      id={"projects"}
      customClass={"min-h-[100vh] py-[100px] flex flex-col"}
    >
      <IconTitle
        itemRef={sectionTitle}
        customClass={"!mb-15 text-xl"}
        title={t("common:labels.projectSelection")}
        icon={starIcon}
      />

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <FeaturedProject data={project} key={project.id} index={index} />
        ))}
      </div>
    </Section>
  );
}