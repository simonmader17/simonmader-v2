import Head from "next/head";
import Container from "../../components/Container";
import Image from "next/image";

const LinktreePage = () => {
  return (
    <>
      <Head>
        <title>Simon Mader&apos;s Linktree</title>
        <meta name="description" content="Simon Mader's Linktree" />
      </Head>

      <Container className="ltmd:mt-20">
        <div className="flex-shrink-0 drop-shadow-pixel">
          <div className="clip-rounded-pixel-48 relative m-4 mx-auto h-48 w-48">
            <Image
              src="https://github.com/simonmader17.png"
              alt="Simon Mader"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <h1 className="text-center">Simon Mader</h1>
        <div className="clip-rounded-pixel my-4 flex items-center justify-start bg-black bg-opacity-70 p-4">
          <span className="icon-gmail-white text-5xl"></span>
          <p className="flex-grow text-center text-lg">mail@simonmader.at</p>
          <span className="icon-gmail-white text-5xl opacity-0"></span>
        </div>
        <div className="clip-rounded-pixel my-4 flex items-center justify-start bg-black bg-opacity-70 p-4">
          <span className="icon-linkedin-white text-5xl"></span>
          <p className="flex-grow text-center text-lg">simonmader</p>
          <span className="icon-linkedin-white text-5xl opacity-0"></span>
        </div>
        <div className="clip-rounded-pixel my-4 flex items-center justify-start bg-black bg-opacity-70 p-4">
          <span className="icon-github-white text-5xl"></span>
          <p className="flex-grow text-center text-lg">simonmader17</p>
          <span className="icon-github-white text-5xl opacity-0"></span>
        </div>
      </Container>
    </>
  );
};

export default LinktreePage;
