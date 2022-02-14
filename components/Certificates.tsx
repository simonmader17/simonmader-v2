import moment from "moment";
import "moment/locale/de";
moment.locale("de");

interface CertificateInterface {
  name: string;
  company: string;
  companyUrl: string;
  logo: string;
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
  return (
    <div className="m-4 flex max-w-full items-center space-x-4 rounded-xl bg-black bg-opacity-50 p-6 shadow-md">
      <div className="flex-shrink-0">
        <a href={companyUrl} target="_blank" rel="noreferrer" title={company}>
          <img className="h-12" src={logo} alt={logo} />
        </a>
      </div>
      <div>
        <div className={"text-xl"}>{name}</div>
        <p className={"text-gray-400"}>{company}</p>
        <p className={"text-gray-400"}>
          {from
            ? "Ausgestellt: " + moment(from).format("MMMM YYYY")
            : "Kein Ausstellungsdatum"}
        </p>
        <p className={"text-gray-400"}>
          {to
            ? "Gültig bis: " + moment(to).format("MMMM YYYY")
            : "Kein Ablaufdatum"}
        </p>
        <p className={"text-gray-400"}>{id ? "Zertifikats-ID: " + id : ""}</p>
        <p className={"text-gray-400"}>
          {url ? (
            <a
              className={"my-link"}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              Nachweis anzeigen
            </a>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
}

function Certificates() {
  return (
    <div>
      <h2 id="certificates" className="m-4 pt-4 text-2xl font-bold">
        Zertifikate
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Certificate
          name="Oracle Certified Professional: Java SE 11 Developer"
          company="Oracle"
          companyUrl="https://www.oracle.com/index.html"
          // logo={oracle_logo}
          logo="images/oracle.png"
          from={new Date("2021-04-23")}
          url="https://catalog-education.oracle.com/pls/certview/sharebadge?id=80D20A440FC6CCD06D30C39AC2A8312B1B9C1191594C24EEFC901450044827F2"
        />
        <Certificate
          name="Cambridge English Level 1 Certificate in ESOL International (Business Vantage)"
          company="Cambridge Assessment English"
          companyUrl="https://www.cambridgeenglish.org/"
          // logo={cambridge_logo}
          logo="images/cambridge_assessment_english.png"
          from={new Date("2019-06")}
          id="A9686056"
        />
        <Certificate
          name="LE-1: Linux Essentials"
          company="Linux Professional Institute"
          companyUrl="https://www.lpi.org/"
          // logo={lpi_logo}
          logo="images/linux_professional_institute.png"
          from={new Date("2019-06")}
          url="http://lpi.org/v/LPI000429624/yj5w3k2jay"
        />
      </div>
    </div>
  );
}

export default Certificates;