"use client";
import { Button } from "./ui/button";
import SubmitImageButton from "./submit-image-button";
import { useState } from "react";
function SubmitImageSection({
  selectedImages,
  setSelectedImages,
  savedImages,
  setSavedImages,
  handleImageSubmit,
  position,
  index,
}: any) {
  const [submitStatus, setSubmitStatus] = useState("idle");
  // console.log("selectedImages[index]", selectedImages);
  // console.log(`savedImages[${index}]`, savedImages[index]);
  // console.log("submitStatus", submitStatus);
  debugger;
  // const savedImageinIndex = savedImages[index];
  return (
    <>
      <p className="font-bold text-sm">Foto de {position}: </p>
      <div className="flex gap-1">
        {selectedImages && !selectedImages[index] ? (
          // !savedImageinIndex && ( //this is being accesed to render some JSX, so when its an index that has not been selected it will throw an
          <SubmitImageButton
            setSelectedImages={setSelectedImages}
            selectedImages={selectedImages}
            index={index}
          />
        ) : (
          // )
          // selectedImages[index] !== savedImages[index] ? ( //if the image is selected but has npt been pushed in savedImages array, then it means it has not been uploaded, if it has been pushed the text will change to "Foto subida", even if it has not been uploaded
          <>
            <span className="text-blue-500">
              {/* {savedImages[savedImages.length - 1]?.name}{" "}
               */}
              {selectedImages[index]?.name || ""}
              {/* // || savedImages[index]?.name */}
            </span>

            <Button
              variant={"ghost"}
              className="bg-green-400 hover:bg-green-500"
              style={{
                display:
                  submitStatus === "success" || submitStatus === "error"
                    ? "none"
                    : "",
              }}
              //NOTA: 3 This only happens after the image has been selected, when it is submitted and saved in the savedImages array
              onClick={async () => {
                console.log("indexSubmBut", index);
                console.log("selectedImagesSubmButt", selectedImages);
                if (!selectedImages[index]) return;
                setSubmitStatus("submitting");
                // if (savedImages.length === 0) {
                //   // setSavedImages([selectedImages[index]]);
                //   setSubmitStatus("success");
                //   return;
                // }
                // const newSavedImages = [...savedImages];
                // newSavedImages[index] = selectedImages[index];
                // setSavedImages([...newSavedImages]);
                // setSavedImages((prevSasetSavedImages: any) => {
                //   const newSasetSavedImages = [...prevSasetSavedImages];
                //   newSasetSavedImages[index] = selectedImages[index];
                //   return newSasetSavedImages;
                // });

                //NOTA: 1 That selected image is going to be saved in a particular index position in the selectedImages array

                // setSavedImages((prev: any) => {
                //   console.log("arrglo Imagenes display", prev);
                //   // return prev;
                // });
                try {
                  await handleImageSubmit(selectedImages[index]);
                  setSubmitStatus("success");
                } catch (error) {
                  console.error("Error al subir la imagen", error);
                  setSubmitStatus("error");
                }
              }}
              disabled={submitStatus === "submitting"}
              type="button"
            >
              Subir
            </Button>
            <Button
              variant={"destructive"}
              className="bg-red-400 hover:bg-red-500"
              onClick={() => {
                const newSelectedImages = [...selectedImages];
                newSelectedImages[index] = null;
                setSelectedImages([...newSelectedImages]);
              }}
              style={{
                display:
                  submitStatus === "success" || submitStatus === "error"
                    ? "none"
                    : "",
              }}
              type="button"
              disabled={submitStatus === "submitting"}
            >
              Quitar
            </Button>
            <span
              className="text-green-500 ml-2"
              hidden={submitStatus === "idle" || submitStatus === "submitting"}
            >
              Foto subida
            </span>
          </>
        )}
      </div>
    </>
  );
}

export default SubmitImageSection;
