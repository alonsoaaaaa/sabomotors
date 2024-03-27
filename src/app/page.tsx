"use client";
import Header from "@/components/header";
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
  const vehicleCards: VehicleCardProps[] = [
    {
      imageSrc: "./car1.png",
      price: "Enganche desde $4000",
      type: "particular",
    },
    {
      imageSrc: "./car2.png",
      price: "Enganche desde $7500",
      type: "particular",
    },
    {
      imageSrc: "./car3.png",
      price: "Enganche desde $6800",
      type: "particular",
    },
    {
      imageSrc: "./car4.png",
      price: "Enganche desde $3900",
      type: "utilitary",
    },
    {
      imageSrc: "./car5.png",
      price: "Enganche desde $9000",
      type: "utilitary",
    },
    {
      imageSrc: "./car6.png",
      price: "Enganche desde $6000",
      type: "utilitary",
    },
  ];

  let [carType, setCarType] = React.useState("particular");
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      <section className="flex flex-col justify-center w-full text-center text-white bg-black max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-9 w-full min-h-[280px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="./bannersabomotors2.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-center"
          />
          <div className="flex relative flex-col px-8 pt-8 pb-8 max-md:px-5 max-md:max-w-full">
            <h1 className="self-center text-6xl font-bold uppercase leading-[54.45px] max-md:max-w-full max-md:text-4xl">
              Catálogo Sabo Motors
            </h1>
            <p className="mt-6 text-base leading-6 max-md:max-w-full">
              Descarga un catálogo y descubre todos los detalles de nuestra gama
              de vehículos Sabo Motors.
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
              Vehículos híbridos
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
                      "https://www.facebook.com/seminuevossabomotors/photos?locale=es_LA"
                    }
                    className="self-center py-px mt-6 ml-36 text-xs leading-3 text-center text-black border-b-2 border-yellow-400 border-solid"
                  >
                    Ver catálogo
                  </Link>
                  {carType === "particular" && (
                    <div className="mt-6 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow items-start text-black max-md:mt-10">
                            <VehicleCard {...vehicleCards[2]} />
                            <Link
                              href={
                                "https://www.facebook.com/seminuevossabomotors/photos?locale=es_LA"
                              }
                              className="justify-center py-px mt-6 text-xs leading-3 text-center border-b-2 border-yellow-400 border-solid"
                            >
                              Ver catálogo
                            </Link>
                          </div>
                        </div>

                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow items-start text-black max-md:mt-10">
                            <VehicleCard {...vehicleCards[3]} />
                            <Link
                              href={
                                "https://www.facebook.com/seminuevossabomotors/photos?locale=es_LA"
                              }
                              className="justify-center py-px mt-6 text-xs leading-3 text-center border-b-2 border-yellow-400 border-solid"
                            >
                              Ver catálogo
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
                        "https://www.facebook.com/seminuevossabomotors/photos?locale=es_LA"
                      }
                      className="justify-center py-px mt-6 text-xs text-center border-b-2 border-yellow-400 border-solid"
                    >
                      Ver catálogo
                    </Link>
                    <VehicleCard {...vehicleCards[5]} />
                    <Link
                      href={
                        "https://www.facebook.com/seminuevossabomotors/photos?locale=es_LA"
                      }
                      className="justify-center py-px mt-6 text-xs text-center border-b-2 border-yellow-400 border-solid"
                    >
                      Ver catálogo
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
              src="./car7.png"
              alt="KWID E-TECH"
              className=" ml-5 max-w-full aspect-[1.49] w-[300px] max-md:ml-2.5"
            />
            <div className="justify-center py-1.5 text-xs font-bold leading-3 text-white whitespace-nowrap bg-sky-600 rounded border border-white border-solid">
              Últimas novedades
            </div>
            <h3 className="text-sm">Enganche desde $6000</h3>
            <Link
              href={
                "https://www.facebook.com/seminuevossabomotors/photos?locale=es_LA"
              }
              className="justify-center py-px mt-5 text-xs leading-3 text-center text-black border-b-2 border-yellow-400 border-solid max-md:mt-10"
            >
              Ver catálogo
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
            src="./footerimage1.png"
            alt=""
            className="shrink-0 aspect-[1.75] blur-[7.5px] w-[30px]"
          />
          <img
            loading="lazy"
            src="./footerimage1.png"
            alt=""
            className="shrink-0 aspect-[1.75] blur-[7.5px] w-[30px]"
          />
          <img
            loading="lazy"
            src="./footerimage1.png"
            alt=""
            className="shrink-0 aspect-[1.75] blur-[7.5px] w-[30px]"
          />
          <img
            loading="lazy"
            src="./footerimage1.png"
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
            © Sabo Motors 2024
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehicleCatalog;
