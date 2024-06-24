"use client";
//TODO: Implementar el modo chat para mayor contexto y tiempo de cargas con spinner
import { Input } from "@/components/ui/input";
import { FormEvent, Fragment, useRef, useState } from "react";
import { createChatStream } from "@/app/actions/actions";
import { BrainIcon } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

function AnalyzeCar() {
  const [chatContext, setChatContext] = useState([" "] as string[]);
  const currCtx = useRef("Mensajes anteriores: ");
  const [userMessage, setUserMessage] = useState("");
  const [submittingAns, setSubmittingAns] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let inp: any = document.getElementById("textinp");
    inp!.value = "";
    currCtx.current = `${chatContext} "Usuario: ${userMessage} `;
    setChatContext([...chatContext, "Usuario: " + userMessage]);
    setSubmittingAns(true);
    let messageStream = await createChatStream(userMessage, currCtx.current);
    setSubmittingAns(false);
    setChatContext((prevState) => {
      return [...prevState, "Inteligencia Artificial: " + messageStream];
    });
    console.log(chatContext);
  };
  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col flex-wrap justify-center items-center max-w-[1100px] content-center "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div id="chatContext" className="fñex flex-col pb-4">
          <div className="flex flex-col justify-center items-center text-center content-center">
            <h1 className="flex text-xl font-semibold pt-4 text-pretty w-[800px]">
              Pregúntale a nuestra IA el precio promedio de un auto
              especificando el modelo, el año y si es usado y deja que te
              conteste con datos actualizados basados en la Guía Autométrica de
              este mes{" "}
            </h1>
            <BrainIcon fill="pink" width={50} height={50} />
          </div>
          <div className="flex flex-col items-start">
            {chatContext.map((message) => {
              return <p key={message}>{message}</p>;
            })}
          </div>
          {submittingAns && (
            <div className="flex flex-col justify-center items-center">
              <h1 className="self-center">Pensando respuesta...</h1>
              <Spinner />
            </div>
          )}
        </div>
        <div className="flex-col items-center justify-center ">
          <Input
            type="text"
            className="w-[50vw]"
            id="textinp"
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Ejemplo: ¿Precio promedio de venta de un Acura MDX 2019?"
            // placeholder="Chevrolet Camaro 2023"
          />
          <Input
            className="bg-blue-400 hover:bg-blue-300 w-fit"
            placeholder="Enviar"
            type="submit"
            value={"Enviar"}
          />
        </div>
      </form>
    </div>
  );
}

export default AnalyzeCar;
