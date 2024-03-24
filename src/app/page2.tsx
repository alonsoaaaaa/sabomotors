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
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dccf888292290689931831e1037aa572b1e3fea4424b91c756a2fbd6b98dbe78?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $319,000",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dff7fcd7d097b3cf1dcc3090a11a48d1a551a00eba1c0f52989c1005ff6020c0?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $379,300",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/63693c57996e9fb363df13671f2046e2b89e1259091838d19857e6565cfdb000?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $399,300",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b6aa817975bb44b32f4f8f1f43ad27f8e63fba0d27f3dde624c5a7014e2795d?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $354,300",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f6d70be9b0bf881857c8e82283b5eea6e6ef1baac49ef666f2e7609cfd6d2fc1?apiKey=fb5c2b8017bc47e8a9bedce003f68527&",
      price: "Desde $573,200",
    },
  ];

  return (
    <div className="flex flex-col self-stretch bg-white">
      <header className="flex flex-col px-5 pt-2 pb-8 w-full text-white bg-gray-900 shadow-sm max-md:max-w-full">
        <div className="self-end text-xs leading-3">preguntas frecuentes</div>
        <nav className="flex gap-5 justify-between mt-2.5 w-full text-center max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 text-sm font-bold leading-4 uppercase max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67a1e846b1ece6ad3b3d185b4144a7d11b90e5346619001b41bc178f41576a06?apiKey=fb5c2b8017bc47e8a9bedce003f68527&"
              alt="Logo"
              className="flex-1 shrink-0 w-full aspect-[0.6]"
            />
            <div className="flex gap-4 px-2 py-px my-auto">
              <div className="leading-[134%]">Vehículos</div>
              <div>Care Services</div>
              <div>Descubre Renault</div>
            </div>
          </div>
          <div className="flex gap-0 self-start mt-4 text-xs leading-4 whitespace-nowrap">
            {/* {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))} */}
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
            <div className="flex flex-col px-2 py-4">
              <button type="button">
                <img
                  loading="lazy"
                  src={navItems[1]}
                  alt=""
                  className="self-center aspect-square w-[30px]"
                />
              </button>
              <div className="mt-1.5">Localizar</div>
            </div>
            <div className="flex flex-col px-2 py-4">
              <button type="button">
                <img
                  loading="lazy"
                  src={navItems[2]}
                  alt=""
                  className="self-center aspect-square w-[30px]"
                />
              </button>
              <div className="mt-1.5">Comentar</div>
            </div>
          </div>
        </nav>
      </header>
      <section className="flex flex-col justify-center w-full text-center text-white bg-black max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-9 w-full min-h-[240px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/738de9e3601a828c9c50b16125861ebc5c86086294fe233441f2a67d92426582?apiKey=fb5c2b8017bc47e8a9bedce003f68527&"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col px-8 pt-8 pb-8 max-md:px-5 max-md:max-w-full">
            <h1 className="self-center text-6xl font-bold uppercase leading-[54.45px] max-md:max-w-full max-md:text-4xl">
              Catálogos Renault
            </h1>
            <p className="mt-6 text-base leading-6 max-md:max-w-full">
              Descarga un catálogo y descubre todos los detalles de nuestra gama
              de vehículos Renault.
            </p>
          </div>
        </div>
      </section>
      <nav className="flex flex-wrap justify-center items-center px-16 mt-8 w-full text-xl font-bold leading-5 text-center text-black text-opacity-40 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center max-md:flex-wrap">
          <div className="flex flex-col justify-center self-stretch pt-2 pb-4 text-black">
            <div className="pt-2 pb-4 border-black border-solid border-b-[3px]">
              Vehículos particulares
            </div>
          </div>
          <div className="self-stretch my-auto leading-[99%]">
            Vehículos eléctricos
          </div>
          <div className="self-stretch my-auto">Vehículos utilitarios</div>
        </div>
      </nav>
      <main className="flex flex-col items-start self-center px-14 pb-6 mt-10 w-full max-w-[1216px] max-md:px-5 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full">
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
                <button className="justify-center self-center py-px mt-6 ml-24 text-xs leading-3 text-center text-black border-b-2 border-yellow-400 border-solid">
                  Descargar catálogo
                </button>
                <div className="mt-6 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start text-black max-md:mt-10">
                        <VehicleCard {...vehicleCards[2]} />
                        <div className="justify-center py-px mt-6 text-xs leading-3 text-center border-b-2 border-yellow-400 border-solid">
                          Descargar catálogo
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start text-black max-md:mt-10">
                        <VehicleCard {...vehicleCards[3]} />
                        <div className="justify-center py-px mt-6 text-xs leading-3 text-center border-b-2 border-yellow-400 border-solid">
                          Descargar catálogo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-sm leading-3 text-black max-md:mt-10">
                <VehicleCard {...vehicleCards[4]} />
                <div className="justify-center py-px mt-6 text-xs text-center border-b-2 border-yellow-400 border-solid">
                  Descargar catálogo
                </div>
                <VehicleCard {...vehicleCards[5]} />
                <div className="justify-center py-px mt-6 text-xs text-center border-b-2 border-yellow-400 border-solid">
                  Descargar catálogo
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a7e1c0692cf82256b129dabdf2119a250b84e98fe3c2e110de0d1a84f7724d?apiKey=fb5c2b8017bc47e8a9bedce003f68527&"
          alt="KWID E-TECH"
          className="mt-6 ml-5 max-w-full aspect-[1.49] w-[300px] max-md:ml-2.5"
        />
        <div className="justify-center py-1.5 text-xs font-bold leading-3 text-white whitespace-nowrap bg-sky-600 rounded border border-white border-solid">
          Eléctrico
        </div>
        <h2 className="self-stretch mt-1 text-base font-bold leading-6 text-black max-md:max-w-full">
          KWID E-TECH
        </h2>
        <div className="justify-center py-px mt-11 text-xs leading-3 text-center text-black border-b-2 border-yellow-400 border-solid max-md:mt-10">
          Descargar catálogo
        </div>
      </main>
      <footer className="flex flex-col items-end px-5 pt-10 pb-16 mt-8 w-full bg-white max-md:max-w-full">
        <div className="text-xs font-bold leading-3 text-black max-md:max-w-full">
          síguenos en redes sociales
        </div>
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
              aviso de privacidad
            </div>
            <div className="max-md:max-w-full">cookies</div>
          </div>
          <div className="my-auto text-xs font-bold leading-3 capitalize">
            © renault 2017 - 2024
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehicleCatalog;
