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
import { currencyABV } from "../../config/currecy";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Inter",
    fontWeight: "bold",
    cursor: "pointer",
  },
  formControl: { minWidth: 140 },
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

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Change Currency
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Currency"
              onChange={(e) => dispatch(changeCurrency(e.target.value))}
            >
              {currencyABV.map((currency: string, index: number) => (
                <MenuItem value={currency} key={index}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
