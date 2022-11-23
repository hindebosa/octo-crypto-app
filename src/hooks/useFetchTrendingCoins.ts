import axios from "axios";
import { TrendingCoins } from "../config/api";
export const useFetchTrendingCoins = async (currency: string) => {
  const { data } = await axios.get(TrendingCoins("zar"));

  console.log(data);
  return [data];
};
