//NOTA: Here is where we map the images to the urls of the images in digital ocean spaces
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import s3Client from "../../../libs/s3Client";
import { ObjectCannedACL, PutObjectCommand } from "@aws-sdk/client-s3";
export async function POST(req: Request) {
  try {
    //NOTA: Por alguna razón el getAll no funciona, solo devuelve la ultima imagen agregada con append()
    const data = await req.formData();
    const image: File = data.get("image") as File;
    let fileExtension = image.name.split(".").pop();
    let bytes = await image.arrayBuffer();
    let buffer = Buffer.from(bytes);
    if (!image) {
      return NextResponse.json({ message: "There is no image" });
    }
    if (image.size > 10000000) {
      return NextResponse.json({ message: "The image is too large" });
    }
    const bucketParams = {
      Bucket: "sabomotorsmedia",
      Key: `${image.name}-${uuid()}.${fileExtension}`,
      Body: buffer,
      ACL: ObjectCannedACL.public_read,
    };
    const result = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log(result);
    //TODO: After uploading the image to the database, we can fetch it and put the url in an image tag in the frontend
    return NextResponse.json({
      imageUrl: `https://sabomotorsmedia.nyc3.digitaloceanspaces.com/${bucketParams.Key}`,
    });
  } catch (error) {
    console.error("Failed to upload image: ", error);
    return NextResponse.json({ message: "Failed to upload image" });
  }
}
