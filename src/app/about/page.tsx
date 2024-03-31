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
        style={{ backgroundImage: `url(/Automars_bg2.png)` }}
      >
        <div className="mt-10 md:mt-28">
          <p className="font-sans text-xl  text-center sm:text-2xl font-bold sm:text-gray-100 self-center shrink-0 sm:shrink sm:mb-12">
            En Auto Mars ponemos a tu disposición autos de las mejores marcas,
            con la confianza de que cada uno de ellos ha sido auditado y
            revisado por nuestros expertos. Tambien compramos tu auto usado,
            para que puedas renovar tu vehículo con nosotros. Las opciones de
            consignacion y financiamiento estan disponibles para que puedas
            llevar tu auto favorito a casa. Visitanos en nuestro local en
            Ixtapaluca, Estado de Mexico.
          </p>
        </div>
        <div className="flex flex-wrap self-center justify-center sm:mb-28">
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
