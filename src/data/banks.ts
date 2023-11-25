import { Contact } from "./contacts";

export interface Bank {
  id: number;
  name: string;
  logo: string;
  address: string;
  url: string;
  contacts: Contact[];
}
