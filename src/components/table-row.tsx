import React from "react";
import { TableCell, TableRow } from "./ui/table";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";
type VehicleProps = {
  id: number;
  name: string;
  make: string;
  year: number;
  cylinders: number;
  horsepower: number;
  torque: number;
  fuelType: string;
  fuelCapacity: number;
  imageUrl?: string;
  manualUrl?: string;
};
function CustomRow({
  id,
  name,
  make,
  year,
  cylinders,
  horsepower,
  torque,
  fuelType,
  fuelCapacity,
  manualUrl,
}: VehicleProps) {
  return (
    <>
      {/* <TableRow>
        <TableCell className="font-medium border border-gray-500">
          ID de ficha:
        </TableCell>
        <TableCell className="font-medium border border-gray-500">
          {id}
        </TableCell>
      </TableRow> */}
      <TableRow>
        <TableCell className="font-medium border border-gray-500">
          Nombre del Automóvil:
        </TableCell>
        <TableCell className="font-medium border border-gray-500">
          {name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium border border-gray-500">
          Marca:
        </TableCell>
        <TableCell className="font-medium border border-gray-500">
          {make}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium border border-gray-500">
          Año:
        </TableCell>
        <TableCell className="font-medium border border-gray-500">
          {year}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium border border-gray-500">
          Cilindros:
        </TableCell>
        <TableCell className="font-medium border border-gray-500">
          {cylinders}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium border border-gray-500">
          Caballos de fuerza:
        </TableCell>
        <TableCell className="font-medium border border-gray-500">
          {horsepower}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium border border-gray-500">
          Torque:
        </TableCell>
        <TableCell className="font-medium border border-gray-500">
          {torque}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium border border-gray-500">
          Tipo de combustible:
        </TableCell>
        <TableCell className="font-medium border border-gray-500">
          {fuelType}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium border border-gray-500">
          Capacidad de combustible:
        </TableCell>
        <TableCell className="font-medium border border-gray-500">
          {fuelCapacity}
        </TableCell>
      </TableRow>
    </>
  );
}

export default CustomRow;
