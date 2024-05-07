"use client";
import { FetchCarOffers } from "@/app/actions/actions";
import { Button } from "@/components/ui/button";
import VehicleOfferSection from "@/components/vehicle-offer-section";
import { CarOffers } from "@prisma/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
function OffersPage() {
  let [cars, setCars] = useState<CarOffers[]>([]);
  let handleDelete = async (id: number) => {
    await fetch(`/api/deletecaroffer`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    setCars(cars.filter((car) => car.id !== id));
  };

  useEffect(() => {
    const fetchAndSetCars = async () => {
      const carsData = await FetchCarOffers();
      setCars(carsData);
    };

    fetchAndSetCars();
  }, []);
  return (
    <div className="flex flex-col gap-3 min-h-[90vh] mt-10 items-center">
      <div className="flex">
        <Link href={"/dashboard"}>
          <ArrowLeftIcon size={40} color="blue" />
        </Link>
        <h1 className="font-bold self-center">Ofertas de coches</h1>
      </div>

      {cars.map((car) => (
        <>
          <VehicleOfferSection
            key={car.id}
            image={car.image}
            model={car.model}
            facture={car.FactureType}
            year={car.year}
            email={car.email}
            mileage={car.mileage}
            contact_number={car.contact_number}
            vin={car.vin}
          />

          <Button onClick={() => handleDelete(car.id)} variant="destructive">
            Borrar
          </Button>
        </>
      ))}
    </div>
  );
}

export default OffersPage;
