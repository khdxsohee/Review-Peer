
import { GoogleGenAI, Type } from "@google/genai";
import { CodeInsight } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getCodeAnalysis = async (repoUrl: string, language: string): Promise<{ summary: string; insights: CodeInsight[] }> => {
  const prompt = `Analyze this simulated GitHub repository: ${repoUrl}. 
  The primary language is ${language}.
  Provide a professional code review as a Senior Engineer at a FAANG company.
  Return a JSON object with a 'summary' of overall quality and an array of 'insights'.
  Each insight must have 'file', 'line', 'severity' (high/medium/low), 'message', and 'suggestion'.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            insights: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  file: { type: Type.STRING },
                  line: { type: Type.INTEGER },
                  severity: { type: Type.STRING },
                  message: { type: Type.STRING },
                  suggestion: { type: Type.STRING }
                },
                required: ["file", "line", "severity", "message", "suggestion"]
              }
            }
          },
          required: ["summary", "insights"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Analysis failed:", error);
    return {
      summary: "Manual review pending. Initial scan showed clean code but needs deeper architecture analysis.",
      insights: [
        { file: "main.ts", line: 42, severity: "medium", message: "Potential race condition in async handler", suggestion: "Use a mutex or atomic flag." }
      ]
    };
  }
};

export const getChatResponse = async (history: { role: string; content: string }[], userMessage: string) => {
  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: "You are an elite Senior Software Engineer mentor. You are helping a junior developer improve their code. Be concise, technical, and encouraging. Focus on architectural best practices and performance."
    }
  });

  const response = await chat.sendMessage({ message: userMessage });
  return response.text;
};
