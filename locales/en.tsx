const about = (age: number) => {
  return {
    heading: "About me",
    p1: "Hi! My name is Simon.",
    p2:
      "I am " +
      age +
      " years old and graduated from the HTL St. Pölten (Computer Science) with excellent results in the school year 2020/21. The focus in school was on Java Spring Development, Algorithmics and Database Design. Privately, I enjoy automating processes using Python and developing web apps using JavaScript frameworks like React.",
    p3: "At the moment I am doing my civilian service at the Samariterbund in St. Pölten.",
    p4: "In my free time I like to do weight training, I deal a lot with the topic of nutrition and I like to watch movies and series.",
  };
};

const qualifications = {
  heading: "Skills",
  databases: "Relational databases",
};

const certificates = {
  heading: "Certificates",
  from: "Issued",
  no_from: "No issue date",
  to: "Valid until",
  no_to: "No expiration date",
  proof: "Show verification",
  id: "Certificate ID",
};

const career = {
  heading: "Work experience",
  asboe: {
    position: (
      <a
        className="my-link"
        href="https://en.wikipedia.org/wiki/Zivildienst"
        target="_blank"
        rel="noreferrer"
      >
        Zivildienst
      </a>
    ),
    firma: "ASBÖ St. Pölten",
    ort: "St. Pölten, Lower Austria, Austria",
    info: {
      li1: "Paramedic training",
      li2: "Care of patients during rescue and ambulance transport",
      li3: "Carrying out organizational tasks within the rescue center",
      li4: "Support of professional and volunteer staff in various matters",
    },
  },
  bso: {
    position: "Internship",
    firma: "BSO EDV- und Betriebsberatung GmbH",
    ort: "St. Pölten, Lower Austria, Austria",
    info: {
      li1: "Development of a REST API in PHP",
      li2: (
        <span>
          Setting up a PHP test environment using Docker (
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
      li3: "Setting up PCs for customers (hardware and software)",
      li4: "Warehouse work",
    },
  },
  geberit: {
    position: "Internship",
    firma: "Geberit Österreich",
    ort: "Pottenbrunn, Lower Austria, Austria",
    info: {
      li1: "Assistance with the upgrade of the employees' PCs to Windows 10",
      li2: (
        <span>
          Introduction to the{" "}
          <a
            className="my-link"
            href="https://de.wikipedia.org/wiki/Active_Directory"
            target="_blank"
            rel="noreferrer"
            hover-info="Active Directory (Wikipedia)"
          >
            Active Directory
          </a>{" "}
          organizational units of the company
        </span>
      ),
    },
  },
  gemeinde: {
    position: "Internship",
    firma: "Municipal Office Kasten bei Böheimkirchen",
    ort: "Kasten bei Böheimkirchen, Lower Austria, Austria",
    info: {
      li1: "Helping out in the community: mowing lawns, trimming shrubs, etc.",
    },
  },
};

const education = {
  heading: "Education",
  htl: {
    zweig: "Computer science department",
    info: {
      li1: "Graduated with excellent grades",
      li2: "Completion of the matriculation and diploma examinations with excellent results",
      li3: (
        <span>
          Diploma thesis: Free text analysis using{" "}
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
    zweig: "Emphasis on music",
  },
};

const others = {
  heading: "Others",
  ccc: {
    untertitel: "Contest",
    titel: "Catalysts Coding Contest",
    content: {
      li1: (
        <span>
          4<sup>th</sup> place out of 93 at the 32<sup>nd</sup> School Coding
          Contest in Vienna in November 2019
        </span>
      ),
      li2: (
        <span>
          12<sup>th</sup> place out of 149 at the 32<sup>nd</sup> Classic Coding
          Contest in Vienna in November 2019
        </span>
      ),
      li3: (
        <span>
          15<sup>th</sup> place out of 121 at the 30<sup>th</sup> School Coding
          Contest in Vienna in March 2019
        </span>
      ),
      li4: (
        <span>
          21<sup>st</sup> place out of 149 at the 30<sup>th</sup> Classic Coding
          Contest in Vienna in March 2019
        </span>
      ),
    },
  },
  licenses: {
    titel: "Driving licenses",
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
