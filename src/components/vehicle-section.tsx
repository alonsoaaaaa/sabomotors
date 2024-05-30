import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
function VehicleSection({
  id,
  imageSrc,
  downpayment,
  model,
  credit,
  features,
  price,
}: {
  id: number;
  imageSrc: string[];
  downpayment: string;
  model: string;
  credit: string | null;
  features: string[] | null;
  price: string;
}) {
  return (
    <div className="flex flex-col w-[60%] md:w-[30%]">
      <div className="flex flex-col grow text-sm leading-5 text-black max-md:mt-10">
        <Image
          priority
          src={imageSrc?.[0]}
          alt="Vehicle"
          className="self-center w-full aspect-[1.49] max-w-[300px] rounded-md"
          width={300}
          height={200}
        />

        <div className="flex flex-col grow justify-evenly">
          <p className="self-center font-semibold text-gray-950">{model}</p>
          <p className="self-center font-medium">
            Precio ${price.slice(0, 3) + "," + price.slice(3)}
          </p>
          {credit && credit === "si" && (
            <p className="self-center text-blue-500">Crédito disponible</p>
          )}
          {features && features.length > 0 && (
            <div className="items-center">
              {features.map((feature) => (
                <p key={feature} className="text-center">
                  {feature}
                </p>
              ))}
            </div>
          )}
          <Link
            href={"/vehicles/" + id}
            className="self-center text-sm text-center text-black"
          >
            <Button
              variant="ghost"
              className="text-blue-400 underline underline-thickness-2 underline-offset-4 underline-transparent hover:text-blue-600 pt-0"
            >
              Ver detalles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VehicleSection;
