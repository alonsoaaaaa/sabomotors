import { useState } from "react";
import { cn } from "@/libs/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = {
  budget: string;
  setBudget: (value: string) => void;
  className?: string;
} & React.ComponentProps<typeof Slider>;

export default function PriceSlider({
  budget,
  setBudget,
  className,
  ...props
}: SliderProps) {
  return (
    <>
      <h2 className="font-serif">Presupuesto: </h2>
      {budget && (
        <p className="font-semibold">
          $ {(budget == "~~~~" && "~~~~") || budget + ",000"}
        </p>
      )}
      <Slider
        step={1}
        className={cn("w-[60%] sm:w-[30%]", className)}
        {...props}
        onValueChange={(value) => setBudget(value[0].toString())}
      />
    </>
    // </div>
  );
}
