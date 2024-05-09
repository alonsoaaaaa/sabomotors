import { Button } from "@/components/ui/button";
import { CheckCheckIcon } from "lucide-react";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";

import React from "react";

function AddSucess({ searchParams }: { searchParams: any }) {
  const email = searchParams?.["email"];
  const contact_number = searchParams?.["contact_number"];
  return (
    <div className="flex flex-col justify-center items-center content-center gap-3 pt-5 px-[10%]">
      <h1 className="text-green-500 text-4xl text-center">
        El carro ha sido registrado correctamente
      </h1>
      <p className="text-2xl text-center">
        En seguida enviaremos un correo a{" "}
        <span className="font-bold">{email}</span> con el número de uno de
        nuestros agentes para que puedas contactarlo, o nos comunicaremos al
        número telefónico {<span className="font-bold">{contact_number}</span>}{" "}
        que nos proporcionaste.
      </p>
      <CheckCheckIcon size={100} color="green" />
      <Button>
        <Link href={"/"}>Regresar</Link>
      </Button>
    </div>
  );
}

export default AddSucess;
