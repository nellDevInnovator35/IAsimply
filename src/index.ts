import ChatGPTClient from './apiservice';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
 
  const client = new ChatGPTClient();
  const response = await client.getResponse("peux tu me donner le prix d'une baguette a jersey en 2025 ?");
  console.log("Réponse de ChatGPT:", response);
  
})();

export { default as ChatGPTClient } from './apiservice';
