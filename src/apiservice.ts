import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

class ChatGPTClient {
  private openai: OpenAI;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('OpenAI API key is required');
    }
    this.openai = new OpenAI({ apiKey });
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

//   public aiSearchCategory(searchText: string): Promise<string> {
//     if (searchText.length > 50) {
//       searchText = searchText.slice(0, 50);
//     }
//     return this.openai.chat.completions
//       .create({
//         messages: [
//           {
//             role: 'system',
//             content: `You'll be provided a piece of search text from a user,
//             Tell which category of product he is looking for, it must be smartphone, laptop, tablet, smartwatch, other_device or undefined.
//             Tell the brand of the product if possible. Fix mistakes in the search text. Answer in JSON following this format.
//             {
//               category: 'category of the product',
//               brand: 'possible brand of the product'
//               product: 'search text fixed'
//             }
//             if you find a memory size use Go units not Gb.
//             if you can't guess the answer for one of the values, just say undefined.`
//           },
//           { role: 'user', content: searchText }
//         ],
//         model: 'gpt-3.5-turbo',
//         temperature: 0,
//         response_format: { type: 'json_object' }
//       })
//       .then((res) => {
//         if (res && res.choices.length) {
//           const response = JSON.parse(res.choices[0].message.content) as {
//             category: string;
//             brand: string;
//             product: string;
//           };

//           if (response.category.toLowerCase() === 'smartphone') {
//             response.category = 'ProductStock_SmartPhone';
//           }

//           if (response.category.toLowerCase() === 'other_device') {
//             response.category = 'ProductStock_BluetoothDevice';
//           }

//           if (response.category.toLowerCase() === 'laptop') {
//             response.category = 'ProductStock_Laptop';
//           }

//           if (response.category.toLowerCase() === 'tablet') {
//             response.category = 'ProductStock_Tablet';
//           }

//           if (response.category.toLowerCase() === 'smartwatch') {
//             response.category = 'ProductStock_SmartWatch';
//           }

//           return JSON.stringify(response);
//         }

//         return 'undefined';
//       });
//   }

}

export default ChatGPTClient;