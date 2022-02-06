function Qualification({ name, logo, link, title, text }) {
    return (
        <div className="p-6 max-w-full m-4 bg-black bg-opacity-50 rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
                <a className={"my-qualification text-5xl icon-" + logo} href={link} target="_blank" rel="noreferrer" hover-info={title}></a>
            </div>
            <div>
                <div className="text-xl font-medium text-white">{name}</div>
                <p className="text-gray-400 text-m">{text ? text : ""}</p>
            </div>
        </div>
    )
}

function Others({ qualifications }) {
    const items = [];

    for (const qual of qualifications) {
        items.push(<a className={"my-qualification text-6xl m-4 icon-" + qual.logo} href={qual.link} target="_blank" rel="noreferrer" hover-info={qual.title}></a>)
    }

    return (
        <div className="p-6 max-w-full m-4 bg-black bg-opacity-50 rounded-xl shadow-md flex flex-wrap items-center lg:justify-between justify-around">
            {items}
        </div>
    )
}

function Qualifications() {
    return (
        <div>
            <h2 id="qualifications" className="text-2xl font-bold m-4 pt-4">Kenntnisse</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1">
                <Qualification
                    name="Java"
                    logo="java"
                    link="https://www.java.com/de/"
                    title="Java"
                />
                <Qualification
                    name="JavaScript"
                    logo="javascript"
                    link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    title="JavaScript"
                />
                <Qualification
                    name="Python"
                    logo="python"
                    link="https://www.python.org/"
                    title="Python"
                />
                <Qualification
                    name="Spring Framework"
                    logo="spring"
                    link="https://spring.io/"
                    title="Spring"
                />
                <Qualification
                    name="React"
                    logo="react"
                    link="https://reactjs.org/"
                    title="React"
                />
                <Qualification
                    name="Relationale Datenbanken"
                    logo="database"
                    link="https://de.wikipedia.org/wiki/Relationale_Datenbank"
                    title="Relationale Datenbanken"
                    text={(
                        <ul className={"ml-4 list-disc"}>
                            <li>Microsoft SQL Server</li>
                            <li>PostgreSQL</li>
                            <li>Oracle Database</li>
                        </ul>
                    )}
                />
            </div>
            <Others
                qualifications={[
                    {
                        logo: "android",
                        link: "https://www.android.com/",
                        title: "Android"
                    },
                    {
                        logo: "git",
                        link: "https://git-scm.com/",
                        title: "Git"
                    },
                    {
                        logo: "linux",
                        link: "https://www.linux.org/",
                        title: "Linux"
                    },
                    {
                        logo: "apache",
                        link: "https://httpd.apache.org/",
                        title: "Apache HTTP Server"
                    },
                    {
                        logo: "php",
                        link: "https://www.php.net/",
                        title: "PHP"
                    },
                    {
                        logo: "latex",
                        link: "https://www.latex-project.org/",
                        title: "LaTeX"
                    },
                    {
                        logo: "html5",
                        link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
                        title: "HTML5"
                    },
                    {
                        logo: "css3",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                        title: "CSS"
                    },
                    {
                        logo: "microsoftoffice",
                        link: "https://www.office.com/",
                        title: "Microsoft Office"
                    }
                ]}
            />
        </div>
    )
}

export default Qualifications;