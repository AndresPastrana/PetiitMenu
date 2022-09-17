// TODO: Add the PropTypes
import React from "react";
import MenuItem from "./MenuItem";

const SubCategory = ({ name, items }) => {
  return (
    
      <li className="__subcategory_container __category animate__animated animate__fadeIn">
        <h4 className="__subcategory_title">{name}</h4>
        <ul>
          {items.map(({ id, name, price,desc='' }) => (
            <MenuItem key={id} name={name} price={price} desc={desc} />
          ))}
        </ul>
      </li>
  
  );
};

export default SubCategory;
