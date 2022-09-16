// TODO: Add the PropTypes
import React from "react";
import MenuItem from "./ui/MenuItem";

const SubCategory = ({ name, items }) => {
  return (
    
      <li>
        <h4>{name}</h4>
        <ul>
          {items.map(({ id, name, price }) => (
            <MenuItem key={id} name={name} price={price} />
          ))}
        </ul>
      </li>
  
  );
};

export default SubCategory;
