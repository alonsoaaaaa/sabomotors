import { CarOffers, PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function createCar(data: CarOffers) {
  const {
    model,
    make,
    year,
    FactureType,
    image,
    contact_number,
    mileage,
    vin,
    platenum,
    insurance,
    email,
  } = data;
  const car = await db.carOffers.create({
    data: {
      model,
      make,
      year,
      mileage,
      FactureType,
      image,
      contact_number,
      vin,
      insurance,
      platenum,
      email,
    },
  });
  console.log("Car has been created: ", car);
}

export default createCar;
