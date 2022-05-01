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

        <div className="font-SfPixelate ltmd:bg-hero-brick-wall-purple ltmd:bg-body relative flex min-h-screen flex-col overflow-hidden text-center text-white">
          <BackButton />

          <Component {...pageProps} />

          <ParallaxBackground className="ltmd:hidden" />

          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </SkeletonTheme>
    </ParallaxProvider>
  );
}

export default MyApp;
