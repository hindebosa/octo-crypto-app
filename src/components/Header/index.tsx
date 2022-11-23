import {
  AppBar,
  Container,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#05386B",
    fontFamily: "Inter",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header: React.FC<PropsWithChildren> = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <AppBar color="transparent" position="sticky">
      <Container>
        <Toolbar>
          <Typography className={classes.title} onClick={() => navigate("/")}>
            Coin Scrapper
          </Typography>
          <Select style={{ width: 100, height: 40, marginLeft: 15 }}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"ZAR"}>ZAR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
