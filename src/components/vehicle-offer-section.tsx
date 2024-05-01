import { CarOffers } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

function VehicleOfferSection({
  image,
  model,
  facture,
  year,
  email,
  mileage,
  contact_number,
  vin,
}: {
  image: string[];
  model: string;
  facture: string;
  year: number;
  email: string;
  mileage: GLfloat | null;
  contact_number: string | null;
  vin: string | null;
}) {
  return (
    <div className="flex flex-col w-[60%] md:w-[34%] justify-center">
      <div className="flex flex-col grow text-sm leading-5 text-black max-md:mt-10">
        <Image
          priority
          src={image[0]}
          alt="Vehicle"
          className="self-center w-full aspect-[1.49] max-w-[300px] rounded"
          width={600}
          height={300}
        />

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Modelo</TableHead>
              <TableHead>Año</TableHead>
              <TableHead>Factura</TableHead>
              <TableHead>Kilometraje</TableHead>

              {/* <TableHead>Correo</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{model}</TableCell>
              <TableCell>{year}</TableCell>
              <TableCell>{facture}</TableCell>
              <TableCell>{mileage}</TableCell>

              {/* <TableCell>{email}</TableCell> */}
            </TableRow>
          </TableBody>
          <TableHeader>
            <TableRow>
              <TableHead>Correo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{email}</TableCell>
            </TableRow>
          </TableBody>
          <TableHeader>
            <TableRow>
              <TableHead>Teléfono</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{contact_number}</TableCell>
            </TableRow>
          </TableBody>
          <TableHeader>
            <TableRow>
              <TableHead>VIN</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{vin}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default VehicleOfferSection;
