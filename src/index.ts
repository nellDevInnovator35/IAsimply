import ChatGPTClient from './apiservice';
import dotenv from 'dotenv';

dotenv.config();
private apiKey: string = (process.env.OPENAI_API_KEY || '')

(async () => {
  if (this.apiKey) {
  const client = new ChatGPTClient(this.apiKey);
  const response = await client.getResponse("peux tu me donner le prix d'une baguette a jersey en 2025 ?");
  console.log("Réponse de ChatGPT:", response);
  }
})();

export { default as ChatGPTClient } from './apiservice';
