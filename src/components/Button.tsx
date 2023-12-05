import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  label: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => void;
  type?: "button" | "submit" | "reset";
  theme?: string;
  id?: string;
  baseClass?: string;
  customClass?: string;
  link?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export function Button({
  icon,
  onClick,
  label,
  type = "button",
  id = "",
  baseClass = "button",
  theme = "primary",
  customClass = "",
  link,
  target,
}: ButtonProps) {
  return (
    <>
      {!link && (
        <button
          id={id}
          type={type}
          onClick={(e) => onClick?.(e)}
          className={`${baseClass} ${theme} flex items-center gap-x-2 ${customClass}`}
        >
          {icon && <span className={"w-6 h-6 aspect-square"}>{icon}</span>}

          <span>{label}</span>
        </button>
      )}

      {link && (
        <a
          target={target ?? "_self"}
          href={link}
          id={id}
          onClick={(e) => onClick?.(e)}
          className={`${baseClass} ${theme} flex items-center gap-x-2 ${customClass}`}
        >
          {icon && <span className={"w-6 h-6 aspect-square"}>{icon}</span>}

          <span>{label}</span>
        </a>
      )}
    </>
  );
}