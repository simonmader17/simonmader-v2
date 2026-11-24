import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";

// import contact_img from "../../../public/images/personal_images/ich_5.webp";
import LocalesSwitcher from "./LocalesSwitcher";

const Footer = () => {
  const { t } = useTranslation("meta");

  return (
    <div className="flex items-center justify-center bg-secondary p-8 text-fg drop-shadow-3xl bg-hero-brick-wall-secondary">
      <div className="flex-shrink-0 drop-shadow-pixel">
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
      <div className="text-left text-xs drop-shadow-pixel-sm lg:text-base">
        <p className="mb-1 font-PressStart2P font-bold uppercase">
          Simon Mader
        </p>
        <span className="flex">
          <a
            href="mailto:mail@simonmader.at"
            title="E-Mail"
            target="_blank"
            rel="noreferrer"
            className="hover:font-bold hover:text-gmail focus:text-gmail"
          >
            <span className={`icon-gmail-white m-1`} />
            mail@simonmader.at
          </a>
        </span>
        <span className="flex">
          <a
            href="/pubkey.asc"
            title="Public PGP Key"
            download
            className="hover:font-bold hover:text-gnuprivacyguard focus:text-gnuprivacyguard"
          >
            <span className={`icon-gnuprivacyguard-white m-1`} />
            PGP Key
          </a>
        </span>
        <span className="flex">
          <a
            href="https://signal.me/#eu/FdIJ6nHg7_nBrql3zlphZAd0-7XzeJBh1StLJSHVHyLLSBmdURpO8qEn0bw2M0CB"
            title="Signal"
            target="_blank"
            rel="noreferrer"
            className="hover:font-bold hover:text-signal focus:text-signal"
          >
            <span className={`icon-signal-white m-1`} />
            Signal
          </a>
        </span>
        <span className="flex">
          <a
            href="https://github.com/simonmader17"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hover:font-bold hover:text-github focus:text-github"
          >
            <span className={`icon-github-white m-1`} />
            simonmader17
          </a>
        </span>
        <span className="flex">
          <Link href="/imprint">
            <a className="m-1 underline hover:font-bold">{t("imprint")}</a>
          </Link>
        </span>
        <LocalesSwitcher />
      </div>
    </div>
  );
};

export default Footer;
