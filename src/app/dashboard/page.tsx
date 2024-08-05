"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
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
      <Link href="/dashboard/edit">
        <Button className="bg-green-500 hover:bg-green-400">
          Editar publicación de coche
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
      <Link href="/dashboard/analyze">
        <Button className="bg-blue-500 hover:bg-blue-400">
          Analizar Oferta
        </Button>
      </Link>
      <Link href="/dashboard/story">
        <Button className="bg-purple-500 hover:bg-purple-400">
          Añadir historia
        </Button>
      </Link>
      {/* logout */}
      <Button variant="destructive" onClick={() => signOut()}>
        Cerrar Sesión
      </Button>
    </div>
  );
}

export default Dashboard;
