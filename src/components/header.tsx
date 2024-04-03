import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];

function Header() {
  return (
    <header className="flex flex-col px-5 pt-2 pb-2 w-full text-white bg-black shadow-sm">
      {/* <nav className="flex justify-center mt-2.5 w-full text-center max-md:flex-wrap max-md:max-w-full sm:justify-between"> */}
      <div className="flex flex-col sm:flex-row justify-start gap-1 sm:gap-5 text-sm font-bold leading-4 max-md:flex-wrap">
        <div className="self-center">
          <Link href={"/"}>
            <Image
              src="/sabomotors.png"
              alt="Logo"
              className="rounded"
              width={100}
              height={100}
            />
            <h1 className="font-bold text-base text-center">Ixtapaluca</h1>
          </Link>
        </div>

        <div className="flex flex-col self-center md:flex-row px-2 py-px my-auto sm:gap-4">
          <Link href={"/"} className="text-center">
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              INICIO
            </Button>
          </Link>
          <Link href={"/manual"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              MANUALES
            </Button>
          </Link>
          <Link href={"/about"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              NOSOTROS
            </Button>
          </Link>
        </div>
        <div className="flex gap-0 self-center mt-4 text-xs sm:ml-auto leading-4 whitespace-nowrap">
          <Link
            href={
              "https://www.google.com/maps/place/Seminuevos+Sabo+motors/@19.3098449,-98.9041042,17z/data=!3m1!4b1!4m6!3m5!1s0x85ce1e5de457288b:0x9fa91922d1bbdb70!8m2!3d19.3098449!4d-98.9015293!16s%2Fg%2F11f31341m0?entry=ttu"
            }
            className="flex flex-col px-2 self-center"
          >
            <img
              loading="lazy"
              src={navItems[1]}
              alt=""
              className="self-center aspect-square w-[30px]"
            />
            <div className="mt-1.5">Ubicación</div>
          </Link>
          <Link
            href={"https://www.facebook.com/seminuevossabomotors/?locale=es_LA"}
            className="flex flex-col px-2"
          >
            <img
              loading="lazy"
              src={navItems[2]}
              alt=""
              className="self-center aspect-square w-[30px]"
            />
            <div className="mt-1.5">Redes</div>
          </Link>
        </div>
      </div>
      {/* </nav> */}
    </header>
  );
}

export default Header;
