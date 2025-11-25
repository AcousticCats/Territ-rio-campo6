// services/geminiService.ts
// ---------------------------------------------------------
// File rebuilt completely by Lumi — clean, safe, and Vercel-compatible
// ---------------------------------------------------------

import { GoogleGenerativeAI } from "@google/generative-ai";

// Read API key from Vite environment variables
// IMPORTANT: It must be defined in Vercel as VITE_GEMINI_API_KEY
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// If missing, throw a clear error (avoids silent white screen)
if (!apiKey) {
  throw new Error(
    "Missing environment variable: VITE_GEMINI_API_KEY. " +
    "Set this in Vercel → Project → Settings → Environment Variables."
  );
}

// Initialize the Gemini client
const genAI = new GoogleGenerativeAI(apiKey);

// Exported function: summarize territory observations
export async function summarizeObservations(
  observations: string
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    });

    const response = await model.generateContent([
      {
        role: "user",
        parts: [
          {
            text:
              "Summarize these territory observations into a concise note for the next publisher:\n\n" +
              observations
          }
        ]
      }
    ]);

    return response.response.text();
  } catch (e) {
    console.error("Gemini summarizeObservations error:", e);
    return "Error generating summary.";
  }
}
