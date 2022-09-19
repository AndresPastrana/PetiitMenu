import React, { useContext } from "react";
import {BottomNavigation,StyledEngineProvider} from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { LocalDining, LocalBar, Liquor } from "@mui/icons-material/";
import Paper from "@mui/material/Paper";
import { MenuContext } from "./MenuContext";

const Nav = () => {
  const { setCategory } = useContext(MenuContext);

  return (
    <>
      <StyledEngineProvider injectFirst>
      <Paper className="paper-styles"
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}

      >
        <BottomNavigation className="nav-styles"
          showLabels
          onChange={(event, newCategory) => {
            setCategory(newCategory);
          }}
        >
          <BottomNavigationAction className="button-styles" label="Tragos" icon={<Liquor />} />
          <BottomNavigationAction className="button-styles" label="Comidas" icon={<LocalDining />} />
          <BottomNavigationAction className="button-styles" label="Cocteles" icon={<LocalBar />} />
        </BottomNavigation>
      </Paper>
      </StyledEngineProvider>
    </>
  );
};

export default Nav;
