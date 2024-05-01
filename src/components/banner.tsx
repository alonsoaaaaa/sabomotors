import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <section className="flex flex-col justify-center w-full text-center text-white bg-black max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-9 w-full min-h-[280px] max-md:px-5 max-md:max-w-full">
        <Image
          src={"/bannersabomotors2.jpg"}
          alt="Banner Sabo Motors"
          className="absolute inset-0 w-full h-full object-center"
          width={1920}
          height={1080}
          priority
        />
        <div className="flex relative flex-col px-8 pt-8 pb-8 max-md:px-5 max-md:max-w-full">
          <h1 className="text-gray-300 self-center text-6xl font-bold uppercase leading-[54.45px] max-md:max-w-full max-md:text-4xl">
            Catálogo Sabo Motors
          </h1>
          <p className="mt-6 text-base leading-6 max-md:max-w-full">
            Revisa el catálogo y descubre todos los detalles de nuestra gama de
            vehículos Sabo Motors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
