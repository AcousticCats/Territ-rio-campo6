// services/geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing VITE_GEMINI_API_KEY");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function summarizeObservations(text: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
      `Summarize these notes for the next publisher:\n\n${text}`
    );

    return result.response.text();
  } catch (e) {
    console.error("Gemini error", e);
    return "Error generating summary.";
  }
}
