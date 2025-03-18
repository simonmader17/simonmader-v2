import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import About from "../components/pages/index/About";
import Career from "../components/pages/index/Career";
import Certificates from "../components/pages/index/Certificates";
import Container from "../components/Container";
import Education from "../components/pages/index/Education";
import Others from "../components/pages/index/Others";
import Projects from "../components/pages/index/Projects";
import Qualifications from "../components/pages/index/Qualifications";
import IndexHeader from "../components/pages/index/IndexHeader";

const IndexPage = () => {
  const { t } = useTranslation("meta");

  return (
    <>
      <Head>
        <title>Simon Mader&apos;s Webpage</title>
        <meta name="description" content={t("index_description")} />
        <meta property="og:title" content="Simon Mader's Webpage" />
        <meta property="og:description" content={t("index_description")} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://github.com/simonmader17.png"
        />
        <meta property="og:url" content="https://simonmader.at" />
      </Head>

      <IndexHeader />

      <Container>
        <About />

        <Projects />

        <Qualifications />

        <Certificates />

        <Career />

        <Education />

        <Others />
      </Container>
    </>
  );
};

export default IndexPage;
