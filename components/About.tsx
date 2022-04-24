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
      <div className="drop-shadow-pixel relative z-10 m-4 md:flex md:min-h-[30vh] md:justify-center md:rounded-xl md:bg-black md:bg-opacity-50">
        <div className="ltmd:rounded-xl ltmd:bg-black ltmd:bg-opacity-50 p-6 md:w-3/5">
          <p className="text-xl text-red-400 md:text-2xl">{t("p1")}</p>
          <p className="ltmd:text-sm md:text-justify">
            {t("p2", { age: calculateAge() })}
          </p>
          <p className="ltmd:text-sm md:text-justify">{t("p3")}</p>
          <p className="ltmd:text-sm md:text-justify">{t("p4")}</p>
        </div>
        <div className="ltmd:absolute ltmd:left-0 ltmd:top-0 ltmd:-z-10 ltmd:m-[-8px] ltmd:blur-sm ltmd:h-[calc(100%+16px)] ltmd:w-[calc(100%+16px)] ltmd:[clip-path:inset(8px_round_0.75rem)] bg-cover bg-center md:relative md:h-auto md:w-2/5 md:[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] md:[shape-outside:polygon(20%_0%,100%_0%,100%_100%,0%_100%)]">
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
