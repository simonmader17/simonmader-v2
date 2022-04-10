import { useEffect, useState } from "react";
import About from "../components/About";
import Career from "../components/Career";
import Certificates from "../components/Certificates";
import ChromeNotification from "../components/ChromeNotification";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Others from "../components/Others";
import Projects from "../components/Projects";
import Qualifications from "../components/Qualifications";

declare const InstallTrigger: any;

export default function Home() {
  // Firefox detection
  const [isFirefox, setIsFirefox] = useState(false);
  useEffect(() => {
    setIsFirefox(typeof InstallTrigger !== "undefined");
  }, []);

  return (
    <>
      {isFirefox && <ChromeNotification />}

      <Header />

      <div className="p-4 text-left">
        <div className="container mx-auto">
          <About />

          <Projects />

          <Qualifications />

          <Certificates />

          <Career />

          <Education />

          <Others />
        </div>
      </div>
    </>
  );
}
