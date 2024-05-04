import { AvailableCars } from "@prisma/client";
import VehicleSection from "./vehicle-section";

function VehicleDisplay({ vehicles, currentCarMake }: any) {
  // console.log("currentCarMake desde VehicleDisplay", currentCarMake);
  return vehicles.map(
    (vehicle: AvailableCars) =>
      (currentCarMake === "Existentes" || vehicle.make === currentCarMake) && (
        <VehicleSection
          key={vehicle.id}
          imageSrc={vehicle.image[0]}
          downpayment={vehicle.downpayment}
          model={vehicle.model}
          credit={vehicle.credit}
          features={vehicle.features}
        />
      )
  );
}

export default VehicleDisplay;
