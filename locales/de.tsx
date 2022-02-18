const about = (age: number) => {
  return {
    heading: "Über mich",
    p1: "Hi! Ich bin Simon.",
    p2:
      "Ich bin " +
      age +
      " Jahre alt und habe mit dem Schuljahr 2020/21 die HTL St. Pölten (Informatik) mit ausgezeichnetem Erfolg abgeschlossen. Der Fokus in der Schule lag auf Java Spring Development, Algorithmik und Datenbankdesign. Privat beschäftige ich mich gerne mit der Automatisierung von Vorgängen mithilfe von Python und der Entwicklung von Webapps mithilfe von JavaScript Frameworks wie React.",
    p3: "Zurzeit leiste ich meinen Zivildienst beim Samariterbund in St. Pölten.",
    p4: "In meiner Freizeit mache ich gerne Kraftsport, beschäftige ich mich viel mit dem Thema Ernährung und schaue gerne Filme und Serien.",
  };
};

const qualifications = {
  heading: "Kenntnisse",
  databases: "Relationale Datenbanken",
};

const certificates = {
  heading: "Zertifikate",
  from: "Ausgestellt",
  no_from: "Kein Ausstellungsdatum",
  to: "Gültig bis",
  no_to: "Kein Ablaufdatum",
  proof: "Nachweis anzeigen",
  id: "Zertifikats-ID",
};

const career = {
  heading: "Berufserfahrung",
  asboe: {
    position: "Zivildienst",
    firma: "ASBÖ St. Pölten",
    ort: "St. Pölten, Niederösterreich, Österreich",
    info: {
      li1: "Ausbildung zum Rettungssanitäter",
      li2: "Betreuung von Patienten während des Rettungs- und Krankentransportes",
      li3: "Erledigung organisatorischer Aufgaben innerhalb der Rettungsstelle",
      li4: "Unterstützung der beruflichen und freiwilligen Mitarbeiter in verschiedenen Belangen",
    },
  },
  bso: {
    position: "Praktikum",
    firma: "BSO EDV- und Betriebsberatung GmbH",
    ort: "St. Pölten, Niederösterreich, Österreich",
    info: {
      li1: "Arbeit an einer REST API in PHP",
      li2: (
        <span>
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
        </span>
      ),
      li3: "Aufsetzen von PC's für Kunden (Hardware und Software)",
      li4: "Lagerarbeiten",
    },
  },
  geberit: {
    position: "Praktikum",
    firma: "Geberit Österreich",
    ort: "Pottenbrunn, Niederösterreich, Österreich",
    info: {
      li1: "Mitarbeit an der Umstellung der PC's der Mitarbeiter auf Windows 10",
      li2: (
        <span>
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
        </span>
      ),
    },
  },
  gemeinde: {
    position: "Praktikum",
    firma: "Gemeindeamt Kasten bei Böheimkirchen",
    ort: "Kasten bei Böheimkirchen, Niederösterreich, Österreich",
    info: {
      li1: "Mitarbeit in der Gemeinde: Rasenmähen, Sträucher schneiden, usw.",
    },
  },
};

const education = {
  heading: "Schullaufbahn",
  htl: {
    zweig: "Abteilung Informatik",
    info: {
      li1: "Mit ausgezeichnetem Erfolg abgeschlossen",
      li2: "Abschluss der Reife- und Diplomprüfung mit ausgezeichnetem Erfolg",
      li3: (
        <span>
          Diplomarbeitsthema: Freitextanalyse mithilfe von{" "}
          <a
            className="my-link"
            href="https://en.wikipedia.org/wiki/Natural_language_processing"
            target="_blank"
            rel="noreferrer"
            hover-info="NLP (Wikipedia)"
          >
            Natural Language Processing
          </a>
        </span>
      ),
    },
  },
  borg: {
    zweig: "Musikalischer Zweig",
  },
};

const others = {
  heading: "Sonstiges",
  ccc: {
    untertitel: "Wettbewerb",
    titel: "Catalysts Coding Contest",
    content: {
      li1: (
        <span>
          Platz 4 von 93 beim 32<sup>nd</sup> School Coding Contest im November
          2019 in Wien
        </span>
      ),
      li2: (
        <span>
          Platz 12 von 149 beim 32<sup>nd</sup> Classic Coding Contest im
          November 2019 in Wien
        </span>
      ),
      li3: (
        <span>
          Platz 15 von 121 beim 30<sup>th</sup> School Coding Contest im März
          2019 in Wien
        </span>
      ),
      li4: (
        <span>
          Platz 21 von 149 beim 30<sup>th</sup> Classic Coding Contest im März
          2019 in Wien
        </span>
      ),
    },
  },
  licenses: {
    titel: "Führerscheine",
    content: {
      li1: "B",
    },
  },
};

export default {
  about,
  qualifications,
  certificates,
  career,
  education,
  others,
};
