//NOTA: We reach this route after the user has uploaded the images to digital ocean spaces and we have the urls of the images in state
import createDisplayCar from "@/libs/create-displaycar";
import { AvailableCars } from "@prisma/client";
export async function POST(req: Request) {
  try {
    const data: AvailableCars = await req.json();
    console.log("Data recibida en el BACK", data);

    console.log("Image URLS:", data.image);
    await createDisplayCar(data);
    return Response.json({
      message: `Car created successfully`,
    });
  } catch (error) {
    console.error("Failed to create car: ", error);
    return Response.json({ message: `IMAGE DATA fail` });
  }
}
