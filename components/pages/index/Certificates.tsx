import moment from "moment";
import "moment/locale/de";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import oracle_logo from "../../../public/images/logos/oracle.png";
import cambridge_logo from "../../../public/images/logos/cambridge_assessment_english.png";
import lpi_logo from "../../../public/images/logos/linux_professional_institute.png";

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
  const { t } = useTranslation("certificates");

  moment.locale(useRouter().locale);

  return (
    <div className="md:drop-shadow-3xl relative m-4 flex max-w-full items-center gap-4 p-6">
      <div className="clip-rounded-pixel absolute inset-0 -z-10 bg-black bg-opacity-50" />
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
          {from
            ? t("from") + ": " + moment(from).format("MMMM YYYY")
            : t("no_from")}
        </p>
        <p className={"text-gray-400"}>
          {to ? t("to") + ": " + moment(to).format("MMMM YYYY") : t("no_to")}
        </p>
        {id && <p className={"text-gray-400"}>{t("id") + ": " + id}</p>}
        {url && (
          <p className={"text-gray-400"}>
            <a
              className={"my-link"}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {t("proof")}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

function Certificates() {
  const { t } = useTranslation("certificates");

  return (
    <>
      <h2 id="certificates">{t("heading")}</h2>
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
    </>
  );
}

export default Certificates;
