interface QualificationInterface {
  name: string;
  logo: string;
  link: string;
  title: string;
  text?: JSX.Element;
}

function Qualification({
  name,
  logo,
  link,
  title,
  text,
}: QualificationInterface) {
  return (
    <div className="m-4 flex max-w-full items-center space-x-4 rounded-xl bg-black bg-opacity-50 p-6 shadow-md">
      <div className="flex-shrink-0">
        <a
          className={`my-qualification text-5xl icon-${logo}`}
          href={link}
          target="_blank"
          rel="noreferrer"
          hover-info={title}
        ></a>
      </div>
      <div>
        <div className="text-xl font-medium text-white">{name}</div>
        <p className="text-m text-gray-400">{text ? text : ""}</p>
      </div>
    </div>
  );
}

interface OtherQualificationInterface {
  logo: string;
  link: string;
  title: string;
}

interface OthersInterface {
  qualifications: OtherQualificationInterface[];
}

function Others({ qualifications }: OthersInterface) {
  const items = [];

  for (const qual of qualifications) {
    items.push(
      <a
        className={`my-qualification m-4 text-6xl icon-${qual.logo}`}
        href={qual.link}
        target="_blank"
        rel="noreferrer"
        hover-info={qual.title}
      ></a>
    );
  }

  return (
    <div className="m-4 flex max-w-full flex-wrap items-center justify-around rounded-xl bg-black bg-opacity-50 p-6 shadow-md lg:justify-between">
      {items}
    </div>
  );
}

function Qualifications() {
  return (
    <div>
      <h2 id="qualifications" className="m-4 pt-4 text-2xl font-bold">
        Kenntnisse
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3">
        <Qualification
          name="TypeScript"
          logo="typescript"
          link="https://www.typescriptlang.org/"
          title="TypeScript"
        />
        <Qualification
          name="Java"
          logo="java"
          link="https://www.java.com/de/"
          title="Java"
        />
        <Qualification
          name="Python"
          logo="python"
          link="https://www.python.org/"
          title="Python"
        />
        {/* <Qualification
          name="React"
          logo="react"
          link="https://reactjs.org/"
          title="React"
        /> */}
        <Qualification
          name="Next.js"
          logo="next-dot-js"
          link="https://nextjs.org/"
          title="Next.js"
        />
        <Qualification
          name="Spring Framework"
          logo="spring"
          link="https://spring.io/"
          title="Spring"
        />
        <Qualification
          name="Relationale Datenbanken"
          logo="database"
          link="https://de.wikipedia.org/wiki/Relationale_Datenbank"
          title="Relationale Datenbanken"
          text={
            <ul className={"ml-4 list-disc"}>
              <li>Microsoft SQL Server</li>
              <li>PostgreSQL</li>
              <li>Oracle Database</li>
            </ul>
          }
        />
      </div>
      <Others
        qualifications={[
          {
            logo: "android",
            link: "https://www.android.com/",
            title: "Android",
          },
          {
            logo: "git",
            link: "https://git-scm.com/",
            title: "Git",
          },
          {
            logo: "linux",
            link: "https://www.linux.org/",
            title: "Linux",
          },
          {
            logo: "apache",
            link: "https://httpd.apache.org/",
            title: "Apache HTTP Server",
          },
          // {
          //   logo: "php",
          //   link: "https://www.php.net/",
          //   title: "PHP",
          // },
          {
            logo: "latex",
            link: "https://www.latex-project.org/",
            title: "LaTeX",
          },
          {
            logo: "react",
            link: "https://reactjs.org/",
            title: "React"
          },
          {
            logo: "html5",
            link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
            title: "HTML5",
          },
          {
            logo: "css3",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            title: "CSS",
          },
          {
            logo: "javascript",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            title: "JavaScript"
          },
          {
            logo: "microsoftoffice",
            link: "https://www.office.com/",
            title: "Microsoft Office",
          },
        ]}
      />
    </div>
  );
}

export default Qualifications;
