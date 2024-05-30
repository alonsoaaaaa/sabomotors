//TODO: Lift the state up to this parent from the filtering section
"use client";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import { AvailableCars } from "@prisma/client";
import VehicleDisplay from "@/components/vehicle-display";
import { useEffect, useState } from "react";
import { FetchAvailableCars } from "./actions/actions";
import { FilterProvider } from "@/context/filter-context";
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

  return (
    <FilterProvider>
      <div className="flex flex-col bg-white">
        <Header />
        <Banner />
        <NavBar />
        <div className="flex flex-row flex-wrap justify-center md:justify-start mx-[3%]">
          <VehicleDisplay cars={cars} />
        </div>
        <Footer />
      </div>
    </FilterProvider>
  );
}

export default VehicleCatalog;
