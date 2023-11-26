import {useQuery} from "@tanstack/react-query";
import {appConfig} from "../../config/appConfig"
import axios from "axios";

const urls = {
  countries: `${appConfig.apiHost}/v1/countries`
}

export interface Country {
  id: number;
  name: string;
}

export const useCountries = () => useQuery<Country[]>({
  queryKey: ["countries"],
  queryFn: async () => await axios.get(urls.countries).then(res => res.data)
})
