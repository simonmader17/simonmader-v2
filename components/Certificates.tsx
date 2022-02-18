import moment from "moment";
import "moment/locale/de";
import Image from "next/image";

import oracle_logo from "../public/images/logos/oracle.png";
import cambridge_logo from "../public/images/logos/cambridge_assessment_english.png";
import lpi_logo from "../public/images/logos/linux_professional_institute.png";
import { useRouter } from "next/router";
import de from "../locales/de";
import en from "../locales/en";

interface CertificateInterface {
  name: string;
  company: string;
  companyUrl: string;
  logo: StaticImageData;
  from: Date;
  to?: Date;
  id?: string;
  url?: string;
}

function Certificate({
  name,
  company,
  companyUrl,
  logo,
  from,
  to,
  id,
  url,
}: CertificateInterface) {
  const { locale } = useRouter();
  const l = locale == "de" ? de.certificates : en.certificates;
  moment.locale(locale);

  return (
    <div className="drop-shadow-3xl m-4 flex max-w-full items-center space-x-4 rounded-xl bg-black bg-opacity-50 p-6">
      <div className="flex-shrink-0">
        <a href={companyUrl} target="_blank" rel="noreferrer" title={company}>
          <div className="relative h-12 w-12">
            <Image
              src={logo}
              alt={company}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </div>
        </a>
      </div>
      <div>
        <div className={"text-xl"}>{name}</div>
        <p className={"text-gray-400"}>{company}</p>
        <p className={"text-gray-400"}>
          {from ? l.from + ": " + moment(from).format("MMMM YYYY") : l.no_from}
        </p>
        <p className={"text-gray-400"}>
          {to ? l.to + ": " + moment(to).format("MMMM YYYY") : l.no_to}
        </p>
        {id && <p className={"text-gray-400"}>{l.id + ": " + id}</p>}
        {url && (
          <p className={"text-gray-400"}>
            <a
              className={"my-link"}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {l.proof}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

function Certificates() {
  const { locale } = useRouter();
  const l = locale == "de" ? de.certificates : en.certificates;

  return (
    <div>
      <h2 id="certificates" className="m-4 pt-4 text-2xl font-bold">
        {l.heading}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Certificate
          name="Oracle Certified Professional: Java SE 11 Developer"
          company="Oracle"
          companyUrl="https://www.oracle.com/index.html"
          logo={oracle_logo}
          from={new Date("2021-04-23")}
          url="https://catalog-education.oracle.com/pls/certview/sharebadge?id=80D20A440FC6CCD06D30C39AC2A8312B1B9C1191594C24EEFC901450044827F2"
        />
        <Certificate
          name="Cambridge English Level 1 Certificate in ESOL International (Business Vantage)"
          company="Cambridge Assessment English"
          companyUrl="https://www.cambridgeenglish.org/"
          logo={cambridge_logo}
          from={new Date("2019-06")}
          id="A9686056"
        />
        <Certificate
          name="LE-1: Linux Essentials"
          company="Linux Professional Institute"
          companyUrl="https://www.lpi.org/"
          logo={lpi_logo}
          from={new Date("2019-06")}
          url="http://lpi.org/v/LPI000429624/yj5w3k2jay"
        />
      </div>
    </div>
  );
}

export default Certificates;
