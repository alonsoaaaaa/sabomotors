import Header from "@/components/header";
import React from "react";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];

function About() {
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      <div className="mt-20">
        <p className="font-serif text-2xl text-center font-bold">
          Crédito en seminuevos auditados, seriedad y confianza a un precio
          competitivo. Comprometidos con la mejora continua y la protección de
          tu patrimonio. En Sabo Motor ponemos los mejores autos de sus marcas
          confianza en su viaje automotriz, brindando asesoramiento experto. Nos
          esforzamos por construir relaciones a largo plazo con cada cliente,
          basadas en la honestidad, la integridad y el respeto mutuo.
        </p>
      </div>
    </div>
  );
}

export default About;
