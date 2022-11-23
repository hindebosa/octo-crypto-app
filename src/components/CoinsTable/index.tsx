import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useFetchCoinsListQuery } from "../../services/crypto";

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const currency = useSelector((state: RootState) => state.crypto.currency);

  const { data, error, isLoading } = useFetchCoinsListQuery(currency);

  useEffect(() => {
    setCoins(data);
    setLoading(isLoading);
  }, [currency, data]);

  const useStyles = makeStyles({
    row: {
      backgroundColor: "#081a47",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "gold",
      },
    },
  });

  const classes = useStyles();
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleSearch = () => {
    return coins?.filter(
      (coin) =>
        /* @ts-ignore */
        coin.name.toLowerCase().includes(search) ||
        /* @ts-ignore */
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ margin: 18, color: "gold" }}>
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "left" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    /* @ts-ignore */
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() =>
                          navigate(
                            `/coins/${
                              /* @ts-ignore */
                              row.id
                            }`
                          )
                        }
                        className={classes.row}
                        key={
                          /* @ts-ignore */
                          row.name
                        }
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={
                              /* @ts-ignore */
                              row?.image
                            }
                            alt={
                              /* @ts-ignore */
                              row.name
                            }
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {
                                /* @ts-ignore */
                                row.symbol
                              }
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {
                                /* @ts-ignore */
                                row.name
                              }
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {/* {symbol}{" "} */}
                          {numberWithCommas(
                            /* @ts-ignore */
                            row.current_price.toFixed(2)
                          )}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color:
                              /* @ts-ignore */
                              profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {
                            /* @ts-ignore */
                            row.price_change_percentage_24h.toFixed(2)
                          }
                          %
                        </TableCell>
                        <TableCell align="right">
                          {/* {symbol}{" "} */}
                          {numberWithCommas(
                            /* @ts-ignore */
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Comes from @material-ui/lab */}
        <Pagination
          /* @ts-ignore */
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
