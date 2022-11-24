import { LinearProgress, makeStyles, Typography } from "@material-ui/core";

import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../../components/CoinsInfo";
import { useFetchSingleCoinQuery } from "../../services/crypto";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { numberWithCommas } from "../../utils";

const Coin = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchSingleCoinQuery(id || "");

  const currency = useSelector((state: RootState) => state.crypto.currency);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
      color: "#e6c000",
    },
    description: {
      width: "100%",

      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
      color: "#e6c000",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));

  const classes = useStyles();

  if (!data || isLoading)
    return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={data?.image.large}
          alt={data?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading}>
          {data?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {ReactHtmlParser(data?.description.en.split(". ")[0])}.
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                color: "#e6c000",
              }}
            >
              {numberWithCommas(data?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                color: "#e6c000",
              }}
            >
              {numberWithCommas(
                //@ts-ignore
                data?.market_data?.current_price[currency?.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                color: "#e6c000",
              }}
            >
              {numberWithCommas(
                //@ts-ignore
                data?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>

      <CoinInfo id={data.id} />
    </div>
  );
};

export default Coin;
