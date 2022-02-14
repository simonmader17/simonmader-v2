import Image from "next/image";
import { useState } from "react";
import Expand from "react-expand-animated";

import asboe_bg from "../public/images/background_images/asboe.jpg";
import bso_bg from "../public/images/background_images/bso.png";
import geberit_bg from "../public/images/background_images/geberit.jpg";
import gemeinde_bg from "../public/images/background_images/gemeinde.jpeg";

interface JobInterface {
  position: string;
  firma: string;
  zeitraum: string;
  ort: string;
  bg: StaticImageData;
  info?: JSX.Element;
}

function Job({ position, firma, zeitraum, ort, bg, info }: JobInterface) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="relative z-10 m-4 shadow-md"
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
        <p>{zeitraum}</p>
        <p>{ort}</p>
        {info && <Expand open={showInfo}>{info}</Expand>}
      </div>
    </div>
  );
}

function Career() {
  return (
    <div>
      <h2 id="career" className="m-4 pt-4 text-2xl font-bold">
        Berufserfahrung
      </h2>
      <div className="grid grid-cols-1">
        <Job
          position="Zivildienst"
          firma="ASBÖ St. Pölten"
          zeitraum="September 2021 &mdash; Mai 2022"
          ort="St. Pölten, Niederösterreich, Österreich"
          bg={asboe_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">
                Ausbildung zum Rettungssanitäter
              </li>
              <li className="text-gray-400">
                Betreuung von Patienten während des Rettungs- und
                Krankentransportes
              </li>
              <li className="text-gray-400">
                Erledigung organisatorischer Aufgaben innerhalb der
                Rettungsstelle
              </li>
              <li className="text-gray-400">
                Unterstützung der beruflichen und freiwilligen Mitarbeiter in
                verschiedenen Belangen
              </li>
            </ul>
          }
        />
        <Job
          position="Praktikant"
          firma="BSO EDV- und Betriebsberatung GmbH"
          zeitraum="Juli 2020"
          ort="St. Pölten, Niederösterreich, Österreich"
          bg={bso_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">Arbeit an einer REST API in PHP</li>
              <li className="text-gray-400">
                Einrichten einer PHP-Testumgebung mithilfe von Docker (
                <a
                  className="my-link"
                  href="https://de.wikipedia.org/wiki/LAMP_(Softwarepaket)"
                  target="_blank"
                  rel="noreferrer"
                  hover-info="LAMP (Wikipedia)"
                >
                  LAMP Stack
                </a>
                )
              </li>
              <li className="text-gray-400">
                Aufsetzen von PC&apos;s für Kunden (Hardware und Software)
              </li>
              <li className="text-gray-400">Lagerarbeiten</li>
            </ul>
          }
        />
        <Job
          position="Praktikant"
          firma="Geberit Österreich"
          zeitraum="Juli 2018"
          ort="Pottenbrunn, Niederösterreich, Österreich"
          bg={geberit_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">
                Mitarbeit an der Umstellung der PC&apos;s der Mitarbeiter auf
                Windows 10
              </li>
              <li className="text-gray-400">
                Einführung in die{" "}
                <a
                  className="my-link"
                  href="https://de.wikipedia.org/wiki/Active_Directory"
                  target="_blank"
                  rel="noreferrer"
                  hover-info="Active Directory (Wikipedia)"
                >
                  Active Directory
                </a>{" "}
                Organisationseinheiten des Unternehmens
              </li>
            </ul>
          }
        />
        <Job
          position="Praktikant"
          firma="Gemeindeamt Kasten bei Böheimkirchen"
          zeitraum="17. Juli &mdash; 13. Aug. 2017"
          ort="Kasten bei Böheimkirchen, Niederösterreich, Österreich"
          bg={gemeinde_bg}
          info={
            <ul className="ml-4 list-disc">
              <li className="text-gray-400">
                Mitarbeit in der Gemeinde: Rasenmähen, Sträucher schneiden, usw.
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Career;
