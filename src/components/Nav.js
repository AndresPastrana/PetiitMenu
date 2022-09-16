import React, { useContext } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { LocalDining, LocalBar, Liquor } from "@mui/icons-material/";
import Paper from "@mui/material/Paper";
import { MenuContext } from "./MenuContext";

const Nav = () => {
  console.log("Rendering");
  const { setCategory } = useContext(MenuContext);

  return (
    <>
      
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          onChange={(event, newCategory) => {
            setCategory(newCategory);
          }}
        >
          <BottomNavigationAction label="Tragos" icon={<Liquor />} />
          <BottomNavigationAction label="Comidas" icon={<LocalDining />} />
          <BottomNavigationAction label="Cocteles" icon={<LocalBar />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Nav;
