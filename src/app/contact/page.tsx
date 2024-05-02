import Header from "@/components/header";
import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-14 pt-5 bg-gradient-to-t from-blue-700 to-blue-200">
        <div className="flex pl-[9%] justify-center">
          <Image
            width={300}
            height={300}
            src="/sabomotors.png"
            alt="logo"
            priority
          />
        </div>
        <div className="flex justify-around ">
          <div className="flex flex-col items-center justify-center text-center px-2">
            <h1 className="text-xl font-bold">Horario</h1>
            <div className="flex flex-col items-center">
              <p>Lunes a Viernes de 9:00 a 18:00</p>
              <p>Sábados de 9:00 a 14:00</p>
              <p>Domingos cerrado</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-center justify-center items-center">
              Ubicación
            </h1>
            <p className="text-center">
              Avenida del ferrocarril, Manzana 23 Lote 30,{" "}
            </p>
            <p> Santa Cruz Tlapacoya, 56577 Ixtapaluca, Méx. </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-center">Teléfono</h1>
            <p className="text-center">55 1641 6497</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
