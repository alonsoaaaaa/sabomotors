import { AvailableCars } from "@prisma/client";
import VehicleSection from "./vehicle-section";

function VehicleDisplay({ vehicles, currentCarMake }: any) {
  return vehicles.map(
    (vehicle: AvailableCars) =>
      (currentCarMake === "Disponibles" || vehicle.make === currentCarMake) && (
        <VehicleSection
          key={vehicle.id}
          id={vehicle.id}
          imageSrc={vehicle.image}
          downpayment={vehicle.downpayment}
          model={vehicle.model}
          credit={vehicle.credit}
          features={vehicle.features}
          price={vehicle.price}
        />
      )
  );
}

export default VehicleDisplay;
