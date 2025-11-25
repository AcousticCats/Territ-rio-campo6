// services/geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

// A API KEY deve vir de uma variável iniciada com VITE_
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Se não existir chave → erro explícito
if (!apiKey) {
  throw new Error("Missing Gemini API Key — set VITE_GEMINI_API_KEY in Vercel.");
}

// Inicializa corretamente
const genAI = new GoogleGenerativeAI(apiKey);

// Função de resumo
export const summarizeObservations = async (observations: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: `Summarize these territory observations into a concise note for the next publisher:\n${observations}` }],
        },
      ],
    });

    return response.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating summary.";
  }
};
