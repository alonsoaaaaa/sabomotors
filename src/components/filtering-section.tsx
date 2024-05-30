"use client";
import { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PriceSlider from "./price-slider";
import { FilterContext } from "@/context/filter-context";

export default function FilteringSection() {
  const {
    budget,
    setBudget,
    vehicleType,
    setVehicleType,
    financing,
    setFinancing,
  } = useContext(FilterContext);
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 my-4">
      <h1 className="text-black text-xl font-semibold">Filtros</h1>
      <div className="flex flex-row sm:flex-row gap-1">
        {/* <Select value={vehicleType} onValueChange={setVehicleType}>
          <SelectTrigger className="w-[120px] sm:w-[180px]">
            <SelectValue placeholder="Tipo de vehículo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup defaultValue={"all"}>
              <SelectLabel>Tipo de vehículo</SelectLabel>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="vans">Vans</SelectItem>
              <SelectItem value="hatchback">Hatchback</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
        <Select value={financing} onValueChange={setFinancing}>
          <SelectTrigger className="w-[120px] sm:w-[180px]">
            <SelectValue placeholder="Financiamiento" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Financiamiento</SelectLabel>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="credit">Crédito disponible</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <PriceSlider
        setBudget={setBudget}
        budget={budget}
        defaultValue={[0]}
        min={50}
        max={400}
        step={1}
      />
    </div>
  );
}
