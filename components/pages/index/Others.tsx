import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";

interface OtherInterface {
  untertitel?: string;
  titel: string;
  content: JSX.Element;
}

const Other = ({ untertitel, titel, content }: OtherInterface) => {
  return (
    <div className="md:drop-shadow-3xl relative m-4 p-6">
      <div className="clip-rounded-pixel absolute inset-0 -z-10 bg-secondary bg-opacity-50" />
      {untertitel && <p className="ltmd:text-sm text-gray">{untertitel}</p>}
      <p className="text-lg text-accent md:text-xl">{titel}</p>
      <div className="ltmd:text-sm">{content}</div>
    </div>
  );
};

const Others = () => {
  const { t } = useTranslation("others");

  return (
    <>
      <h2 id="others">{t("heading")}</h2>
      <div className="grid grid-cols-1">
        <Other
          untertitel={t("ccc.untertitel")}
          titel={t("ccc.titel")}
          content={
            <ul className={"ml-4 list-disc"}>
              <li>
                <Trans
                  i18nKey="others:ccc.content.li1"
                  components={[<sup key="ccc.content.li1.key" />]}
                />
              </li>
              <li>
                <Trans
                  i18nKey="others:ccc.content.li2"
                  components={[<sup key="ccc.content.li2.key" />]}
                />
              </li>
              <li>
                <Trans
                  i18nKey="others:ccc.content.li3"
                  components={[<sup key="ccc.content.li3.key" />]}
                />
              </li>
              <li>
                <Trans
                  i18nKey="others:ccc.content.li4"
                  components={[<sup key="ccc.content.li4.key" />]}
                />
              </li>
            </ul>
          }
        />
        <Other
          titel={t("licenses.titel")}
          content={
            <ul className={"ml-4 list-disc"}>
              <li>{t("licenses.content.li1")}</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default Others;
