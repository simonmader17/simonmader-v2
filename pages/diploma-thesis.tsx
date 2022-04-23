import dynamic from "next/dynamic";
import Head from "next/head";
import Container from "../components/Container";
import LayoutTransition from "../components/LayoutTransition";

const DiplomaThesisViewer = dynamic(
  import("../components/DiplomaThesisViewer"),
  { ssr: false }
);

const diploma_thesis = () => {
  return (
    <>
      <Head>
        <title>Simon Mader&apos;s Diploma Thesis</title>
      </Head>

      <LayoutTransition>
        <Container>
          <DiplomaThesisViewer />
        </Container>
      </LayoutTransition>
    </>
  );
};

export default diploma_thesis;
