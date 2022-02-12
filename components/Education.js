import { useState } from "react";
import Expand from "react-expand-animated";

function School({ name, zweig, zeitraum, bg, info }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div
            className="relative z-10 m-4 shadow-md"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
        >
            <div
                className="bg-blurred"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>
            <div className="bg-blurred-fg"></div>
            <div className="p-6">
                <p className="text-xl text-red-400">{name}</p>
                <p>{zweig}</p>
                <p>{zeitraum}</p>
                {info && <Expand open={showInfo}>
                    {info}
                </Expand>}
            </div>
        </div>
    );
}

function Education() {
    return (
        <div>
            <h2 id="education" className="m-4 pt-4 text-2xl font-bold">
                Schullaufbahn
            </h2>
            <div className="grid grid-cols-1">
                <School
                    name="HTL St. Pölten"
                    zweig="Abteilung Informatik"
                    zeitraum="2016&mdash;2021"
                    // bg={htl_bg}
                    bg="images/htl-bg_blurred.jpeg"
                    info={
                        <ul className={"ml-4 list-disc"}>
                            <li className={"text-gray-400"}>
                                Mit ausgezeichnetem Erfolg abgeschlossen
                            </li>
                            <li className={"text-gray-400"}>
                                Abschluss der Reife- und Diplomprüfung mit
                                ausgezeichnetem Erfolg
                            </li>
                            <li className={"text-gray-400"}>
                                Diplomarbeitsthema: Freitextanalyse mithilfe von{" "}
                                <a
                                    className={"my-link"}
                                    href="https://en.wikipedia.org/wiki/Natural_language_processing"
                                    target="_blank"
                                    rel="noreferrer"
                                    hover-info="NLP (Wikipedia)"
                                >
                                    Natural Language Processing
                                </a>
                            </li>
                        </ul>
                    }
                />
                <School
                    name="BRG St. Pölten"
                    zweig="Musikalischer Zweig"
                    zeitraum="2012&mdash;2016"
                    // bg={borg_bg}
                    bg="images/borg-bg_blurred.jpg"
                />
            </div>
        </div>
    );
}

export default Education;
