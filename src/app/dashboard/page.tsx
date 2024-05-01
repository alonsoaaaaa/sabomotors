import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col items-center gap-4 min-h-[90vh] justify-center text-center">
      <h1 className="font-extrabold text-xl">Dashboard</h1>
      {/* <div className="flex flex-col gap-3 items-center"> */}
      <Link href="/dashboard/add">
        <Button className="bg-green-500 hover:bg-green-400">
          Añadir nuevo coche
        </Button>
      </Link>
      <Link href="/dashboard/delete">
        <Button variant="destructive">Quitar coche</Button>
      </Link>
      <Link href="/dashboard/offers">
        <Button className="bg-yellow-500 hover:bg-yellow-400">
          Ver Ofertas de coches
        </Button>
      </Link>
      <Link href="/">
        <Button variant="ghost">Ver Catálogo Existente</Button>
      </Link>
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
