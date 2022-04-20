import useMouse from "@react-hook/mouse-position";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";

const TableOfContentsItem = ({ className, children, ...props }) => {
  const ref = useRef(null);
  const mouse = useMouse(ref);

  return (
    <p
      ref={ref}
      className={[className, "relative overflow-hidden"].join(" ")}
      {...props}
    >
      {children}
      <span
        className="absolute h-[200%] w-full -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity hover:opacity-20"
        style={{
          background:
            "radial-gradient(rgba(156, 163, 175, 0.5), rgba(156, 163, 175, 0) 80%)",
          top: `calc(${mouse.y}px)`,
          left: `calc(${mouse.x}px)`,
        }}
      />
    </p>
  );
};

const TableOfContents = ({ outline, pages, onItemClick, ...props }) => {
  const { t } = useTranslation("diploma-thesis");

  outline = outline.filter(({ pageNumber }) => pages.includes(pageNumber));

  return (
    <>
      <p className="select-text text-lg text-red-400 md:text-xl">{t("toc")}</p>
      <div className="h-full overflow-scroll" {...props}>
        {outline.map((pair) => (
          <TableOfContentsItem
            key={pair.title}
            className="ltmd:text-sm flex cursor-pointer justify-between gap-8 rounded-xl p-2 transition-colors ease-out hover:bg-gray-400 hover:bg-opacity-20"
            onClick={() => {
              onItemClick(pair.pageNumber);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span>{pair.title}</span>
            <span>{pages.indexOf(pair.pageNumber) + 1}</span>
          </TableOfContentsItem>
        ))}
      </div>
    </>
  );
};

export default TableOfContents;
