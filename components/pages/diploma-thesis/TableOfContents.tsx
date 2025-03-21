import useMouse from "@react-hook/mouse-position";
import useTranslation from "next-translate/useTranslation";
import { useRef } from "react";
import { createRipple } from "../../../lib/ripple";
import Expand from "react-expand-animated";

const TableOfContentsItem = ({ sub = false, children, ...props }) => {
  const pRef = useRef(null);
  const mouse = useMouse(pRef);

  return (
    <p
      ref={pRef}
      className={
        sub
          ? "relative ml-6 flex cursor-pointer justify-between gap-8 overflow-hidden rounded-xl p-2 text-sm transition-colors ease-out hover:bg-gray hover:bg-opacity-20 ltmd:text-xs"
          : "relative flex cursor-pointer justify-between gap-8 overflow-hidden rounded-xl p-2 transition-colors ease-out hover:bg-gray hover:bg-opacity-20 ltmd:text-sm"
      }
      {...props}
      onPointerDown={(e) => {
        createRipple(e);
      }}
    >
      <span
        className="absolute h-[200%] w-full -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity hover:opacity-20"
        style={{
          background:
            "radial-gradient(rgba(156, 163, 175, 0.5), rgba(156, 163, 175, 0) 80%)",
          top: `calc(${mouse.y}px)`,
          left: `calc(${mouse.x}px)`,
        }}
      />
      {children}
    </p>
  );
};

const TableOfContents = ({ outline, pages, onItemClick, ...props }) => {
  const { t } = useTranslation("diploma-thesis");

  outline = outline.filter(({ pageNumber }) => pages.includes(pageNumber));

  return (
    <>
      <p className="select-text text-lg text-accent md:text-xl">{t("toc")}</p>
      <div className="max-h-full overflow-scroll" {...props}>
        {outline.map((pair) => (
          <div key={pair.title + pair.pageNumber}>
            <TableOfContentsItem
              onClick={() => {
                onItemClick(pair.pageNumber);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                color: pair.active ? "rgb(248 113 113)" : "white",
              }}
            >
              <span>{pair.title}</span>
              <span>{pages.indexOf(pair.pageNumber) + 1}</span>
            </TableOfContentsItem>
            <Expand open={pair.active}>
              {pair.items.map((item) => (
                <TableOfContentsItem
                  key={item.title + item.pageNumber}
                  sub
                  onClick={() => {
                    onItemClick(item.pageNumber);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{
                    color: item.active ? "rgb(248 113 113)" : "white",
                  }}
                >
                  <span>{item.title}</span>
                  <span>{pages.indexOf(item.pageNumber) + 1}</span>
                </TableOfContentsItem>
              ))}
            </Expand>
          </div>
        ))}
      </div>
    </>
  );
};

export default TableOfContents;
