"use client";
import Header from "@/components/header";
import Image from "next/image";

import React from "react";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];
// import backgroundImage from "@/Automars_bg.jpg";

function About() {
  let isSmallDevice = true;
  if (typeof window !== "undefined") {
    isSmallDevice = window.innerWidth <= 600;
  }
  const mainClasses =
    "flex flex-col h-[35vh] sm:h-[80vh] w-auto bg-cover bg-no-repeat justify-center";
  const totalClasses = isSmallDevice ? " small-device-background" : "";
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      {/* El header, como no esta dentro de un div no bloquea el componente */}
      {/* <p className="font-serif text-2xl text-center font-bold">
          Crédito en seminuevos auditados, seriedad y confianza a un precio
          competitivo. Comprometidos con la mejora continua y la protección de
          tu patrimonio. En Sabo Motor ponemos los mejores autos de sus marcas
          confianza en su viaje automotriz, brindando asesoramiento experto. Nos
          esforzamos por construir relaciones a largo plazo con cada cliente,
          basadas en la honestidad, la integridad y el respeto mutuo.
        </p> */}
      <div
        className={mainClasses + totalClasses}
        style={{ backgroundImage: `url(/Automars_bg.jpg)` }}
      >
        <div className="mt-36  sm:mt-0">
          <p className="font-sans sm:text-2xl text-center font-bold sm:text-gray-200 self-center">
            En Auto Mars ponemos a tu disposicion autos de las mejores marcas,
            con la confianza de que cada uno de ellos ha sido auditado y
            revisado por nuestros expertos. Tambien compramos tu auto usado,
            para que puedas renovar tu vehículo con nosotros. Las opciones de
            consignacion y financiamiento estan disponibles para que puedas
            llevar tu auto favorito a casa. Visitanos en nuestro local en
            Ixtapaluca, Estado de Mexico.
          </p>
        </div>
        <div className="flex flex-wrap self-center justify-center">
          <Image
            src="/Ford_logo_flat.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Mercedes-Benz_logo_2.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Nissan_2020_logo.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Peugeot_Logo.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Renault_2021.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Chevrolet.png"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
