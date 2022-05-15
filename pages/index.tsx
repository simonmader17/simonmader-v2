import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Career from "../components/Career";
import Certificates from "../components/Certificates";
import ChromeNotification from "../components/ChromeNotification";
import Container from "../components/Container";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Others from "../components/Others";
import Projects from "../components/Projects";
import Qualifications from "../components/Qualifications";

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
