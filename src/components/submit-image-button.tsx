"use client";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
function SubmitImageButton({ setSelectedImages, selectedImages, index }: any) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    debugger;
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  //NOTA: The selected images is controlledby this
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("indexflag: ", index);
    if (!e.target.files || !e.target.files[0]) return;
    console.log("2nd flag");
    //NOTA: 2 saved in the particular index provided by the button that was clicked
    // setSelectedImages([
    //   ...selectedImages.slice(0, index),
    //   e.target.files[0],
    //   ...selectedImages.slice(index),
    // ]);
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = e.target.files[0];
    console.log("newSelectedImages", newSelectedImages);
    setSelectedImages([...newSelectedImages]);
    setSelectedImages((prev: any) => {
      console.log("prevSelectedImages", prev);
      return prev;
    });
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/png, image/jpeg, image/jpg"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        onClick={handleButtonClick}
        className="h-[2rem] bg-blue-950 hover:bg-blue-900"
        type="button"
      >
        seleccionar imágen
      </Button>
    </div>
    // ...
  );
}

export default SubmitImageButton;
