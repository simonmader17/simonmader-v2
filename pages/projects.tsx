import Head from "next/head";
import Container from "../components/Container";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { Project } from "../components/pages/index/Projects";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PixelatedDownChevron } from "../components/PixelatedIcons";

import blur_fit_bg from "../public/images/background_images/blur-fit.png";
import personal_website_bg from "../public/images/personal_images/ich_2.jpeg";
import diploma_thesis_bg from "../public/images/background_images/diploma_thesis.jpg";

import blur_fit_laptop_1 from "../public/images/projects/blur-fit/blur-fit-laptop.png";
import blur_fit_smartphone_1 from "../public/images/projects/blur-fit/blur-fit-smartphone-1.png";
import blur_fit_smartphone_2 from "../public/images/projects/blur-fit/blur-fit-smartphone-2.png";

import personal_website_laptop_1 from "../public/images/projects/personal-website/personal-website-laptop-1.png";
import personal_website_laptop_2 from "../public/images/projects/personal-website/personal-website-laptop-2.png";
import personal_website_smartphone_1 from "../public/images/projects/personal-website/personal-website-smartphone-1.png";

import diploma_thesis_laptop_1 from "../public/images/projects/diploma-thesis/diploma-thesis-laptop-1.png";
import diploma_thesis_tablet_1 from "../public/images/projects/diploma-thesis/diploma-thesis-tablet-1.png";
import diploma_thesis_tablet_2 from "../public/images/projects/diploma-thesis/diploma-thesis-tablet-2.png";

const myProjects = [
  {
    title: "blur-fit.title",
    zeitraum: "Nov. 2022",
    bg: blur_fit_bg,
    text: ["blur-fit.text.p1", "blur-fit.text.p2"],
    tags: ["Flutter", "Dart", "Figma"],
    links: [
      {
        text: "blur-fit.links.link1",
        link: "https://play.google.com/store/apps/details?id=at.simonmader.blur_fit",
      },
    ],
    images: [blur_fit_smartphone_1, blur_fit_laptop_1, blur_fit_smartphone_2],
  },
  {
    title: "personal-website.title",
    zeitraum: "2021 - 2022",
    bg: personal_website_bg,
    text: [
      "personal-website.text.p1",
      "personal-website.text.p2",
      "personal-website.text.p3",
    ],
    tags: ["Next.js", "Tailwind CSS"],
    links: [
      {
        text: "personal-website.links.link1",
        link: "https://github.com/simonmader17/simonmader-v2",
      },
    ],
    images: [
      personal_website_laptop_1,
      personal_website_laptop_2,
      personal_website_smartphone_1,
    ],
  },
  {
    title: "diploma-thesis.title",
    zeitraum: "2020 - 2021",
    bg: diploma_thesis_bg,
    text: ["diploma-thesis.text.p1", "diploma-thesis.text.p2"],
    tags: ["NLP", "Python", "LaTeX"],
    links: [
      {
        text: "diploma-thesis.links.link1",
        link: "/diploma-thesis",
      },
    ],
    images: [
      diploma_thesis_tablet_1,
      diploma_thesis_laptop_1,
      diploma_thesis_tablet_2,
    ],
  },
];

export { myProjects };

