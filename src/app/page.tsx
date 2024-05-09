"use client";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import { AvailableCars, CarOffers } from "@prisma/client";
import SelectMake from "@/components/select-make";
import { Button } from "@/components/ui/button";
import VehicleDisplay from "@/components/vehicle-display";
import VehicleSection from "@/components/vehicle-section";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { vehicles } from "@/utils/data";
import { FetchAvailableCars } from "./actions/actions";

function VehicleCatalog() {
  let [cars, setCars] = useState<AvailableCars[]>([]);
  useEffect(() => {
    const fetchAndSetCars = async () => {
      const carsData = await FetchAvailableCars();
      setCars(carsData);
    };
    fetchAndSetCars();
  }, []);

  let [carMake, setCarMake] = useState("Disponibles");
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      <Banner />
      <NavBar carMake={carMake} setCarMake={setCarMake} />
      <div className="flex flex-row flex-wrap justify-center md:justify-start mx-[3%]">
        <VehicleDisplay currentCarMake={carMake} vehicles={cars} />
      </div>
      <Footer />
    </div>
  );
}

export default VehicleCatalog;
