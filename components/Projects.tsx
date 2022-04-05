import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useState } from "react";
import Expand from "react-expand-animated";

import diploma_thesis_bg from "../public/images/background_images/diploma_thesis.jpg";

interface ProjectInterface {
  title: string;
  zeitraum: string;
  bg: StaticImageData;
  text: string[];
  tags: string[];
}

function Project({ title, zeitraum, bg, text, tags }: ProjectInterface) {
  const [showTags, setShowTags] = useState(false);

  return (
    <div
      className="drop-shadow-pixel relative z-10 m-4"
      onMouseEnter={() => setShowTags(true)}
      onMouseLeave={() => setShowTags(false)}
    >
      <div className="bg-blurred">
        <Image
          src={bg}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
        />
      </div>
      <div className="h-full rounded-xl bg-black bg-opacity-70 p-6">
        <p className="text-gray-400">{zeitraum}</p>
        <p className="text-xl text-red-400">{title}</p>
        {text.map((s) => (
          <p>{s}</p>
        ))}
        <div className="2xl:hidden">
          <Expand open={showTags}>
            <p className="text-sm font-bold uppercase italic text-gray-400">
              {tags.map((t) => "#" + t).join(" ")}
            </p>
          </Expand>
        </div>
        <div className="lt2xl:hidden">
          <p className="text-sm uppercase italic text-gray-400">
            {tags.map((t) => "#" + t).join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const { t } = useTranslation("projects");

  return (
    <>
      <h2 id="projects">{t("heading")}</h2>
      <div className="grid grid-cols-1 2xl:grid-cols-2">
        <Project
          title={t("personal-website.title")}
          zeitraum="2021"
          bg={diploma_thesis_bg}
          text={[""]}
          tags={["Next.js"]}
        />
        <Project
          title={t("diploma-thesis.title")}
          zeitraum="2020 &ndash; 2021"
          bg={diploma_thesis_bg}
          text={[t("diploma-thesis.text.p1"), t("diploma-thesis.text.p2"), t("diploma-thesis.text.p3")]}
          tags={["Python", "LaTeX"]}
        />
      </div>
    </>
  );
}

export default Projects;
