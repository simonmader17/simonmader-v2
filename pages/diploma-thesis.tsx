import dynamic from "next/dynamic";

const DiplomaThesisViewer = dynamic(
  import("../components/DiplomaThesisViewer"),
  { ssr: false }
);

const diploma_thesis = () => {
  return (
    <>
      <DiplomaThesisViewer />
    </>
  );
};

export default diploma_thesis;
