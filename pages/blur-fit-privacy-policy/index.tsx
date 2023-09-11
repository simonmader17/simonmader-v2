import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";

import icon from "../../public/images/blur-fit-privacy-policy/icon.png";

const BlurFitPrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Blur Fit Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy of the app i created, called Blur Fit"
        />
        <meta property="og:title" content="Blur Fit Privacy Policy" />
        <meta
          property="og:description"
          content="Privacy policy of the app i created, called Blur Fit"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://simonmader.at/images/blur-fit-privacy-policy/icon.png"
        />
        <meta
          property="og:url"
          content="https://simonmader.at/blur-fit-privacy-policy"
        />
      </Head>

      <Container className="ltmd:mt-20">
        <div className="drop-shadow-pixel relative mx-auto mt-10 h-36 w-36">
          <Image
            src={icon}
            alt="App icon"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            placeholder="blur"
            className="clip-rounded-pixel"
          />
        </div>

        <h1 className="drop-shadow-pixel-sm mt-5 mb-5 text-center md:mt-10">
          Blur Fit Privacy Policy
        </h1>

        <div className="text-center text-lg">
          <p>{"Blur Fit doesn't collect data in any way."}</p>
        </div>
      </Container>
    </>
  );
};

export default BlurFitPrivacyPolicyPage;
