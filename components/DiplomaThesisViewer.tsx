import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/router";
import Checkbox from "./Checkbox/Checkbox";

const DiplomaThesisViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showToolbar, setShowToolbar] = useState(true);
  const [focusToolbar, setFocusToolbar] = useState(false);
  const [documentLoading, setDocumentLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [pageDimensions, setPageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [pages, setPages] = useState([]);
  const [gotoPage, setGotoPage] = useState("1");

  useEffect(() => {
    if (!pageLoading) setNoData(false);
  }, [pageLoading]);

  console.log(gotoPage.length);

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
    setGotoPage((pages.indexOf(newPages[0]) + 1).toString());
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
            noData={() => setNoData(true)}
            renderAnnotationLayer={false}
            width={portrait ? pageDimensions.width * 0.9 : null}
            height={landscape ? pageDimensions.height * 0.9 : null}
          />
        </Document>
        {noData && (
          <>
            <Skeleton className="opacity-70" height="100%" />
            <span className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              Page doesn&apos;t exist
            </span>
          </>
        )}
        {(documentLoading || pageLoading) && (
          <>
            <Skeleton className="opacity-70" height="100%" />
          </>
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
                if (pageNumber == 0) {
                  setPageNumber(pages[0]);
                  setGotoPage("1");
                } else if (pageNumber > pages[0]) {
                  var newPageNumber = pageNumber;
                  do {
                    newPageNumber -= 1;
                  } while (!pages.includes(newPageNumber));
                  setPageNumber(newPageNumber);
                  setGotoPage((pages.indexOf(newPageNumber) + 1).toString());
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
                    className="bg-transparent pr-1 text-right"
                    style={{
                      width: `${
                        gotoPage.length < 2 ? 1.5 : gotoPage.length + 0.5
                      }ch`,
                    }}
                    value={gotoPage}
                    onFocus={() => setFocusToolbar(true)}
                    onKeyDown={(e) => {
                      if (e.key == "Enter")
                        (e.target as HTMLInputElement).blur();
                    }}
                    onBlur={() => {
                      setFocusToolbar(false);
                      if (pageNumber > 0)
                        setGotoPage((pages.indexOf(pageNumber) + 1).toString());
                    }}
                    onChange={(e) => {
                      const { value } = e.target;
                      if (value.trim().length == 0 || value == "0") {
                        setPageNumber(1);
                        setGotoPage(value);
                      } else if (
                        !isNaN(+value) &&
                        +value >= 1 &&
                        +value <= pages.length
                      ) {
                        setPageNumber(pages[+value - 1]);
                        setGotoPage(value);
                      } else {
                        setPageNumber(0);
                        setGotoPage(value);
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
                if (pageNumber == 0) {
                  setPageNumber(pages[0]);
                  setGotoPage("1");
                } else if (pageNumber < pages[pages.length - 1]) {
                  var newPageNumber = pageNumber;
                  do {
                    newPageNumber += 1;
                  } while (!pages.includes(newPageNumber));
                  setPageNumber(newPageNumber);
                  setGotoPage((pages.indexOf(newPageNumber) + 1).toString());
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
        <Checkbox
          id="chapters"
          label="Only chapters I wrote"
          onChange={(e) => handleMyChaptersCheckBox(e)}
          onMouseEnter={() => setShowToolbar(true)}
          onMouseLeave={() => setShowToolbar(false)}
          disabled={documentLoading}
        />
      </div>
    </div>
  );
};

export default DiplomaThesisViewer;
