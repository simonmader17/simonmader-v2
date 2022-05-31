import moment from "moment";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import about_bg from "../../../public/images/personal_images/ich.png";

function About() {
  const calculateAge = (): number => {
    return moment().diff("2002-02-17", "years");
  };

  const { t } = useTranslation("about");

  return (
    <>
      <h2 id="about">{t("heading")}</h2>
      <div className="drop-shadow-pixel">
        <div className="clip-rounded-pixel m-4 grid grid-cols-1 md:grid-cols-2 md:bg-black md:bg-opacity-50">
          <div className="ltmd:bg-black ltmd:bg-opacity-50 flex flex-col gap-2 p-6">
            <p className="text-xl font-bold text-red-400 md:text-2xl">
              {t("p1")}
            </p>
            <p className="ltmd:text-sm md:text-justify">
              {t("p2", { age: calculateAge() })}
            </p>
            <p className="ltmd:text-sm md:text-justify">{t("p3")}</p>
            <p className="ltmd:text-sm md:text-justify">{t("p4")}</p>
          </div>
          <div className="clip-rounded-pixel ltmd:absolute ltmd:inset-0 ltmd:-z-10 ltmd:blur-sm ltmd:w-[calc(100%+16px)] ltmd:h-[calc(100%+16px)] ltmd:-m-[8px] relative md:min-h-[25rem]">
            <div className="relative h-full">
              <Image
                src={about_bg}
                alt="Simon Mader"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
