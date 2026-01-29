
import { GoogleGenAI, Type } from "@google/genai";
import { TRAINERS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getTrainerRecommendation(userGoal: string, fitnessLevel: string) {
  const trainerData = TRAINERS.map(t => ({
    name: t.name,
    specialty: t.specialty,
    tags: t.tags
  }));

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on a user with the goal: "${userGoal}" and fitness level: "${fitnessLevel}", which of these trainers is the best match? 
    Trainers: ${JSON.stringify(trainerData)}. 
    Return a short encouraging explanation and the trainer's name.`,
    config: {
      temperature: 0.7,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          trainerName: { type: Type.STRING },
          explanation: { type: Type.STRING }
        },
        required: ["trainerName", "explanation"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return null;
  }
}

export async function askFitnessQuestion(question: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are an expert fitness coach at "Forge Performance". Answer this question succinctly and professionally: ${question}`,
  });
  return response.text;
}
