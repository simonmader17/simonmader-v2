import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import BlurredBgImageContainer from "../../components/BlurredBgImageContainer";
import Container from "../../components/Container";

const ImprintPage = () => {
  const { t } = useTranslation("imprint");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="robots" content="noindex" />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simonmader.at/imprint" />
      </Head>

      <Container className="ltmd:mt-20">
        <h1 className="mt-5 mb-5 text-center drop-shadow-pixel-sm md:mt-10">
          {t("title")}
        </h1>

        <div className="mx-auto max-w-2xl">
          <BlurredBgImageContainer bgSrc={null} bgAlt="">
            <p className="mb-5 font-PressStart2P text-xs uppercase text-gray">
              {t("disclosure_heading")}
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 md:text-lg ltsm:grid-cols-1 ltsm:gap-y-0">
              <dt className="text-accent">{t("media_owner")}</dt>
              <dd>Simon Mader</dd>
              <dt className="text-accent ltsm:mt-3">{t("residence")}</dt>
              <dd>{t("residence_value")}</dd>
              <dt className="text-accent ltsm:mt-3">{t("contact")}</dt>
              <dd>
                <a
                  href="mailto:mail@simonmader.at"
                  className="hover:font-bold hover:text-gmail focus:text-gmail"
                >
                  <span className="icon-gmail-white mr-1" />
                  mail@simonmader.at
                </a>
              </dd>
              <dt className="text-accent ltsm:mt-3">{t("direction")}</dt>
              <dd>{t("direction_value")}</dd>
            </dl>
          </BlurredBgImageContainer>
        </div>
      </Container>
    </>
  );
};

export default ImprintPage;
