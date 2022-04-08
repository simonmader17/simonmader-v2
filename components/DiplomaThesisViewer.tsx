import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

const DiplomaThesisViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [pageDimensions, setPageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setPageDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  console.log(pageDimensions);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="ltmd:flex-col flex min-h-screen items-center justify-center gap-8">
      <Document
        file="diploma-thesis.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="drop-shadow-pixel"
      >
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          height={
            pageDimensions.width >= pageDimensions.height
              ? pageDimensions.height * 0.9
              : null
          }
          width={
            pageDimensions.height > pageDimensions.width
              ? pageDimensions.width * 0.9
              : null
          }
          loading={<div>test</div>}
        />
      </Document>
      <div>
        {numPages && (
          <p>
            Page {pageNumber} of {numPages}
          </p>
        )}
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className="h-12 w-12 rounded-full bg-black bg-opacity-50 text-3xl"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default DiplomaThesisViewer;
