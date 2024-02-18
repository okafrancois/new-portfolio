import IconTitle from "../../../../components/IconTitle.tsx";
import Section from "../../../../layout/Section.tsx";
import FeaturedProject from "./FeaturedProject.tsx";
import { useRef } from "react";
import { useFadeInAnimation } from "../../../../hooks/useFadeAnimation.tsx";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../hooks/useFetch.tsx";
import { Project } from "./types.tsx";
import ErrorComponent from "../../../../components/ErrorComponent.tsx";
import Icon from "../../../../components/Icon.tsx";
import { customCubic } from "../../../../assets/lib.ts";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const sectionTitle = useRef<HTMLHeadingElement | null>(null);
  const { data, loading, error } = useFetch<Project[]>(
    "/api/projects/projects.json",
  );

  useFadeInAnimation({
    ref: sectionTitle,
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorComponent errorMessage={error} />;

  return (
    <Section
      id={"projects"}
      customClass={"min-h-[100vh] py-[100px] flex flex-col"}
    >
      <IconTitle
        itemRef={sectionTitle}
        customClass={"!mb-15 text-xl"}
        title={t("common:labels.projectSelection")}
        icon={<Icon name={"starIcon"} />}
      />

      <div className="flex flex-col gap-20">
        {data?.map((project, index) => (
          <FeaturedProject data={project} key={project.id} index={index} />
        ))}
      </div>
    </Section>
  );
}