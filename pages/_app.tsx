import Footer from "../components/Footer";
import "../styles/styles.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxBackground from "../components/ParallaxBackground";
import BackButton from "../components/BackButton";

function MyApp({ Component, pageProps }) {
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
        </Head>

        <div className="font-SfPixelate ltmd:bg-hero-brick-wall-purple ltmd:bg-body relative z-0 flex min-h-screen flex-col overflow-hidden text-center text-white">
          <ParallaxBackground className="ltmd:hidden" />

          <BackButton />

          <Component {...pageProps} />

          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </SkeletonTheme>
    </ParallaxProvider>
  );
}

export default MyApp;
