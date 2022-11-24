import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import SelectButton from "../SelectButton";
import { chartDays } from "../../config/data";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

import { useFetchHistoryOfCoinsQuery } from "../../services/crypto";
import { changeDays } from "../../redux/features/crytpo/cryptoslice";
ChartJS.register(...registerables);

type CoinInfoProps = {
  id: string;
};

const CoinInfo: React.FC<CoinInfoProps> = ({ id }) => {
  const currency = useSelector((state: RootState) => state.crypto.currency);
  const days = useSelector((state: RootState) => state.crypto.days);

  const { data, isLoading } = useFetchHistoryOfCoinsQuery({
    id,
    days,
    currency,
  });

  let prices = data?.prices;

  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!prices || isLoading ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: prices?.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: prices.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {
                    dispatch(changeDays(day.value));
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
