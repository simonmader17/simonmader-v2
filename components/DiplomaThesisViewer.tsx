import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/router";

const DiplomaThesisViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showToolbar, setShowToolbar] = useState(true);
  const [focusToolbar, setFocusToolbar] = useState(false);
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

  return (
    <div className="ltmd:flex-col ltmd:justify-start ltmd:my-20 relative flex select-none items-center justify-center gap-8 md:min-h-screen">
      <div className="ltmd:self-start group fixed top-0 left-0 z-20 m-4">
        <button
          className="drop-shadow-pixel-sm group-hover:drop-shadow-pixel bg-body bg-hero-brick-wall-purple h-12 w-12 rounded-full border-2 border-black text-xl transition-[filter] md:text-3xl"
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
        onMouseLeave={() => {
          if (!focusToolbar) setShowToolbar(false);
        }}
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
            onLoadError={() => setPageNumber(1)}
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
              className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm h-12 w-12 rounded-full border-2 border-black text-xl md:text-3xl"
            >
              {"<"}
            </button>
            <span className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm ltmd:text-xs flex min-h-[3rem] items-center justify-center whitespace-nowrap rounded-full border-2 border-black px-4">
              {numPages ? (
                <>
                  {/* {pages.indexOf(pageNumber) + 1} / {pages.length} */}
                  <input
                    type="text"
                    id="pageNumber"
                    name="pageNumber"
                    className="bg-transparent text-right"
                    style={{
                      width: `${
                        pageNumber.toString().length < 10
                          ? pageNumber.toString().length
                          : pageNumber.toString().length - 0.5
                      }em`,
                    }}
                    value={pages.indexOf(pageNumber) + 1}
                    onFocus={() => setFocusToolbar(true)}
                    onBlur={() => setFocusToolbar(false)}
                    onChange={(e) => {
                      const { value } = e.target;
                      if (value.toString().length == 0 || value == "0") {
                        setPageNumber(0);
                      } else if (
                        !isNaN(+value) &&
                        +value >= 1 &&
                        +value <= pages.length
                      ) {
                        setPageNumber(pages[+value - 1]);
                      } else {
                        alert("Gültige Seitenzahl eingeben");
                      }
                    }}
                  />
                  <label htmlFor="pageNumber">
                    <span className="mx-2">/</span>
                    {pages.length}
                  </label>
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
              className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm h-12 w-12 rounded-full border-2 border-black text-xl md:text-3xl"
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
            className="m-2 hover:cursor-pointer"
            onChange={(e) => handleMyChaptersCheckBox(e)}
            onMouseEnter={() => setShowToolbar(true)}
            onMouseLeave={() => setShowToolbar(false)}
          />
          <label
            htmlFor="my-chapters"
            className="hover:cursor-pointer"
            onMouseEnter={() => setShowToolbar(true)}
            onMouseLeave={() => setShowToolbar(false)}
          >
            Only chapters i wrote
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default DiplomaThesisViewer;
