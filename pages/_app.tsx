import Footer from "../components/pages/_app/Footer";
import "../styles/styles.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxBackground from "../components/pages/_app/ParallaxBackground";
import BackButton from "../components/pages/_app/BackButton";
import Navbar from "../components/pages/_app/Navbar/Navbar";
import { useEffect } from "react";
import twemoji from "twemoji";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    twemoji.parse(document.body);
  });

  const router = useRouter();

  return (
    <ParallaxProvider>
      <SkeletonTheme baseColor="#0c0c0c" highlightColor="#000">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/SfPixelate-wBgw.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/PressStart2P-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FiraCode-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <meta
            property="og:locale"
            content={router.locale === "de" ? "de_DE" : "en_US"}
          />
          <meta property="og:locale:alternate" content="de_DE" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta property="og:site_name" content="simonmader.at" />
        </Head>

        <div className="font-SfPixelate relative z-0 flex min-h-screen flex-col overflow-hidden text-center text-white">
          <Navbar />

          <ParallaxBackground className="ltmd:hidden" />

          <BackButton />

          <Component {...pageProps} />

          <div className="relative z-20 mt-auto">
            <Footer />
          </div>
        </div>
      </SkeletonTheme>
    </ParallaxProvider>
  );
}

export default MyApp;
