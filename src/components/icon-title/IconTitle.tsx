import { ReactNode } from "react";

interface IconTitleProps {
  title: string | ReactNode;
  icon: ReactNode;
  customClass?: string;
}

export default function IconTitle({
  icon,
  title,
  customClass,
}: Readonly<IconTitleProps>) {
  return (
    <h3
      className={
        "flex items-center gap-x-2 font-semibold font-cooper" +
        ` ${customClass}`
      }
    >
      <span className="icon">{icon}</span>
      <span className="title">{title}</span>
    </h3>
  );
}