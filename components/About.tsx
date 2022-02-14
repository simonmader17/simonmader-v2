import moment from "moment";

function About() {
  const calculateAge = (): number => {
    const birthday = moment(new Date("2002-02-17"));
    const today = moment();
    return today.diff(birthday, "years");
  };

  return (
    <div>
      <h2 id="about" className="m-4 pt-4 text-2xl font-bold">
        Über mich
      </h2>
      <div className="about">
        <div className="about-content">
          <p className={"text-xl text-red-400 md:text-3xl"}>
            Hi! Ich bin Simon.
          </p>
          <p className={"md:text-justify md:text-xl"}>
            Ich bin {calculateAge()} Jahre alt und habe mit dem Schuljahr
            2020/21 die HTL St. Pölten (Informatik) mit ausgezeichnetem Erfolg
            abgeschlossen. Der Fokus in der Schule lag auf Java Spring
            Development, Algorithmik und Datenbankdesign. Privat beschäftige ich
            mich gerne mit der Automatisierung von Vorgängen mithilfe von Python
            und der Entwicklung von Webapps mithilfe von JavaScript Frameworks
            wie React.
          </p>
          <p className="md:text-justify md:text-xl">
            Zurzeit leiste ich meinen Zivildienst beim Samariterbund in St.
            Pölten.
          </p>
          <p className={"md:text-justify md:text-xl"}>
            In meiner Freizeit mache ich gerne Kraftsport, beschäftige ich mich
            viel mit dem Thema Ernährung und schaue gerne Filme und Serien.
          </p>
        </div>
        <div className="about-bg"></div>
      </div>
    </div>
  );
}

export default About;
