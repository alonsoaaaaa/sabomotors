import Image from "next/image";
import Link from "next/link";
import React from "react";

function VehicleSection({
  imageSrc,
  downpayment,
  model,
  credit,
  features,
}: {
  imageSrc: string;
  downpayment: string;
  model: string;
  credit: string | null;
  features: string | null;
}) {
  return (
    <div className="flex flex-col w-[60%] md:w-[30%]">
      <div className="flex flex-col grow text-sm leading-5 text-black max-md:mt-10">
        <Image
          priority
          src={imageSrc}
          alt="Vehicle"
          className="self-center w-full aspect-[1.49] max-w-[300px] rounded-md"
          width={300}
          height={200}
        />

        <div className="self-center font-semibold">{model}</div>
        <div className="self-center">Enganche desde ${downpayment}</div>
        {credit && credit === "si" && (
          <div className="self-center">Crédito disponible</div>
        )}
        {features && <div className="self-center">{features}</div>}
      </div>
      <Link
        href={
          "https://www.facebook.com/seminuevossabomotors/photos?locale=es_LA"
        }
        className="self-center py-[1px] mt-6 text-xs leading-3 text-center text-black border-b-2 border-yellow-400 border-solid"
      >
        Ver catálogo
      </Link>
    </div>
  );
}

export default VehicleSection;
