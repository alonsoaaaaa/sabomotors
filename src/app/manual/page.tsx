import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const navItems = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea0e59f68773704732dc3561b5fa82419c2d35d086d7a60909941d0c34fe3c8?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/a35111c05c77a927dad0ab86c1c180f37e3586dbcb0bf1df8120a633c9985181?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/9507feadcb1e62bd42a9f1e6f273645b9cb0359b2caad2287bf0a8e4057d3a1e?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
];

function Manual() {
  return (
    <div className="flex flex-col self-stretch bg-white">
      <header className="flex flex-col px-5 pt-2 pb-8 w-full text-white bg-gray-900 shadow-sm max-md:max-w-full">
        <nav className="flex gap-5 justify-between mt-2.5 w-full text-center max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 text-sm font-bold leading-4 uppercase max-md:flex-wrap">
            <Image
              loading="lazy"
              src="/omodaixt.png"
              alt="Logo"
              className="flex-1 shrink-0 w-full rounded"
              width={300}
              height={300}
            />
            <div className="flex gap-4 px-2 py-px my-auto rounded">
              <Link href={"/"}>Inicio</Link>
              <Link href={"/about"}>Descubre Omoda</Link>
              <Link href={"/manual"}>Manuales</Link>
            </div>
          </div>
          <div className="flex gap-0 self-start mt-4 text-xs leading-4 whitespace-nowrap">
            <div className="flex flex-col px-2 py-4">
              <button type="button">
                <img
                  loading="lazy"
                  src={navItems[0]}
                  alt=""
                  className="self-center aspect-square w-[30px]"
                />
              </button>
              <div className="mt-1.5">Buscar</div>
            </div>
            <Link
              href={
                "https://www.google.com/maps/place/Omoda+Jaecoo+Ixtapaluca/@19.3112835,-98.8995671,17z/data=!3m1!4b1!4m6!3m5!1s0x85ce1fac51e021e7:0xd57f0702bb2b0349!8m2!3d19.3112785!4d-98.8969922!16s%2Fg%2F11l32j613z?entry=ttu"
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
              <div className="mt-1.5">Localizar</div>
            </Link>
            <Link
              href={
                "https://www.facebook.com/OmodaIxtapaluca/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
              }
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
      <div className="flex flex-row">
        <div className="p-8">
          <Image
            src={"/omoda-5-lateral.jpg"}
            alt=""
            width={1000}
            height={400}
            className="rounded"
          ></Image>
          <Link
            href={
              "https://www.omodaoficial.es/wp-content/uploads/2024/03/T19C-OM-ES-EU-20240219.pdf"
            }
            className="flex flex-col px-2 py-4"
          >
            <Button>OMODA 5</Button>
          </Link>
        </div>
        <div className="p-8">
          <Image
            src={"/omodae5v2.jpeg"}
            alt=""
            width={1000}
            height={400}
            className="rounded"
          ></Image>
          <Link
            className="flex flex-col px-2 py-4"
            href={
              "https://www.omodaoficial.es/wp-content/uploads/2024/03/T19C-OM-ES-EU-20240219.pdf"
            }
          >
            <Button>OMODA E5</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Manual;
