function Contact({ name, link, logo }) {
    return (
        <p>
            <a href={link} target="_blank" rel="noreferrer">
                <span className={`m-1 icon-${logo}-white`} />
                {name}
            </a>
        </p>
    );
}

function Footer() {
    return (
        <div className="bg-hero-brick-wall bg-headerFooter flex items-center justify-center p-8 text-white">
            <div className="flex-shrink-0">
                <img
                    className="m-4 h-24 w-24 rounded-full object-cover shadow-md lg:h-48 lg:w-48"
                    src="images/ich_3_stylized_cropped.png"
                    alt="Ich"
                />
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
    );
}

export default Footer;
