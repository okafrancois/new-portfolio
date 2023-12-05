import Section from "../../../../layout/Section.tsx";
import { ulid } from "ulid";
import {
  emailIcon,
  githubIcon,
  linkedInIcon,
  maltIcon,
} from "../../../../assets/icon-lib.tsx";
import { Button } from "../../../../components/Button.tsx";
import { ReactNode } from "react";

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
  return (
    <Section
      customClass={
        "contact-me min-h-[100vh] flex flex-col items-center justify-center text-center"
      }
    >
      <h1 className={"text-[6rem] font-bold"}>Let's get in touch !</h1>
      <p className={"font-semibold text-xl max-w-[900px] mb-10"}>
        I was a lover of beautiful web interfaces long before I started dev. It
        was this love that led me to front-end development and and it's with
        that same passion that I'll be happy to make your your project. So don't
        hesitate to contact me on the network of your choice to discuss your
        project!
      </p>
      <div className="links flex gap-x-4 items-center">
        <h2 className={"font-bold"}>Find me on :</h2>
        <ul className={"contacts-links flex gap-x-4"}>
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