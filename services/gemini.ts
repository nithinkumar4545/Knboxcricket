
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";
import { BOXES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the Knboxcricket.com Smart Assistant. 
Your goal is to help users book box cricket slots.
Information about our boxes:
${BOXES.map(b => `- ${b.name}: ${b.description}. Price: ₹${b.pricePerHour}/hr. Capacity: ${b.capacity}.`).join('\n')}

Rules:
1. Be polite, energetic, and sports-focused.
2. If a user asks about prices, refer to the provided data.
3. If they ask how to book, explain that they can select a box on the main page, pick a date and time, and confirm.
4. If asked about locations, say we are located at "Central Sports Hub, City Center".
5. Keep responses concise.
`;

export const getGeminiResponse = async (history: ChatMessage[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    
    return response.text || "I'm sorry, I couldn't process that. How can I help with your booking?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our system is a bit busy right now. Please try again or browse our slots directly!";
  }
};
