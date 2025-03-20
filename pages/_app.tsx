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
      <SkeletonTheme baseColor="#1d2021" highlightColor="#3c3836">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
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

        <div className="relative z-0 flex min-h-screen flex-col overflow-hidden text-center font-SfPixelate text-fg">
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
