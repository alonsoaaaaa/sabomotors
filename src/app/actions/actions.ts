"use server";
import prisma from "@/libs/db";
export async function FetchCarOffers() {
  const vehicles = await prisma.carOffers.findMany();
  return vehicles;
}

export async function FetchAvailableCars() {
  const vehicles = await prisma.availableCars.findMany();
  return vehicles;
}
