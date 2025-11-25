// services/geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

// pega a chave vinda do Vite/Vercel
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing VITE_GEMINI_API_KEY. Configure it in Vercel.");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const summarizeObservations = async (observations: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const response = await model.generateContent([
      {
        role: "user",
        parts: [
          { text: `Summarize these territory observations into a concise note:\n${observations}` }
        ]
      }
    ]);

    return response.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating summary.";
  }
};
