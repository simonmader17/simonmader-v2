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
  const [pages, setPages] = useState([]);

  const range = (start: number, end: number): ReadonlyArray<number> => {
    end += 1; // include end
    return [...Array(end - start).keys()].map((i) => i + start);
  };

  const handleMyChaptersCheckBox = (e) => {
    var newPages: number[];
    if (e.target.checked) {
      newPages = [
        1,
        2,
        4,
        8,
        ...range(11, 25),
        ...range(146, 206),
        ...range(267, numPages),
      ];
    } else {
      newPages = [...range(1, numPages)];
    }
    setPages(newPages);
    setPageNumber(newPages[0]);
  };

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
    setPages([...range(1, numPages)]);
    setDocumentLoading(false);
  };

  const portrait = pageDimensions.height > (pageDimensions.width * 297) / 210;
  const landscape = pageDimensions.width >= (pageDimensions.height * 210) / 297;

  console.log(pages[0]);
  console.log(pages[pages.length - 1]);

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
        {!documentLoading && (
          <div
            className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 space-x-4 transition-opacity"
            style={{
              opacity: showToolbar ? "1" : "0",
            }}
          >
            <button
              onClick={() => {
                if (pageNumber > pages[0]) {
                  var newPageNumber = pageNumber;
                  do {
                    newPageNumber -= 1;
                  } while (!pages.includes(newPageNumber));
                  setPageNumber(newPageNumber);
                }
              }}
              className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm ltmd:text-xl h-12 w-12 rounded-full text-3xl"
            >
              {"<"}
            </button>
            <span className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm ltmd:text-xs flex min-h-[3rem] items-center justify-center whitespace-nowrap rounded-full px-4">
              {numPages ? (
                <>
                  {pages.indexOf(pageNumber) + 1} / {pages.length}
                </>
              ) : (
                <>...</>
              )}
            </span>
            <button
              onClick={() => {
                if (pageNumber < pages[pages.length - 1]) {
                  var newPageNumber = pageNumber;
                  do {
                    newPageNumber += 1;
                  } while (!pages.includes(newPageNumber));
                  setPageNumber(newPageNumber);
                }
              }}
              className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm ltmd:text-xl h-12 w-12 rounded-full text-3xl"
            >
              {">"}
            </button>
          </div>
        )}
      </div>
      <div className="md:mt-[5vh] md:self-start">
        <fieldset>
          <input
            type="checkbox"
            id="my-chapters"
            name="my-chapters"
            className="m-2"
            onChange={(e) => handleMyChaptersCheckBox(e)}
          />
          <label htmlFor="my-chapters">Show only my chapters</label>
        </fieldset>
      </div>
    </div>
  );
};

export default DiplomaThesisViewer;
