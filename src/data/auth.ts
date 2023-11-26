import {z} from "zod";
import {appConfig} from "../../config/appConfig";
import axios from "axios";
import Cookies from "js-cookie";

const urls = {
  signIn: `${appConfig.apiHost}/auth/token`,
  testRequest: `${appConfig.apiHost}/api/v1`,
}

export const signInFormValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type signInFormData = z.infer<typeof signInFormValidationSchema>;

export const signIn = async (data: signInFormData) => {
  const response = await axios.post(urls.signIn, data);
  const responseData = response.data;
  return responseData;
};

export const signOut = () => {
  Cookies.remove('token');
}
