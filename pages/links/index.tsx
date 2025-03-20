import Head from "next/head";
import Container from "../../components/Container";
import Image from "next/image";
import { createRipple } from "../../lib/ripple";
import Link from "next/link";

const LinktreePage = () => {
  return (
    <>
      <Head>
        <title>Simon Mader&apos;s Links</title>
        <meta name="description" content="Simon Mader's Links" />
        <meta property="og:title" content="Simon Mader's Links" />
        <meta property="og:description" content="Simon Mader's Links" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://github.com/simonmader17.png"
        />
        <meta property="og:url" content="https://simonmader.at/links" />
      </Head>

      <Container className="-my-4">
        <div className="flex min-h-screen flex-col items-center justify-center py-8">
          <div className="flex-shrink-0 drop-shadow-pixel">
            <div className="clip-rounded-pixel-48 relative m-4 h-48 w-48">
              <Image
                src="https://github.com/simonmader17.png"
                alt="Simon Mader"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <h1>Simon Mader</h1>
          <div className="mx-auto w-full max-w-[640px]">
            <Link href="/" passHref>
              <a
                className="clip-rounded-pixel group relative my-4 flex items-center justify-start bg-black bg-opacity-70 p-4"
                onPointerDown={(e) => createRipple(e)}
              >
                <span className="icon-brave-white text-5xl transition-all group-hover:text-brave"></span>
                <p className="flex-grow text-center text-lg">Website</p>
                <span className="icon-brave-white text-5xl opacity-0"></span>
              </a>
            </Link>
            <a
              href="mailto:mail@simonmader.at"
              target="_blank"
              rel="noreferrer"
              className="clip-rounded-pixel group relative my-4 flex items-center justify-start bg-black bg-opacity-70 p-4"
              onPointerDown={(e) => createRipple(e)}
            >
              <span className="icon-gmail-white text-5xl transition-all group-hover:text-gmail"></span>
              <p className="flex-grow text-center text-lg">E-Mail</p>
              <span className="icon-gmail-white text-5xl opacity-0"></span>
            </a>
            <a
              href="https://www.linkedin.com/in/simonmader/"
              target="_blank"
              rel="noreferrer"
              className="clip-rounded-pixel group relative my-4 flex items-center justify-start bg-black bg-opacity-70 p-4"
              onPointerDown={(e) => createRipple(e)}
            >
              <span className="icon-linkedin-white text-5xl transition-all group-hover:text-linkedin"></span>
              <p className="flex-grow text-center text-lg">Linkedin</p>
              <span className="icon-linkedin-white text-5xl opacity-0"></span>
            </a>
            <a
              href="https://github.com/simonmader17"
              target="_blank"
              rel="noreferrer"
              className="clip-rounded-pixel group relative my-4 flex items-center justify-start bg-black bg-opacity-70 p-4"
              onPointerDown={(e) => createRipple(e)}
            >
              <span className="icon-github-white text-5xl transition-all group-hover:text-github"></span>
              <p className="flex-grow text-center text-lg">GitHub</p>
              <span className="icon-github-white text-5xl opacity-0"></span>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LinktreePage;
