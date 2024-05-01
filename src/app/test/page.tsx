"use client";
import React, { use, useState } from "react";

function Test() {
  let [images, setImages] = useState<File[]>([]);
  return (
    <div>
      <form>
        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files || !e.target.files[0]) return;
            setImages([...images, e.target.files[0]]);
            console.log("Imagenes en el setImages: ", images);
          }}
        />
      </form>
    </div>
  );
}

export default Test;
