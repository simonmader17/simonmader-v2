import moment from "moment";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Expand from "react-expand-animated";

import asboe_bg from "../public/images/background_images/asboe.jpg";
import bso_bg from "../public/images/background_images/bso.png";
import geberit_bg from "../public/images/background_images/geberit.jpg";
import gemeinde_bg from "../public/images/background_images/gemeinde.jpeg";

interface JobInterface {
  position: string | JSX.Element;
  firma: string;
  from: moment.Moment;
  to?: moment.Moment;
  ort: string;
  bg: StaticImageData;
  info?: JSX.Element;
}

function Job({ position, firma, from, to, ort, bg, info }: JobInterface) {
  const [showInfo, setShowInfo] = useState(false);

  moment.locale(useRouter().locale);

  const fromFormat =
    from.date() == 1 ? from.format("MMMM YYYY") : from.format("Do MMM YYYY");
  const toFormat =
    to?.date() == 1 ? to?.format("MMMM YYYY") : to?.format("Do MMM YYYY");

  return (
    <div
      className="drop-shadow-3xl relative z-10 m-4"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className="bg-blurred">
        <Image
          src={bg}
          alt={firma}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
        />
      </div>
      <div className="rounded-xl bg-black bg-opacity-70 p-6">
        <p className="text-gray-400">{position}</p>
        <p className="text-xl text-red-400">{firma ? firma : ""}</p>
        {to ? (
          <p>
            {fromFormat} &ndash; {toFormat}
          </p>
        ) : (
          <p>{fromFormat}</p>
        )}
        <p>{ort}</p>
        {info && <Expand open={showInfo}>{info}</Expand>}
      </div>
    </div>
  );
}

function Career() {
  const { t } = useTranslation("career");

  return (
    <div>
      <h2 id="career" className="m-4 pt-4 text-2xl font-bold">
        {t("heading")}
      </h2>
      <div className="grid grid-cols-1">
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
          from={moment("2021-09")}
          to={moment("2022-05")}
          ort={t("asboe.ort")}
          bg={asboe_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{t("asboe.info.li1")}</li>
              <li className="text-gray-400">{t("asboe.info.li2")}</li>
              <li className="text-gray-400">{t("asboe.info.li3")}</li>
              <li className="text-gray-400">{t("asboe.info.li4")}</li>
            </ul>
          }
        />
        <Job
          position={t("bso.position")}
          firma={t("bso.firma")}
          from={moment("2020-07")}
          ort={t("bso.ort")}
          bg={bso_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{t("bso.info.li1")}</li>
              <li className="text-gray-400">
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
              <li className="text-gray-400">{t("bso.info.li3")}</li>
              <li className="text-gray-400">{t("bso.info.li4")}</li>
            </ul>
          }
        />
        <Job
          position={t("geberit.position")}
          firma={t("geberit.firma")}
          from={moment("2018-07")}
          ort={t("geberit.ort")}
          bg={geberit_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{t("geberit.info.li1")}</li>
              <li className="text-gray-400">
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
          from={moment("2017-07-17")}
          to={moment("2017-08-13")}
          ort={t("gemeinde.ort")}
          bg={gemeinde_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{t("gemeinde.info.li1")}</li>
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Career;
