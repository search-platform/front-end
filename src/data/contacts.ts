import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {appConfig} from "../../config/appConfig";
import {BankContact} from "./banks";

const urls = {
  deleteContact: (orgId: number, contactId: number) => `${appConfig.apiHost}/api/v1/organization/${orgId}/contact/${contactId}`,
}

export interface Contact {
  id: number;
  value: string;
  description: string;
  type: "phone" | "email" | "address";
}

export const useContactDeleteMutation = (orgId: number, contactId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await axios.delete(urls.deleteContact(orgId, contactId));
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["bank", orgId]);
    }
  });
}

export const useContactUpdateMutation = (orgId: number, contact: BankContact) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newValue: string) => {
      await axios.put(urls.deleteContact(orgId, contact.id), {
        ...contact,
        value: newValue
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["bank", orgId]);
    }
  });
}
