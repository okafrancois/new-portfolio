import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  isFullWidth?: boolean;
  customClass?: string;
}

export default function Section({
  children,
  isFullWidth = false,
  customClass = "",
}: Readonly<SectionProps>) {
  return (
    <section
      className={`${
        isFullWidth ? "c-full-container" : "c-container"
      } ${customClass}`}
    >
      {children}
    </section>
  );
}