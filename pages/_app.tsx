import Footer from "../components/Footer";
import "../styles/styles.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
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

      <div className="font-SfPixelate bg-hero-brick-wall-purple bg-body flex min-h-screen flex-col text-center text-white">
        <Component {...pageProps} />

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default MyApp;
