import { AvailableCars, PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function createDisplayCar(data: AvailableCars) {
  const {
    model,
    FactureType,
    image,
    credit,
    features,
    price,
    downpayment,
    make,
  } = data;
  const car = await db.availableCars.create({
    data: {
      model,
      FactureType,
      image,
      credit,
      features,
      price,
      downpayment,
      make,
    },
  });
  console.log("Car has been created: ", car);
}

export default createDisplayCar;
