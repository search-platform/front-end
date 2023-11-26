import { Contact } from "./contacts";
import axios from "axios";
import {appConfig} from "../../config/appConfig";

const urls = {
  search: (query: string) => `${appConfig.apiHost}/api/v1/search?type=ORGANIZATION&query=${query}`,
}

export interface Bank {
  id: number;
  name: string;
  favicon: string;
  logo: string;
  address: string;
  url: string;
  contacts: Contact[];
}

export const getBanks = async (query: string) => {
  const { data } = await axios.get(urls.search(query), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}
