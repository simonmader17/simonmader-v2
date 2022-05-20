import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import About from "../components/pages/index/About";
import Career from "../components/pages/index/Career";
import Certificates from "../components/pages/index/Certificates";
import ChromeNotification from "../components/pages/index/ChromeNotification";
import Container from "../components/Container";
import Education from "../components/pages/index/Education";
import Header from "../components/pages/index/Header";
import Others from "../components/pages/index/Others";
import Projects from "../components/pages/index/Projects";
import Qualifications from "../components/pages/index/Qualifications";

export default function Home() {
  const { t } = useTranslation("meta");

  return (
    <>
      <Head>
        <title>Simon Mader&apos;s Webpage</title>
        <meta name="description" content={t("index_title")} />
      </Head>

      <ChromeNotification />

      <Header />

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
}
