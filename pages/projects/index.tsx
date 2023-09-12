import Head from "next/head";
import Container from "../../components/Container";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { Project } from "../../components/pages/index/Projects";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PixelatedDownChevron } from "../../components/PixelatedIcons";
import Header from "../../components/pages/_app/Header";
import ProjectsSlider from "../../components/pages/index/ProjectsSlider";

import frisierstube_bg from "../../public/images/projects/frisierstube-mader/bg.png";
import fuelprices_bg from "../../public/images/projects/fuelprices/logo.png";
import blur_fit_bg from "../../public/images/background_images/blur-fit.png";
import personal_website_bg from "../../public/images/personal_images/ich_2.jpeg";
import diploma_thesis_bg from "../../public/images/background_images/diploma_thesis.jpg";

import fuelprices_laptop from "../../public/images/projects/fuelprices/fuelprices-laptop.png";
import fuelprices_smartphone_1 from "../../public/images/projects/fuelprices/fuelprices-smartphone-2.png";
import fuelprices_smartphone_2 from "../../public/images/projects/fuelprices/fuelprices-smartphone-1.png";

import blur_fit_monitor from "../../public/images/projects/blur-fit/blur-fit-monitor.png";
import blur_fit_smartphone_1 from "../../public/images/projects/blur-fit/blur-fit-smartphone-1.png";
import blur_fit_smartphone_2 from "../../public/images/projects/blur-fit/blur-fit-smartphone-2.png";

import personal_website_laptop from "../../public/images/projects/personal-website/personal-website-laptop.png";
import personal_website_monitor from "../../public/images/projects/personal-website/personal-website-monitor.png";
import personal_website_smartphone from "../../public/images/projects/personal-website/personal-website-smartphone-2.png";

import diploma_thesis_laptop from "../../public/images/projects/diploma-thesis/diploma-thesis-laptop.png";
import diploma_thesis_tablet from "../../public/images/projects/diploma-thesis/diploma-thesis-tablet.png";
import diploma_thesis_monitor from "../../public/images/projects/diploma-thesis/diploma-thesis-monitor.png";

const myProjects = [
  {
    title: "Frisierstube Ursula Mader ✂️ - Website",
    zeitraum: "Aug. 2023",
    bg: frisierstube_bg,
    text: [
      "frisierstube-mader.text.p1",
      "frisierstube-mader.text.p2",
      "frisierstube-mader.text.p3",
    ],
    tags: ["Astro", "Tailwind CSS"],
    links: [
      { text: "Website", link: "https://frisierstube-mader.simonmader.at" },
      {
        text: "Source Code",
        link: "https://github.com/simonmader17/frisierstube-mader-v4",
      },
    ],
    images: [],
  },
  {
    title: "Fuelprices ⛽",
    zeitraum: "Jul. 2023",
    bg: fuelprices_bg,
    text: ["fuelprices.text.p1", "fuelprices.text.p2", "fuelprices.text.p3"],
    tags: [
      "Svelte",
      "Java",
      "Spring Boot",
      "Beautiful Soup",
      "Web Scraping",
      "python-telegram-bot",
      "PostgreSQL",
    ],
    links: [
      {
        text: "Website",
        link: "https://fuelprices.simonmader.at",
      },
      {
        text: "Telegram Bot",
        link: "https://t.me/simonmader_fuelprices_bot",
      },
    ],
    images: [
      fuelprices_smartphone_2,
      fuelprices_laptop,
      fuelprices_smartphone_1,
    ],
  },
  {
    title: "blur-fit.title",
    zeitraum: "Nov. 2022",
    bg: blur_fit_bg,
    text: ["blur-fit.text.p1", "blur-fit.text.p2"],
    tags: ["Flutter", "Dart", "Figma"],
    links: [
      {
        text: "Play Store",
        link: "https://play.google.com/store/apps/details?id=at.simonmader.blur_fit",
      },
      {
        text: "Source Code",
        link: "https://github.com/simonmader17/blur-fit",
      },
    ],
    images: [blur_fit_smartphone_1, blur_fit_monitor, blur_fit_smartphone_2],
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
      personal_website_laptop,
      personal_website_monitor,
      personal_website_smartphone,
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
      diploma_thesis_tablet,
      diploma_thesis_laptop,
      diploma_thesis_monitor,
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
        <meta property="og:title" content={meta("projects_title")} />
        <meta property="og:description" content={meta("projects_title")} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://github.com/simonmader17.png"
        />
        <meta property="og:url" content="https://simonmader.at/projects" />
      </Head>

      <Header>
        <div
          className="flex max-w-[100vw] flex-col items-center gap-8"
          id="observable"
        >
          <h1>{meta("projects_title")}</h1>
          <ProjectsSlider />
        </div>
      </Header>

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
              initial={false}
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

        {/* <details className="text-sm text-gray-400">
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
        </details> */}

        <div className="absolute bottom-0 h-10" id="observable"></div>
      </Container>
    </>
  );
};

export default ProjectsPage;
