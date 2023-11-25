export interface Contact {
  id: number;
  value: string;
  description: string;
  type: "phone" | "email" | "address";
}
