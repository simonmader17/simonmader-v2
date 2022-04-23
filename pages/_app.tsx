import Footer from "../components/Footer";
import "../styles/styles.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const url = `https://simonmader.at${router.route}`;

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
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo({ top: 0 })}
        >
          <Component {...pageProps} key={url} />
        </AnimatePresence>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default MyApp;
