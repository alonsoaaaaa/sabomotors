"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

function Dashboard() {
  const router = useRouter();
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
        <Button
          variant="destructive"
          className="bg-orange-500 hover:bg-orange-400"
        >
          Quitar coche
        </Button>
      </Link>
      <Link href="/dashboard/offers">
        <Button className="bg-yellow-500 hover:bg-yellow-400">
          Ver Ofertas de coches
        </Button>
      </Link>
      <Link href="/">
        <Button variant="ghost">Ver Catálogo Existente</Button>
      </Link>
      {/* logout */}
      <Button variant="destructive" onClick={() => signOut()}>
        Cerrar Sesión
      </Button>
    </div>
  );
}

export default Dashboard;
