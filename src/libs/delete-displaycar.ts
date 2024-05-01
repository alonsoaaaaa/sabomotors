import { PrismaClient, CarOffers } from "@prisma/client";

const db = new PrismaClient();
// delete car
async function deleteDisplayCar(id: number) {
  const car = await db.availableCars.delete({
    where: {
      id,
    },
  });
  console.log("Car has been deleted: ", car);
}

export default deleteDisplayCar;
