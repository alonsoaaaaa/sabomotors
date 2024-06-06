import { useContext } from "react";
import { FilterContext } from "../context/filter-context";
import VehicleSection from "./vehicle-section";

function VehicleDisplay({ cars }: { cars: any[] }) {
  const { budget, vehicleType, financing } = useContext(FilterContext);
  const filteredCars = cars.filter((car) => {
    const budgetMatch =
      budget === "~~~~" || parseInt(car.price) <= parseInt(budget + "000");
    const vehicleTypeMatch = vehicleType === "all" || car.type === vehicleType;
    const financingMatch =
      financing === "all" || (financing === "credit" && car.credit === "si");
    return budgetMatch && vehicleTypeMatch && financingMatch;
  });

  return (
    <>
      {filteredCars.map((car) => (
        <VehicleSection key={car.id} imageSrc={car.image} {...car} />
      ))}
    </>
  );
}

export default VehicleDisplay;
