import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

class ChatGPTClient {
  private openai: OpenAI;

  constructor(apiKey?: string) {
    const key = apiKey || process.env.OPENAI_API_KEY;
    if (!key) {
      throw new Error('OpenAI API key is required');
    }
    this.openai = new OpenAI({ apiKey: key });
  }


  async getResponse(prompt : string): Promise<string>{
  const completion = await this.openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: prompt,
        },
    ],
    store:true,
    temperature: 0
  });
  const retour = completion.choices[0].message.content ?? '';
  return retour;
  }


}

export default ChatGPTClient;