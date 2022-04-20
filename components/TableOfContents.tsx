import useTranslation from "next-translate/useTranslation";

const TableOfContents = ({ outline, pages, onItemClick, ...props }) => {
  const { t } = useTranslation("diploma-thesis");

  outline = outline.filter(({ pageNumber }) => pages.includes(pageNumber));

  return (
    <>
      <p className="select-text text-lg text-red-400 md:text-xl">{t("toc")}</p>
      <div className="h-full overflow-scroll" {...props}>
        {outline.map((pair) => (
          <p
            key={pair.title}
            className="ltmd:text-sm flex cursor-pointer justify-between gap-8 rounded-xl p-2 transition-colors hover:bg-gray-400 hover:bg-opacity-20"
            onClick={() => {
              onItemClick(pair.pageNumber);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span>{pair.title}</span>
            <span>{pages.indexOf(pair.pageNumber) + 1}</span>
          </p>
        ))}
      </div>
    </>
  );
};

export default TableOfContents;
