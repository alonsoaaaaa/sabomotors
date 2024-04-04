"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function SoldingPage() {
  const form = useForm();
  return (
    <div className="flex flex-col items-center pt-5">
      <h1 className="text-2xl font-bold text-yellow-500">
        Formulario de venta
      </h1>
      <div className="flex justify-center">
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="carname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800">
                    Información del vehículo
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre" {...field} />
                  </FormControl>
                  <FormControl>
                    <Input placeholder="Marca" {...field} />
                  </FormControl>
                  <FormControl>
                    <Input placeholder="Año" {...field} />
                  </FormControl>
                  <FormControl>
                    <Input placeholder="Kilometraje" {...field} />
                  </FormControl>
                  <FormDescription>
                    <Input placeholder="Descripcion del vehículo"></Input>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center text-center justify-evenly">
              <Link href="/">
                <ArrowLeftIcon />
              </Link>
              <Button type="submit" className="self-center">
                Enviar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default SoldingPage;
