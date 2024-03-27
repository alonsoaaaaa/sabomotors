import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
const navItems = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea0e59f68773704732dc3561b5fa82419c2d35d086d7a60909941d0c34fe3c8?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/a35111c05c77a927dad0ab86c1c180f37e3586dbcb0bf1df8120a633c9985181?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/9507feadcb1e62bd42a9f1e6f273645b9cb0359b2caad2287bf0a8e4057d3a1e?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
];

function Manual() {
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      <div className="flex flex-col">
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
            <Button>Hyundai Accent 2018 Mid</Button>
          </Link>
        </div>
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
            <Button>Beat Itz 2019 Estándar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Manual;
