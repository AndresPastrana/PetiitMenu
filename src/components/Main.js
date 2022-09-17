import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Nav from "./Nav";
import MenuConatiner from "./MenuConatiner";
import Header from "./Header";

const Main = () => {
  return (
    <>
      {/* <Header/> */}

      <MenuConatiner />
      <Nav />
    </>
  );
};

export default Main;
