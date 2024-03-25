import Image from "next/image";
import Link from "next/link";
import React from "react";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];

function Header() {
  return (
    <header className="flex flex-col px-5 pt-2 pb-6 w-full text-white bg-gray-900 shadow-sm max-md:max-w-full">
      <nav className="flex gap-5 justify-between mt-2.5 w-full text-center max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 text-sm font-bold leading-4 uppercase max-md:flex-wrap">
          <div>
            <Image
              loading="lazy"
              src="/sabomotors.png"
              alt="Logo"
              className="rounded"
              width={120}
              height={120}
            />
            <h1 className="font-bold text-base">Ixtapaluca</h1>
          </div>
          <div className="flex gap-4 px-2 py-px my-auto">
            <Link href={"/"}>Inicio</Link>
            <Link href={"/about"}>Descubre Sabo Motors</Link>
            <Link href={"/manual"}>Manuales</Link>
          </div>
        </div>
        <div className="flex gap-0 self-start mt-4 text-xs leading-4 whitespace-nowrap">
          {/* <div className="flex flex-col px-2 py-4">
            <button type="button">
              <img
                loading="lazy"
                src={navItems[0]}
                alt=""
                className="self-center aspect-square w-[30px]"
              />
            </button>
            <div className="mt-1.5">Buscar</div>
          </div> */}
          <Link
            href={
              "https://www.google.com/maps/place/Seminuevos+Sabo+motors/@19.3098449,-98.9015293,17z/data=!3m1!4b1!4m6!3m5!1s0x85ce1e5de457288b:0x9fa91922d1bbdb70!8m2!3d19.3098449!4d-98.9015293!16s%2Fg%2F11f31341m0?entry=ttu"
            }
            className="flex flex-col px-2 py-4"
          >
            <button type="button">
              <img
                loading="lazy"
                src={navItems[1]}
                alt=""
                className="self-center aspect-square w-[30px]"
              />
            </button>
            <div className="mt-1.5">Ubicación</div>
          </Link>
          <Link
            href={"https://www.facebook.com/seminuevossabomotors"}
            className="flex flex-col px-2 py-4"
          >
            <button type="button">
              <img
                loading="lazy"
                src={navItems[2]}
                alt=""
                className="self-center aspect-square w-[30px]"
              />
            </button>
            <div className="mt-1.5">Redes</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
