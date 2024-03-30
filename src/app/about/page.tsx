"use client";
import Header from "@/components/header";

import React from "react";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];
// import backgroundImage from "@/Automars_bg.jpg";

function About() {
  let isSmallDevice = true;
  if (typeof window !== "undefined") {
    isSmallDevice = window.innerWidth <= 600;
  }
  const mainClasses = "flex h-[35vh] sm:h-[80vh] w-auto bg-cover bg-no-repeat";
  const totalClasses = isSmallDevice ? " small-device-background" : "";
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
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
        <p className="font-sans sm:text-2xl text-center font-bold sm:text-gray-200 self-center">
          En Auto Mars ponemos a tu disposicion autos de las mejores marcas, con
          la confianza de que cada uno de ellos ha sido auditado y revisado por
          nuestros expertos. Tambien compramos tu auto usado, para que puedas
          renovar tu vehículo con nosotros. Las opciones de consignacion y
          financiamiento estan disponibles para que puedas llevar tu auto
          favorito a casa. Visitanos en nuestro local en Ixtapaluca, Estado de
          Mexico.
        </p>
      </div>
    </div>
  );
}

export default About;
