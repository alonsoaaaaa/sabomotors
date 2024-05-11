import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

function VehicleDetailsSection({
  image,
  model,
  facture,
  downpayment,
  credit,
  features,
  price,
}: {
  image: string[];
  model: string;
  facture: string;
  downpayment: string;
  credit: string;
  features: string[] | null;
  price: string;
}) {
  return (
    <div className="flex flex-col w-[60%] justify-center">
      <Carousel>
        <CarouselContent className="flex justify-between">
          {image.map((image) => (
            <CarouselItem key={image}>
              <div className="flex justify-center items-center">
                <Image
                  priority
                  src={image}
                  alt="Vehicle"
                  className="self-center w-full aspect-[1.49] max-w-[300px] rounded"
                  width={600}
                  height={300}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-blue-800">Modelo</TableHead>
            <TableHead className="text-blue-800">Crédito</TableHead>
            <TableHead className="text-blue-800">Factura</TableHead>
            <TableHead className="text-blue-800">Detalles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{model}</TableCell>
            <TableCell className="text-start">{credit.toUpperCase()}</TableCell>
            <TableCell>{facture.toUpperCase()}</TableCell>
            <TableCell>
              {features?.map((feature) => (
                <p key={feature}>{feature}</p>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
        <TableHeader>
          <TableRow>
            <TableHead className="text-blue-800">Precio</TableHead>
            <TableHead className="text-blue-800">Enganche</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>${price.slice(0, 3) + "," + price.slice(3)}</TableCell>
            <TableCell className="text-yellow-500">20% del precio</TableCell>
          </TableRow>
        </TableBody>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-800">
              Correo de Sabo Motors
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <a
                href="mailto:ventas@seminuevossabomotors.com"
                className="text-blue-400 underline underline-offset-4"
              >
                ventas@seminuevossabomotors.com
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-800">
              Teléfono de Sabo Motors
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <a
                href="tel:+525516416497"
                className="text-blue-400 underline underline-offset-4"
              >
                55 1641 6497
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default VehicleDetailsSection;
