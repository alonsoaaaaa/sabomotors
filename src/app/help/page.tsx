"use client";
import { BrainIcon, CarIcon, Drumstick, PointerIcon } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { createChatStream } from "@/app/actions/actions";
import { createEncodedImg } from "@/libs/utils";
import { Input } from "@/components/ui/input";
// import FileInput from "@/components/ui/file-input";
import { Button } from "@/components/ui/button";
import { debug } from "console";

export default function Home() {
  const [chatContext, setChatContext] = useState([" "] as string[]);
  const currCtx = useRef("Mensajes anteriores: ");
  const [userMessage, setUserMessage] = useState("");
  const [submittingAns, setSubmittingAns] = useState(false);
  const [image, setImage] = useState<File>();
  function parseText(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g); // Split text by bold markers
    // const parts = text.split(/(\*\*[^*]+\*\*\.?\s*)/g);
    return parts.map((part, index) => {
      part.replaceAll(",", "").replaceAll("\n", "");
      if (
        (part.startsWith("**") && part.endsWith("**")) ||
        (part.startsWith("***") && part.endsWith("***"))
      ) {
        let rawPart = part.slice(2, -2);
        console.log("RAWPART: ", rawPart);
        return (
          <span className="font-extrabold" key={index}>
            {rawPart}
          </span>
        ); // Remove the asterisks and wrap with <strong>
      }
      return part; // Return the text as is if it's not between asterisks
    });
  }
  const handleImgSubmit = async (e: any) => {
    e.preventDefault();
    let parsedImg = await createEncodedImg(image!);
    setSubmittingAns(true);
    let answer = await createChatStream(parsedImg as string, currCtx.current);
    setSubmittingAns(false);
    setChatContext((prevState) => {
      return [...prevState, "**Agente Grupo Kasa ** " + answer];
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    debugger;
    e.preventDefault();
    let inp: any = document.getElementById("textinp");
    inp!.value = "";
    currCtx.current = `${chatContext} "Usuario: ${userMessage} `;
    setChatContext([...chatContext, "**Usuario:** " + userMessage]);
    setSubmittingAns(true);
    let messageStream = await createChatStream(userMessage, currCtx.current);
    setSubmittingAns(false);
    setChatContext((prevState) => {
      return [...prevState, "**Agente Grupo Kasa:** " + messageStream];
    });
    console.log("CHAT CONTEXT ", chatContext);
  };
  return (
    <div className="flex flex-wrap justify-center items-center max-w-[100vw] min-h-[100vh] content-center duration-500 ease-in-out transform bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="flex-col bg-emerald-400">
        <h1 className="font-bold text-white">Grupo Kasa</h1>
        <Image
          src={"/kasa-logo.svg"}
          alt=""
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="flex">[Imagenes]</div>
        {/* TODO: hacer un formulario que se quede en el centro de la pantalla tal y como lo hice al momento de querer vender tu carro */}
      </div>
      <div className="flex flex-col gap-4 pt-10 justify-center items-center text-center content-center">
        <div className="flex flex-col gap-4">
          <Image
            src={"/assistant2.png"}
            alt=""
            width={50}
            height={50}
            className="rounded-lg w-auto"
          />
        </div>
        <h1 className="flex text-xl flex-wrap font-semibold pt-4 text-pretty">
          Pregunta a nuestro asistente de Grupo Kasa y él te atenderá con
          gusto...
          <CarIcon fill="blue" width={50} height={50} />
        </h1>

        <div className="flex flex-col items-start">
          {chatContext.map((message) => {
            let isUser = message.includes("**Usuario:**");
            message = parseText(message) as any;
            return (
              <div key={message} className={isUser ? "font-semibold" : ""}>
                {message}
              </div>
            );
          })}
        </div>
        {submittingAns && (
          <div className="flex flex-col justify-center items-center">
            <h1 className="self-center">Pensando respuesta...</h1>
            <Spinner />
          </div>
        )}
      </div>

      <form
        className="flex-col items-center justify-center "
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          type="text"
          className="w-[50vw]"
          id="textinp"
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="ej: Qué autos tiene disponibles?"
          // placeholder="Chevrolet Camaro 2023"
        />
        <Input
          className="bg-blue-500 hover:bg-blue-400 w-fit"
          type="submit"
          value={"Hacer pregunta"}
          disabled={submittingAns}
        />
      </form>
    </div>
  );
  {
    /* <form
        onSubmit={async (e) => handleImgSubmit(e)}
        className="flex flex-col max-md:justify-start content-center items-center mt-5 gap-3"
        >
        <div className="flex-col gap-3 items-center ">
        <div className="flex gap-3"> */
  }
  {
    /* <FileInput
                  accept=".png,.jpg,.jpeg"
                  onChange={(e: any) => setImage(e.target.files?.[0])}
                  /> */
  }
  {
    /* </div>
        </div> */
  }
  {
    /* {image && ( */
  }
  {
    /* <Input
              type="submit"
              value={"Subir imágen"}
              disabled={submittingAns}
              className="w-fit bg-green-600 hover:bg-green-500"
              /> */
  }
  {
    /* )} */
  }

  {
    /* <Input
                type="file"
                accept="image/jpg, image/jpeg"
                name="file"
                onChange={(e) => {
                  setImage(e.target.files?.[0]); //NOTA: esto es lo mismo que FormData.get("image")? o eso es con react hook form?
                  }}
                  required
                  className="w-fit"
                  /> */
  }
  {
    /* <Input
              className="bg-blue-300 w-fit"
              type="submit"
              value="Subir imágen"
              /> */
  }
  {
    /* </form> */
  }
}
