import React from "react";
import SelectMake from "./select-make";

function NavBar({ carMake, setCarMake }: { carMake: string; setCarMake: any }) {
  return (
    <nav className="flex flex-wrap justify-center items-center mt-8 text-xl font-bold text-black text-opacity-40">
      <SelectMake
        currentMake={carMake}
        carMake={"Disponibles"}
        setCarMake={setCarMake}
      />
      <SelectMake
        currentMake={carMake}
        carMake={"Chevrolet"}
        setCarMake={setCarMake}
      />
      <SelectMake
        currentMake={carMake}
        carMake={"Jeep"}
        setCarMake={setCarMake}
      />
      <SelectMake
        currentMake={carMake}
        carMake={"Volkswagen"}
        setCarMake={setCarMake}
      />
    </nav>
  );
}

export default NavBar;
