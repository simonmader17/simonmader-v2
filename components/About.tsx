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
      <div className="drop-shadow-pixel relative z-10 m-4 overflow-hidden md:min-h-[25rem] md:rounded-xl md:bg-black md:bg-opacity-50">
        <div className="ltmd:absolute ltmd:left-0 ltmd:top-0 ltmd:-z-10 ltmd:m-[-8px] ltmd:blur-sm ltmd:h-[calc(100%+16px)] ltmd:w-[calc(100%+16px)] ltmd:[clip-path:inset(8px_round_0.75rem)] bg-cover bg-center md:relative md:float-right md:ml-6 md:min-h-[25rem] md:w-1/2 md:[clip-path:polygon(0%_0%,100%_0%,100%_100%,1rem_calc(100%-1rem))] md:[shape-outside:polygon(0%_0%,100%_0%,100%_100%,1em_calc(100%-1em))]">
          <Image
            src={about_bg}
            alt="ich"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="ltmd:rounded-xl ltmd:bg-black ltmd:bg-opacity-50 p-6">
          <p className="text-xl text-red-400 md:text-2xl">{t("p1")}</p>
          <p className="ltmd:text-sm md:text-justify">
            {t("p2", { age: calculateAge() })}
          </p>
          <p className="ltmd:text-sm md:text-justify">{t("p3")}</p>
          <p className="ltmd:text-sm md:text-justify">{t("p4")}</p>
        </div>
      </div>
    </>
  );
}

export default About;
