import axios from "axios";
import Cookies from "js-cookie";
import { Contact } from "./contacts";
import {appConfig} from "../../config/appConfig";
import {useQuery} from "@tanstack/react-query";

const urls = {
  search: (query: string) => `${appConfig.apiHost}/api/v1/search?type=ORGANIZATION&query=${query}`,
  bankById: (orgId: number) => `${appConfig.apiHost}/api/v1/organization/${orgId}`
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

export interface BankContact {
  id: number;
  value: string;
  description: string,
  type: "PHONE" | "EMAIL";
}

export interface BankById {
  id: number;
  type: null;
  name: string;
  address: string;
  url: string;
  logoUrl: string;
  favicon: null,
  country: {
    id: number,
    name: string
  },
  orders: BankContact[]
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

export const addBank = async ({ orgName, countryName }: { orgName: string, countryName: string }) => {
  const JWT = Cookies.get('JWT');
  const { data } = await axios.get(`${appConfig.apiHost}/api/v1/search/gpt?country=${countryName}&query=${orgName}`, {
    headers: {
      'Content-Type': 'application/json',
      'Bearer': JWT,
    }
  });
  return data;
}

export const useBankById = (orgId: number) => 
  useQuery<BankById>({
    queryKey: ["bank", orgId],
    queryFn: async () => {
      const response = await axios.get(urls.bankById(orgId))
      const data = response.data;
      return data;
    },
    enabled: !!orgId
  });
