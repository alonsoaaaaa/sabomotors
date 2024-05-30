// FilterContext.tsx
import { createContext, useState } from "react";

interface FilterContextType {
  budget: string;
  setBudget: (value: string) => void;
  vehicleType: string;
  setVehicleType: (value: string) => void;
  financing: string;
  setFinancing: (value: string) => void;
}

export const FilterContext = createContext<FilterContextType>({
  budget: "~~~~",
  setBudget: () => {},
  vehicleType: "all",
  setVehicleType: () => {},
  financing: "all",
  setFinancing: () => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [budget, setBudget] = useState("~~~~");
  const [vehicleType, setVehicleType] = useState("all");
  const [financing, setFinancing] = useState("all");

  const value = {
    budget,
    setBudget,
    vehicleType,
    setVehicleType,
    financing,
    setFinancing,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
