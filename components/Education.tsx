import { useState } from "react";
import Expand from "react-expand-animated";

import htl_bg from "../public/images/background_images/htl.jpeg";
import borg_bg from "../public/images/background_images/borg.jpg";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import BlurredBgImage from "./BlurredBgImage";

interface SchoolInterface {
  name: string;
  zweig: string;
  zeitraum: string;
  bg: StaticImageData;
  info?: JSX.Element;
}

function School({ name, zweig, zeitraum, bg, info }: SchoolInterface) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="drop-shadow-pixel relative z-10 m-4"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className="clip-rounded-pixel h-full">
        <BlurredBgImage src={bg} alt={name} />
        <div className="h-full bg-black bg-opacity-70 p-6">
          <p className="text-lg text-red-400 md:text-xl">{name}</p>
          <p className="ltmd:text-sm">{zweig}</p>
          <p className="ltmd:text-sm">{zeitraum}</p>
          {info && (
            <>
              <div className="ltmd:text-sm 2xl:hidden">
                <Expand open={showInfo}>{info}</Expand>
              </div>
              <div className="lt2xl:hidden">{info}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Education() {
  const { t } = useTranslation("education");

  return (
    <>
      <h2 id="education">{t("heading")}</h2>
      <div className="grid grid-cols-1 2xl:grid-cols-2">
        <School
          name="HTL St. Pölten"
          zweig={t("htl.zweig")}
          zeitraum="2016 &ndash; 2021"
          bg={htl_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{t("htl.info.li1")}</li>
              <li className="text-gray-400">{t("htl.info.li2")}</li>
              <li className="text-gray-400">
                <Trans
                  i18nKey="education:htl.info.li3"
                  components={[
                    <a
                      className="my-link"
                      href="https://en.wikipedia.org/wiki/Natural_language_processing"
                      target="_blank"
                      rel="noreferrer"
                      key="htl.info.li3.key"
                      hover-info="NLP (Wikipedia)"
                    />,
                  ]}
                />
              </li>
            </ul>
          }
        />
        <School
          name="BRG St. Pölten"
          zweig={t("borg.zweig")}
          zeitraum="2012 &ndash; 2016"
          bg={borg_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{t("borg.info.li1")}</li>
            </ul>
          }
        />
      </div>
    </>
  );
}

export default Education;
