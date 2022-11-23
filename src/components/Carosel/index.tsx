import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import type { RootState } from "../../redux/store";
import { useFetchTrendingCoinsQuery } from "../../services/crypto";
import "react-alice-carousel/lib/alice-carousel.css";
const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
}));

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carosel = () => {
  const currency = useSelector((state: RootState) => state.crypto.currency);
  const [trending, setTrending] = useState([]);
  const { data } = useFetchTrendingCoinsQuery(currency);
  useEffect(() => {
    setTrending(data);
  }, [currency, data]);

  const classes = useStyles();
  const items = trending?.map((coin) => {
    //@ts-ignore
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      //@ts-ignore
      <Link
        className={classes.carouselItem}
        to={`/coins/${
          //@ts-ignore
          coin.id
        }`}
      >
        <img
          //@ts-ignore
          src={coin?.image}
          //@ts-ignore
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {
            //@ts-ignore
            coin?.symbol
          }
          &nbsp;
          <span
            style={{
              //@ts-ignore
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {
              //@ts-ignore
              profit && "+"
            }
            {
              //@ts-ignore
              coin?.price_change_percentage_24h?.toFixed(2)
            }
            %
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {
            //@ts-ignore
            numberWithCommas(coin?.current_price.toFixed(2))
          }
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carosel;
