import prisma from "@/libs/db";
const db = prisma;
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
