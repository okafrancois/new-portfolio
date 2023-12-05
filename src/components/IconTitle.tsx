import { ReactNode } from "react";

interface IconTitleProps {
  title: string | ReactNode;
  icon: ReactNode;
  customClass?: string;
  titleId?: string;
}

export default function IconTitle({
  icon,
  title,
  customClass,
  titleId,
}: Readonly<IconTitleProps>) {
  return (
    <h3
      className={
        "flex mb-4 items-center gap-x-2 font-semibold font-cooper" +
        ` ${customClass}`
      }
      id={titleId ?? ""}
    >
      <span className="icon w-6 aspect-square">{icon}</span>
      <span className="title">{title}</span>
    </h3>
  );
}