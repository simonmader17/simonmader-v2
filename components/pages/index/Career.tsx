import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import { useRouter } from "next/router";
import { useState } from "react";
import Expand from "react-expand-animated";
import BlurredBgImageContainer from "../../BlurredBgImageContainer";

import asboe_bg from "../../../public/images/background_images/asboe.webp";
import bso_bg from "../../../public/images/background_images/bso.webp";
import geberit_bg from "../../../public/images/background_images/geberit.webp";
import gemeinde_bg from "../../../public/images/background_images/gemeinde.webp";

interface JobInterface {
  position: string | JSX.Element;
  firma: string;
  from: Date | string;
  to?: Date | string;
  ort: string;
  bg: StaticImageData;
  info?: JSX.Element;
}

const Job = ({ position, firma, from, to, ort, bg, info }: JobInterface) => {
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
      bgAlt={firma}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <p className="text-gray ltmd:text-sm">{position}</p>
      <p className="text-lg text-accent md:text-xl">{firma}</p>
      {to ? (
        <p className="ltmd:text-sm">
          {fromFormat} &ndash; {toFormat}
        </p>
      ) : (
        <p className="ltmd:text-sm">{fromFormat}</p>
      )}
      <p className="ltmd:text-sm">{ort}</p>
      {info && (
        <>
          <div className="xl:hidden ltmd:text-sm">
            <Expand open={showInfo}>{info}</Expand>
          </div>
          <div className="ltxl:hidden">{info}</div>
        </>
      )}
    </BlurredBgImageContainer>
  );
};

const Career = () => {
  const { t } = useTranslation("career");

  return (
    <>
      <h2 id="career">{t("heading")}</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <Job
          position={
            <Trans
              i18nKey="career:asboe.position"
              components={[
                <a
                  className="my-link"
                  href="https://en.wikipedia.org/wiki/Zivildienst"
                  target="_blank"
                  rel="noreferrer"
                  key="asboe.position.key"
                />,
              ]}
            />
          }
          firma={t("asboe.firma")}
          from={new Date("2021-09")}
          to={new Date("2022-05")}
          ort={t("asboe.ort")}
          bg={asboe_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray">{t("asboe.info.li1")}</li>
              <li className="text-gray">{t("asboe.info.li2")}</li>
              <li className="text-gray">{t("asboe.info.li3")}</li>
              <li className="text-gray">{t("asboe.info.li4")}</li>
            </ul>
          }
        />
        <Job
          position={t("bso.position")}
          firma={t("bso.firma")}
          from={new Date("2020-07")}
          ort={t("bso.ort")}
          bg={bso_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray">{t("bso.info.li1")}</li>
              <li className="text-gray">
                <Trans
                  i18nKey="career:bso.info.li2"
                  components={[
                    <a
                      className="my-link"
                      href="https://de.wikipedia.org/wiki/LAMP_(Softwarepaket)"
                      target="_blank"
                      rel="noreferrer"
                      key="bso.info.li2.key"
                      hover-info="LAMP (Wikipedia)"
                    />,
                  ]}
                />
              </li>
              <li className="text-gray">{t("bso.info.li3")}</li>
              <li className="text-gray">{t("bso.info.li4")}</li>
            </ul>
          }
        />
        <Job
          position={t("geberit.position")}
          firma={t("geberit.firma")}
          from={new Date("2018-07")}
          ort={t("geberit.ort")}
          bg={geberit_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray">{t("geberit.info.li1")}</li>
              <li className="text-gray">
                <Trans
                  i18nKey="career:geberit.info.li2"
                  components={[
                    <a
                      className="my-link"
                      href="https://de.wikipedia.org/wiki/Active_Directory"
                      target="_blank"
                      rel="noreferrer"
                      key="geberit.info.li2.key"
                      hover-info="Active Directory (Wikipedia)"
                    />,
                  ]}
                />
              </li>
            </ul>
          }
        />
        <Job
          position={t("gemeinde.position")}
          firma={t("gemeinde.firma")}
          from={new Date("2017-07-17")}
          to={new Date("2017-08-13")}
          ort={t("gemeinde.ort")}
          bg={gemeinde_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray">{t("gemeinde.info.li1")}</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default Career;
