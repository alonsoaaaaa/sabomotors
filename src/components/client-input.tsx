"use client";
import React from "react";
import { Button } from "./ui/button";

function ClientSubmit() {
  return (
    <Button
      type="submit"
      className="w-fit"
      value={"Subir"}
      onClick={(e) => {
        // e.preventDefault();
        console.log("hola");
        const element = document.getElementById("facebook-url");
        if (element instanceof HTMLInputElement) {
          // Type assertion
          console.log("hola 2");
          let inpValue = element.value;
          inpValue = "";
          // Now you can use inpValue as needed
        }
      }}
    >
      {" "}
      Subir
    </Button>
  );
}

export default ClientSubmit;
