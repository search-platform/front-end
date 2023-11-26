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
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Please use POST method' });
  }

  const urls = req.body.urls as string[];

  const pagesContent = await Promise.all(urls.map(async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return '';
    }
  }));
  const content = pagesContent.join(' ');

  let response = null;

  const prompt = `
    At the end of this message, after the "###" is raw HTML.
    You should return only in JSON format.
    If you can't find the information, just use the value "null".
    JSON should have the following keys:
    - name (name of the bank)
    - favicon (url of the favicon)
    - logo (url of the logo)
    - address (address of the bank)
    - contacts (array of contacts)
    Contacts should have the following keys:
    - value (email or phone number)
    - type ('email' or 'phone')
    - label (label of the contact, for example 'Customer Service')
    ###
    ${content}
  `;

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
