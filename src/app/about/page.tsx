"use client";
import Header from "@/components/header";
import Image from "next/image";

import React from "react";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];
// import backgroundImage from "@/Automars_bg.jpg";

function About() {
  let isSmallDevice = true;
  if (typeof window !== "undefined") {
    isSmallDevice = window.innerWidth <= 800;
  }
  const mainClasses = "flex flex-col bg-cover bg-no-repeat justify-center"; // past classes: h-[35vh] sm:h-[80vh].
  //NOTA: Aquí estaba creciendo porque le puse h-[35vh] sm:h-[80vh]
  const totalClasses = isSmallDevice ? " small-device-background" : "";
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      <div
        className={mainClasses + totalClasses}
        style={{ backgroundImage: `url(/localsabomotors.jpg)` }}
      >
        <div className="mt-10 md:mt-28">
          <p className="font-sans text-xl  text-center sm:text-2xl font-bold sm:text-gray-100 self-center shrink-0 sm:shrink sm:mb-12">
            En Sabo Motors le brindamos{" "}
            <span className="font-extrabold text-black bg-blue-700">
              Crédito en Seminuevos Auditados
            </span>
            , seriedad y confianza a un precio competitivo. Comprometidos con la
            mejora continua y la protección de tu patrimonio. En Sabo Motors
            ponemos los mejores autos de sus marcas confianza en su viaje
            automotriz, brindando asesoramiento experto. Nos esforzamos por
            construir relaciones a largo plazo con cada cliente, basadas en la
            honestidad, la integridad y el respeto mutuo.
          </p>
        </div>
        <div className="flex flex-wrap self-center justify-center sm:mb-28">
          <Image
            src="/Ford_logo_flat.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
            priority
          />
          <Image
            src="/Mercedes-Benz_logo_2.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
            priority
          />
          <Image
            src="/Nissan_2020_logo.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
            priority
          />
          <Image
            src="/Peugeot_Logo.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
            priority
          />
          <Image
            src="/Renault_2021.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
            priority
          />
          <Image
            src="/Chevrolet.png"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default About;
