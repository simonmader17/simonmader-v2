import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

const DiplomaThesisViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showToolbar, setShowToolbar] = useState(false);

  const [pageDimensions, setPageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setPageDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [window.innerWidth, window.innerHeight]);

  console.log(pageDimensions);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="ltmd:flex-col flex min-h-screen items-center justify-center gap-8">
      <div
        className="relative z-10"
        onMouseEnter={() => setShowToolbar(true)}
        onMouseLeave={() => setShowToolbar(false)}
      >
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
        <div
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 space-x-4 transition-opacity"
          style={{
            opacity: showToolbar ? "1" : "0",
          }}
        >
          <button
            onClick={() => setPageNumber(pageNumber - 1)}
            className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm h-12 w-12 rounded-full text-3xl"
          >
            {"<"}
          </button>
          <span className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm flex min-h-[3rem] items-center justify-center rounded-full px-4">
            {pageNumber} / {numPages}
          </span>
          <button
            onClick={() => setPageNumber(pageNumber + 1)}
            className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm h-12 w-12 rounded-full text-3xl"
          >
            {">"}
          </button>
        </div>
      </div>
      <div>
        <input type="checkbox" id="my-chapters" name="my-chapters" className="m-2" />
        <label htmlFor="my-chapters">Show only my chapters</label>
      </div>
    </div>
  );
};

export default DiplomaThesisViewer;
