"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
function Manual() {
  let [carQuery, setCarQuery] = useState("");
  let carNames = ["hyundai accent", "mercedes ml 350", "beat itz"];
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
        {carNames[0]
          .toLocaleLowerCase()
          .includes(carQuery.toLocaleLowerCase()) ? (
          <div className="p-8">
            <Image
              src={"/hyundaiaccent2018v2-resized.png"}
              alt=""
              width={1000}
              height={400}
              className="rounded pl-[9vw]"
            ></Image>
            <Link
              href={
                "https://owners.hyundaiusa.com/content/dam/hyundai/us/myhyundai/manuals/glovebox-manual/2022/accent/2022-Accent-OM.pdf"
              }
              className="flex flex-col px-2 py-4"
            >
              <Button className="w-[50vw] self-center">
                Hyundai Accent 2018 Mid
              </Button>
            </Link>
          </div>
        ) : null}
        {carNames[1]
          .toLocaleLowerCase()
          .includes(carQuery.toLocaleLowerCase()) ? (
          <div className="p-8">
            <Image
              src={"/4-2-car-png-hd.png"}
              alt=""
              width={1000}
              height={400}
              className="rounded pl-[9vw]"
            ></Image>
            <Link
              className="flex flex-col px-2 py-4"
              href={
                "https://www.mbusa.com/content/dam/mb-nafta/us/owners/manuals/2014/operators/MY14_M-Class_Operator.pdf"
              }
            >
              <Button className="w-[50vw] self-center">Mercedes ML 350</Button>
            </Link>
          </div>
        ) : null}
        {carNames[2]
          .toLocaleLowerCase()
          .includes(carQuery.toLocaleLowerCase()) ? (
          <div className="p-8">
            <Image
              src={"/beatitz2019.png"}
              alt=""
              width={1000}
              height={400}
              className="rounded pl-[9vw]"
            ></Image>
            <Link
              className="flex flex-col px-2 py-4"
              href={
                "https://my.gm.com.mx/content/dam/gmownercenter/gmna/gmmx/dynamic/manuals/2020/chevrolet/beat/es/Chevrolet_2020_beat.pdf"
              }
            >
              <Button className="w-[50vw] self-center">
                Beat Itz 2019 Estándar
              </Button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Manual;
