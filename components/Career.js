function Job({ position, firma, zeitraum, ort, bg, info }) {
    return (
        <div className="relative z-10 m-4 shadow-md">
            <div className="bg-blurred" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="bg-blurred-fg"></div>
            <div className="p-6">
                <p className="text-gray-400">{position}</p>
                <p className="text-xl text-red-400">{firma ? firma : ""}</p>
                <p>{zeitraum}</p>
                <p>{ort}</p>
                {info}
            </div>
        </div>
    )
}

function Career() {
    return (
        <div>
            <h2 id="career" className="text-2xl font-bold m-4 pt-4">Berufserfahrung</h2>
            <div className="grid grid-cols-1">
                <Job
                    position="Praktikant"
                    firma="BSO EDV- und Betriebsberatung GmbH"
                    zeitraum="Juli 2020"
                    ort="St. Pölten, Niederösterreich, Österreich"
                    // bg={bso_bg}
                    bg="images/bso-bg_retouched_blurred.png"
                    info={(
                        <ul className={"ml-4 list-disc"}>
                            <li className={"text-gray-400"}>Arbeit an einer REST API in PHP</li>
                            <li className={"text-gray-400"}>Einrichten einer PHP-Testumgebung mithilfe von Docker (<a className={"my-link"} href="https://de.wikipedia.org/wiki/LAMP_(Softwarepaket)" target="_blank" rel="noreferrer" hover-info="LAMP (Wikipedia)">LAMP Stack</a>)</li>
                            <li className={"text-gray-400"}>Aufsetzen von PC's für Kunden (Hardware und Software)</li>
                            <li className={"text-gray-400"}>Lagerarbeiten</li>
                        </ul>
                    )}
                />
                <Job
                    position="Praktikant"
                    firma="Geberit Österreich"
                    zeitraum="Juli 2018"
                    ort="Pottenbrunn, Niederösterreich, Österreich"
                    // bg={geberit_bg}
                    bg="images/geberit-bg_blurred.jpg"
                    info={(
                        <ul className={"ml-4 list-disc"}>
                            <li className={"text-gray-400"}>Mitarbeit an der Umstellung der PC's der Mitarbeiter auf Windows 10</li>
                            <li className={"text-gray-400"}>Einführung in die <a className={"my-link"} href="https://de.wikipedia.org/wiki/Active_Directory" target="_blank" rel="noreferrer" hover-info="Active Directory (Wikipedia)">Active Directory</a> Organisationseinheiten des Unternehmens</li>
                        </ul>
                    )}
                />
                <Job
                    position="Praktikant"
                    firma="Gemeindeamt Kasten bei Böheimkirchen"
                    zeitraum="17. Juli &mdash; 13. Aug. 2017"
                    ort="Kasten bei Böheimkirchen, Niederösterreich, Österreich"
                    // bg={gemeinde_bg}
                    bg="images/gemeinde-bg_blurred.jpeg"
                    info={(
                        <ul className={"ml-4 list-disc"}>
                            <li className={"text-gray-400"}>Mitarbeit in der Gemeinde: Rasenmähen, Sträucher schneiden, usw.</li>
                        </ul>
                    )}
                />
            </div>
        </div>
    )
}

export default Career;