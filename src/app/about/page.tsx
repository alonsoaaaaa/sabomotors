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
        <div className="flex flex-col mt-8 gap-3">
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-center text-blue-500">
            MISIÓN
          </h1>
          <p className="font-sans text-xl  text-center sm:text-2xl font-bold text-gray-600 sm:text-gray-300 self-center shrink-0 sm:shrink sm:mb-12">
            Nuestra misión es estar comprometidos con el patrimonio del cliente,
            ya que cada vehículo representa los sueños y esfuerzos de una
            familia.{" "}
            <span className="underline text-blue-500">
              Nuestro enfoque es tu familia.
            </span>{" "}
            Por ello en en Sabo Motors le brindamos{" "}
            <span className="font-extrabold text-black">
              crédito en seminuevos auditados
            </span>
            , seriedad y confianza a un precio competitivo.
            <br />
            Nuestros valores son{" "}
            <span className="font-bold font-serif text-yellow-400 mb-10">
              la honestidad, la lealtad, confianza y principalmente el enfoque
              al cliente.
            </span>
            <br />
            Por eso ofrecemos las mejores marcas:
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
