import Head from "next/head";
import Container from "../components/Container";
import useTranslation from "next-translate/useTranslation";
import DiplomaThesis from "../components/pages/diploma-thesis/DiplomaThesis";

const DiplomaThesisPage = () => {
  const { t } = useTranslation("meta");

  return (
    <>
      <Head>
        <title>Simon Mader&apos;s Diploma Thesis</title>
        <meta name="description" content={t("diploma_thesis_title")} />
      </Head>

      <Container>
        <DiplomaThesis />
      </Container>
    </>
  );
};

export default DiplomaThesisPage;
