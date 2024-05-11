"use client";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import { AvailableCars } from "@prisma/client";
import VehicleDisplay from "@/components/vehicle-display";
import { useEffect, useState } from "react";
import { FetchAvailableCars } from "./actions/actions";
// import FilterNavbar from "@/components/filtering-navbar";

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
  const filters = ["Cars", "Views", "Food"];
  const handleFilterChange = (selectedFilter: string) => {
    // Handle the selected filter
    console.log("Selected filter:", selectedFilter);
  };

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
