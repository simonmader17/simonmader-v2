import dynamic from "next/dynamic";
import Head from "next/head";
import Container from "../components/Container";
import useTranslation from "next-translate/useTranslation";

const DiplomaThesisViewer = dynamic(
  import("../components/DiplomaThesisViewer"),
  { ssr: false }
);

const DiplomaThesis = () => {
  const { t } = useTranslation("meta");

  return (
    <>
      <Head>
        <title>Simon Mader&apos;s Diploma Thesis</title>
        <meta name="description" content={t("diploma_thesis_title")} />
      </Head>

      <Container>
        <DiplomaThesisViewer />
      </Container>
    </>
  );
};

export default DiplomaThesis;
