import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export class Assistant {
  constructor(model = "gemini-3.6-flash") {
    this.chatSession = ai.chats.create({ model });
  }

  async chat(content) {
    try {
      const result = await this.chatSession.sendMessage({ message: content });
      return result.text;
    } catch (error) {
      console.error("Gemini API Error", error);
      throw error;
    }
  }
}
