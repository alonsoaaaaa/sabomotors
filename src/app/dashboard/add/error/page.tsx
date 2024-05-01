import { Button } from "@/components/ui/button";
import { FrownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function AddError() {
  return (
    <div className="flex flex-col justify-center items-center content-center gap-3 pt-5 px-[10%]">
      <h1 className="text-red-500 text-4xl text-center">
        Hubo un error al registrar el carro
      </h1>
      <p className="text-2xl text-center">
        Ha ocurrido un error al registrar el carro, por favor inténtalo de nuevo
      </p>
      <FrownIcon size={100} color="blue" />
      <Button>
        <Link href={"/dashboard/add"}>Registrar carro</Link>
      </Button>
      <Button>
        <Link href={"/"}>Regresar</Link>
      </Button>
    </div>
  );
}

export default AddError;
