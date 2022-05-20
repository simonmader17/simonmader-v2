import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import BlurredBgImage from "../../BlurredBgImage";

import personal_website_bg from "../../../public/images/personal_images/ich_2.jpeg";
import diploma_thesis_bg from "../../../public/images/background_images/diploma_thesis.jpg";

interface ProjectInterface {
  title: string;
  zeitraum: string;
  bg: StaticImageData;
  text: string[];
  tags: string[];
  links?: { text: string; link: string }[];
}

function Project({ title, zeitraum, bg, text, tags, links }: ProjectInterface) {
  return (
    <div className="drop-shadow-pixel relative z-10 m-4">
      <div className="clip-rounded-pixel h-full">
        <BlurredBgImage src={bg} alt={title} objectPosition="center" />
        <div className="h-full bg-black bg-opacity-70 p-6">
          <p className="ltmd:text-sm text-gray-400">{zeitraum}</p>
          <p className="text-lg text-red-400 md:text-xl">{title}</p>
          {text.map((s) => (
            <p key={s} className="ltmd:text-sm">
              {s}
            </p>
          ))}
          <p className="ltmd:text-sm mt-2 uppercase italic tracking-wider">
            {tags.map((t) => "#" + t.replace(" ", "")).join(" ")}
          </p>
          {links && (
            <p className="ltmd:text-sm mt-1 font-bold italic tracking-wider text-gray-400">
              {links
                .map((l) => (
                  <Link key={l.link} href={l.link} passHref>
                    {l.link.startsWith("/") ? (
                      <a className="my-link">{l.text}</a>
                    ) : (
                      <a className="my-link" target="_blank" rel="noreferrer">
                        {l.text}
                      </a>
                    )}
                  </Link>
                ))
                .reduce((prev, curr) => (
                  <>
                    {prev} {curr}
                  </>
                ))}
            </p>
          )}
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
          zeitraum="2021 &ndash; 2022"
          bg={personal_website_bg}
          text={[
            t("personal-website.text.p1"),
            t("personal-website.text.p2"),
            t("personal-website.text.p3"),
          ]}
          tags={["Next.js", "Tailwind CSS"]}
          links={[
            {
              text: "Source Code",
              link: "https://github.com/simonmader17/simonmader-v2",
            },
          ]}
        />
        <Project
          title={t("diploma-thesis.title")}
          zeitraum="2020 &ndash; 2021"
          bg={diploma_thesis_bg}
          text={[t("diploma-thesis.text.p1"), t("diploma-thesis.text.p2")]}
          tags={["NLP", "Python", "LaTeX"]}
          links={[
            {
              text: t("diploma-thesis.links.link1"),
              link: "/diploma-thesis",
            },
          ]}
        />
      </div>
    </>
  );
}

export default Projects;
