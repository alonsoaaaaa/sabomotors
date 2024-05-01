"use server";
import { PrismaClient } from "@prisma/client";
export async function FetchCarOffers() {
  const prisma = new PrismaClient();
  const vehicles = await prisma.carOffers.findMany();
  return vehicles;
}

export async function FetchAvailableCars() {
  const prisma = new PrismaClient();
  const vehicles = await prisma.availableCars.findMany();
  return vehicles;
}
