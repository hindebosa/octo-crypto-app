import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { classes } from "istanbul-lib-coverage";
import Carosel from "../Carosel";

const useStyles = makeStyles((theme?: any) => ({
  banner: {
    backgroundImage: "url(./cryptoBanner.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              color: "#fff",
            }}
          >
            Coin Scrapper
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgray",
              textTransform: "capitalize",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            pariatur dolorum eveniet laboriosam maiores? Libero expedita neque
            odio, tempore, dicta, cumque adipisci labore reiciendis non nostrum
            delectus unde quidem praesentium!
          </Typography>
        </div>

        <Carosel />
      </Container>
    </div>
  );
};

export default Banner;
