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
        Por favor, intenta de nuevo más tarde o comunícate con nosotros al
        número de teléfono 55 1641 6497
      </p>
      <FrownIcon size={100} color="blue" />
      <Button>
        <Link href={"/"}>Regresar</Link>
      </Button>
    </div>
  );
}

export default AddError;
