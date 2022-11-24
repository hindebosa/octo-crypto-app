import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import type { RootState } from "../../redux/store";
import { useFetchTrendingCoinsQuery } from "../../services/crypto";
import "react-alice-carousel/lib/alice-carousel.css";
import { numberWithCommas } from "../../utils";
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

const Carosel = () => {
  const currency = useSelector((state: RootState) => state.crypto.currency);

  const { data: trending } = useFetchTrendingCoinsQuery(currency);

  const classes = useStyles();
  const items = trending?.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {numberWithCommas(parseInt(coin?.current_price.toFixed(2)))}
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
