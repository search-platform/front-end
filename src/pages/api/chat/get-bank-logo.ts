import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import {cleanChatMessage} from '../../../../utils/chat';
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const name = req.query.name as string;
  const country = req.query.country as string;

    const prompt = `Please provide the URL of the logo for "${name}" bank in country "${country}". The response should be in the JSON format with only one key "url". If you don't know it just use the value "null".`;

  let response = null;
  try {
    response = await axios.post('https://api.openai.com/v1/chat/completions', {
      "model": "gpt-4-1106-preview",
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful assistant."
        },
        {
          "role": "user",
          "content": prompt
        }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ####`,
      }
    });

    const choice = response.data.choices[0].message;
    const data = JSON.parse(cleanChatMessage(choice.content));

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' })
    return;
  }
}
