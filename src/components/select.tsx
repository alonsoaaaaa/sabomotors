import React, { useState } from "react";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { FormControl } from "./ui/form";
import { Input } from "./ui/input";

type CustomSelectProps = {
  onValueChange: (...event: any[]) => void;
  options: string[];
  name?: string;
};
function CustomSelect({ onValueChange, options, name }: CustomSelectProps) {
  let [make, setMake] = useState<string>(""); //state to kee track of the selected make, not used yet
  return (
    <Select onValueChange={onValueChange}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={`Seleccciona ${name}`} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options.map((value) => (
          <SelectItem value={value} key={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CustomSelect;
