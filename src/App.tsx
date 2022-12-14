import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import Home from "./containers/Home";
import Coin from "./containers/Coin";
import Error from "./containers/404 ";

const useStyles = makeStyles((theme?: any) => ({
  App: {
    backgroundColor: "#0b235e",
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
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<Coin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
