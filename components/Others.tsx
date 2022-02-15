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
  return (
    <div>
      <h2 id="others" className="m-4 pt-4 text-2xl font-bold">
        Sonstiges
      </h2>
      <div className="grid grid-cols-1">
        <Other
          untertitel="Wettbewerb"
          titel="Catalysts Coding Contest"
          content={
            <ul className={"ml-4 list-disc"}>
              <li>
                Platz 4 von 93 beim 32<sup>nd</sup> School Coding Contest im
                November 2019 in Wien
              </li>
              <li>
                Platz 12 von 149 beim 32<sup>nd</sup> Classic Coding Contest im
                November 2019 in Wien
              </li>
              <li>
                Platz 15 von 121 beim 30<sup>th</sup> School Coding Contest im
                März 2019 in Wien
              </li>
              <li>
                Platz 21 von 149 beim 30<sup>th</sup> Classic Coding Contest im
                März 2019 in Wien
              </li>
            </ul>
          }
        />
        <Other
          titel="Führerscheine"
          content={
            <ul className={"ml-4 list-disc"}>
              <li>B</li>
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Others;
