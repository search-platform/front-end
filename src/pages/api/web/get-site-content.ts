import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const url = req.query.url as string;
  const response = await axios.get(url);

  try {
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' })
    return;
  }
}
