import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Good() {
  return (
    <div className="flex flex-col items-center justify-center  gap-5 h-[50vh]">
      <h1 className="text-2xl font-extrabold text-green-500">
        {" "}
        El vehiculo ha sido añadido correctamente
      </h1>
      <Link href="/">
        <Button>Ver Catálogo</Button>
      </Link>
    </div>
  );
}

export default Good;
