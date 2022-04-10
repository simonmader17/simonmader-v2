import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/router";

const DiplomaThesisViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showToolbar, setShowToolbar] = useState(true);
  const [documentLoading, setDocumentLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [pageDimensions, setPageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setPageDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setDocumentLoading(false);
  };

  const portrait = pageDimensions.height > (pageDimensions.width * 297) / 210;
  const landscape = pageDimensions.width >= (pageDimensions.height * 210) / 297;

  return (
    <div className="ltmd:flex-col ltmd:justify-start relative flex min-h-screen select-none items-center justify-center gap-8">
      <div className="ltmd:self-start m-4 md:absolute md:top-0 md:left-0">
        <button
          className="drop-shadow-pixel bg-body bg-hero-brick-wall-purple relative z-20 h-12 w-12 rounded-full border-2 border-black"
          onClick={() => router.push("/")}
        >
          {"<"}
        </button>
      </div>
      <div
        className="relative z-10"
        style={{
          width: `${
            portrait
              ? pageDimensions.width * 0.9
              : (pageDimensions.height * 0.9 * 210) / 297
          }px`,
          height: `${
            landscape
              ? pageDimensions.height * 0.9
              : (pageDimensions.width * 0.9 * 297) / 210
          }px`,
        }}
        onMouseEnter={() => setShowToolbar(true)}
        onMouseLeave={() => setShowToolbar(false)}
      >
        <Document
          file="diploma-thesis.pdf"
          loading={() => setDocumentLoading(true)}
          onLoadSuccess={onDocumentLoadSuccess}
          className="drop-shadow-pixel select-text"
        >
          <Page
            pageNumber={pageNumber}
            loading={() => setPageLoading(true)}
            onLoadSuccess={() => setPageLoading(false)}
            renderAnnotationLayer={false}
            width={portrait ? pageDimensions.width * 0.9 : null}
            height={landscape ? pageDimensions.height * 0.9 : null}
          />
        </Document>
        {(documentLoading || pageLoading) && (
          <Skeleton className="drop-shadow-pixel opacity-70" height="100%" />
        )}
        <div
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 space-x-4 transition-opacity"
          style={{
            opacity: showToolbar ? "1" : "0",
          }}
        >
          <button
            onClick={() => {
              if (pageNumber > 1) setPageNumber(pageNumber - 1);
            }}
            className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm ltmd:text-xl h-12 w-12 rounded-full text-3xl"
          >
            {"<"}
          </button>
          <span className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm ltmd:text-xs flex min-h-[3rem] items-center justify-center whitespace-nowrap rounded-full px-4">
            {numPages ? (
              <>
                {pageNumber} / {numPages}
              </>
            ) : (
              <>...</>
            )}
          </span>
          <button
            onClick={() => {
              if (pageNumber < numPages) setPageNumber(pageNumber + 1);
            }}
            className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm ltmd:text-xl h-12 w-12 rounded-full text-3xl"
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="md:mt-[5vh] md:self-start">
        <fieldset>
          <input
            type="checkbox"
            id="my-chapters"
            name="my-chapters"
            className="m-2"
          />
          <label htmlFor="my-chapters">Show only my chapters</label>
        </fieldset>
      </div>
    </div>
  );
};

export default DiplomaThesisViewer;
