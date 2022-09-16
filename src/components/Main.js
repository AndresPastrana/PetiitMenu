import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Nav from "./Nav";
import MenuConatiner from "./MenuConatiner";

const Main = () => {
  return (
    <>
      <h1>Petitt Logo</h1>

      <MenuConatiner />
      <Nav />
    </>
  );
};

export default Main;
