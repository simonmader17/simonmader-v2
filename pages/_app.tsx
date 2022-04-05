import Footer from "../components/Footer";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-SfPixelate flex min-h-screen flex-col text-center text-white">
      <Component {...pageProps} />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
