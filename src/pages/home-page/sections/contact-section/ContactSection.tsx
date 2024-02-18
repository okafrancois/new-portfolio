import Section from "../../../../layout/Section.tsx";
import { IconName } from "../../../../assets/icon-lib.tsx";
import { Button } from "../../../../components/Button.tsx";
import { useRef } from "react";
import { useFadeInAnimation } from "../../../../hooks/useFadeAnimation.tsx";
import { useTranslation } from "react-i18next";
import useFetch from "../../../../hooks/useFetch.tsx";
import ErrorComponent from "../../../../components/ErrorComponent.tsx";
import Icon from "../../../../components/Icon.tsx";
import { customCubic } from "../../../../assets/lib.ts";

interface Contact {
  id: string;
  label: string;
  link: string;
  icon: IconName;
}

export default function ContactSection() {
  const { t } = useTranslation();
  const sectionTitle = useRef<HTMLHeadingElement | null>(null);
  const sectionDesc = useRef<HTMLParagraphElement | null>(null);
  const { data, loading, error } = useFetch<Contact[]>(
    "/api/contacts/contacts.json",
  );
  const linksBlock = useRef<HTMLDivElement | null>(null);
  const defaultFade = {
    duration: 0.5,
    triggerScroll: true,
    ease: customCubic,
  };

  useFadeInAnimation({
    ref: sectionTitle,
    ...defaultFade,
  });

  useFadeInAnimation({
    ref: sectionDesc,
    ...defaultFade,
  });

  useFadeInAnimation({
    ref: linksBlock,
    ...defaultFade,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorComponent errorMessage={error} />;

  return (
    <Section
      id={"contact"}
      customClass={
        "contact-me py-8 md:min-h-[80vh] lg:min-h-[100vh] flex flex-col items-center justify-center text-center"
      }
    >
      <h2 ref={sectionTitle} className={"text-[3rem] lg:text-[6rem] font-bold"}>
        {t("common:labels.letGetInTouch")}
      </h2>
      <p
        ref={sectionDesc}
        className={"lg:font-semibold  lg:text-xl max-w-[900px] mb-10"}
      >
        {t("common:labels.contactQuote")}
      </p>
      <div
        ref={linksBlock}
        className="links flex flex-wrap gap-4 justify-center items-center"
      >
        <h2 className={"font-bold"}>{t("common:labels.reachMeOn")}</h2>
        <ul
          className={
            "contacts-links flex flex-wrap justify-center lg:justify-start gap-4"
          }
        >
          {data?.map((item) => (
            <li key={item.id} className={"inline"}>
              <Button
                theme={"alternative"}
                link={item.link}
                icon={<Icon name={item.icon} />}
                label={item.label}
                target={"_blank"}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}