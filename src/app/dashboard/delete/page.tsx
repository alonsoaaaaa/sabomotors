"use client";
import { FetchAvailableCars } from "@/app/actions/actions";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";

import { AvailableCars } from "@prisma/client";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
// list available car and delete on click in borrar button
export default function DeleteAvailableCar() {
  let [cars, setCars] = useState<AvailableCars[]>([]);
  useEffect(() => {
    const fetchAndSetCars = async () => {
      const carsData = await FetchAvailableCars();
      setCars(carsData);
    };
    fetchAndSetCars();
  }, []);
  let handleDeleteAvailableCar = async (id: number) => {
    await fetch(`/api/deleteavailablecar`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    setCars(cars.filter((car) => car.id !== id));
  };

  let [carMake, setCarMake] = useState("Disponibles");
  console.log(carMake);
  return (
    <React.Fragment>
      <div className="flex items-center justify-center pr-[65%] sm:pr-[35%]">
        <Link href={"/dashboard"} className="self-center  ">
          <ArrowLeftIcon size={40} color="blue" />
        </Link>
      </div>

      <h1 className="text-2xl text-center py-2 text-red-400">
        Borrar carro en venta
      </h1>
      <NavBar carMake={carMake} setCarMake={setCarMake} />
      <div className="flex flex-row flex-wrap justify-center md:justify-start mx-[3%]">
        {cars.map(
          (car) =>
            (carMake === "Disponibles" || car.make === carMake) && (
              <div className="flex flex-col w-[60%] md:w-[30%]" key={car.id}>
                <div className="flex flex-col grow text-sm leading-5 text-black max-md:mt-10">
                  <Image
                    priority
                    src={car.image[0]}
                    alt="Vehicle"
                    className="self-center w-full aspect-[1.49] max-w-[300px]"
                    width={300}
                    height={200}
                  />

                  <div className="self-center font-semibold">{car.model}</div>
                </div>
                <Button
                  onClick={() => handleDeleteAvailableCar(car.id)}
                  variant="destructive"
                  className=" self-center max-w-fit"
                >
                  Borrar
                </Button>
              </div>
            )
        )}
      </div>
    </React.Fragment>
  );
}
