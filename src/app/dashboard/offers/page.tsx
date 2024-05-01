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
        <h1 className="font-bold self-center">
          Autos que quieren ser vendidos
        </h1>
      </div>

      {cars.map((vehicle) => (
        <>
          <VehicleOfferSection
            key={vehicle.id}
            image={vehicle.image}
            model={vehicle.model}
            facture={vehicle.FactureType}
            year={vehicle.year}
            email={vehicle.email}
            mileage={vehicle.mileage}
            contact_number={vehicle.contact_number}
            vin={vehicle.vin}
          />

          <Button
            onClick={() => handleDelete(vehicle.id)}
            variant="destructive"
          >
            Borrar
          </Button>
        </>
      ))}
    </div>
  );
}

export default OffersPage;
