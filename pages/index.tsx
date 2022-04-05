import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Career from "../components/Career";
import Certificates from "../components/Certificates";
import ChromeNotification from "../components/ChromeNotification";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Others from "../components/Others";
import Projects from "../components/Projects";
import Qualifications from "../components/Qualifications";

declare const InstallTrigger: any;

export default function Home() {
  // Firefox detection
  const [isFirefox, setIsFirefox] = useState(false);
  useEffect(() => {
    setIsFirefox(typeof InstallTrigger !== "undefined");
  }, []);

  return (
    <div>
      <Head>
        <title>Simon Mader&apos;s Webpage</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/SfPixelate-wBgw.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Graph-35-pix.ttf"
          as="font"
          crossOrigin=""
        />
        <meta
          name="description"
          content="This is the personal webpage of Simon Mader."
        />
      </Head>

      <div className="font-SfPixelate text-center text-white">
        {isFirefox && <ChromeNotification />}

        <Header />

        <div className="bg-hero-brick-wall-purple bg-body p-4 text-left">
          <div className="container mx-auto">
            <About />

            <Projects />

            <Qualifications />

            <Certificates />

            <Career />

            <Education />

            <Others />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
