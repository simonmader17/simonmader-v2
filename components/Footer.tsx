import Image from "next/image";

import contact_img from "../public/images/personal_images/ich_2.jpeg";

interface ContactInterface {
  name: string;
  link: string;
  logo: string;
}

function Contact({ name, link, logo }: ContactInterface) {
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
        <div className="relative m-4 h-24 w-24 lg:h-48 lg:w-48">
          <Image
            src={contact_img}
            alt="Contact image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            className="rounded-full shadow-md"
          />
        </div>
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
        <Contact
          name="simonmader17"
          link="https://github.com/simonmader17"
          logo="github"
        />
      </div>
    </div>
  );
}

export default Footer;
