function Contact({ name, link, logo }) {
    return (
        <p>
            <a href={link} target="_blank" rel="noreferrer">
                <span className={"m-1 icon-" + logo + "-white"} />
                {name}
            </a>
        </p>
    )
}

function Footer() {
    return (
        <div className="bg-hero-brick-wall bg-headerFooter text-white p-8 flex items-center justify-center">
            <div className="flex-shrink-0">
                <img className="h-24 w-24 object-cover lg:h-48 lg:w-48 shadow-md rounded-full m-4" src="images/ich_3_stylized_cropped.png" alt="Ich" />
            </div>
            <div className="text-left text-xs lg:text-base">
                <p>Simon Mader</p>
                <Contact
                    name="mail@simonmader.at"
                    link="mailto:mail@simonmader.at"
                    logo="gmail"
                />
                <Contact
                    name="simonmader"
                    link="https://www.linkedin.com/in/simonmader/"
                    logo="linkedin"
                />
            </div>
        </div>
    )
}

export default Footer;