
import { GoogleGenAI, Type } from "@google/genai";

// Initialize GoogleGenAI client using process.env.API_KEY directly as required by the guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProjectPlan = async (description: string) => {
  try {
    // Using 'gemini-3-pro-preview' as this task involves complex reasoning and architectural recommendations.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Generate a high-level project roadmap and tech stack recommendation for a web development client who describes their need as: "${description}". 
      Respond strictly in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            roadmap: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  phase: { type: Type.STRING },
                  tasks: { type: Type.ARRAY, items: { type: Type.STRING } }
                }
              }
            },
            suggestedTech: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            estimatedTimeline: { type: Type.STRING },
            complexity: { type: Type.STRING }
          },
          required: ["roadmap", "suggestedTech", "estimatedTimeline", "complexity"]
        },
      },
    });

    // Access the text property directly (as a property, not a method) to retrieve the JSON output.
    const jsonStr = response.text?.trim() || '{}';
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};