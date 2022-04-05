import moment from "moment";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import about_bg from "../public/images/personal_images/ich.png";

function About() {
  const calculateAge = (): number => {
    return moment().diff("2002-02-17", "years");
  };

  const { t } = useTranslation("about");

  return (
    <>
      <h2 id="about">{t("heading")}</h2>
      <div className="about">
        <div className="about-content">
          <p className={"text-xl text-red-400 md:text-3xl"}>{t("p1")}</p>
          <p className={"md:text-justify md:text-xl"}>
            {t("p2", { age: calculateAge() })}
          </p>
          <p className="md:text-justify md:text-xl">{t("p3")}</p>
          <p className={"md:text-justify md:text-xl"}>{t("p4")}</p>
        </div>
        <div className="about-bg">
          <Image
            src={about_bg}
            alt="ich"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            className="rounded-r-xl"
          />
        </div>
      </div>
    </>
  );
}

export default About;
