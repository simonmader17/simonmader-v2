import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";

import de from "../locales/de";
import en from "../locales/en";

import about_bg from "../public/images/personal_images/ich.png";

function About() {
  const calculateAge = (): number => {
    return moment().diff("2002-02-17", "years");
  };
  const age = calculateAge();

  const { locale } = useRouter();
  const l = locale == "de" ? de.about(age) : en.about(age);

  return (
    <div>
      <h2 id="about" className="m-4 pt-4 text-2xl font-bold">
        {l.heading}
      </h2>
      <div className="about">
        <div className="about-content">
          <p className={"text-xl text-red-400 md:text-3xl"}>{l.p1}</p>
          <p className={"md:text-justify md:text-xl"}>{l.p2}</p>
          <p className="md:text-justify md:text-xl">{l.p3}</p>
          <p className={"md:text-justify md:text-xl"}>{l.p4}</p>
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
    </div>
  );
}

export default About;
