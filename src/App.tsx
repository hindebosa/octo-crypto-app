import React, { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import Home from "./containers/Home";
import Coin from "./containers/Coin";
import type { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useGetPokemonByNameQuery } from "./services/crypto";

const useStyles = makeStyles((theme?: any) => ({
  App: {
    backgroundColor: "#14161a",
    color: "#05386B",
    minHeight: "100vh",
  },
}));
function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<Coin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
