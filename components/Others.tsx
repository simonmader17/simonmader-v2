import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";

interface OtherInterface {
  untertitel?: string;
  titel: string;
  content: JSX.Element;
}

function Other({ untertitel, titel, content }: OtherInterface) {
  return (
    <div className="drop-shadow-3xl m-4 rounded-xl bg-black bg-opacity-50 p-6">
      {untertitel && <p className="text-gray-400">{untertitel}</p>}
      <p className="text-xl text-red-400">{titel}</p>
      {content}
    </div>
  );
}

function Others() {
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
}

export default Others;
