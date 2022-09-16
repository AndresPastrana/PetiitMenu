// TODO: Add the PropTypes
import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";


const SubCategory = ({ name, items }) => {
  return (
    <div>
      <h4>{name}</h4>
      {items.map(({ id, name, price }) => (
        <p key={id}>{name}{price}</p>
      ))}
    </div>
  );
};

export default SubCategory;
