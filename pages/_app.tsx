import Footer from "../components/Footer";
import "../styles/styles.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function MyApp({ Component, pageProps }) {
  return (
    <SkeletonTheme
      baseColor="rgba(0, 0, 0, .5)"
      highlightColor="rgba(0, 0, 0, 0.5)"
    >
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
