import { Project } from "./types.tsx";
import { Button } from "../../../../components/Button.tsx";
import { linkIcon } from "../../../../assets/icon-lib.tsx";
import profilPic from "../../../../assets/img/profile-pic-berny-itouou.png";
import profilPicDark from "../../../../assets/img/ellipse-photo-dark.png";
import "./featured-project.scss";

interface FeaturedProjectProps {
  data: Project;
  index: number;
}

export default function FeaturedProject({ data }: FeaturedProjectProps) {
  return (
    <div className="featured-project flex flex-col lg:flex-row lg:nth-child-even:self-end lg:nth-child-even:flex-row-reverse w-full gap-8 lg:max-w-[80%]">
      <div className={"cover min-w-[50%] relative overflow-hidden rounded-2xl"}>
        <img
          className={
            "w-full aspect-[300/200] lg:aspect-[532/630] h-auto object-cover"
          }
          src={data.image}
          alt={"project cover for " + data.enterprise}
        />
      </div>
      <div className={"details flex flex-col items-start justify-center"}>
        <h3 className="role flex gap-x-2 mb-2">
          <span className={"button post pl-2 primary gap-x-2"}>
            <span>
              <img
                className={"dark:hidden aspect-square w-6 h-auto"}
                src={profilPic}
                alt="A photo of berny itoutou"
              />
              <img
                className={"hidden aspect-square w-6 h-auto dark:inline-block"}
                src={profilPicDark}
                alt="A photo of berny itoutou"
              />
            </span>{" "}
            as {data.role}
          </span>
          <span className={"button enterprise alternative border-dashed"}>
            at {data.enterprise}
          </span>
        </h3>
        <ul className={"techs flex gap-x-2 mb-4"}>
          {data.technologies.map((item) => (
            <li key={item.id}>#{item.name}</li>
          ))}
        </ul>
        <p className={"description mb-4 max-w-[450px]"}>{data.description}</p>
        <Button icon={linkIcon} label={"See the website"} link={data.link} />
      </div>
    </div>
  );
}