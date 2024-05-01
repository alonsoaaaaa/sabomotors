//NOTA: We reach this route after the user has uploaded the images to digital ocean spaces and we have the urls of the images in state
import createCar from "@/libs/create-caroffer";
import { CarOffers } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Data recibida en el BACK", data);
    data.year = parseInt(data.year);
    data.mileage = parseFloat(data.mileage);
    console.log("Image URLS:", data.image);
    await createCar(data);
    return Response.json({
      email: data.email,
      contact_number: data.contact_number,
    });
  } catch (error) {
    console.error("Failed to create car: ", error);
    return Response.json({ message: `IMAGE DATA fail` });
  }
}
