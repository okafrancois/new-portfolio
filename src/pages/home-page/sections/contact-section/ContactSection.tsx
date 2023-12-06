import Section from "../../../../layout/Section.tsx";
import { ulid } from "ulid";
import {
  emailIcon,
  githubIcon,
  linkedInIcon,
  maltIcon,
} from "../../../../assets/icon-lib.tsx";
import { Button } from "../../../../components/Button.tsx";
import { ReactNode, useRef } from "react";
import { useFadeInAnimation } from "../../../../hooks/useFadeAnimation.tsx";
import { customCubic } from "../../../../App.tsx";

const contacts: {
  id: string;
  label: string;
  icon: ReactNode;
  link: string;
}[] = [
  {
    id: ulid(),
    label: "Email",
    icon: emailIcon,
    link: "mailto:itoutouberny@gmail.com",
  },
  {
    id: ulid(),
    label: "Linkedin",
    icon: linkedInIcon,
    link: "https://www.linkedin.com/in/francois-itoutou/",
  },
  {
    id: ulid(),
    label: "Malt",
    icon: maltIcon,
    link: "https://www.malt.fr/profile/bernyfrancoisitoutou",
  },
  {
    id: ulid(),
    label: "Github",
    icon: githubIcon,
    link: "https://github.com/okafrancois",
  },
];
export default function ContactSection() {
  const sectionTitle = useRef<HTMLHeadingElement | null>(null);
  const sectionDesc = useRef<HTMLParagraphElement | null>(null);
  const linksBlock = useRef<HTMLDivElement | null>(null);

  useFadeInAnimation({
    ref: sectionTitle,
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  });

  useFadeInAnimation({
    ref: sectionDesc,
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  });

  useFadeInAnimation({
    ref: linksBlock,
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  });

  return (
    <Section
      id={"contact"}
      customClass={
        "contact-me py-8 md:min-h-[80vh] lg:min-h-[100vh] flex flex-col items-center justify-center text-center"
      }
    >
      <h1 ref={sectionTitle} className={"text-[3rem] lg:text-[6rem] font-bold"}>
        Let's get in touch !
      </h1>
      <p
        ref={sectionDesc}
        className={"lg:font-semibold  lg:text-xl max-w-[900px] mb-10"}
      >
        I was a lover of beautiful web interfaces long before I started dev. It
        was this love that led me to front-end development and and it's with
        that same passion that I'll be happy to make your your project. So don't
        hesitate to contact me on the network of your choice to discuss your
        project!
      </p>
      <div
        ref={linksBlock}
        className="links flex flex-wrap gap-4 justify-center items-center"
      >
        <h2 className={"font-bold"}>Find me on :</h2>
        <ul
          className={
            "contacts-links flex flex-wrap justify-center lg:justify-start gap-4"
          }
        >
          {contacts.map((item) => (
            <Button
              theme={"alternative"}
              key={item.id}
              link={item.link}
              icon={item.icon}
              label={item.label}
              target={"_blank"}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}