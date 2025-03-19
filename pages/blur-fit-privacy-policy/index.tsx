import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";

import icon from "../../public/images/blur-fit-privacy-policy/icon.webp";

const BlurFitPrivacyPolicyPage = () => {
  const { t } = useTranslation("blur-fit-privacy-policy");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://simonmader.at/images/blur-fit-privacy-policy/icon.webp"
        />
        <meta
          property="og:url"
          content="https://simonmader.at/blur-fit-privacy-policy"
        />
      </Head>

      <Container className="ltmd:mt-20">
        <div className="relative mx-auto mt-10 h-36 w-36 drop-shadow-pixel">
          <Image
            src={icon}
            alt="App icon"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            placeholder="blur"
            className="clip-rounded-pixel"
          />
        </div>

        <h1 className="mt-5 mb-5 text-center drop-shadow-pixel-sm md:mt-10">
          {t("title")}
        </h1>

        <div className="text-center text-lg">
          <p>{t("description")}</p>
        </div>
      </Container>
    </>
  );
};

export default BlurFitPrivacyPolicyPage;
