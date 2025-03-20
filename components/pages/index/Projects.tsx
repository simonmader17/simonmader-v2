import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import BlurredBgImageContainer from "../../BlurredBgImageContainer";

import { myProjects } from "../../../pages/projects";

interface ProjectInterface {
  title: string;
  zeitraum: string;
  bg: StaticImageData;
  text: string[];
  tags: string[];
  links?: { text: string; link: string }[];
}

const Project = ({
  title,
  zeitraum,
  bg,
  text,
  tags,
  links,
}: ProjectInterface) => {
  return (
    <BlurredBgImageContainer bgSrc={bg} bgAlt={title} bgPosition="center">
      <p className="text-gray ltmd:text-sm">{zeitraum}</p>
      <p className="my-1 text-lg text-accent md:text-xl">{title}</p>
      {text.map((s) => (
        <p key={s} className="ltmd:text-sm">
          {s}
        </p>
      ))}
      <p className="mt-2 uppercase italic tracking-wider ltmd:text-sm">
        {tags?.map((t) => "#" + t.replace(" ", "")).join(" ")}
      </p>
      {links && (
        <p className="mt-1 font-bold italic tracking-wider text-gray ltmd:text-sm">
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
    </BlurredBgImageContainer>
  );
};

const Projects = () => {
  const { t } = useTranslation("projects");
  const { t: meta } = useTranslation("meta");

  return (
    <>
      <h2 id="projects" className="inline-block">
        {t("heading")}
      </h2>
      <Link href="/projects" passHref>
        <a className="my-link text-gray">{meta("detailed_view")}</a>
      </Link>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {myProjects.map((p) => (
          <Project
            key={p.title}
            title={t(p.title)}
            zeitraum={p.zeitraum}
            bg={p.bg}
            text={p.text.map((txt) => t(txt))}
            tags={p.tags}
            links={p.links.map((l) => {
              return {
                ...l,
                text: t(l.text),
              };
            })}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

export { Project };
