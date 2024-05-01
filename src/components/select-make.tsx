import React from "react";
import { Button } from "./ui/button";

function SelectMake({
  currentMake,
  carMake,
  setCarMake,
}: {
  currentMake: string;
  carMake: string;
  setCarMake: any;
}) {
  return (
    <Button
      variant="ghost"
      className={
        "font-bold text-xl border-solid border-b-[3px] rounded-none" +
        (currentMake === carMake
          ? " text-gray-800 border-gray-900"
          : " text-opacity-40")
      }
      onClick={() => {
        setCarMake(carMake);
      }}
    >
      {" "}
      Vehículos {carMake}
    </Button>
  );
}

export default SelectMake;
