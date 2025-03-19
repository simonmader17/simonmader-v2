import { useState } from "react";
import Expand from "react-expand-animated";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import BlurredBgImageContainer from "../../BlurredBgImageContainer";

import tu_bg from "../../../public/images/background_images/tu.webp";
import htl_bg from "../../../public/images/background_images/htl.webp";
import borg_bg from "../../../public/images/background_images/borg.webp";
import { useRouter } from "next/router";

interface SchoolInterface {
  name: string;
  zweig: string;
  from: Date | string;
  to?: Date | string;
  bg: StaticImageData;
  info?: JSX.Element;
}

const School = ({ name, zweig, from, to, bg, info }: SchoolInterface) => {
  const [showInfo, setShowInfo] = useState(false);

  const locale = useRouter().locale;

  const fromFormat =
    typeof from === "string"
      ? from
      : from.getDate() == 1
      ? from.toLocaleString(locale, { month: "long", year: "numeric" })
      : from.toLocaleString(locale, {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
  const toFormat =
    typeof to === "string"
      ? to
      : to?.getDate() == 1
      ? to?.toLocaleString(locale, { month: "long", year: "numeric" })
      : to?.toLocaleString(locale, {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

  return (
    <BlurredBgImageContainer
      bgSrc={bg}
      bgAlt={name}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <p className="text-lg text-accent md:text-xl">{name}</p>
      <p className="ltmd:text-sm">{zweig}</p>
      <p className="ltmd:text-sm">
        {fromFormat} {to && <>&ndash; {toFormat}</>}
      </p>
      {info && (
        <>
          <div className="ltmd:text-sm xl:hidden">
            <Expand open={showInfo}>{info}</Expand>
          </div>
          <div className="ltxl:hidden">{info}</div>
        </>
      )}
    </BlurredBgImageContainer>
  );
};

const Education = () => {
  const { t } = useTranslation("education");
  const { t: meta } = useTranslation("meta");

  return (
    <>
      <h2 id="education">{t("heading")}</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <School
          name={t("tu.name")}
          zweig={t("tu.zweig")}
          from={new Date("2022-10")}
          to={meta("now")}
          bg={tu_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray">{t("tu.info.li1")}</li>
              <li className="text-gray">{t("tu.info.li2")}</li>
              <li className="text-gray">{t("tu.info.li3")}</li>
            </ul>
          }
        />
        <School
          name="HTL St. Pölten"
          zweig={t("htl.zweig")}
          from={"2016"}
          to={"2021"}
          bg={htl_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray">{t("htl.info.li1")}</li>
              <li className="text-gray">{t("htl.info.li2")}</li>
              <li className="text-gray">
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
          from={"2012"}
          to={"2016"}
          bg={borg_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray">{t("borg.info.li1")}</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default Education;
