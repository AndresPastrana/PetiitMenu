import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Nav from "./Nav";
import MenuConatiner from "./MenuConatiner";

const Main = () => {
  return (
    <>
      <h1>Petitt Logo</h1>
      <Box sx={{ pb: 7 }}>
      <CssBaseline />
        <MenuConatiner />
        <Nav />
      </Box>
    </>
  );
};

export default Main;
