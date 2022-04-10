import dynamic from "next/dynamic";
import Head from "next/head";

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

      <DiplomaThesisViewer />
    </>
  );
};

export default diploma_thesis;
