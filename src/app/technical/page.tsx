"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { vehicles } from "@/utils/data";
function Technical() {
  let [carQuery, setCarQuery] = useState("");
  // let carNames = ["hyundai accent", "mercedes ml 350", "beat itz"];

  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      <div className="flex flex-col">
        <div className="flex p-4 justify-center">
          <Input
            className="ml-24 sm:ml-0 border border-gray-600 w-2/4"
            placeholder="Nombre del vehículo..."
            onChange={(e) => {
              setCarQuery(e.target.value);
              // console.log(carQuery);
            }}
          />
          <Button variant="outline" className="ml-1">
            <SearchIcon />
          </Button>
        </div>
        {vehicles.map(({ id, name, imageUrl }) => {
          return (
            <div className="p-8 flex flex-col items-center" key={id}>
              <Image
                src={imageUrl}
                alt={name}
                width={600}
                height={400}
                className="rounded"
                priority
              ></Image>
              <Link
                href={`./records/${id}`}
                className="flex flex-col px-2 py-4"
              >
                <Button className="w-fit self-center">{name}</Button>
              </Link>
            </div>
          );
        })}

        {/* .toLocaleLowerCase()
          .includes(carQuery.toLocaleLowerCase()) ? (
          <div className="p-8 flex flex-col items-center">
            <Image
              src={"/hyundaiaccent2018v2-resized.png"}
              alt=""
              width={600}
              height={400}
              className="rounded"
            ></Image>
            <Link href={"./records/1"} className="flex flex-col px-2 py-4">
              <Button className="w-fit self-center">
                Hyundai Accent 2018 Mid
              </Button>
            </Link>
          </div>
        ) : null}
        {carNames[1]
          .toLocaleLowerCase()
          .includes(carQuery.toLocaleLowerCase()) ? (
          <div className="p-8 flex flex-col items-center">
            <div>
              <Image
                src={"/4-2-car-png-hd.png"}
                alt=""
                width={600}
                height={400}
                className="rounded"
              ></Image>
              <Link className="flex flex-col px-2 py-4" href={"./records/2"}>
                <Button className="w-fit self-center">Mercedes ML 350</Button>
              </Link>
            </div>
          </div>
        ) : null}
        {carNames[2]
          .toLocaleLowerCase()
          .includes(carQuery.toLocaleLowerCase()) ? (
          <div className="p-8 flex flex-col items-center">
            <Image
              src={"/beatitz2019.png"}
              alt=""
              width={600}
              height={400}
              className="rounded"
            ></Image>
            <Link className="flex flex-col px-2 py-4" href={"./records/3"}>
              <Button className="w-fit self-center">Beat Itz 2019 Std</Button>
            </Link>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}

export default Technical;
