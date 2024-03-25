import Header from "@/components/header";
import React from "react";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];

function About() {
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      <div className="mt-20">
        <p className="font-serif text-2xl text-center font-bold">
          En Sabo Motor ponemos los mejores autos de sus marcas confianza en su
          viaje automotriz, brindando asesoramiento experto, recursos educativos
          y un servicio excepcional en todo momento. Nos esforzamos por
          construir relaciones a largo plazo con cada cliente, basadas en la
          honestidad, la integridad y el respeto mutuo. En resumen, nuestra
          misión es simple pero poderosa: poner a nuestros clientes en primer
          lugar en todo lo que hacemos. Porque creemos que cuando ustedes tienen
          éxito, nosotros también lo hacemos. Su satisfacción y confianza son
          nuestra mayor recompensa, y trabajamos incansablemente para merecerlas
          cada día.
        </p>
      </div>
    </div>
  );
}

export default About;
