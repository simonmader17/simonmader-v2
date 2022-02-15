import Image from "next/image";

import pogo from "../public/images/PogO.png";

function Custom404() {
  return (
    <div className="bg-hero-brick-wall-purple bg-body flex h-screen flex-col items-center justify-center md:flex-row">
      <h1 className="font-Graph35 text-center text-2xl text-white">
        404 &mdash; That page doesn&apos;t exist
      </h1>
      <div className="relative m-8 h-16 w-16">
        <Image src={pogo} alt="PogO" layout="fill" />
      </div>
    </div>
  );
}

export default Custom404;
