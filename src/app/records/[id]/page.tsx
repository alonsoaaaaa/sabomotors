import React, { useEffect, useState } from "react";
import { Table, TableBody } from "@/components/ui/table";
import CustomRow from "@/components/table-row";
import { vehicles } from "@/utils/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
function Record({ params }: { params: { id: number } }) {
  console.log("id", params.id);
  return (
    <div className="text-center pt-5">
      <h1 className="text-2xl pb-2 text-gray-700">Ficha Técnica</h1>
      {vehicles.map(
        ({
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
        }) => {
          if (id === Number(params.id)) {
            return (
              <div key={id}>
                <Table className="flex justify-center">
                  <TableBody>
                    <CustomRow
                      id={params.id}
                      name={name}
                      make={make}
                      year={year}
                      cylinders={cylinders}
                      horsepower={horsepower}
                      torque={torque}
                      fuelType={fuelType}
                      fuelCapacity={fuelCapacity}
                      manualUrl={manualUrl}
                    />
                  </TableBody>
                </Table>
                <div className="flex justify-center gap-1 pt-3">
                  <Link href={"/technical"}>
                    <Button className="">
                      <ArrowLeftIcon />
                    </Button>
                  </Link>
                  <Link href={manualUrl || "/technical"}>
                    <Button className="bg-blue-900">Descargar Manual</Button>
                  </Link>
                </div>
              </div>
            );
          }
        }
      )}
    </div>
  );
}

export default Record;
