import React from "react";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { FormControl } from "./ui/form";
import { popularMakes } from "@/utils/data";
interface CustomSelectProps {
  onValueChange: (...event: any[]) => void;
}
function CustomSelect({ onValueChange }: CustomSelectProps) {
  return (
    <Select onValueChange={onValueChange}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona la marca" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {popularMakes.map((value) => (
          <SelectItem value={value} key={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CustomSelect;
