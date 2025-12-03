import { GoogleGenAI, Type } from "@google/genai";
import { OracleResponse } from "../types";

// Initialize Gemini Client safely handling the environment variable
const getApiKey = () => {
  try {
    // Check if process exists (Node/Build env) before accessing it to prevent browser crash
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    // Ignore error if process is not defined
  }
  return '';
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const generateLuckPrediction = async (userName: string, zodiacSign: string): Promise<OracleResponse> => {
  try {
    const modelId = "gemini-2.5-flash"; // Using Flash for speed

    const prompt = `
      Actúa como un oráculo de la fortuna místico y divertido para un sitio de sorteos.
      El usuario se llama "${userName}" y su signo es "${zodiacSign}".
      Genera:
      1. 5 números de la suerte (entre 1 y 99).
      2. Una predicción corta y motivadora sobre dinero o suerte (máximo 20 palabras).
      3. Un "color de poder" para hoy.
      
      Responde estrictamente en JSON.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            luckyNumbers: {
              type: Type.ARRAY,
              items: { type: Type.INTEGER },
              description: "5 numbers between 1 and 99"
            },
            prediction: {
              type: Type.STRING,
              description: "Motivational prediction about luck/money"
            },
            powerColor: {
              type: Type.STRING,
              description: "A color name in Spanish (e.g., Dorado, Rojo Intenso)"
            }
          },
          required: ["luckyNumbers", "prediction", "powerColor"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) throw new Error("No response from AI");

    return JSON.parse(resultText) as OracleResponse;

  } catch (error) {
    console.error("Gemini Oracle Error:", error);
    // Fallback if API fails or key is missing
    return {
      luckyNumbers: [7, 14, 21, 33, 88],
      prediction: "La fortuna favorece a los audaces. ¡Tu momento es hoy!",
      powerColor: "Dorado Éxito"
    };
  }
};