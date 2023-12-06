import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  isFullWidth?: boolean;
  customClass?: string;
  id?: string;
}

export default function Section({
  children,
  isFullWidth = false,
  customClass = "",
  id = "",
}: Readonly<SectionProps>) {
  return (
    <section
      id={id}
      className={`${
        isFullWidth ? "c-full-container" : "c-container"
      } ${customClass}`}
    >
      {children}
    </section>
  );
}