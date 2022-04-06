import Footer from "../components/Footer";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-SfPixelate bg-hero-brick-wall-purple bg-body flex min-h-screen flex-col text-center text-white">
      <Component {...pageProps} />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
