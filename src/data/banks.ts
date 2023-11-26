import axios from "axios";
import Cookies from "js-cookie";
import { Contact } from "./contacts";
import {appConfig} from "../../config/appConfig";

const urls = {
  search: (query: string) => `${appConfig.apiHost}/api/v1/search?type=ORGANIZATION&query=${query}`,
}

export interface Bank {
  orgId: number;
  orgUrl: string;
  orgName: string;
  orgFavicon: string;
  orgLogoUrl: string;
  orgAddress: string;
  contacts: Contact[];
}

export const getBanks = async (query: string) => {
  const JWT = Cookies.get('JWT');
  const { data } = await axios.get(urls.search(query), {
    headers: {
      'Content-Type': 'application/json',
      'Bearer': JWT,
    }
  });
  return data;
}
