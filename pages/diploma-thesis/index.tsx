import Head from "next/head";
import Container from "../../components/Container";
import useTranslation from "next-translate/useTranslation";
import DiplomaThesis from "../../components/pages/diploma-thesis/DiplomaThesis";

const DiplomaThesisPage = () => {
  const { t } = useTranslation("meta");

  return (
    <>
      <Head>
        <title>{t("diploma_thesis_title")}</title>
        <meta name="description" content={t("diploma_thesis_description")} />
        <meta property="og:title" content={t("diploma_thesis_title")} />
        <meta
          property="og:description"
          content={t("diploma_thesis_description")}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://simonmader.at/images/projects/diploma-thesis/diploma-thesis-laptop.png"
        />
        <meta
          property="og:url"
          content="https://simonmader.at/diploma-thesis"
        />
      </Head>

      <Container>
        <DiplomaThesis />
      </Container>
    </>
  );
};

export default DiplomaThesisPage;
