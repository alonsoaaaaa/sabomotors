"use client";
import { FetchAvailableCars } from "@/app/actions/actions";
import VehicleDetailsSection from "@/components/vehicle-details-section";
import { AvailableCars } from "@prisma/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  let [cars, setCars] = useState<AvailableCars[]>([]);
  useEffect(() => {
    const fetchAndSetCars = async () => {
      const carsData = await FetchAvailableCars();
      setCars(carsData);
    };
    fetchAndSetCars();
  }, []);
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="pr-[65%] sm:pr-[35%]">
        <Link href={"/"}>
          <ArrowLeftIcon size={40} color="blue" />
        </Link>
      </div>
      {cars.map((car) => {
        if (car.id === Number(id)) {
          return (
            <VehicleDetailsSection
              key={car.id}
              image={car.image}
              model={car.model}
              facture={car.FactureType as string}
              downpayment={car.downpayment}
              credit={car.credit as string}
              features={car.features}
              price={car.price}
            />
          );
        }
      })}
    </div>
  );
}
