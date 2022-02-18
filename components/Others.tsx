import { useRouter } from "next/router";
import de from "../locales/de";
import en from "../locales/en";

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
  const { locale } = useRouter();
  const l = locale == "de" ? de.others : en.others;

  return (
    <div>
      <h2 id="others" className="m-4 pt-4 text-2xl font-bold">
        {l.heading}
      </h2>
      <div className="grid grid-cols-1">
        <Other
          untertitel={l.ccc.untertitel}
          titel={l.ccc.titel}
          content={
            <ul className={"ml-4 list-disc"}>
              <li>{l.ccc.content.li1}</li>
              <li>{l.ccc.content.li2}</li>
              <li>{l.ccc.content.li3}</li>
              <li>{l.ccc.content.li4}</li>
            </ul>
          }
        />
        <Other
          titel={l.licenses.titel}
          content={
            <ul className={"ml-4 list-disc"}>
              <li>{l.licenses.content.li1}</li>
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Others;
