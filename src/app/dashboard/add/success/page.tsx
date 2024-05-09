import { Button } from "@/components/ui/button";
import { CheckCheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function AddSucess() {
  return (
    <div className="flex flex-col justify-center items-center content-center gap-3 pt-5 px-[10%]">
      <h1 className="text-green-500 text-4xl text-center">
        El carro ha sido registrado correctamente
      </h1>
      <p className="text-2xl text-center">
        Regresa al catálogo de autos para ver los nuevos autos que se han
        registrado.
      </p>
      <CheckCheckIcon size={100} color="green" />
      <Button className="bg-green-500 hover:bg-green-600">
        <Link href={"/dashboard/add"}>Añadir otro coche</Link>
      </Button>
      <Button className="bg-blue-500 hover:bg-blue-400">
        <Link href={"/dashboard"}>Dashboard</Link>
      </Button>
      <Button>
        <Link href={"/"}>Ver Catálogo</Link>
      </Button>
    </div>
  );
}

export default AddSucess;