const ProjectsPage = () => {
  const { t } = useTranslation("projects");
  const { t: meta } = useTranslation("meta");

  const [show, setShow] = useState(-1);
  const [observedIdxs, setObservedIdxs] = useState(new Set<number>());

  useEffect(() => {
    const observables = document.querySelectorAll("#observable");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var idx = [...observables].indexOf(entry.target);

        if (entry.isIntersecting) {
          setObservedIdxs((prev) => {
            prev = prev.add(idx);
            return prev;
          });
        } else {
          setObservedIdxs((prev) => {
            prev.delete(idx);
            return prev;
          });
        }
      });

      if (observedIdxs.size > 0) {
        setShow(Math.max(...observedIdxs) - 1);
      }
    });

    observables.forEach((el) => observer.observe(el));

    return () => {
      observables.forEach((el) => observer.unobserve(el));
    };
  }, [observedIdxs, show]);

  return (
    <>
      <Head>
        <title>{meta("projects_title")}</title>
        <meta name="description" content={meta("projects_title")} />
      </Head>

      <div className="bg-hero-brick-wall bg-headerFooter relative z-20 flex h-screen flex-col items-center justify-center">
        <h1>{meta("projects_title")}</h1>
        <div className="relative h-64 w-96" id="observable">
          <Image
            src={blur_fit_laptop_1}
            alt=""
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            className="drop-shadow-2xl"
          />
        </div>
        <PixelatedDownChevron className="drop-shadow-pixel-sm absolute bottom-0 mb-4 w-12 animate-bounce text-red-400 md:w-14" />
      </div>

      <Container className="ltmd:mt-20">
        {myProjects.map((p) => {
          const idx = myProjects.indexOf(p);

          return (
            <motion.div
              key={p.title}
              className="ltmd:left-0 fixed top-1/2 z-10 md:w-[36rem]"
              animate={{
                y:
                  idx == show
                    ? "-50%"
                    : idx > show
                    ? "50vh"
                    : "calc(-50% - 100vh)",
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Project
                title={t(p.title)}
                zeitraum={p.zeitraum}
                bg={null}
                text={p.text.map((txt) => t(txt))}
                tags={p.tags}
                links={p.links.map((l) => {
                  return {
                    ...l,
                    text: t(l.text),
                  };
                })}
              />
            </motion.div>
          );
        })}

        <div className="-mb-[30vh]">
          {myProjects.map((p) => (
            <div key={p.title} className="my-[30vh] md:translate-x-1/3">
              <Parallax speed={-10}>
                <div className="-my-32 h-[50vh] drop-shadow-2xl">
                  <Image
                    src={p.images[0]}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                  />
                </div>
              </Parallax>
              <Parallax speed={30} id="observable">
                <div className="-my-32 h-[55vh] -translate-x-32 drop-shadow-2xl">
                  <Image
                    src={p.images[1]}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                  />
                </div>
              </Parallax>
              <Parallax speed={60}>
                <div className="-my-32 h-[60vh] translate-x-32 drop-shadow-2xl">
                  <Image
                    src={p.images[2]}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                  />
                </div>
              </Parallax>
            </div>
          ))}
        </div>

        <details className="text-sm text-gray-400">
          <summary className="cursor-pointer font-bold">
            Device Mockups Sources
          </summary>

          <p>
            <span className="italic">Smartphone Mockup: </span>
            <a
              className="my-link"
              href="https://www.freepik.com/free-psd/smartphone-mock-up-isolated_4075388.htm#&position=1&from_view=undefined"
              target="_blank"
              rel="noreferrer"
            >
              Image by zlatko_plamenov
            </a>{" "}
            on Freepik
          </p>
          <p>
            <span className="italic">Tablet Mockup: </span>
            <a
              className="my-link"
              href="https://www.freepik.com/free-psd/tablet-mock-up-isolated_4060972.htm#query=tablet%20mockup&position=0&from_view=search&track=sph"
              target="_blank"
              rel="noreferrer"
            >
              Image by zlatko_plamenov
            </a>{" "}
            on Freepik
          </p>
          <p>
            <span className="italic">Laptop Mockup: </span>
            <a
              className="my-link"
              href="https://www.freepik.com/free-vector/digital-device-mockup_4249950.htm#query=laptop%20mockup&position=5&from_view=search&track=sph"
              target="_blank"
              rel="noreferrer"
            >
              Image by rawpixel.com
            </a>{" "}
            on Freepik
          </p>
        </details>

        <div className="absolute bottom-0 h-10" id="observable"></div>
      </Container>
    </>
  );
};

export default ProjectsPage;
