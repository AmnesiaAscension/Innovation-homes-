
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

/**
 * Generates professional construction advice and cost estimates using Gemini 3 Flash.
 * Follows strict Google GenAI SDK guidelines for initialization and JSON responses.
 */
export const getProjectAdvice = async (description: string): Promise<AIResponse> => {
  // Always use a new instance with process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this home construction project in Pasadena, TX: "${description}". Provide professional advice, key considerations, style suggestions, and a rough RETAIL cost range estimate based on current Texas market trends.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          advice: { type: Type.STRING },
          keyConsiderations: { type: Type.ARRAY, items: { type: Type.STRING } },
          suggestedStyles: { type: Type.ARRAY, items: { type: Type.STRING } },
          estimatedCost: { type: Type.STRING, description: "A price range like '$50,000 - $75,000'" }
        },
        required: ["advice", "keyConsiderations", "suggestedStyles", "estimatedCost"],
      },
    },
  });

  try {
    // response.text is a property, not a method
    const text = response.text;
    return JSON.parse(text || '{}');
  } catch (error) {
    return {
      advice: "Consultation required for pricing.",
      keyConsiderations: ["Permits", "Foundation", "Materials"],
      suggestedStyles: ["Custom"],
      estimatedCost: "Contact for Quote"
    };
  }
};

/**
 * Generates an architectural rendering using Gemini 2.5 Flash Image.
 * Iterates through response parts to find the generated image as per SDK rules.
 */
export const generateProjectVisual = async (prompt: string): Promise<string | null> => {
  // Always use a new instance with process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const fullPrompt = `Photorealistic architectural rendering of: ${prompt}. High-end luxury finishes, dramatic lighting, modern landscaping, 8k resolution, architectural photography style.`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: fullPrompt }] },
      config: {
        imageConfig: { aspectRatio: "16:9" }
      }
    });

    // Iterate through all parts to find the image part; do not assume the first part is an image.
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Image gen failed:", error);
    return null;
  }
};
