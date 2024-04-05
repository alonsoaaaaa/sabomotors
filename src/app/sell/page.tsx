"use client";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchCars } from "@/utils";
import { popularMakes } from "@/utils/data";
import {
  Form,
  FormControl,
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
import CustomSelect from "@/components/select";

const formSchema = z.object({
  name: z.string(),
  year: z.string().max(4),
  make: z.enum(popularMakes as [string, ...string[]]),
  mileage: z.string().max(6),
  contactnum: z.string().max(10),
  email: z.string().email(),
});

function SoldingPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mileage: "",
      year: "",
    },
  });
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values }); //is it necessary to destructure values?
  };
  // let cars = await fetchCars();
  // console.log(cars);
  return (
    <div className="flex flex-col items-center pt-5">
      <h1 className="text-2xl font-bold text-yellow-500">
        Formulario de venta
      </h1>
      <div className="flex justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Nombre del vehículo</FormLabel>
                    <FormControl>
                      <Input placeholder="Hyundai Accent" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Año</FormLabel>
                    <FormControl>
                      <Input placeholder="2019" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="make"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Marca</FormLabel>
                    <CustomSelect onValueChange={field.onChange} />
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="mileage"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Kilometraje</FormLabel>
                    <FormControl>
                      <Input placeholder="10000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="contactnum"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Número de contacto</FormLabel>
                    <FormControl>
                      <Input placeholder="56 123 456 78" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <div className="flex gap-1">
              <Link href={"/"}>
                <Button variant="secondary">
                  <ArrowLeftIcon />
                </Button>
              </Link>
              <Button type="submit" className="w-full">
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
