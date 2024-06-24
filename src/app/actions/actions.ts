"use server";
import prisma from "@/libs/db";
import fs from "fs";
import path from "path";
const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
const tempFilePath = path.join(__dirname, "google-credentials.json"); //esto se hace para que railway pueda leer la variable
fs.writeFileSync(tempFilePath, credentialsJson!); //NOTA: En local podemos leerlo desde el archivo, en produccion tenemos que hacer esto
import { VertexAI, Part } from "@google-cloud/vertexai";

export async function createChatStream(
  question: string,
  context: string,
  projectId = "ornate-ray-424712-r8",
  location = "us-central1",
  model = "gemini-1.5-flash-001"
  // model = "gemini-1.5-pro-001"
) {
  // Initialize Vertex with your Cloud project and location
  const vertexAI = new VertexAI({
    project: projectId,
    location: location,
    googleAuthOptions: {
      keyFilename:
        "C:\\Users\\52551\\Desktop\\proyectos\\omodacars\\src\\ornate-ray-424712-r8-14ad3c627e2a.json", //NOTA: cambiar esto por tempFilePath en produccion
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    },
  });

  // Instantiate the model
  //Chevrolet Camaro 2023
  const generativeVisionModel = vertexAI.getGenerativeModel({
    model: model,
    generationConfig: {
      temperature: 0,
      maxOutputTokens: 200,
    },
    systemInstruction:
      "Eres un experto analista automotriz con amplio conocimiento en valoración de vehículos. Tu tarea es examinar minuciosamente el documento PDF proporcionado, que contiene información detallada sobre el valor de mercado de diversos automóviles. Este documento incluye datos como: Año del modelo junto a su nombre, Precio promedio de venta (V) en pesos, Precio promedio de compra (C) en pesos y nombre de la marca en el lado izquierdo. Tambien contiene Precio de contado que es el precio en las agencias y Precio Lista que es el precio sugerido de venta al público. Basándote en esta información, deberás: Analizar las tendencias de precios en relación con el año y modelo . Identificar patrones en la diferencia entre los precios de compra y venta. Ofrecer insights sobre qué modelos o años podrían representar las mejores oportunidades de compra o venta. Proporcionar contexto sobre cómo factores externos (como la economía o las tendencias del mercado) podrían influir en estos valores. Responde a las preguntas del usuario de manera clara y concisa utilizando datos del documento cuando sea relevante. Si te pide información que no está en el documento ofrece una estimacion basada en tu conocimiento general del mercado automotriz, no recomiendes sitios.",
  });
  // For images, the SDK supports both Google Cloud Storage URI and base64 strings
  const pdfPart1 = {
    fileData: {
      fileUri:
        "gs://cloudsurf/pdfs/pdfs_AUTOMETRICA MAYO 2024-OMAR BELLO_parte1.pdf",
      // "gs://cloudsurf/pdfs/pdf-autometrica-febrero.pdf",
      mimeType: "application/pdf",
    },
  };
  const pdfPart2 = {
    fileData: {
      fileUri:
        "gs://cloudsurf/pdfs/AUTOMETRICA MAYO 2024-OMAR BELLO_compressed-compressed-2.pdf",
      mimeType: "application/pdf",
    },
  };
  const previousContext = { text: "previous context:" + context };
  console.log("CONTEXT: ", context);
  const userQuestion = {
    text: question,
  };
  const request = {
    contents: [
      {
        role: "user",
        parts: [pdfPart1, pdfPart2, userQuestion, previousContext] as Part[],
      },
    ],
  };
  const streamingResult = await generativeVisionModel.generateContentStream(
    request
  );
  const contentResponse = await streamingResult.response;
  return contentResponse?.candidates![0].content.parts[0]?.text!;
}

export async function FetchCarOffers() {
  const vehicles = await prisma.carOffers.findMany();
  return vehicles;
}

export async function FetchAvailableCars() {
  const vehicles = await prisma.availableCars.findMany();
  return vehicles;
}

("Acura, Alfa Romeo, Audi, Baic, BMW, BYD, Cadillac, Changan, Chevrolet, Chirey, Chrysler, Cupra, Dfesk, Dodge, Faw-Giant, Fiat, Ford, GMC, Geely, GWM, Hyundai, Infiniti, Jac, Jaguar, Jeep, JMC, Jetour, Kia, Land Rover, Lexus, Lincoln, MG, Mini, Mitsubishi, Nissan, Omoda, Peugeot, Porsche, Renault, Seat, Smart, Subaru, Suzuki, Tesla, Toyota, Volkswagen.");
