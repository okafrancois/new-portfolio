import CoverSection from "./sections/cover-section/CoverSection.tsx";
import SkillsSection from "./sections/skills-section/SkillsSection.tsx";
import ProjectsSection from "./sections/projects-section/ProjectsSection.tsx";
import ContactSection from "./sections/contact-section/ContactSection.tsx";

export default function HomePage() {
  return (
    <>
      <CoverSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}