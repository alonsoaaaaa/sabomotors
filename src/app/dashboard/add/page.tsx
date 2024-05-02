"use client";
import { set, useForm } from "react-hook-form"; //react hook form is used in client components to handle forms
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import createImageUrl from "@/libs/create-imageurl";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

function AddPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const router = useRouter();

  const [displayImages, setDisplayImages] = useState<File[]>([]);
  const [imagesNames, setImagesNames] = useState([] as any[]);
  const [imageURLS, setImageURLS] = useState([] as string[]);
  const [submittingImg, setSubmittingImg] = useState(false);
  const [imageError, setImageError] = useState(null as string | null);
  const insuranceRef = useRef(null);
  insuranceRef.current = watch("insurance");

  const handleImageSubmit = async (image: any) => {
    try {
      console.log("Imagen recibida en el handleImageSubmit: ", image);
      // let imageArray = [];
      let url = await createImageUrl(image);
      // imageArray.push(url);
      console.log("URLS XXX: ", imageURLS); //mockear diferentes urls: url1, url2, url3
      // setImageUrl(url);
      setImagesNames([...imagesNames, { name: image.name }]); //if its in this array, doesn't need to be uploaded again, so I will hide the upload button. This is for client side only
      setSubmittingImg(false);
      console.log("imagesNames: ", imagesNames);
      setImageURLS([...imageURLS, url]);
      setImageError(null);
    } catch (error) {
      setImageError("Error al subir la imagen");
    }
  };
  const onSubmit = async (data: any) => {
    try {
      if (imagesNames.length === 0) {
        setImageError("Necesitas subir al menos una imágen");
        return;
      }
      data.image = imageURLS; //Here we send them as an array of urls
      console.log("Datos mandados al BACK:", data);
      const res = await fetch(`${process.env.BASE_URL_DEV}/api/availablecars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }), //Stringify the data to send it to the backend
      });
      const { email, contact_number } = await res.json(); //This is the response from the backend
      reset();
      router.push(`add/success`);
    } catch (error) {
      console.error("Error al mandar los datos al BACK", error);

      router.push("add/error");
    }
  };
  return (
    <Card className="mx-auto max-w-sm">
      <Link href={"/dashboard"}>
        <ArrowLeftIcon size={40} color="blue" className="ml-1 mt-2" />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle className="text-xl">Añade un coche</CardTitle>
          <CardDescription>
            Rellena los campos para añadir un coche a la lista de coches en
            venta, hay algunos campos que son opcionales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Modelo</Label>
              <Input
                placeholder=""
                {...register("model", {
                  required: {
                    value: true,
                    message: "Coloque el modelo",
                  },
                  minLength: {
                    value: 3,
                    message: "El modelo debe tener al menos 3 caracteres",
                  },
                })}
              />
              {errors.model && (
                <span className="text-red-500">
                  {errors.model.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>Marca</Label>
              <Input
                placeholder=""
                {...register("make", {
                  required: {
                    value: true,
                    message: "Coloque la marca",
                  },
                  minLength: {
                    value: 3,
                    message: "La marca debe tener al menos 3 caracteres",
                  },
                })}
              />
              {errors.make && (
                <span className="text-red-500">
                  {errors.make.message as string}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label>Año</Label>
              <Input
                placeholder=""
                {...register("year", {
                  required: {
                    value: true,
                    message: "Coloque el año",
                  },
                  minLength: {
                    value: 4,
                    message: "Coloque un año válido",
                  },
                  min: {
                    value: 1980,
                    message: "El año no puede ser menor a 1980",
                  },
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "El año solo puede contener números",
                  },
                })}
              />
              {errors.year && (
                <span className="text-red-500">
                  {errors.year.message as string}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label>Tipo de factura</Label>
              <select
                {...register("FactureType", {
                  required: {
                    value: true,
                    message: "Coloque el tipo de factura",
                  },
                })}
                defaultValue={"original"}
              >
                <option value="original">Original</option>
                <option value="agencia">Agencia</option>
                <option value="empresa">Empresa</option>
              </select>
              {errors.FactureType && (
                <span className="text-red-500">
                  {errors.FactureType.message as string}
                </span>
              )}
            </div>

            {/* price */}
            <div className="grid gap-2">
              <Label>Precio</Label>
              <Input
                placeholder=""
                {...register("price", {
                  required: {
                    value: true,
                    message: "Coloque el precio",
                  },
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "El precio solo puede contener números",
                  },
                  min: {
                    value: 1,
                    message: "El precio no puede ser menor a 1",
                  },
                })}
              />
              {errors.price && (
                <span className="text-red-500">
                  {errors.price.message as string}
                </span>
              )}
            </div>

            {/* downpayment */}
            <div className="grid gap-2">
              <Label>Enganche</Label>
              <Input
                placeholder=""
                {...register("downpayment", {
                  required: {
                    value: true,
                    message: "Coloque el enganche",
                  },
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "El enganche solo puede contener números",
                  },
                  min: {
                    value: 1,
                    message: "El enganche no puede ser menor a 1",
                  },
                })}
              />
              {errors.downpayment && (
                <span className="text-red-500">
                  {errors.downpayment.message as string}
                </span>
              )}
            </div>
            {/* credit */}
            <div className="grid gap-2">
              <Label>Crédito</Label>
              <select
                {...register("credit", {
                  required: {
                    value: true,
                    message: "Coloque el tipo de crédito",
                  },
                })}
                defaultValue={"no"}
              >
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
              {errors.credit && (
                <span className="text-red-500">
                  {errors.credit.message as string}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="first-name">
                Fotos <span className="font-light">(al menos una)</span>
              </Label>
              <Input
                type="file"
                placeholder="Imágenes"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => {
                  if (!e.target.files || !e.target.files[0]) return;
                  setDisplayImages([...displayImages, e.target.files[0]]);
                }}
              />
              <ul className="flex flex-col">
                {displayImages.map((image) => {
                  console.log("Imagenes displayImages: ", displayImages);
                  console.log("Imagen en el displayImages.map: ", image);

                  return (
                    <div
                      key={image.name}
                      className="flex justify-between gap-1 items-center mb-1"
                    >
                      <div>
                        <li className="text-blue-600">{image.name}</li>
                      </div>
                      {imagesNames.find((img) => img.name === image.name) ? (
                        <p className="flex text-green-700 min-w-fit">
                          Imagen subida
                        </p>
                      ) : (
                        <div className="flex gap-1">
                          <Button
                            variant={"ghost"}
                            className="bg-green-400 hover:bg-green-500"
                            onClick={async () => {
                              debugger;
                              setSubmittingImg(true);
                              try {
                                await handleImageSubmit(image);
                              } catch (error) {
                                console.error(
                                  "Error al subir la imagen",
                                  error
                                );
                              }
                            }}
                            disabled={submittingImg}
                          >
                            Subir
                          </Button>
                          <Button
                            variant={"destructive"}
                            className="bg-red-400 hover:bg-red-500"
                            onClick={() => {
                              setDisplayImages(
                                displayImages.filter((img) => img !== image)
                              );
                            }}
                            disabled={submittingImg}
                          >
                            Eliminar
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </ul>
              {imageError ? (
                <div className="flex text-red-500">{imageError as string}</div>
              ) : null}
            </div>
            {/* other features */}
            <div className="grid gap-2">
              <Label>
                Características adicionales{" "}
                <span className="font-light">(opcional)</span>
              </Label>
              <Input
                placeholder="Descripción de las características adicionales"
                {...register("features")}
              />
            </div>

            <Button
              type="submit"
              className="w-full disabled:bg-gray-500"
              disabled={isSubmitting}
            >
              Enviar
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}

export default AddPage;
