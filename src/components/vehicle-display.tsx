// import { AvailableCars } from "@prisma/client";
// import VehicleSection from "./vehicle-section";

// function VehicleDisplay({
//   vehicles,
//   currentCarType,
//   currentPrice,
//   currentFinancing,
// }: any) {
//   const initialState =
//     currentCarType === "all" &&
//     currentPrice === "~~~~" &&
//     currentFinancing === "all";
//   return vehicles.map(
//     (vehicle: AvailableCars) =>
//       (initialState ||
//         (vehicle.price === currentPrice &&
//           vehicle.credit === currentFinancing)) && (
//         <VehicleSection
//           key={vehicle.id}
//           id={vehicle.id}
//           imageSrc={vehicle.image}
//           downpayment={vehicle.downpayment}
//           model={vehicle.model}
//           credit={vehicle.credit}
//           features={vehicle.features}
//           price={vehicle.price}
//         />
//       )
//   );
// }

import { useContext } from "react";
import { FilterContext } from "../context/filter-context";
import VehicleSection from "./vehicle-section";
import { vehicles } from "@/utils/data";

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
