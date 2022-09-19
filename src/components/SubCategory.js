// TODO: Add the PropTypes
import React from "react";
import { CardContent , Card, Container,StyledEngineProvider } from "@mui/material";
import MenuItem from "./MenuItem";

const SubCategory = ({ name, items }) => {
  return (
    <StyledEngineProvider injectFirst>
      <li className="__subcategory_container __category animate__animated animate__fadeIn">
        <Card className="card-styles" bg="cornsilk">
         <CardContent variant="outlined">
        <h3 className="__subcategory_title">{name}</h3>
        
        <Container maxWidth="sm">
        <ul className="subcategory-style">
          {items.map(({ id, name, price,desc='' }) => (
            <MenuItem key={id} name={name} price={price} desc={desc} />
            
          ))}
        </ul>
        </Container>
        </CardContent>
        </Card>
      </li>
      </StyledEngineProvider>
  );
};

export default SubCategory;
