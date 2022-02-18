import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Expand from "react-expand-animated";
import de from "../locales/de";
import en from "../locales/en";

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

  const { locale } = useRouter();
  const l = locale == "de" ? de : en;
  moment.locale(locale);

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
  const { locale } = useRouter();
  const l = locale == "de" ? de.career : en.career;

  return (
    <div>
      <h2 id="career" className="m-4 pt-4 text-2xl font-bold">
        {l.heading}
      </h2>
      <div className="grid grid-cols-1">
        <Job
          position={l.asboe.position}
          firma={l.asboe.firma}
          from={moment("2021-09")}
          to={moment("2022-05")}
          ort={l.asboe.ort}
          bg={asboe_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{l.asboe.info.li1}</li>
              <li className="text-gray-400">{l.asboe.info.li2}</li>
              <li className="text-gray-400">{l.asboe.info.li3}</li>
              <li className="text-gray-400">{l.asboe.info.li4}</li>
            </ul>
          }
        />
        <Job
          position={l.bso.position}
          firma={l.bso.firma}
          from={moment("2020-07")}
          ort={l.bso.ort}
          bg={bso_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{l.bso.info.li1}</li>
              <li className="text-gray-400">{l.bso.info.li2}</li>
              <li className="text-gray-400">{l.bso.info.li3}</li>
              <li className="text-gray-400">{l.bso.info.li4}</li>
            </ul>
          }
        />
        <Job
          position={l.geberit.position}
          firma={l.geberit.firma}
          from={moment("2018-07")}
          ort={l.geberit.ort}
          bg={geberit_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{l.geberit.info.li1}</li>
              <li className="text-gray-400">{l.geberit.info.li2}</li>
            </ul>
          }
        />
        <Job
          position={l.gemeinde.position}
          firma={l.gemeinde.firma}
          from={moment("2017-08-13")}
          to={moment("2017-07-17")}
          ort={l.gemeinde.ort}
          bg={gemeinde_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">{l.gemeinde.info.li1}</li>
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Career;
