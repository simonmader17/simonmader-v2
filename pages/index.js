import Head from "next/head";
import About from "../components/About";
import Career from "../components/Career";
import Certificates from "../components/Certificates";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Others from "../components/Others";
import Qualifications from "../components/Qualifications";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simon Mader</title>
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
      </Head>
      
      <div className="text-center font-SfPixelate text-white">

        <Header />

        <div className="p-4 bg-hero-brick-wall-purple md:bg-fixed bg-body text-left">

          <div className="container mx-auto">
            <About />

            <Qualifications />

            <Certificates />

            <Education />

            <Career />

            <Others />
          </div>

        </div>

        <Footer />
        
      </div>
    </div>
  )
}
