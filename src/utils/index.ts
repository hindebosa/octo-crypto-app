import { round } from "lodash";
export function numberWithCommas(x: number) {
  if (x < 0.1) {
    return round(x, 5);
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
