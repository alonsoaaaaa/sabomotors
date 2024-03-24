"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface NavItemProps {
  imageSrc: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ imageSrc, text }) => (
  <div className="flex flex-col px-2 py-4">
    <img
      loading="lazy"
      src={imageSrc}
      alt=""
      className="self-center aspect-square w-[30px]"
    />
    <div className="mt-1.5">{text}</div>
  </div>
);

interface VehicleCardProps {
  imageSrc: string;
  price: string;
  type: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ imageSrc, price }) => (
  <div className="flex flex-col grow text-sm leading-5 text-black max-md:mt-10">
    <img
      loading="lazy"
      src={imageSrc}
      alt="Vehicle"
      className="self-start ml-5 w-full aspect-[1.49] max-w-[300px] max-md:ml-2.5"
    />
    <div className="mt-7">{price}</div>
  </div>
);

const VehicleCatalog: React.FC = () => {
  const navItems = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea0e59f68773704732dc3561b5fa82419c2d35d086d7a60909941d0c34fe3c8?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a35111c05c77a927dad0ab86c1c180f37e3586dbcb0bf1df8120a633c9985181?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9507feadcb1e62bd42a9f1e6f273645b9cb0359b2caad2287bf0a8e4057d3a1e?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
  ];

  const vehicleCards: VehicleCardProps[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e2b537f0acb66f0034d976c48c5c69daf798acee2d1a197852f2638cbc5dd726?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $235,200",
      type: "particular",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dccf888292290689931831e1037aa572b1e3fea4424b91c756a2fbd6b98dbe78?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $319,000",
      type: "particular",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dff7fcd7d097b3cf1dcc3090a11a48d1a551a00eba1c0f52989c1005ff6020c0?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $379,300",
      type: "particular",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/63693c57996e9fb363df13671f2046e2b89e1259091838d19857e6565cfdb000?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $399,300",
      type: "utilitary",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b6aa817975bb44b32f4f8f1f43ad27f8e63fba0d27f3dde624c5a7014e2795d?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $354,300",
      type: "utilitary",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f6d70be9b0bf881857c8e82283b5eea6e6ef1baac49ef666f2e7609cfd6d2fc1?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $573,200",
      type: "utilitary",
    },
  ];

  let [carType, setCarType] = React.useState("particular");
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
            <div className="flex gap-4 px-2 py-px my-auto">
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
              <div className="mt-1.5">Sucursal</div>
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
      <section className="flex flex-col justify-center w-full text-center text-white bg-black max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-9 w-full min-h-[240px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="./omodabanner4.jpg"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col px-8 pt-8 pb-8 max-md:px-5 max-md:max-w-full">
            <h1 className="self-center text-6xl font-bold uppercase leading-[54.45px] max-md:max-w-full max-md:text-4xl">
              Catálogos Omoda
            </h1>
            <p className="mt-6 text-base leading-6 max-md:max-w-full">
              Descarga un catálogo y descubre todos los detalles de nuestra gama
              de vehículos Omoda.
            </p>
          </div>
        </div>
      </section>
      <nav className="flex flex-wrap justify-center items-center px-16 mt-8 w-full text-xl font-bold leading-5 text-center text-black text-opacity-40 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center max-md:flex-wrap">
          <div className="flex flex-col justify-center self-stretch pt-2 pb-2">
            <Button
              variant="ghost"
              className={
                "font-bold text-xl pb-4 border-solid border-b-[3px] rounded-none" +
                (carType === "particular"
                  ? " text-gray-900 border-gray-900"
                  : " text-opacity-40")
              }
              onClick={() => {
                setCarType("particular");
              }}
            >
              {" "}
              Vehículos particulares
            </Button>
          </div>
          <Button
            variant="ghost"
            className={
              "font-bold text-xl pb-4 border-solid border-b-[3px] rounded-none" +
              (carType === "utilitary"
                ? " text-gray-900 border-gray-900"
                : " text-opacity-40")
            }
            onClick={() => {
              setCarType("utilitary");
            }}
          >
            {" "}
            Vehículos utilitarios
          </Button>{" "}
          <div className="self-stretch my-auto leading-[99%]">
            <Button
              variant="ghost"
              className={
                "font-bold text-xl pb-4 border-solid border-b-[3px] rounded-none" +
                (carType === "electric"
                  ? " text-gray-900 border-gray-900"
                  : " text-opacity-40")
              }
              onClick={() => {
                setCarType("electric");
              }}
            >
              {" "}
              Vehículos eléctricos
            </Button>
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-start self-center px-14 pb-6 mt-10 w-full max-w-[1216px] max-md:px-5 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full">
          {carType !== "electric" ? (
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <VehicleCard {...vehicleCards[0]} />
                      </div>

                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <VehicleCard {...vehicleCards[1]} />
                      </div>
                    </div>
                  </div>
                  <Link
                    href={
                      "https://omodaauto.com.pa/index_files/OMODA-C5-SpecificationGuidePA.pdf"
                    }
                    className="self-center py-px mt-6 ml-36 text-xs leading-3 text-center text-black border-b-2 border-yellow-400 border-solid"
                  >
                    Descargar catálogo
                  </Link>
                  {carType === "particular" && (
                    <div className="mt-6 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow items-start text-black max-md:mt-10">
                            <VehicleCard {...vehicleCards[2]} />
                            <Link
                              href={
                                "https://omodaauto.com.pa/index_files/OMODA-C5-SpecificationGuidePA.pdf"
                              }
                              className="justify-center py-px mt-6 text-xs leading-3 text-center border-b-2 border-yellow-400 border-solid"
                            >
                              Descargar catálogo
                            </Link>
                          </div>
                        </div>

                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow items-start text-black max-md:mt-10">
                            <VehicleCard {...vehicleCards[3]} />
                            <Link
                              href={
                                "https://omodaauto.com.pa/index_files/OMODA-C5-SpecificationGuidePA.pdf"
                              }
                              className="justify-center py-px mt-6 text-xs leading-3 text-center border-b-2 border-yellow-400 border-solid"
                            >
                              Descargar catálogo
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {carType === "particular" && (
                <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start text-sm leading-3 text-black max-md:mt-10">
                    <VehicleCard {...vehicleCards[4]} />
                    <Link
                      href={
                        "https://omodaauto.com.pa/index_files/OMODA-C5-SpecificationGuidePA.pdf"
                      }
                      className="justify-center py-px mt-6 text-xs text-center border-b-2 border-yellow-400 border-solid"
                    >
                      Descargar catálogo
                    </Link>
                    <VehicleCard {...vehicleCards[5]} />
                    <Link
                      href={
                        "https://omodaauto.com.pa/index_files/OMODA-C5-SpecificationGuidePA.pdf"
                      }
                      className="justify-center py-px mt-6 text-xs text-center border-b-2 border-yellow-400 border-solid"
                    >
                      Descargar catálogo
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
        {carType === "electric" && (
          // <div className="ml-8">
          <>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a7e1c0692cf82256b129dabdf2119a250b84e98fe3c2e110de0d1a84f7724d?apiKey=fb5c2b8017bc47e8a9bedce003f68527&"
              alt="KWID E-TECH"
              className=" ml-5 max-w-full aspect-[1.49] w-[300px] max-md:ml-2.5"
            />
            <div className="justify-center py-1.5 text-xs font-bold leading-3 text-white whitespace-nowrap bg-sky-600 rounded border border-white border-solid">
              Eléctrico
            </div>
            <h3 className="text-sm">Desde $350,000</h3>
            <Link
              href={
                "https://omodaauto.com.pa/index_files/OMODA-C5-SpecificationGuidePA.pdf"
              }
              className="justify-center py-px mt-5 text-xs leading-3 text-center text-black border-b-2 border-yellow-400 border-solid max-md:mt-10"
            >
              Descargar catálogo
            </Link>
          </>
          // </div>
        )}
      </main>
      <footer className="flex flex-col items-end px-5 pt-10 pb-16 mt-8 w-full bg-white max-md:max-w-full">
        {/* <div className="text-xs font-bold leading-3 text-black max-md:max-w-full">
          Síguenos en redes sociales
        </div> */}
        <div className="flex gap-4 justify-center items-start py-0.5 pr-20 mt-4 max-md:flex-wrap max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b1e6581ce1d5240a1ddf8b638c482fb3974a57b724c8143d0aae96a1d7824b1?apiKey=fb5c2b8017bc47e8a9bedce003f68527&"
            alt=""
            className="shrink-0 aspect-[1.75] blur-[7.5px] w-[30px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b1e6581ce1d5240a1ddf8b638c482fb3974a57b724c8143d0aae96a1d7824b1?apiKey=fb5c2b8017bc47e8a9bedce003f68527&"
            alt=""
            className="shrink-0 aspect-[1.75] blur-[7.5px] w-[30px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b1e6581ce1d5240a1ddf8b638c482fb3974a57b724c8143d0aae96a1d7824b1?apiKey=fb5c2b8017bc47e8a9bedce003f68527&"
            alt=""
            className="shrink-0 aspect-[1.75] blur-[7.5px] w-[30px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b1e6581ce1d5240a1ddf8b638c482fb3974a57b724c8143d0aae96a1d7824b1?apiKey=fb5c2b8017bc47e8a9bedce003f68527&"
            alt=""
            className="shrink-0 aspect-[1.75] blur-[7.5px] w-[30px]"
          />
        </div>
        <div className="flex gap-3 self-stretch pt-4 pb-4 mt-8 text-black border-t border-solid border-zinc-100 max-md:flex-wrap">
          <div className="flex flex-wrap flex-1 gap-4 text-xs leading-3">
            <div className="justify-center pt-px pb-0.5">
              Aviso de privacidad
            </div>
            <div className="max-md:max-w-full">Cookies</div>
          </div>
          <div className="my-auto text-xs font-bold leading-3 capitalize">
            © Omoda 2017 - 2024
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehicleCatalog;
