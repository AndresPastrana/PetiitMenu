import React from "react";

const MenuItem = ({
  name,
  desc = "Esta es la descripcion por defecto",
  price,
}) => {
  return (
    <li>
      <div className="__menu_item">
        <div>
          <p className="name-styles"><bold>{name}</bold></p>
          <p className="desc-styles">{desc}</p>
        </div >
        <div className="dotted-line-container">
          <hr className="dotted-line"/>
        </div>
        <div>
          <p className="price">{price}cup</p>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
