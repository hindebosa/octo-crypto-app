import {
  AppBar,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { changeCurrency } from "../../redux/features/crytpo/cryptoslice";
import type { RootState } from "../../redux/store";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Inter",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header: React.FC<PropsWithChildren> = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currency = useSelector((state: RootState) => state.crypto.currency);

  return (
    <AppBar color="transparent" position="sticky">
      <Container>
        <Toolbar>
          <Typography className={classes.title} onClick={() => navigate("/")}>
            Coin Scrapper
          </Typography>

          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Age"
              //@ts-ignore
              onChange={(e) => dispatch(changeCurrency(e.target.value))}
            >
              <MenuItem value={"zar"}>ZAR</MenuItem>
              <MenuItem value={"usd"}>USD</MenuItem>
              <MenuItem value={"eur"}>EUR</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
