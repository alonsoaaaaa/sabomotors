import deleteDisplayCar from "@/libs/delete-displaycar";

export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    console.log("Data recibida en el BACK", data);
    await deleteDisplayCar(data.id);
    return Response.json({ message: "Car offer deleted" });
  } catch (error) {
    console.error("Failed to delete car: ", error);
    return Response.json({ message: `Car delete fail` });
  }
}
