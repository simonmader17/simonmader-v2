import Image from "next/image";

// import contact_img from "../../../public/images/personal_images/ich_5.jpg";
import LocalesSwitcher from "./LocalesSwitcher";

const Footer = () => {
  return (
    <div className="bg-hero-brick-wall bg-headerFooter drop-shadow-3xl flex items-center justify-center p-8 text-white">
      <div className="drop-shadow-pixel flex-shrink-0">
        <div className="clip-rounded-pixel-24 lg:clip-rounded-pixel-48 relative m-4 h-24 w-24 lg:h-48 lg:w-48">
          <Image
            // src={contact_img}
            src="https://github.com/simonmader17.png"
            alt="Simon Mader"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            // placeholder="blur"
          />
        </div>
      </div>
      <div className="drop-shadow-pixel-sm text-left text-xs lg:text-base">
        <p className="font-PressStart2P mb-1 font-bold uppercase">
          Simon Mader
        </p>
        <span className="flex">
          <a
            href="mailto:mail@simonmader.at"
            title="E-Mail"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gmail focus:text-gmail hover:font-bold"
          >
            <span className={`icon-gmail-white m-1`} />
            mail@simonmader.at
          </a>
        </span>
        <span className="flex">
          <a
            href="https://www.linkedin.com/in/simonmader/"
            title="Linkedin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-linkedin focus:text-linkedin hover:font-bold"
          >
            <span className={`icon-linkedin-white m-1`} />
            simonmader
          </a>
        </span>
        <span className="flex">
          <a
            href="https://github.com/simonmader17"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-github focus:text-github hover:font-bold"
          >
            <span className={`icon-github-white m-1`} />
            simonmader17
          </a>
        </span>
        <LocalesSwitcher />
      </div>
    </div>
  );
};

export default Footer;
