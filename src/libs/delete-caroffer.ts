import prisma from "@/libs/db";
const db = prisma;
// delete car
async function deleteCarOffer(id: number) {
  const car = await db.carOffers.delete({
    where: {
      id,
    },
  });
  console.log("Car has been deleted: ", car);
}

export default deleteCarOffer;
