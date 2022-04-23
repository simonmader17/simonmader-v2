import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/router";
import Checkbox from "./Checkbox/Checkbox";
import { getCanvasFontSize, getTextWidth } from "../lib/text-width";
import useTranslation from "next-translate/useTranslation";
import { DESTRUCTION } from "dns";
import TableOfContents from "./TableOfContents";

const DiplomaThesisViewer = () => {
  const [pdf, setPdf] = useState(null);
  const [outline, setOutline] = useState(null);
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
  const [portrait, setPortrait] = useState(true);
  const [landscape, setLandscape] = useState(false);
  const [pages, setPages] = useState([]);
  const [gotoPage, setGotoPage] = useState("1");
  const [gotoPageTextWidth, setGotoPageTextWidth] = useState(0);
  const gotoPageInputEl = useRef(null);

  useEffect(() => {
    if (pdf) {
      const getPairs = async () => {
        const pairs = [];
        await pdf.getOutline().then(async (outline) => {
          for (var i = 0; i < outline.length; i++) {
            await pdf.getDestination(outline[i].dest).then(async (dest) => {
              await pdf.getPageIndex(dest[0]).then(async (id) => {
                var items = [];
                if (outline[i].items.length > 0) {
                  for (var j = 0; j < outline[i].items.length; j++) {
                    await pdf
                      .getDestination(outline[i].items[j].dest)
                      .then(async (itemDest) => {
                        await pdf
                          .getPageIndex(itemDest[0])
                          .then(async (itemId) => {
                            items.push({
                              title: outline[i].items[j].title,
                              pageNumber: +itemId + 1,
                            });
                          });
                      });
                  }
                }
                pairs.push({
                  title: outline[i].title,
                  pageNumber: +id + 1,
                  items: items,
                });
              });
            });
          }
        });
        setOutline(pairs);
      };
      getPairs();
    }
  }, [pdf]);

  const setNewActiveChapter = (newPageNumber) => {
    resetActiveChapter();
    for (var i = 0; i < outline.length; i++) {
      if (
        newPageNumber >= outline[i].pageNumber &&
        (i == outline.length - 1 || newPageNumber < outline[i + 1].pageNumber)
      ) {
        outline[i].active = true;
        for (var j = 0; j < outline[i].items.length; j++) {
          if (
            newPageNumber >= outline[i].items[j].pageNumber &&
            (j == outline[i].items.length - 1 ||
              newPageNumber < outline[i].items[j + 1].pageNumber ||
              (newPageNumber == outline[i].items[j].pageNumber &&
                newPageNumber == outline[i].items[j + 1].pageNumber))
          ) {
            outline[i].items[j].active = true;
            return;
          } else {
            outline[i].items[j].active = false;
          }
        }

        // return;
      } else {
        outline[i].active = false;
      }
    }
  };

  const resetActiveChapter = () => {
    for (var i = 0; i < outline.length; i++) {
      outline[i].active = false;
      for (var j = 0; j < outline[i].items.length; j++) {
        outline[i].items[j].active = false;
      }
    }
  };

  useEffect(() => {
    setPortrait(pageDimensions.height > (pageDimensions.width * 297) / 210);
    setLandscape(pageDimensions.width >= (pageDimensions.height * 210) / 297);
  }, [pageDimensions]);

  useEffect(() => {
    setGotoPageTextWidth(
      getTextWidth(gotoPage, getCanvasFontSize(gotoPageInputEl.current))
    );
  }, [gotoPage]);

  useEffect(() => {
    if (!pageLoading) setNoData(false);
  }, [pageLoading]);

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
    resetActiveChapter();
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

  const onDocumentLoadSuccess = (pdf) => {
    const { numPages } = pdf;
    setPdf(pdf);
    setNumPages(numPages);
    setPages([...range(1, numPages)]);
    setDocumentLoading(false);
  };

  const { t } = useTranslation("diploma-thesis");

  return (
    <div className="ltmd:flex-col ltmd:mt-20 ltmd:items-center relative flex select-none gap-8 md:my-[5vh] md:h-[90vh] md:justify-center">
      <div className="group fixed top-0 left-0 z-20 m-4">
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
          minWidth: `${
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
              {t("no_data")}
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
                  resetActiveChapter();
                } else if (pageNumber > pages[0]) {
                  var newPageNumber = pageNumber;
                  do {
                    newPageNumber -= 1;
                  } while (!pages.includes(newPageNumber));
                  setPageNumber(newPageNumber);
                  setGotoPage((pages.indexOf(newPageNumber) + 1).toString());
                  setNewActiveChapter(newPageNumber);
                }
              }}
              className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm h-12 w-12 rounded-full border-2 border-black text-xl md:text-3xl"
            >
              {"<"}
            </button>
            <span
              className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm ltmd:text-xs flex min-h-[3rem] cursor-pointer items-center justify-center whitespace-nowrap rounded-full border-2 border-black px-4"
              onClick={() => gotoPageInputEl.current.focus()}
            >
              <input
                type="text"
                id="pageNumber"
                ref={gotoPageInputEl}
                name="pageNumber"
                className="cursor-pointer bg-transparent pr-1 text-right"
                style={{
                  width: `calc(${gotoPageTextWidth}px + .5em)`,
                }}
                value={gotoPage}
                onFocus={(e) => {
                  setFocusToolbar(true);
                  const prev = e.target.value;
                  e.target.value = "";
                  e.target.value = prev;
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") (e.target as HTMLInputElement).blur();
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
                    resetActiveChapter();
                  } else if (
                    !isNaN(+value) &&
                    +value >= 1 &&
                    +value <= pages.length
                  ) {
                    setPageNumber(pages[+value - 1]);
                    setGotoPage(value);
                    setNewActiveChapter(pages[+value - 1]);
                  } else {
                    setPageNumber(0);
                    setGotoPage(value);
                    resetActiveChapter();
                  }
                }}
                autoComplete="off"
              />
              <label htmlFor="pageNumber" className="cursor-pointer">
                <span className="mx-2">/</span>
                {pages.length}
              </label>
            </span>
            <button
              onClick={() => {
                if (pageNumber == 0) {
                  setPageNumber(pages[0]);
                  setGotoPage("1");
                  resetActiveChapter();
                } else if (pageNumber < pages[pages.length - 1]) {
                  var newPageNumber = pageNumber;
                  do {
                    newPageNumber += 1;
                  } while (!pages.includes(newPageNumber));
                  setPageNumber(newPageNumber);
                  setGotoPage((pages.indexOf(newPageNumber) + 1).toString());
                  setNewActiveChapter(newPageNumber);
                }
              }}
              className="bg-hero-brick-wall-purple bg-body drop-shadow-pixel-sm h-12 w-12 rounded-full border-2 border-black text-xl md:text-3xl"
            >
              {">"}
            </button>
          </div>
        )}
      </div>
      <div className="ltmd:w-full flex h-full flex-col gap-2 md:w-[30rem]">
        <Checkbox
          className="ltmd:mx-auto mb-6"
          id="my-chapters"
          label={t("my_chapters")}
          onChange={(e) => handleMyChaptersCheckBox(e)}
          onMouseEnter={() => setShowToolbar(true)}
          onMouseLeave={() => setShowToolbar(false)}
          disabled={documentLoading}
        />
        {outline ? (
          <TableOfContents
            outline={outline}
            pages={pages}
            onItemClick={(newPageNumber) => {
              setPageNumber(newPageNumber);
              setGotoPage((pages.indexOf(newPageNumber) + 1).toString());
              setNewActiveChapter(newPageNumber);
            }}
            onMouseEnter={() => setShowToolbar(true)}
            onMouseLeave={() => setShowToolbar(false)}
          />
        ) : (
          <p className="p-1 text-lg">
            <Skeleton count={20} />
          </p>
        )}
      </div>
    </div>
  );
};

export default DiplomaThesisViewer;
